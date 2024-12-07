Projeto Full Stack - TesteThreeo (.NET e React com Docker)
Este projeto utiliza .NET no backend e React no frontend, cada um rodando em contêineres Docker separados. Este guia fornece instruções detalhadas para baixar, instalar as dependências, e rodar os contêineres do projeto.

Repositório
Clone o repositório diretamente do GitHub:

https://github.com/rogerioloboBR/TesteThreeo

Pré-requisitos
Certifique-se de ter os seguintes softwares instalados:

Git - Para clonar o repositório:
Download Git
Docker - Para rodar os contêineres:
Download Docker
Docker Compose - Para gerenciar múltiplos contêineres Docker:
Download Docker Compose


Passos para Rodar o Projeto
1. Clone o Repositório
Clone o repositório para sua máquina local:


git clone https://github.com/rogerioloboBR/TesteThreeo.git
2. Subindo o Backend
O projeto do backend é uma aplicação .NET. Para iniciar o backend em um contêiner Docker, siga os passos abaixo:

Navegue até o diretório TesteThreeo.Backend:


cd TesteThreeo.Backend
Agora, para rodar o contêiner Docker com o backend, execute o seguinte comando:


docker build -t testethreeobackend .
Após a construção da imagem, execute o contêiner:


docker run -d --name TesteThreeo.Backend_1 -p 32773:80 testethreeobackend
Agora, o backend estará rodando no contêiner e acessível via https://localhost:32773.

3. Subindo o Frontend
O projeto do frontend é uma aplicação React. Para iniciar o frontend em um contêiner Docker, siga os passos abaixo:

Navegue até o diretório TesteThreeo.Frontend:


cd TesteThreeo.Frontend
Agora, para rodar o contêiner Docker com o frontend, execute o seguinte comando:


docker build -t testethreeofront .
Após a construção da imagem, execute o contêiner:


docker run -d --name testethreeofront -p 8080:80 testethreeofront
Agora, o frontend estará rodando no contêiner e acessível via http://localhost:8080.

URLs de Acesso
Frontend (React): http://localhost:8080
Backend (.NET): https://localhost:32773
Comandos Úteis do Docker
Verificar os contêineres em execução:


docker ps
Parar o contêiner do backend:


docker stop TesteThreeo.Backend_1
Parar o contêiner do frontend:


docker stop testethreeofront
Remover o contêiner do backend:


docker rm TesteThreeo.Backend_1
Remover o contêiner do frontend:


docker rm testethreeofront
Como Funciona
O frontend é uma aplicação React que se comunica com o backend via API.
O backend é uma aplicação .NET que responde a requisições de cálculo matemático.
Ambos os serviços estão configurados para rodar em contêineres Docker separados.
Contribuindo
Se você deseja contribuir para este projeto, basta criar um fork do repositório, realizar suas modificações e enviar um pull request.

Licença
Este projeto está licenciado sob a MIT License.

