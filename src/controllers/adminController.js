const adminService = require('../services/adminService');

const criarAdmin = async (req, res) => {
    const novoAdmin = await adminService.criarAdmin(req.body);
    res.status(201).json(novoAdmin);
};


module.exports = {
    criarAdmin
};