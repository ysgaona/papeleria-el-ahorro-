import React from 'react'
import Link from "next/link";
import Image from "next/image";

type Props = {}

function SpecialSales({}: Props) {
  return (
    <>
     <div className="w-full flex flex-col text-[#343A40] font-semibold p-0 py-2 bg-[#E8EAED] rounded-3xl">
          <h2 className="text-2xl font-bold mb-1 text-center pt-4">
            Promociones Especiales
          </h2>

          <div className="grid grid-cols-1 gap-2 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 lg:gap-4 p-2 mr-2 ml-2">
          <div className="flex justify-center items-center h-auto rounded-md ">
          <Link href="/linea-de-hogar/colchones">
              <Image
                src="/promo1.png"
                alt="promo"
                width={300}
                height={300}
                className=" justify-center items-center rounded-md pb-4"
              />
              </Link>
            </div>
            <div className="flex justify-center items-center h-auto rounded-lg ">
              <Link href="/tecnologia/equipos-computacion">
              <Image
                src="/promo2.png"
                alt="promo"
                width={300}
                height={300}
                className=" justify-center items-center rounded-md pb-4"
              />
              </Link>
              
            </div>
            <div className="flex justify-center items-center h-auto rounded-lg ">
            <Link href="/lavanderia/lavadoras">
              <Image
                src="/promo3.png"
                alt="promo"
                width={300}
                height={300}
                className=" justify-center items-center rounded-md pb-4"
              />
               </Link>
            </div>
            <div className="flex justify-center items-center h-auto rounded-lg ">
            <Link href="/tecnologia/televisores">
              <Image
                src="/promo4.png"
                alt="promo"
                width={300}
                height={300}
                className=" justify-center items-center rounded-md pb-4"
              />
              </Link>
            </div>
           
          </div>
        </div>
    </>
  )
}

export default SpecialSales