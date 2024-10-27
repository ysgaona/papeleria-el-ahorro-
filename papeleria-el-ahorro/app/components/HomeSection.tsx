"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Container from "./Container";

const HomeSection = () => {
  const router = useRouter();

  
  return (
    <Container>
      <div className="home-section items-center my-2 ">
        <div
          className="home-section d-flex "
          style={{ marginTop: "25px", marginBottom: "25px" }}
        >
          <p className=" text-2xl font-bold text-center justify-center text-[#343A40]">
            Categorias
          </p>

          <div className="grid grid-cols-2 gap-4 pt-4 pb-4 lg:grid-cols-4 lg:gap-3">
            <div className=" h-auto rounded-lg bg-gray-200">
              <Link href="/electrodomesticos">
                <Image
                  className="w-full h-auto hover:scale-105 "
                  src="/electrodomesticos.png"
                  alt="Tuple"
                  width={300}
                  height={300}
                />
              </Link>
            </div>
           
           
            <div className=" rounded-lg bg-gray-200">
              <Link href="/linea-de-hogar">
                <Image
                  className="w-full h-auto hover:scale-105 "
                  src="/lineahogar.png"
                  alt="Tuple"
                  width={500}
                  height={500}
                />
              </Link>
            </div>
            <div className=" rounded-lg bg-gray-200">
              <Link href="/tecnologia">
                <Image
                  className="w-full h-auto hover:scale-105 "
                  src="/tecnologia.png"
                  alt="Tuple"
                  width={500}
                  height={500}
                />
              </Link>
            </div>
            <div className=" rounded-lg bg-gray-200">
              <Link href="/celulares">
                <Image
                  className="w-full h-auto hover:scale-105"
                  src="/celulares.png"
                  alt="Tuple"
                  width={300}
                  height={100}
                />
              </Link>
            </div>
          </div>

          <div className="pt-8 ">
            <Link href="/tecnologia">
              <Image
                className="w-full h-auto "
                src="/banner1.png"
                alt="Tuple"
                width={1440}
                height={120}
              />
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default HomeSection;
