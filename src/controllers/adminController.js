// src/controllers/adminController.js
const adminService = require('../services/adminService');
const usuarioService = require('../services/usuarioService'); // Precisamos importar para deletar

const criarAdmin = async (req, res) => {
    const novoAdmin = await adminService.criarAdmin(req.body);
    res.status(201).json(novoAdmin);
};

// Adicionado (req, res) aqui!
const deletarQualquerUsuario = async (req, res) => {
    const { email } = req.params;
    // Note que usamos o service de usuário aqui, pois a lógica de deletar já existe lá
    await usuarioService.deletar(email); 
    res.status(204).send(); 
};

// Adicionado (req, res) aqui!
const listarRelatoriosAvancados = async (req, res) => {
    const { page = 1, limit = 10 } = req.query;
    // Verifique se o seu adminService tem o método listarTodos ou se deve usar o do usuarioService
    const respostaPaginada = await adminService.listarTodos(page, limit);
    res.status(200).json(respostaPaginada);
};

module.exports = {
    criarAdmin,
    deletarQualquerUsuario,
    listarRelatoriosAvancados
};