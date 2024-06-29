import nodemailer from "nodemailer"
import { EmailData } from "../types";

const sendMail = async (data: EmailData) => {
  const { name, email, message } = data;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: import.meta.env.VITE_SMTP_USER,
      pass: import.meta.env.VITE_SMTP_PASS
    }

  });

  const mailOptions = {
    from: import.meta.env.VITE_SMTP_USER,
    to: import.meta.env.VITE_SMTP_USER,
    subject: "Contato do Portifolio",
    text: message,
    html: `
      <p>nome:${name}</p>
      <p>email:${email}</p>
      <p>mensagem:${message}</p>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    return { status: "SUCCESS", data: "Email enviado com sucesso!" };
  } catch (error) {
    console.error(error);
    return { status: "BAD_REQUEST", data: "Erro ao enviar email!" };
  }
};

export default sendMail;