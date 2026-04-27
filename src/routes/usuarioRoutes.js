const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');
const validar = require('../middlewares/validarRequest');
const { usuarioSchema } = require('../schemas/usuarioSchema');
const verificarToken = require('../middlewares/autenticacao');

router.post('/login', usuarioController.fazerLogin);
router.post('/usuarios', validar(usuarioSchema), usuarioController.criarUsuario);

router.put('/usuarios/:email', verificarToken, validar(usuarioSchema), usuarioController.atualizarUsuario);
router.get('/usuarios/:email', verificarToken, usuarioController.obterUsuarioPorEmail);
router.delete('/usuarios/:email', verificarToken, usuarioController.deletarUsuario);

module.exports = router;