"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { useEffect, useState } from "react";
import { CartProductType, SelectedImgType } from "@/app/product/[productId]/ProductDetails";

interface ProductImageProps {
  cartProduct: CartProductType;
  product: any;
  handleColorSelect: (value: SelectedImgType) => void;
}

const ProductImage: React.FC<ProductImageProps> = ({ cartProduct, product, handleColorSelect }) => {
  const router = useRouter();

  const [isPreviewMode, setIsPreviewMode] = useState(false);

  const togglePreviewMode = () => {
    setIsPreviewMode(!isPreviewMode);
  };

  return (
    <div className="grid grid-cols-6 gap-6  max-h-[500px] min-h-[300px] sm:min-h-[400px]">
      
      <div className="col-span-5 relative aspect-square">
        <Image
          fill
          src={cartProduct.selectedImg.image}
          alt={cartProduct.name}
          className="w-full h-full object-contain cursor-pointer"
          onClick={togglePreviewMode}
        />
      </div>
      <div className="flex flex-col items-center justify-center gap -3 cursor-pointer border h-full max-h-[500px] min-h-[300px] sm:min-h-[400px]">
        {product.images.map((image: SelectedImgType) => (
          <div
            key={image.color}
            onClick={() => {
              handleColorSelect(image);
            }}
            className={`relative w-[80%] aspect-square rounded border-[#474747]
              ${
                cartProduct.selectedImg.color === image.color
                  ? "border-[1.5px]"
                  : "border-none"
              }
            `}
          >
            <Image
              src={image.image}
              alt={image.color}
              fill
              className="w-full h-64 object-contain"
            />
          </div>
        ))}
      </div>
      {isPreviewMode && (
  <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
    <div className="relative w-[720px] h-[480px] z-50">
      <Image
        fill
        src={cartProduct.selectedImg.image}
        alt={cartProduct.name}
        className="w-full h-full object-contain cursor-pointer"
        onClick={togglePreviewMode}
      />
      <div
        className="absolute top-4 right-1 cursor-pointer"
        onClick={togglePreviewMode}
      >
        <span className="text-black text-4xl ">×</span>
      </div>
    </div>
  </div>
)}
    </div>
  );
};

export default ProductImage;