"use client";

import { truncateText } from "@/utils/truncateText";
import Image from "next/image";
import { formatPrice } from "@/utils/formatPrice";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

interface ProductCardProps {
  data: any;
}

const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  const router = useRouter();
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div
      onClick={() => router.push(`/product/${data.id}`)}
      className="col-span-1 cursor-pointer border-[1.2px]
       border-red-300
      bg-[#FFFFFF]
      rounded-sm
      p-2
      transition
      hover:scale-105
      text-center
      text-sm"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex flex-col items-center w-full gap-1">
        <div className=" overflow-hidden relative w-full h-48">
          <Image
            fill
            src={hovered && data.images[1] ? data.images[1].image : (data.images[0] ? data.images[0].image : "")}
            alt={data.name}
            className="w-full"
            sizes="(max-width: 500px) 100vw, (max-width: 1200px) 50vw, 1200px"
          />
        </div>
        <div className="mt-4">{truncateText(data.name)}</div>
        <div className="font-semibold">{formatPrice(data.price)}</div>
        <div></div>
      </div>
    </div>
  );
};

export default ProductCard;