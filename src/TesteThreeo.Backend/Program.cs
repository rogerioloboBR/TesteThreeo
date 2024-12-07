using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using System.Security.Cryptography;
using System.Text;

var builder = WebApplication.CreateBuilder(args);

// Defina a chave original
const string SecretKey = "43443FDFDF34DF34343fdf344SDFSDFSDFSDFSDF4545354345SDFGDFGDFGDFGdffgfdGDFGDGR%";

// Aplique o SHA256 para garantir que a chave tenha 256 bits (32 bytes)
byte[] keyBytes = SHA256.Create().ComputeHash(Encoding.UTF8.GetBytes(SecretKey));

builder.Services.AddControllers();

// Configuração de CORS para permitir solicitações do frontend
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowLocalhost", builder =>
        builder.WithOrigins("http://localhost:8080")  // Adicione a URL do seu frontend
               .AllowAnyMethod()
               .AllowAnyHeader()
               .AllowCredentials());  // Permitir credenciais (como cookies, caso necessário)
});

// Configuração de autenticação JWT
builder.Services.AddAuthentication(options =>
{
    options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
    options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
})
.AddJwtBearer(options =>
{
    options.TokenValidationParameters = new TokenValidationParameters
    {
        ValidateIssuer = false,
        ValidateAudience = false,
        ValidateLifetime = true,
        ValidateIssuerSigningKey = true,
        IssuerSigningKey = new SymmetricSecurityKey(keyBytes)
    };
});

// Adicione o Swagger
builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new OpenApiInfo
    {
        Title = "MathAPI",
        Version = "v1",
        Description = "API para realizar operações matemáticas seguras"
    });
});

builder.Services.AddAuthorization();

var app = builder.Build();

// Middleware para habilitar CORS
app.UseCors("AllowLocalhost");  // Aplica a política de CORS

app.UseRouting();
app.UseAuthentication();
app.UseAuthorization();

// Habilita o Swagger
app.UseSwagger();
app.UseSwaggerUI(c =>
{
    c.SwaggerEndpoint("/swagger/v1/swagger.json", "MathAPI V1");
});

app.MapControllers();

app.Run();
