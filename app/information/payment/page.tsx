import { Metadata } from "next";
import PaymentContent from "./PaymentContent";

export const metadata: Metadata = {
  title: "Limitless Wear - Информация об оплате и возврате",
  description: "Узнайте о способах оплаты и правилах возврата товаров в Limitless Wear",
  keywords: "оплата, возврат, доставка, способы оплаты, правила возврата, Limitless Wear",
};

export default function PaymentPage() {
  return <PaymentContent />;
}
