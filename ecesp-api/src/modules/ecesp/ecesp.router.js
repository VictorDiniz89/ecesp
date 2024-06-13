const pessoaRouter    = require('./pessoas/pessoas.router');

function route(app) {
    app.use(pessoaRouter)
}

module.exports = { route }