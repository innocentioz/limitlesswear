import { Metadata } from "next";
import CartContent from "./CartContent";

export const metadata: Metadata = {
  title: "Limitless Wear - Корзина",
  description: "Просмотрите и оформите ваши покупки в корзине Limitless Wear",
  keywords: "корзина, заказ, покупки, оформление заказа, Limitless Wear",
};

export default function CartPage() {
  return <CartContent />;
}
