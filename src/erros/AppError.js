class AppError extends Error {
    constructor(mensagem, statusCode = 400) {
        super(mensagem);
        this.mensagem = mensagem;
        this.statusCode = statusCode;
    }
}

module.exports = AppError;