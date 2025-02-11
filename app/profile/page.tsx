import { Metadata } from "next";
import ProfileContent from "./ProfileContent";

export const metadata: Metadata = {
  title: "Limitless Wear - Личный кабинет",
  description: "Управляйте своими заказами и личной информацией в личном кабинете Limitless Wear",
  keywords: "личный кабинет, профиль, заказы, Limitless Wear, история заказов",
};

export default function ProfilePage() {
  return <ProfileContent />;
}
  