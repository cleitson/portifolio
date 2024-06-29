import { EmailData } from "../types";

const BASE_URL = 'https://server-nodemailer-ten.vercel.app';

export const sendEmail = async (data: EmailData) => {
  try {
    const response = await fetch(`${BASE_URL}/send`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'name': data.name,
        'mail': data.email,
        'message': data.message
      })
    });
    
    const result = await response.json();
    return result;
  } catch (error) {
    return error;
  }
}