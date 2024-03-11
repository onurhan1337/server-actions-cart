"use client";

import { CartItem } from "@/lib/types";
import { addToCart } from "../db/actions";
import { toast } from "sonner";

const AddProductToCard = ({ product }: { product: CartItem }) => {
  const onAddToCart = async () => {
    await addToCart(product);
    await toast.success(`${product.title} added to cart!`, {
      position: "top-center",
    });
  };

  return (
    <button
      onClick={onAddToCart}
      className="h-10 bg-blue-500 text-white rounded-md w-full mt-4 cursor-pointer"
    >
      Add to Cart
    </button>
  );
};

export default AddProductToCard;
