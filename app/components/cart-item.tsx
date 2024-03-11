"use client";

import Image from "next/image";
import { XIcon } from "lucide-react";

import { CartItem as CartItemType } from "@/lib/types";
import { removeFromCart } from "../db/actions";
import { toast } from "sonner";

const CartItem = ({ item }: { item: CartItemType }) => {
  const onRemove = (item: CartItemType) => {
    removeFromCart(item);
    toast.info(`${item.title} removed from cart`);
  };

  return (
    <div className="flex justify-between items-center bg-white p-2 rounded-lg shadow-md w-full">
      <div className="flex items-center">
        <Image
          src={item.image}
          alt={item.title}
          className="w-8 h-8 object-contain rounded-lg mr-4"
          width={64}
          height={64}
        />
        <div>
          <h2 className="text-xs font-semibold ">{item.title}: </h2>
        </div>
      </div>
      <div className="flex items-center justify-between w-16 h-8 bg-gray-100 rounded-lg p-2">
        <span className="bg-gray-200 rounded-full py-0.5 px-1 text-xs font-semibold">
          {item.quantity}
        </span>
        <button onClick={() => onRemove(item)}>
          <XIcon className="w-4 h-4 text-red-500 cursor-pointer" />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
