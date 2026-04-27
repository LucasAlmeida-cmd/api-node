const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const verificarToken = require('../middlewares/autenticacao');
const { apenasAdmin } = require('../middlewares/autorizacao');


router.post('/admin',  adminController.criarAdmin);

router.get('/admin', verificarToken, adminController.listarRelatoriosAvancados);

router.delete('/admin/usuarios/:email', 
    verificarToken, 
    apenasAdmin, 
    adminController.deletarQualquerUsuario
);

module.exports = router;