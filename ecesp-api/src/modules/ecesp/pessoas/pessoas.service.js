const model         = require('../../../dao/models/pessoas');
const helper        = require('./pessoas.helper');
const {EcespError} = require('../ecesp.exceptions');

class PessoaService {
    
    async findAll() {
    
        return await model.findAll()
    }
    
    async save(payload){    

        const validPayload = await helper.isValidCreate(payload);
        
        if (validPayload.error) throw new EcespError(validPayload.error.msg)
        
        let record = await model.create(payload)
        
        return record;
    }

    async update({ id }, { senha }){
        const validPayload = helper.isValidUpdate(id);
        
        if (validPayload.error) throw new EcespError(validPayload.error.msg)
    
        const record = await model.findByPk(id)
        
        if (!record) throw new EcespError('Registro não encontrado!');

        if (record.reabertura > 2 && record.concluida) {
            throw new EcespError('Esta tarefa não pode ser reaberta pois atingiu o máximo de duas reaberturas!');     
        }

        if (record.concluida) {
            if (!helper.permiteReabrirTarefa(senha)) 
                throw new EcespError('A senha para liberar a tarefa está incorreta.')
        }

        if (record.concluida || record.reabertura) {
            record.reabertura++;
        }

        record.concluida = !record.concluida;
        
        /// só permito atualizar a situacao "concluida" e quantidade de reabertura
        let updatedRecord =  await record.update({ 
            concluida  : record.concluida, 
            reabertura : record.reabertura 
        })
        
        return updatedRecord;
    }

    async remove(id){
        
        const validPayload = helper.isValidDelete(id);

        if (validPayload.error) throw new EcespError()  
        
        return await model.destroy(
            { 
                where: { 
                    id  
                } 
            }
        )
        
    }
}

module.exports = new PessoaService();
