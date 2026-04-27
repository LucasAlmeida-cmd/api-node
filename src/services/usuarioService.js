const Usuario = require('../models/Usuario');

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const criarComum = async (dados) => {
    return await Usuario.create({
        ...dados,
        tipo: 'COMUM',
        codigo: null 
    });
};



const buscarPorId = async (id) => {
    const usuario = await Usuario.findByPk(id);
    if (!usuario) {
        throw new AppError('Usuário não encontrado', 404); 
    }
    return usuario;
};

const buscarPorEmail = async (email) => {
    const usuario = await Usuario.findOne({ where: { email } , attributes: { exclude: ['senha', 'codigo']}});
    if (!usuario) {
        throw new AppError('Usuário não encontrado', 404);
    }
    return usuario;
};

const atualizar = async (email, dadosAtualizados) => {
    const usuario = await buscarPorEmail(email);
    await usuario.update(dadosAtualizados);
    return usuario;
};

const deletar = async (email) => {
    const usuario = await buscarPorEmail(email);
    await usuario.destroy();
};

const login = async (email, senhaDigitada) => {
    const usuario = await Usuario.findOne({ where: { email } });
    if (!usuario) {
        throw new AppError('Credenciais inválidas'); 
    }
    const senhaCorreta = await bcrypt.compare(senhaDigitada, usuario.senha);
    if (!senhaCorreta) {
        throw new AppError('Credenciais inválidas');
    }

    const token = jwt.sign(
        { 
        id: usuario.id, 
        email: usuario.email, 
        tipo: usuario.tipo
    },
        process.env.CHAVE_SECRETA, 
        { expiresIn: '1h' } 
    );

    return token;
};

module.exports = {
    criarComum,
    buscarPorId,
    buscarPorEmail,
    atualizar,
    deletar,
    login
};