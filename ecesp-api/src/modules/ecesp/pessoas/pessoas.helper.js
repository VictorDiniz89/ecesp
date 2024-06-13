const PessoaModel   = require('../../../dao/models/pessoas');
 
// const schema = {
//     nome  : Joi.string().min(2).max(30).required(), 
//     sobrenome : Joi.string().min(2).max(40).required(),
//     email : Joi.string().max(100).email().required(),
//     senha : Joi.string().min(6).max(12).required()
// }

class PessoaHelper {
    
    isValidCreate(payload) {
        return payload
    }

    isValidUpdate(payload) {
        return payload;
    }

    isValidDelete(payload) {
        return payload;
    }

    permiteReabrirTarefa(senha) {
        const senhaLiberacao = 'TrabalheNaEcesp'
        return senha === senhaLiberacao;
    }
     
}

module.exports = new PessoaHelper();