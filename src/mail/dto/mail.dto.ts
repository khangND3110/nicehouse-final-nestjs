export interface MailPayload {
    subject: string;
    email: string[];
    message: string;
    fromEmail: string;
    fromPhoneNumber: string;
}