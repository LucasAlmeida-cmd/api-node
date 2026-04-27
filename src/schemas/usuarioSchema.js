const { z } = require('zod');

const usuarioSchema = z.object({
    nome: z.string({
        required_error: "O nome é obrigatório",
        invalid_type_error: "O nome deve ser uma string",
    }).min(3, { message: "O nome deve ter no mínimo 3 caracteres" }),
    
    email: z.string({
        required_error: "O e-mail é obrigatório",
    }).email({ message: "Formato de e-mail inválido" }),

    senha: z.string({
        required_error: "A senha é obrigatória",
    }).min(6, { message: "A senha deve ter no mínimo 6 caracteres" })
});



module.exports = { usuarioSchema };