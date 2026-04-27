const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const validar = require('../middlewares/validarRequest');
const { usuarioSchema } = require('../schemas/usuarioSchema');
const verificarToken = require('../middlewares/autenticacao');


router.post('/admin',  adminController.criarAdmin);

module.exports = router;