const correoconfig = require('../helpers/mail.config')
class MailController{
  enviarCorreo = async (req,res) =>{
    let contact = req.body;
    console.log(contact);
    let mailBody = correoconfig.prepararCorreo(contact);
    return res.json(correoconfig.enviarCorreo('mateo997@outlook.com', mailBody));
  }
}

module.exports = new MailController();