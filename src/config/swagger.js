// src/config/swagger.js
const swaggerJSDoc = require('swagger-jsdoc');

const opcoes = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Minha API de Usuários',
            version: '1.0.0',
            description: 'Documentação da API criada com Node.js e Express',
        },
        servers: [
            { url: 'http://localhost:3000/api', description: 'Servidor Local' }
        ],
        components: {
            securitySchemes: {
                bearerAuth: { type: 'http', scheme: 'bearer', bearerFormat: 'JWT' }
            }
        },
        // AQUI ESTÁ A MÁGICA: Definindo as rotas direto no JavaScript
        paths: {
            '/login': {
                post: {
                    summary: 'Autentica um usuário no sistema',
                    tags: ['Autenticação'],
                    requestBody: {
                        required: true,
                        content: {
                            'application/json': {
                                schema: {
                                    type: 'object',
                                    properties: {
                                        email: { type: 'string', example: 'lucas@exemplo.com' },
                                        senha: { type: 'string', example: 'minhasenhaforte123' }
                                    }
                                }
                            }
                        }
                    },
                    responses: {
                        200: { description: 'Login bem-sucedido. Retorna o Token JWT.' },
                        401: { description: 'Credenciais inválidas.' }
                    }
                }
            },
            '/usuarios': {
                post: {
                    summary: 'Criação de um novo usuário',
                    tags: ['Usuários'],
                    requestBody: {
                        required: true,
                        content: {
                            'application/json': {
                                schema: {
                                    type: 'object',
                                    properties: {
                                        nome: { type: 'string', example: 'Lucas Almeida' },
                                        email: { type: 'string', example: 'lucas@exemplo.com' },
                                        senha: { type: 'string', example: 'minhasenhaforte123' }
                                    }
                                }
                            }
                        }
                    },
                    responses: {
                        201: { description: 'Usuário criado com sucesso.' },
                        400: { description: 'Erro de validação.' }
                    }
                },
                get: {
                    summary: 'Retorna uma lista paginada de usuários',
                    tags: ['Usuários'],
                    security: [{ bearerAuth: [] }],
                    parameters: [
                        { in: 'query', name: 'page', schema: { type: 'integer', default: 1 }, description: 'Número da página' },
                        { in: 'query', name: 'limit', schema: { type: 'integer', default: 10 }, description: 'Itens por página' }
                    ],
                    responses: {
                        200: { description: 'Lista recuperada.' },
                        401: { description: 'Acesso negado.' }
                    }
                }
            },
            '/usuarios/{email}': {
                get: {
                    summary: 'Busca um usuário específico pelo e-mail',
                    tags: ['Usuários'],
                    security: [{ bearerAuth: [] }],
                    parameters: [{ in: 'path', name: 'email', required: true, schema: { type: 'string' } }],
                    responses: { 200: { description: 'Usuário encontrado.' }, 404: { description: 'Não encontrado.' } }
                },
                put: {
                    summary: 'Atualiza os dados de um usuário pelo e-mail',
                    tags: ['Usuários'],
                    security: [{ bearerAuth: [] }],
                    parameters: [{ in: 'path', name: 'email', required: true, schema: { type: 'string' } }],
                    requestBody: {
                        required: true,
                        content: {
                            'application/json': {
                                schema: {
                                    type: 'object',
                                    properties: {
                                        nome: { type: 'string', example: 'Lucas Editado' },
                                        senha: { type: 'string', example: 'novasenha123' }
                                    }
                                }
                            }
                        }
                    },
                    responses: { 200: { description: 'Atualizado com sucesso.' } }
                },
                delete: {
                    summary: 'Remove um usuário do sistema pelo e-mail',
                    tags: ['Usuários'],
                    security: [{ bearerAuth: [] }],
                    parameters: [{ in: 'path', name: 'email', required: true, schema: { type: 'string' } }],
                    responses: { 204: { description: 'Deletado com sucesso.' } }
                }
            }
        }
    },
    apis: [], // Deixamos vazio pois as rotas já estão definidas acima
};

const swaggerSpec = swaggerJSDoc(opcoes);
module.exports = swaggerSpec;