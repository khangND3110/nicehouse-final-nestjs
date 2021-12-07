import { MailerService } from "@nestjs-modules/mailer";
import { Injectable } from "@nestjs/common";
import { MailPayload } from "./dto/mail.dto";

@Injectable()
export class MailService {
    constructor(private mailerService: MailerService) { }

    async sendEmail(mailPayload: MailPayload) {
        await this.mailerService.sendMail({
            to: mailPayload.email,
            subject: mailPayload.subject,
            template: './mailtemplates',
            context: {
                fromEmail: mailPayload.fromEmail,
                fromPhoneNumber: mailPayload.fromPhoneNumber,
                message: mailPayload.message,
            },
        });
    }
}
