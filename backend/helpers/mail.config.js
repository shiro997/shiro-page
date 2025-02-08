const config = require('../config')
const transporter = require('./mailer')

class MailConfig {
  enviarCorreo = async (mail,mailBody) => {
  
    return await transporter.sendMail({
      from: `VickyBot ${config.email}`,
      to: mail,
      subject: 'NoReply',
      body: mailBody
    });
  }

  prepararCorreo = (contact) => {
    let plantilla = `<!doctype html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
    crossorigin="anonymous"></script>
  <style>
    body {
      max-width: 670px;
      background-color: gray;
    }

    .bg-rosso {
      background-color: #CC0000;
    }
  </style>
</head>

<body style="font-family: 'Poppins', Arial, sans-serif">
  <table width="100%" border="0" cellspacing="0" cellpadding="0">
      <tr>
          <td align="center" style="padding: 20px;">
              <table class="content" width="600" border="0" cellspacing="0" cellpadding="0" style="border-collapse: collapse; border: 1px solid #cccccc;">
                  <!-- Header -->
                  <tr>
                      <td class="header" style="background-color: #CC0000; padding: 40px; text-align: center; color: white; font-size: 24px;">
                        Shiro's
                      </td>
                  </tr>

                  <!-- Body -->
                  <tr>
                      <td class="body" style="padding: 40px; text-align: left; font-size: 16px; line-height: 1.6;">
                      Hola! <br>
                      Tienes un nuevo contacto.
                      <br><br>
                          La persona ${contact.Client.UsrName} necesita de tus servicios. <br><br>
                          El dispositivo a revisar es ${contact.Client.DevName}, detalla las siguientes fallas:           
                      </td>
                  </tr>

                  <!-- Call to action Button -->
                  <tr>
                      <td style="padding: 0px 40px 0px 40px; text-align: center;">
                          <!-- CTA Button -->
                          <table cellspacing="0" cellpadding="0" style="margin: auto;">
                              <tr>
                                  <td align="center" style="padding: 10px 20px; border-radius: 5px;">
                                  ${contact.Mail.Msg}
                                  </td>
                              </tr>
                          </table>
                      </td>
                  </tr>
                  <tr>
                      <td class="body" style="padding: 40px; text-align: left; font-size: 16px; line-height: 1.6;">
                          Estos son sus datos de contacto: <br>e-mail: ${contact.Client.mail} <br> celular: ${contact.Client.Tel}             
                      </td>
                  </tr>
                  <!-- Footer -->
                  <tr>
                      <td class="footer" style="background-color: #cc0000; padding: 40px; text-align: center; color: white; font-size: 14px;">
                      Copyright &copy; 2025 | Shiro's
                      </td>
                  </tr>
              </table>
          </td>
      </tr>
  </table>
</body>`;
    //console.log(plantilla);
    return plantilla;
  }
}


module.exports = new MailConfig();