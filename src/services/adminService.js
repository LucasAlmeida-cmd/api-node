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

const listarRelatoriosAvancados = async () => {
    return await Usuario.findAll({ where: { tipo: 'ADMIN' } });
};

module.exports = {
    criarAdmin,
    listarRelatoriosAvancados
};