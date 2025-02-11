import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { email, message } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: "Новое сообщение с сайта Limitless-Wear",
      text: `Сообщение: ${message}\nПочта для обратной связи: ${email}`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Ошибка при отправке письма:", error); 
    return NextResponse.json({ error: "Ошибка при отправке письма"}, { status: 500 });
  }
}
