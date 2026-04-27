const jwt = require('jsonwebtoken');

const verificarToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    
    if (!authHeader) {
        return res.status(401).json({ mensagem: 'Acesso negado. Token não fornecido.' });
    }
    const token = authHeader.split(' ')[1];

    try {
        const decodificado = jwt.verify(token, process.env.CHAVE_SECRETA);
        req.usuarioId = decodificado.id; 
        next();
    } catch (erro) {
        return res.status(403).json({ mensagem: 'Token inválido ou expirado.' }); 
    }
};

module.exports = verificarToken;