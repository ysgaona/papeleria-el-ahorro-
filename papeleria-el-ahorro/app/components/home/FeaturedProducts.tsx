import React from 'react'
import getProducts, { IProductParams } from "@/app/api/actions/getProducts";
import ProductCard from "@/app/components/products/ProductCard";


interface FeaturedProductsProps {
    searchParams: IProductParams;
  }



async function FeaturedProducts({ searchParams }: FeaturedProductsProps) {
    const products = await getProducts(searchParams);

    function shuffleArray(array: any) {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
      }
      const shuffledProducts = shuffleArray(products);

  return (
    <>
    <div className="w-full flex-col text-[#343A40] font-semibold p-0 py-2 ">
          <h2 className="text-2xl font-bold mb-8 text-center ">
            Productos Destacados{" "}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4 sm:gap-4">
            {shuffledProducts.slice(0, 8).map((product: any) => (
              <ProductCard key={product.id} data={product} />
            ))}
          </div>
        </div>
    </>
  )
}

export default FeaturedProducts