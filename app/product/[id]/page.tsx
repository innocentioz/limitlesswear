import { prisma } from "@/lib/prisma";
import ProductDetails from "./ProductDetails";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const product = await prisma.product.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!product) {
    return {
      title: "Товар не найден",
      description: "Данный товар отсутствует в магазине.",
    };
  }

  return {
    title: `${product.name} – Купить онлайн`,
    description: `Купите ${product.name} по цене ${product.price} ₽. Доставка по всей России и СНГ.`,
    openGraph: {
      title: `${product.name} – Купить онлайн`,
      description: `Купите ${product.name} по цене ${product.price} ₽. Доставка по всей России и СНГ.`,
      images: [{ url: product.imageUrl }],
    },
  };
}

const ProductPage = async ({ params }: { params: { id: string } }) => {
  const product = await prisma.product.findUnique({
    where: { id: parseInt(params.id) },
    include: { sizes: true },
  });

  if (!product) {
    return <div>Товар не найден</div>;
  }

  return <ProductDetails product={product} />;
};

export default ProductPage;
