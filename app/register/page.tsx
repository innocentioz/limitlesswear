import { Metadata } from "next";
import RegisterContent from "./RegisterContent";

export const metadata: Metadata = {
  title: "Limitless Wear - Регистрация",
  description: "Создайте аккаунт в Limitless Wear для доступа к личному кабинету и оформления заказов",
  keywords: "регистрация, создать аккаунт, новый пользователь, Limitless Wear",
};

export default function RegisterPage() {
  return <RegisterContent />;
}
