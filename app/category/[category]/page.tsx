import CategoryContent from "./CategoryContent";
import { Metadata } from "next";

type Props = {
  params: { category: string };
};

export function generateMetadata({ params }: Props): Metadata {
  const categoryNames: Record<string, string> = {
    shoes: "Обувь",
    clothing: "Одежда",
    accessories: "Аксессуары",
    collections: "Коллекции",
  };

  const categoryTitle = categoryNames[params.category] || "Категория не найдена";

  return {
    title: `Limitless Wear - ${categoryTitle}`,
    description: `Купить ${categoryTitle} в интернет-магазине Limitless Wear. Доставка по всей России.`,
    keywords: `Limitless Wear, ${categoryTitle}, купить ${categoryTitle}, брендовая ${categoryTitle}`,
  };
}

export default function CategoryPage({ params }: Props) {
  return <CategoryContent category={params.category} />;
}
