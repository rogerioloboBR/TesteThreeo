using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;
using TesteThreeo.Backend.Models;

namespace TesteThreeo.Backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class LoginController : ControllerBase
    {
        // Use a mesma chave secreta que está no Program.cs
        private const string SecretKey = "43443FDFDF34DF34343fdf344SDFSDFSDFSDFSDF4545354345SDFGDFGDFGDFGdffgfdGDFGDGR%";

        [AllowAnonymous]
        [HttpPost("login")]
        public IActionResult Login([FromBody] UserLogin login)
        {
            if (login.Username == "admin" && login.Password == "password")
            {
                var token = GenerateToken(login.Username);
                return Ok(new { Token = token });
            }

            return Unauthorized();
        }

        private string GenerateToken(string username)
        {
            var tokenHandler = new JwtSecurityTokenHandler();

            // Use SHA256 para garantir que a chave tenha exatamente 256 bits (32 bytes)
            var key = SHA256.Create().ComputeHash(Encoding.UTF8.GetBytes(SecretKey));

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new[] { new Claim(ClaimTypes.Name, username) }),
                Expires = DateTime.UtcNow.AddHours(1),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };

            var token = tokenHandler.CreateToken(tokenDescriptor);
            return tokenHandler.WriteToken(token);
        }
    }
}