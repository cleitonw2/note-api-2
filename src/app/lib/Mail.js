const nodemailer = require("nodemailer");

const SMTP_CONFIG = require("../../config/smtp");

class Mail {
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
}

module.exports = new Mail();