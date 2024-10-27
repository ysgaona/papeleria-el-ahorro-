"use client";

import { useCart } from "@/hooks/useCart";
import Link from "next/link";
import { MdArrowBack } from "react-icons/md";
import Heading from "../components/Heading";
import Button from "../components/Button";
import ItemContent from "./ItemContent";
import { formatPrice } from "@/utils/formatPrice";
import { SafeUser } from "@/types";
import { useRouter } from "next/navigation";
import { FaCartPlus } from "react-icons/fa";

interface CartClientProps {
  currentUser: SafeUser | null;
}

const CartClient: React.FC<CartClientProps>= ({ currentUser }) => {
  const { cartProducts, handleClearCart, cartTotalAmount } = useCart();

  const router = useRouter();

  

  if (!cartProducts || cartProducts.length === 0) {
    return (
      <div className="flex flex-col items-center p-12">
        <FaCartPlus size={50} className="text-[#282828]"/>
        <div className="text-3xl py-4">Tu carrito esta vacío</div>
        <div>
          <Link
            href={"/"}
            className="text-slate-500 flex items-center gap-1 mt-0"
          >
            <MdArrowBack />
            <span className="text-xl">Empieza a comprar</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="p-3 md:pt-8 ">
      <Heading title="Carrito de Compras" center />
      <div className="grid grid-cols-5 text-xs gap-4 pb-2 items-center mt-8 bg-gray-200 p-1 border">
        <div className="text-sm col-span-2 font-semibold p-2 justify-self-center rounded-md">Producto</div>
        <div className="text-sm col-span-1 font-semibold justify-self-center">Precio</div>
        <div className="text-sm col-span-1 font-semibold justify-self-center">Cantidad</div>
        <div className="text-sm col-span-1 font-semibold justify-self-end mr-2">Total</div>
      </div>
      <div className="" >
        {cartProducts.map((item) => (
          <ItemContent key={item.id} item={item} />
        ))}
      </div>
      <div className="border-t-[1.5px] border-slate-200 py-4 flex flex-col md:flex-row justify-between gap-4">
        <div className="w-full md:w-[120px] mx-auto md:mx-0">
          <Button
            label="Vaciar Carrito"
            onClick={() => {
              handleClearCart();
            }}
            small
            outline
          />
        </div>
        <div className="text-sm flex flex-col gap-2 items-center md:items-center">
  <div className="w-full flex justify-between font-semibold">
            <p>Subtotal</p>
            <span>{formatPrice(cartTotalAmount)}</span>
          </div>
          <p className="text-slate-500 text-center">
            Impuestos y envio se calculan al finalizar la compra
          </p>
          <div className="text-center">
          <Button
            label={currentUser ? "Checkout" : "Iniciar sesión para pagar"}
            outline={currentUser ? false : true}
            onClick={() => {
              currentUser ? router.push("/checkout") : router.push("/login");
            }}
          />
          </div>
          
          <Link
            href={"/"}
            className="text-slate-500 flex items-center gap-1 mt-2"
          >
            <MdArrowBack />
            <span>Continuar comprando</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartClient;
