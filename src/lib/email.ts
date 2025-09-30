// import FormData from 'form-data';
const FormData = require("form-data");
import { Resend } from "resend";

const resendKey = process.env.RESEND_API_KEY;
const resend = new Resend(resendKey);

type EmailParams = {
  to: string;
  subject: string;
  text: string;
};

export async function sendEmail({ to, subject, text }: EmailParams) {
  try {
    const data = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to,
      subject,
      text,
    });

    console.log("Email sent OK");
  } catch (error) {
    console.log(error);
  }
}
