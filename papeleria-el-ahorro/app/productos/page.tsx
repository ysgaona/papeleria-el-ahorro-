export const revalidate = 0;

import React from "react";
import Container from "@/app/components/Container";
import ProductCard from "@/app/components/products/ProductCard";
import getProducts, { IProductParams } from "@/actions/getProducts";
import NullData from "@/app/components/NullData";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/app/breadCrumb/BreadCrumb";

interface ProductsProps {
  searchParams: IProductParams;
}

const breadcrumbItems = [
  { label: " Inicio ", link: "/" },
  { label: " Productos ", link: "/productos" },
];

async function Products({ searchParams }: ProductsProps) {
  const products = await getProducts(searchParams);

  if (products.length === 0) {
    return (
      <NullData title="Oops no products found. Click All to clear filters " />
    );
  }

  const bedroomProducts = products.filter(
    (product) =>
      product.category === "Electrodomésticos" ||
      product.category === "Lavanderia" ||
      product.category === "Línea de Hogar" ||
      product.category === "Tecnología" ||
      product.category === "Celulares"
  );

  // Barajar los productos de dormitorios
  function shuffleArray(array: any) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  const shuffledBedroomProducts = shuffleArray(bedroomProducts);

  return (
    <div className="p-0">
      <Container>
        <div>
          <div className="pt-1">
            <Breadcrumb items={breadcrumbItems} />
          </div>

          <div className="flex flex-col items-center md:mr-8">
            <h1 className="text-xl text-center md:text-left mt-2 mb-2 text-gray-800">
              Todos los productos
            </h1>
          </div>
          <div className="flex flex-col md:flex-row pb-2 ">
            <div className="flex flex-col items-center md:mr-8">
              <div className="flex items-center">
                <span className="text-left text-md mr-1 md:mr-0 mb-1 md:mb-0">
                  Filtrar por:{" "}
                </span>
                <select className="ml-4 pl-2 py-2 bg-[#f0ece4] rounded-md hover:bg-[##343A40] focus:outline-none">
                  <option value="orden_alfabetico">Categoria</option>
                  <option value="orden_alfabetico">Nombre, A-Z</option>
                  <option value="orden_descendente">Nombre, Z-A</option>
                  <option value="precio">Precio más bajo</option>
                  <option value="categoria">Preco más alto</option>
                </select>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2x1:grid-cols-6 gap-4">
            {shuffledBedroomProducts.slice(0, 8).map((product: any) => (
              <ProductCard key={product.id} data={product} />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Products;
