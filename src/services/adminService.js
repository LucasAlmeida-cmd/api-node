const Usuario = require('../models/Usuario');
const AppError = require('../erros/AppError');

const criarAdmin = async (dados) => {
    if (!dados.codigo) {
        throw new AppError('O código de administrador é obrigatório.', 400);
    }
    const admin = await Usuario.create({
        ...dados,
        tipo: 'ADMIN'
    });

    return admin;
};

const listarTodos = async (pagina = 1, limite = 10) => {
    const limit = parseInt(limite, 10);
    const page = parseInt(pagina, 10);
    const offset = (page - 1) * limit;
    const resultado = await Usuario.findAndCountAll({
        limit: limit,
        offset: offset
    });
    const totalPages = Math.ceil(resultado.count / limit);
    return {
        metadados: {
            totalRegistros: resultado.count,
            totalPaginas: totalPages,
            paginaAtual: page,
            itensPorPagina: limit
        },
        dados: resultado.rows
    };
};

const deletar = async (email) => {
    const usuario = await buscarPorEmail(email);
    await usuario.destroy();
};

module.exports = {
    criarAdmin,
    listarTodos,
    deletar
};