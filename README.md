# 🚀 API de Gerenciamento de Usuários (Node.js & Express)

Uma API RESTful robusta e escalável desenvolvida em Node.js com o framework Express. O projeto implementa um CRUD completo de usuários, com foco em segurança, organização estrutural e boas práticas de desenvolvimento de software, como arquitetura em camadas e tratamento global de erros.

## 🛠️ Tecnologias e Bibliotecas Utilizadas

* **Node.js & Express.js:** Motor de execução e framework web.
* **Sequelize & PostgreSQL:** ORM (Object-Relational Mapper) e banco de dados relacional para persistência de dados.
* **Zod:** Validação rigorosa de esquemas e dados de entrada (Data Transfer Objects - DTOs).
* **JWT (JSON Web Token) & Bcrypt:** Autenticação segura e criptografia irreversível de senhas.
* **Swagger (OpenAPI 3.0):** Documentação automatizada e interativa da API.
* **Dotenv:** Gerenciamento de variáveis de ambiente de forma segura.

## 🏗️ Arquitetura do Projeto

O projeto foi estruturado utilizando uma separação clara de responsabilidades, inspirada no padrão MVC e em arquiteturas de ecossistemas tipados, garantindo fácil manutenção e escalabilidade:

* **`/config`:** Configurações centralizadas (Banco de Dados, Swagger).
* **`/controllers`:** Ponto de entrada das requisições HTTP. Recebe os dados e devolve as respostas estruturadas.
* **`/services`:** Coração da aplicação. Contém todas as regras de negócio e a lógica de comunicação com o banco de dados.
* **`/models`:** Representação das entidades do banco de dados (Sequelize Models).
* **`/schemas`:** Regras de validação de dados de entrada usando o Zod.
* **`/middlewares`:** Interceptadores para validação de dados, verificação de tokens JWT e tratamento de erros.
* **`/erros`:** Classes customizadas para padronização de exceções (`AppError`).
* **`/routes`:** Definição dos endpoints da API.

## ✨ Funcionalidades Principais

* **CRUD de Usuários:** Criar, listar, buscar, atualizar e deletar usuários.
* **Paginação de Dados:** O endpoint de listagem suporta parâmetros de `limit` e `page` para evitar sobrecarga no banco de dados.
* **Autenticação JWT:** Rotas protegidas exigem um token Bearer válido para serem acessadas.
* **Validação de Dados:** O Middleware com Zod barra requisições malformadas antes mesmo de chegarem às regras de negócio.
* **Tratamento Global de Erros:** Erros capturados automaticamente e padronizados em um único formato JSON, sem vazar exceções do banco de dados para o cliente.
* **Senhas Criptografadas:** Uso de `Hooks` no Sequelize para fazer o hash automático da senha via Bcrypt antes da persistência.

## 🚀 Como executar o projeto localmente

### Pré-requisitos
* Node.js (versão 18+ recomendada)
* PostgreSQL instalado e rodando

### Passo a passo

1. **Clone o repositório:**
   ```bash
   git clone [https://github.com/seu-usuario/sua-api.git](https://github.com/seu-usuario/sua-api.git)
   cd sua-api
