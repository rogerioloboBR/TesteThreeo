# Projeto React + .NET com Suporte ao Docker

Este projeto integra um frontend React e um backend .NET utilizando Docker para simplificar o processo de implantação.

---

## **Requisitos**

Antes de executar este projeto, certifique-se de ter os seguintes softwares instalados:

- [Docker](https://www.docker.com/get-started)
- [Node.js](https://nodejs.org/) (Opcional para desenvolvimento local)

---

## **Estrutura do Projeto**

- `frontend/`: Projeto React criado com Vite e TypeScript.
- `backend/`: Projeto .NET com a lógica da API.
- `docker-compose.yml`: Arquivo de configuração do Docker Compose para gerenciar os serviços.

---

## **Instruções de Instalação**

### 1. Clonar o Repositório

```bash
git clone https://github.com/rogerioloboBR/TesteThreeo.git
cd TesteThreeo
----
2. Construir e Executar o Projeto com Docker
No diretório raiz do projeto, execute o seguinte comando:


docker-compose up --build
Este comando irá:

Construir o frontend React.
Construir o backend .NET.
Iniciar ambos os serviços em contêineres Docker.
---
3. Acessar o Aplicativo
Frontend: Abra http://localhost:3000 no navegador.
API do Backend: A API estará acessível em http://localhost:5000.
Para Desenvolvimento Local
Se preferir executar os serviços localmente sem Docker:

Frontend React
Acesse o diretório frontend/:


cd frontend
npm install
npm run dev
Abra http://localhost:3000 no navegador.

Backend .NET
Acesse o diretório backend/:


cd backend
dotnet restore
dotnet run
A API estará rodando em http://localhost:5000.

Variáveis de Ambiente
Frontend React
Crie um arquivo .env no diretório frontend/ com o seguinte conteúdo:

plaintext
Copiar código
VITE_API_URL=http://localhost:5000/api
Backend .NET
Crie um arquivo .env no diretório backend/ para configurar variáveis como strings de conexão ao banco de dados.

Comandos Comuns do Docker
Parar os Contêineres:


docker-compose down
Reconstruir sem Cache:


docker-compose build --no-cache
Verificar Logs:


docker-compose logs
