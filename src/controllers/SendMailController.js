const nodemailer = require("nodemailer");

const SMTP_CONFIG = require("../config/smtp");

class SendMailControler {

    transporter() {
        return nodemailer.createTransport({
            host: SMTP_CONFIG.host,
            port: SMTP_CONFIG.port,
            secure: false,
            auth: {
                user: SMTP_CONFIG.user,
                pass: SMTP_CONFIG.pass,
            },
            tls: {
                rejectUnauthorized: false,
            },
        });
    }

    async whelcome(email) {
        await this.transporter().sendMail({
            text: "Texto do E-mail",
            subject: "Boas vindas",
            from: SMTP_CONFIG.user,
            to: email,
            html: `
                    <html>
                    <body>
                        <strong>Seja bem vindo Javascript notes API</strong>
                    </body>
                    </html>
                `,
        });
    }
}

module.exports = new SendMailControler();