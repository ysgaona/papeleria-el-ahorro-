"use client";

import { useCallback, useEffect, useState } from "react";
import { useCart } from "@/hooks/useCart";
import SetColor from "@/app/components/products/SetColor";
import SetQuantity from "@/app/components/products/SetQuantity";
import Button from "@/app/components/button/Button";
import ProductImage from "@/app/components/products/ProductImage";
import { MdCheckCircle } from "react-icons/md";
import { useRouter } from "next/navigation";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Container from "@/app/components/container/Container";
interface ProductDetailsProps {
  product: any;
}

export type CartProductType = {
  id: string;
  name: string;
  description: string;
  code: string;
  category: string;
  subcategory: string;
  brand: string;
  selectedImg: SelectedImgType;
  quantity: number;
  price: number;
};
export type SelectedImgType = {
  color: string;
  colorCode: string;
  image: string;
};
const Horizontal = () => {
  return <hr className="w-[50%] my-1" />;
};

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  const { cartTotalQty, handleAddProductToCart, cartProducts } = useCart();
  const [isProductInCart, setIsProductInCart] = useState(false);
  const [cartProduct, setCartProduct] = useState<CartProductType>({
    id: product.id,
    name: product.name,
    description: product.description,
    code: product.code,
    category: product.category,
    subcategory: product.subcategory,
    brand: product.brand,
    selectedImg: { ...product.images[0] },
    quantity: 1,
    price: product.price,
  });
  const router = useRouter();

  useEffect(() => {
    setIsProductInCart(false);

    if (cartProducts) {
      const existingIndex = cartProducts.findIndex(
        (item) => item.id === product.id
      );

      if (existingIndex > -1) {
        setIsProductInCart(true);
      }
    }
  }, [cartProducts, product.id]);

  const handleColorSelect = useCallback(
    (value: SelectedImgType) => {
      setCartProduct((prev) => ({
        ...prev,
        selectedImg: value,
      }));
    },
    [setCartProduct]
  );

  const handleQtyIncrease = useCallback(() => {
    if (cartProduct.quantity === 5) {
      return;
    }

    setCartProduct((prev) => {
      const newQuantity = prev.quantity + 1;
      return { ...prev, quantity: newQuantity };
    });
  }, [cartProduct]);

  const handleQtyDecrease = useCallback(() => {
    if (cartProduct.quantity === 1) {
      return;
    }

    setCartProduct((prev) => {
      const newQuantity = prev.quantity - 1;
      return { ...prev, quantity: newQuantity };
    });
  }, [cartProduct]);

  const handleAddToCart = useCallback(() => {
    const productToAdd = {
      ...cartProduct,
      price: product.price,
    };
    handleAddProductToCart(productToAdd);
  }, [cartProduct, handleAddProductToCart, product.price]);

  const [isExpandedCaracteristicas, setExpandedCaracteristicas] =
    useState(true);
  const [isExpandedDimensiones, setExpandedDimensiones] = useState(true);
  const [isExpandedColores, setExpandedColores] = useState(true);

  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 p-2 md:p-1">
        <ProductImage
          cartProduct={cartProduct}
          product={product}
          handleColorSelect={handleColorSelect}
        />

        <div className=" flex flex-col gap-1 text-slate-900 text-sm">
          <h1 className="text-xl font-semibold text-justify text-slate-900 mx-auto md:max-w-none md:mx-0">
            {product.name}
          </h1>

          <div className="flex flex-col gap-1 text-slate-900 text-sm max-w-[600px] text-justify">
            {product.description}
          </div>

          <div>
            <span className="font-semibold pr-2">Cod: </span>
            {product.code}
          </div>

          <Horizontal />
          <div>
            <span className="font-semibold pr-2">Categoria: </span>
            {product.category}
          </div>
          <Horizontal />
          <div>
            <span className="font-semibold pr-2">Subcategoria: </span>
            {product.subcategory}
          </div>
          <Horizontal />
          <div>
            <span className="font-semibold pr-7">Marca: </span>
            {product.brand}
          </div>
          <div className={product.inStock ? "text-teal-400" : "text-rose-400"}>
            {product.inStock ? "In stock" : "Out stock"}
          </div>

          <Horizontal />
          {isProductInCart ? (
            <>
              <p className="mb-2 text-slate-500 flex items-center gap-1">
                <MdCheckCircle className="text-[#8B7356]" size={20} />
                <span>Producto añadido al carrito</span>
              </p>
              <div className="max-w-[300px]">
                <Button
                  label="Ver Carrito"
                  outline
                  onClick={() => {
                    router.push("/cart");
                  }}
                />
              </div>
            </>
          ) : (
            <>
              <SetColor
                cartProduct={cartProduct}
                images={product.images}
                handleColorSelect={handleColorSelect}
              />
              <Horizontal />
              <SetQuantity
                cartProduct={cartProduct}
                handleQtyIncrease={handleQtyIncrease}
                handleQtyDecrease={handleQtyDecrease}
              />
              <Horizontal />
              <div>
                <span className="font-semibold pr-8">Precio: </span>

                <span className="text-md font-bold">
                  {product.price.toFixed(2)} USD
                </span>
              </div>

              <div className="pt-4 max-w-[300px] mx-auto md:max-w-none md:mx-0">
                <Button
                  label="Añadir al carrito"
                  onClick={() => handleAddToCart()}
                />
              </div>
            </>
          )}
        </div>
      </div>

      <div className="flex justify-center md:justify-start items-start py-6 p-1">
        <div className="w-full  ">
          <div className="md:flex md:justify-between flex-col border-b border-[#DDDBD9]  rounded-lg">
            <div
              className={`flex items-center cursor-pointer w-full mx-auto  md:p-1 border-b border-[#DDDBD9] ${
                isExpandedCaracteristicas
                  ? "font-semibold text-base"
                  : "text-gray-900"
              }`}
              onClick={() => {
                setExpandedCaracteristicas(!isExpandedCaracteristicas);
                setExpandedDimensiones(false);
                setExpandedColores(false);
              }}
            >
              Características del producto
              {isExpandedCaracteristicas && (
                <FaChevronUp className="  ml-5 text-[#8B7356]" />
              )}
              {!isExpandedCaracteristicas && (
                <FaChevronDown className="ml-5 text-[#8B7356]" />
              )}
            </div>

            {isExpandedCaracteristicas && (
              <div className="pt-4 rounded-lg">
                <div className="mb-2 text-sm text-justify">
                  {product.characteristics}
                </div>
              </div>
            )}

            <div
              className={`flex items-center cursor-pointer w-full mx-auto pt-4 md:p-1 border-b border-[#DDDBD9] ${
                isExpandedDimensiones
                  ? "font-semibold text-base"
                  : "text-gray-900"
              }`}
              onClick={() => {
                setExpandedCaracteristicas(false);
                setExpandedDimensiones(!isExpandedDimensiones);
                setExpandedColores(false);
              }}
            >
              Dimensiones
              {isExpandedDimensiones && (
                <FaChevronUp className="ml-5 text-[#8B7356]" />
              )}
              {!isExpandedDimensiones && (
                <FaChevronDown className="ml-5 text-[#8B7356]" />
              )}
            </div>

            {isExpandedDimensiones && (
              <div className="pt-4 rounded-lg">
                <div className="mb-2 text-sm text-justify">
                  {product.measures}
                </div>
              </div>
            )}

            <div
              className={`flex items-center cursor-pointer w-full mx-auto pt-4 md:p-1 rounded-b-lg ${
                isExpandedColores ? "font-semibold text-base" : "text-gray-900"
              }`}
              onClick={() => {
                setExpandedCaracteristicas(false);
                setExpandedDimensiones(false);
                setExpandedColores(!isExpandedColores);
              }}
            >
              Colores disponibles
              {isExpandedColores && (
                <FaChevronUp className="ml-5 text-[#8B7356]" />
              )}
              {!isExpandedColores && (
                <FaChevronDown className="ml-5 text-[#8B7356]" />
              )}
            </div>

            {isExpandedColores && (
              <div className="pt-4 rounded-lg">
                <div className="mb-2 text-sm text-justify">{product.color}</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProductDetails;
