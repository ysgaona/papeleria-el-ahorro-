export const revalidate = 0;

import React from "react";
import ProductCard from "@/app/components/products/ProductCard";
import getProducts, { IProductParams } from "@/actions/getProducts";
import NullData from "@/app/components/NullData";
import Container from "@/app/components/Container";
import Breadcrumb from "@/app/breadCrumb/BreadCrumb";
interface CellphonePageProps {
  searchParams: IProductParams;
}

const breadcrumbItems = [
  { label: " Inicio ", link: "/" },
  { label: " Celulares ", link: "/celulares" },
];

async function CellphonePage({ searchParams }: CellphonePageProps) {
  const products = await getProducts(searchParams);

  if (products.length === 0) {
    return (
      <NullData title="Oops no products found. Click All to clear filters " />
    );
  }

  const Products = products.filter(
    (product) => product.category === "Celulares"
  );
  // Barajar los productos de dormitorios
  function shuffleArray(array: any) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  const shuffledProducts = shuffleArray(Products);

  return (
    <div>
      <Container>
        <div className="w-full">
          <Breadcrumb items={breadcrumbItems} />
          <div className="pt-6">
            <h1 className="text-xl font-semibold text-center mt-0 mb-1">
              {" "}
             Productos exclusivos
            </h1>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2x1:grid-cols-6 gap-8">
          {shuffledProducts.slice(0, 8).map((product: any) => (
            <ProductCard key={product.id} data={product} />
          ))}
        </div>
      </Container>
    </div>
  );
}

export default CellphonePage;