import emailjs from '@emailjs/browser';
import {Credentials} from "../assets/features/Credentials";

const SERVICE_ID = Credentials.EMAILJS_SERVICE_ID; // Your EmailJS service ID
const TEMPLATE_ID = Credentials.EMAILJS_TEMPLATE_ID; // Your EmailJS template ID
const PUBLIC_KEY = Credentials.EMAILJS_PUBLIC_KEY; // Your EmailJS public key

export const sendVerificationCode = async (email: string): Promise<string> => {
    // Generate a 6-digit verification code
    const verificationCode = Math.floor(100000 + Math.random() * 900000).toString();

    try {
        // Send email using EmailJS
        const response = await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
            to_email: email,
            verificationCode: verificationCode,
        }, PUBLIC_KEY);

        console.log('Email sent successfully:', response);
        return verificationCode;
    } catch (error) {
        console.error('Error sending email:', error);
        throw new Error('Erro ao enviar email de verificação');
    }
}; 