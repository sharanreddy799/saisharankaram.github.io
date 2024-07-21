// app/api/send-email/route.js
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  const { firstName, lastName, emailAddress, phoneNumber, service, message } =
    await request.json();

  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Your Name" <${process.env.EMAIL_USER}>`,
      to: "saisharank2008@gmail.com",
      subject: "New Contact Form Message from portifolio",
      text: `Name: ${firstName} ${lastName}\nEmail: ${emailAddress}\nPhone: ${phoneNumber}\nService: ${service}\nMessage: ${message}`,
      html: `<p>Name: ${firstName} ${lastName}</p><p>Email: ${emailAddress}</p><p>Phone: ${phoneNumber}</p><p>Service: ${service}</p><p>Message: ${message}</p>`,
    });

    return NextResponse.json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Failed to send email." },
      { status: 500 }
    );
  }
}
