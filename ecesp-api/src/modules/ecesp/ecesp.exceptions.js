class EcespError extends Error {
    constructor(message) {
      
      super(message || 'Ocorreu um erro inesperado');
      this.statusCode = 400;
  
      // Mantem a pilha de rastreio do codigo de erro
      if (Error.captureStackTrace) {
          Error.captureStackTrace(this, EcespError);
      }
  
      this.name = 'EcespError';
    }
}

module.exports = { EcespError }