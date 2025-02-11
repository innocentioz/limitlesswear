import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import OrderClient from "@/app/cart/order/OrderClient/page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Limitless Wear - Оформление заказа",
  description: "Страница оформления заказа",
};

const OrderPage = async () => {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    redirect("/login");
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Оформление заказа</h1>
      <OrderClient />
    </div>
  );
};

export default OrderPage;
