import { Metadata } from "next";
import SearchClient from "./SearchClient";

export const metadata: Metadata = {
  title: "Limitless Wear - Поиск",
  description: "Найдите лучшие товары в нашем магазине. Введите название товара и начните поиск!",
  openGraph: {
    title: "Limitless Wear - Поиск",
    description: "Найдите лучшие товары в нашем магазине. Введите название товара и начните поиск!",
  },
};

export default function SearchPage() {
  return <SearchClient />;
}
