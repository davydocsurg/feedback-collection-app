import sgMail, { MailService } from "@sendgrid/mail";
import { config } from "dotenv";

config();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export const sendAcknowledgmentEmail = async (toEmail, userName) => {
    const msg = {
        to: toEmail,
        from: process.env.FROM_EMAIL,
        subject: "Feedback Acknowledgment",
        text: `Thank you for your feedback, ${userName}! We appreciate your input.`,
    };
    sgMail
        .send(msg)
        .then(() => {
            console.log(msg);
            console.log("Email sent");
        })
        .catch((error) => {
            console.error(error);
        });
};
