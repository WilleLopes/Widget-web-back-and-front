import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer';


const transport = nodemailer.createTransport({ //envio de e-mail
    host: "",
    port: 2525,
    auth: {
        user: "",
        pass: ""
    }
});


export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({ subject, body }: SendMailData) {

        await transport.sendMail({
            from: 'Equipe Feedget <oi@feedget.com>',
            to: 'Wille Lopes <wille@gmail.com>',
            subject,
            html: body,
        });
    };
}
