const Usuario = require('../models/Usuario');
const AppError = require('../erros/AppError');

const apenasAdmin = async (req, res, next) => {
    const usuario = await Usuario.findByPk(req.usuarioId);
    if (!usuario || usuario.tipo !== 'ADMIN') {
        throw new AppError('Acesso negado. Esta rota é exclusiva para administradores.', 403);
    }
    next();
};


module.exports = { apenasAdmin };