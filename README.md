# TesteThreeo
Este projeto é composto por dois contêineres Docker que hospedam o backend e o frontend de uma aplicação. O backend é uma API desenvolvida em .NET 6, e o frontend utiliza uma aplicação React com TypeScript. Ambos os serviços são configurados e orquestrados utilizando o Docker para garantir um ambiente de desenvolvimento e execução padronizado.

Pré-requisitos
Antes de iniciar, certifique-se de que você possui os seguintes requisitos instalados no seu ambiente:

Docker: Para criar e executar contêineres. Instalar Docker
Docker Compose: Para orquestrar os serviços.
Node.js (apenas para desenvolvimento do frontend): Instalar Node.js
Estrutura do Projeto
Backend: Uma API em .NET 6 configurada no Docker.
Frontend: Uma aplicação React + TypeScript integrada ao backend.
Arquivos principais
docker-compose.yml: Orquestra os serviços do backend e frontend.
Dockerfile (Backend): Configura o ambiente para execução da API.
Dockerfile (Frontend): Configura o ambiente para execução do frontend.
Configuração e Execução
1. Clonar o Repositório
Clone o repositório do projeto para o seu ambiente local:

bash
Copiar código
git clone <URL_DO_REPOSITORIO>
cd TesteThreeo
2. Executar com Docker Compose
Para executar os dois serviços simultaneamente (backend e frontend), use o docker-compose.yml incluído no projeto.

Passos:
Construa os contêineres:

bash
Copiar código
docker-compose build
Inicie os serviços:

bash
Copiar código
docker-compose up
Acesse os serviços no navegador:

Frontend: http://localhost:3000
Backend: http://localhost:5000
3. Uso Individual de Contêineres
Caso você deseje rodar apenas o backend ou o frontend, siga os passos abaixo.

Backend
Navegue até o diretório do backend:

bash
Copiar código
cd TesteThreeo/backend
Construa a imagem Docker:

bash
Copiar código
docker build -t teste-threeo-backend .
Execute o contêiner:

bash
Copiar código
docker run -d -p 5000:80 teste-threeo-backend
Acesse o backend:

URL: http://localhost:5000
Frontend
Navegue até o diretório do frontend:

bash
Copiar código
cd TesteThreeo/frontend
Construa a imagem Docker:

bash
Copiar código
docker build -t teste-threeo-frontend .
Execute o contêiner:

bash
Copiar código
docker run -d -p 3000:3000 teste-threeo-frontend
Acesse o frontend:

URL: http://localhost:3000
4. Ambiente de Desenvolvimento (Opcional)
Backend
Se você desejar rodar o backend diretamente sem o Docker:

Instale o .NET 6 SDK.
Navegue até o diretório backend e execute:
bash
Copiar código
dotnet run
Frontend
Se você desejar rodar o frontend diretamente sem o Docker:

Instale o Node.js e o Yarn.
Navegue até o diretório frontend e instale as dependências:
bash
Copiar código
yarn install
Execute o servidor de desenvolvimento:
bash
Copiar código
yarn start
Configuração Personalizada
Alterando as Portas
As portas padrão para backend e frontend podem ser configuradas no arquivo docker-compose.yml.
Exemplo:
yaml
Copiar código
services:
  backend:
    ports:
      - "5000:80"
  frontend:
    ports:
      - "3000:3000"
Logs e Debug
Visualizar Logs
Para verificar os logs de execução dos contêineres:

bash
Copiar código
docker logs <CONTAINER_ID>
Acessar o Terminal do Contêiner
Para acessar o shell dentro de um contêiner:

bash
Copiar código
docker exec -it <CONTAINER_ID> /bin/bash
Parar e Remover Contêineres
Parar todos os serviços:

bash
Copiar código
docker-compose down
Remover contêineres individuais:

bash
Copiar código
docker stop <CONTAINER_ID>
docker rm <CONTAINER_ID>
Contribuição
Faça um fork do repositório.
Crie um branch para a sua feature/bugfix:
bash
Copiar código
git checkout -b minha-feature
Commit suas alterações:
bash
Copiar código
git commit -m "Minha nova feature"
Faça o push para o branch:
bash
Copiar código
git push origin minha-feature
Abra um Pull Request no repositório original.
Licença
Este projeto está licenciado sob a Licença MIT.

