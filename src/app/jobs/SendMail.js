const Mail = require("../lib/Mail");
const SMTP_CONFIG = require("../../config/smtp");

module.exports = {
    key: 'RegistrationMail',
    async handle({ data }) {
        const { user } = data;

        await Mail.transporter().sendMail({
            text: "Texto do E-mail",
            subject: "Boas vindas",
            from: `<suporte> ${SMTP_CONFIG.user}`,
            to: user.email,
            html: `
                <html>
                <body>
                    <strong>Seja bem vindo Javascript notes API</strong>
                </body>
                </html>
            `,
        });
    },
};