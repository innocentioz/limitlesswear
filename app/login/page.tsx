import { Metadata } from "next";
import LoginContent from "./LoginContent";

export const metadata: Metadata = {
  title: "Limitless Wear - Вход в аккаунт",
  description: "Войдите в свой аккаунт Limitless Wear для доступа к заказам и личному кабинету",
  keywords: "вход, авторизация, логин, аккаунт, Limitless Wear",
};

export default function LoginPage() {
  return <LoginContent />;
}
