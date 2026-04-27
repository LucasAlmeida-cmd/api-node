const validar = (schema) => (req, res, next) => {
    const resultado = schema.safeParse(req.body);

    if (!resultado.success) {
        return res.status(400).json({
            status: 'Erro de Validação',
            erros: resultado.error.issues.map(issue => ({
                campo: issue.path[0],
                mensagem: issue.message
            }))
        });
    }
    req.body = resultado.data;
    next();
};

module.exports = validar;