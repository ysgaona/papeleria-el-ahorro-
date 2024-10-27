"use client";

import { useCart } from "@/hooks/useCart";
import { useRouter } from "next/navigation";


import { AiOutlineShopping } from "react-icons/ai";

const CartCount = () => {
  const { cartTotalQty } = useCart();
  const router = useRouter();
  return (
    <div
      className="relative cursor-pointer"
      onClick={() => router.push("/cart")}
    >
      <div className="text-3xl">
      <AiOutlineShopping color="#343a40" style={{ fontSize: "28px", marginRight:"8px" }} />
      </div>
      <span
        className="absolute 
      top-[-6px] 
      right-[-6px]
      text-white 
      h-5 
      w-5 
      rounded-full 
      flex 
      items-center 
      justify-center
      text-xs
      mr-1.5
      "
      style={{ backgroundColor: "#FA4548" }}
      >

        {cartTotalQty}
      </span>
    </div>
  );
};

export default CartCount;
