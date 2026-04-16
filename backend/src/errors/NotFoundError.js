class NotFoundError extends Error {
    constructor(message) {
        super(message);
        this.statusCode = 404;
    }
}

export { NotFoundError }

// por ora, código desnecessário. Estamos criando coisas no backend
