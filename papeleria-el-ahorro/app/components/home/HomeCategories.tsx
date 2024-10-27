"use client";

import Image from "next/image";
import Link from "next/link";
import Container from "../container/Container";

const HomeCategory = () => {
 

  return (
    <Container>
      <div className=" items-center my-2 ">
        <div
          className=" d-flex mt-5 mb-5"
        >
          <p className=" text-2xl font-bold text-center justify-center text-[#343A40] mb-4">
            Categorias
          </p>

          <div className="grid grid-cols-1 gap-2 sm:grid-cols-1 md:grid-cols-5 lg:grid-cols-5 lg:gap-4 p-2">
            <div className="h-32 rounded-lg bg-gray-50 flex flex-col justify-center items-center relative hover:shadow-xl transition duration-300">
              <Link
                href="/electrodomesticos"
                className="flex flex-col items-center"
              >
                <div className="flex justify-center items-center">
                  <Image
                    src="/refri.png"
                    alt="refri"
                    width={120}
                    height={100}
                    className="p-2"
                  />
                </div>
                <p className="mt-1 text-center font-semibold">Electrodomésticos</p>
              </Link>
            </div>

           
            <div className="h-32 rounded-lg bg-gray-50 flex flex-col justify-center items-center relative hover:shadow-xl transition duration-300">
              <Link
                href="/lavanderia"
                className="flex flex-col items-center"
              >
                <div className="flex justify-center items-center">
                  <Image
                    src="/lavadora.png"
                    alt="refri"
                    width={120}
                    height={100}
                    className="p-2"
                  />
                </div>
                <p className="mt-1 text-center font-semibold">Lavandería</p>
              </Link>
            </div>

            <div className="h-32 rounded-lg bg-gray-50 flex flex-col justify-center items-center relative hover:shadow-xl transition duration-300">
              <Link
                href="/linea-de-hogar"
                className="flex flex-col items-center"
              >
                <div className="flex justify-center items-center">
                  <Image
                    src="/cafetera.png"
                    alt="refri"
                    width={120}
                    height={100}
                    className="p-2"
                  />
                </div>
                <p className="mt-1 text-center font-semibold">Línea de Hogar</p>
              </Link>
            </div>

            <div className="h-32 rounded-lg bg-gray-50 flex flex-col justify-center items-center relative hover:shadow-xl transition duration-300">
              <Link
                href="/tecnologia"
                className="flex flex-col items-center"
              >
                <div className="flex justify-center items-center">
                  <Image
                    src="/tv.png"
                    alt="refri"
                    width={120}
                    height={100}
                    className="p-2"
                  />
                </div>
                <p className="mt-1 text-center font-semibold">Tecnología</p>
              </Link>
            </div>
      
            <div className="h-32 rounded-lg bg-gray-50 flex flex-col justify-center items-center relative hover:shadow-xl transition duration-300">
              <Link
                href="/celulares"
                className="flex flex-col items-center"
              >
                <div className="flex justify-center items-center">
                  <Image
                    src="/smartphone.png"
                    alt="celulares"
                    width={120}
                    height={100}
                    className="p-2"
                  />
                </div>
                <p className="mt-1 text-center font-semibold">Celulares</p>
              </Link>
            </div>
            
          </div>
        </div>
      </div>
    </Container>
  );
};

export default HomeCategory;
