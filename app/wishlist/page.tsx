import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import WishlistClient from "./WishlistClient";
import { redirect } from "next/navigation";
import { Metadata } from "next";

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: "Limitless Wear - Избранное",
    description: "Сохраненные товары, которые вам понравились. Покупайте с удобством!",
    openGraph: {
      title: "Limitless Wear - Избранное",
      description: "Сохраненные товары, которые вам понравились. Покупайте с удобством!",
    },
  };
};

const WishlistPage = async () => {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    redirect("/login");
  }

  const userId = Number(session.user.id);

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/wishlist?userId=${userId}`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch wishlist data.");
  }

  const wishlist = await response.json();

  return <WishlistClient wishlist={wishlist} userId={userId} />;
};

export default WishlistPage;
