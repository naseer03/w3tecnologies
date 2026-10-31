import "server-only";
import nodemailer, { type SendMailOptions, type Transporter } from "nodemailer";
import type SMTPTransport from "nodemailer/lib/smtp-transport";

export const mailFrom = process.env.MAIL_FROM || "info@w3tec.com";
export const mailAdmin = process.env.MAIL_ADMIN || mailFrom;

let transporter: Transporter | undefined;

function getTransporter() {
  if (transporter) return transporter;
  if (process.env.SMTP_HOST) {
    const options: SMTPTransport.Options = {
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 465),
      secure: process.env.SMTP_SECURE !== "false",
      auth: process.env.SMTP_USER ? { user: process.env.SMTP_USER, pass: process.env.SMTP_PASSWORD } : undefined,
    };
    transporter = nodemailer.createTransport(options);
  } else {
    // Same delivery path as PHP's mail(): the host's sendmail binary.
    transporter = nodemailer.createTransport({ sendmail: true });
  }
  return transporter;
}

export async function sendMail(options: SendMailOptions) {
  return getTransporter().sendMail({ from: mailFrom, ...options });
}

export function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
