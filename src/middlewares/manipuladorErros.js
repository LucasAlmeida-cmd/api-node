const AppError = require('../erros/AppError');

const manipuladorErros = (erro, req, res, next) => {
    if (erro instanceof AppError) {
        return res.status(erro.statusCode).json({
            status: 'erro',
            mensagem: erro.mensagem
        });
    }

    if (erro.name === 'SequelizeUniqueConstraintError') {
        return res.status(400).json({
            status: 'erro',
            mensagem: 'Este registro já existe no banco de dados.'
        });
    }
    console.error('🔴 ERRO INTERNO NÃO TRATADO:', erro);
    return res.status(500).json({
        status: 'erro',
        mensagem: 'Erro interno do servidor.'
    });
};

module.exports = manipuladorErros;