import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer';


const transport = nodemailer.createTransport({ //envio de e-mail
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "7b812a21dda185",
        pass: "368c7a418c271f"
    }
});


export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({ subject, body }: SendMailData) {

        await transport.sendMail({
            from: 'Equipe Feedget <oi@feedget.com>',
            to: 'Wille Lopes <willelopeswow@gmail.com>',
            subject,
            html: body,
        });
    };
}
