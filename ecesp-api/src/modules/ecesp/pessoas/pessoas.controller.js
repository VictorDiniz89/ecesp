const service = require("./pessoas.service");
const mailService = require("../../../mail/mail")
const mailTemplate = require("../../../mail/mailTemplateInscricao")

class PessoaController {
  async getAll(req, res, next) {
    try {
      const records = await service.findAll();
      res.json(records);
    } catch (error) {
      return next(error);
    }
  }

  async save(req, res, next) {
    try {
      const newRecord = await service.save(req.body);
      //email
      const header = {
        to: newRecord.email,
        subject: 'ecesp online confirmação de inscrição'
      }
      const template = mailTemplate.parseTemplate({nome:newRecord.nome, curso:newRecord.curso})
      try {
        mailService.sendMail(header, '', [], template)
        
      } catch (error) {
      console.log(error)  
      }

      res.status(201).json(newRecord);
    } catch (error) {
      return next(error);
    }
  }

  async update(req, res, next) {
    try {
      const updatedRecord = await service.update(req.params, req.body);
      res.json(updatedRecord);
    } catch (error) {
      return next(error);
    }
  }

  async removeById(req, res, next) {
    try {
      await service.remove(req.params.id);

      res.json({ message: `Registro excluído com sucesso` });
    } catch (error) {
      return next(error);
    }
  }
}

module.exports = new PessoaController();
