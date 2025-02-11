import { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Limitless Wear - Обратная связь",
  description: "Свяжитесь с нами для получения поддержки и ответов на ваши вопросы",
  keywords: "контакты, обратная связь, поддержка, Limitless Wear, связаться с нами",
};

export default function ContactPage() {
  return <ContactContent />;
}
