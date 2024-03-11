"use client";

import { CartItem } from "@/lib/types";
import { addToCart } from "../db/actions";

const AddProductToCard = ({ product }: { product: CartItem }) => {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        addToCart(product);
      }}
      className="h-10 bg-blue-500 text-white rounded-md w-full mt-4 cursor-pointer"
    >
      Add to Cart
    </button>
  );
};

export default AddProductToCard;
