export const revalidate = 0;

import React from "react";
import Container from "./components/Container";
import HomeBanner from "./components/Hero";
import { truncateText } from "@/utils/truncateText";
import ProductCard from "./components/products/ProductCard";
import getProducts, { IProductParams } from "@/actions/getProducts";
import NullData from "./components/NullData";
import { FaWhatsapp } from "react-icons/fa";
import HeroSection from "./components/HomeSection";
import Hero from "./components/Hero";
import HomeSection from "./components/HomeSection";
import Link from "next/link";
import Image from "next/image";

interface HomeProps {
  searchParams: IProductParams;
}

export default async function Home({ searchParams }: HomeProps) {
  const products = await getProducts(searchParams);

  if (products.length === 0) {
    return (
      <>
        <Hero />
        <HomeSection />
      </>
    );
  }

  function shuffleArray(array: any) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  const shuffledProducts = shuffleArray(products);

  return (
    <div className="sm:pt-1 md:pt-2 lg:pt-0 xl:pt-0">
      <div>
        <Hero />
      </div>
      <div>
        <HomeSection />
      </div>
      <Container>
        <div className="w-full flex-col text-[#343A40] font-semibold p-0 py-2 bg-[]">
          <h2 className="text-2xl font-bold mb-2 text-center pb-4">
            Productos Destacados{" "}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4 sm:gap-4">
            {shuffledProducts.slice(0, 8).map((product: any) => (
              <ProductCard key={product.id} data={product} />
            ))}
          </div>
        </div>

        <br />

        <div className="w-full flex flex-col text-[#343A40] font-semibold p-0 py-2 bg-[#FFFFFF]">
          <h2 className="text-2xl font-bold mb-2 text-center pb-4">
            Promociones Especiales
          </h2>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8">
            <div className="h-auto rounded-lg ">
              <Link href="/electrodomesticos">
                <Image
                  src="/bannerA.png"
                  alt="Imagen Izquierda Uno"
                  width={240}
                  height={90}
                  className="mx-auto"
                />
              </Link>
            </div>
            <div className="h-auto rounded-lg ">
              <Link href="/electrodomesticos">
                <Image
                  src="/bannerB.png"
                  alt="Imagen Izquierda Uno"
                  width={240}
                  height={90}
                  className="mx-auto"
                />
              </Link>
            </div>
            <div className="h-auto rounded-lg">
              <Link href="/electrodomesticos">
                <Image
                  src="/bannerA.png"
                  alt="Imagen Izquierda Uno"
                  width={240}
                  height={90}
                  className="mx-auto object-cover"
                />
              </Link>
            </div>
            <div className="h-auto rounded-lg ">
              <Link href="/electrodomesticos">
                <Image
                  src="/bannerB.png"
                  alt="Imagen Izquierda Uno"
                  width={240}
                  height={90}
                  className="mx-auto"
                />
              </Link>
            </div>
          </div>
        </div>

        <div style={{ position: "fixed", bottom: "20px", right: "20px" }}>
          <a
            href="https://web.whatsapp.com/"
            target="_blank"
            className="bg-green-500 p-2 rounded-full flex justify-center items-center hover:bg-green-700 hover:scale-105"
          >
            <FaWhatsapp size={30} className="text-white text-lg sm:text-xl" />
          </a>
        </div>
      </Container>
    </div>
  );
}
