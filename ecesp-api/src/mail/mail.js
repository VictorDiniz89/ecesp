const sendGridApi = require('@sendgrid/mail');
const CONTA_EMAIL_NAO_RESPONDA = 'naoresponda@iderptx.com.br';

sendGridApi.setApiKey(process.env.SENDGRID_API_KEY);

class MailService {
    
    constructor() {
        this.engine = sendGridApi;
    }
    
    sendMail(header, body, attachments, template){
        const mailBody = {
            to      : header.to,
            from    : header.from || CONTA_EMAIL_NAO_RESPONDA,
            subject : header.subject,
            text    : body || header.subject,
            html    : template || '',
            attachments            
        }

        if (header.cc) {
            mailBody.cc = header.cc;
        }
        try {
            return this.engine.send(mailBody).then(result => {
                console.log(`${result[0].statusCode} - ${result[0].statusMessage}`);
                return true
            })
            
        } catch (error) {
            console.log(error)
        }
    }
}

const mailService = new MailService();

module.exports = mailService;