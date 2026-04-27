const usuarioService = require('../services/usuarioService');

const criarUsuario = async (req, res) => {
    try {
        const novoUsuario = await usuarioService.criarComum(req.body);
        res.status(201).json(novoUsuario);
    } catch (erro) {
        res.status(400).json({ mensagem: 'Erro ao criar usuário', detalhes: erro.message });
    }
};

const listarUsuarios = async (req, res) => {
    const { page = 1, limit = 10 } = req.query;
    const respostaPaginada = await usuarioService.listarTodos(page, limit);
    res.status(200).json(respostaPaginada);
};

const obterUsuario = async (req, res) => {
    const { id } = req.params;
    const usuario = await usuarioService.buscarPorId(id);
    res.status(200).json(usuario);
};

const obterUsuarioPorEmail = async (req, res) => {
    const { email } = req.params; 
    const usuario = await usuarioService.buscarPorEmail(email);
    res.status(200).json(usuario);
};

const atualizarUsuario = async (req, res) => {
    try {
        const { email } = req.params;
        const usuarioAtualizado = await usuarioService.atualizar(email, req.body);
        res.status(200).json({ mensagem: 'Usuário atualizado com sucesso', usuario: usuarioAtualizado });
    } catch (erro) {
        res.status(400).json({ mensagem: 'Erro ao atualizar usuário', detalhes: erro.message });
    }
};

const deletarUsuario = async (req, res) => {
    try {
        const { email } = req.params;
        await usuarioService.deletar(email);
        res.status(204).send(); 
    } catch (erro) {
        res.status(404).json({ mensagem: 'Erro ao deletar usuário', detalhes: erro.message });
    }
};

const fazerLogin = async (req, res) => {
    try {
        const { email, senha } = req.body;
        const token = await usuarioService.login(email, senha);
        
        res.status(200).json({ mensagem: 'Login realizado com sucesso', token });
    } catch (erro) {
        res.status(401).json({ mensagem: erro.message }); 
    }
};

module.exports = {
    criarUsuario,
    listarUsuarios,
    obterUsuario,
    obterUsuarioPorEmail,
    atualizarUsuario,
    deletarUsuario,
    fazerLogin
};