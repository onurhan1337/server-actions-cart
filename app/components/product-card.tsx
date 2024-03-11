"use client";

import { useState } from "react";
import Image from "next/image";
import { Product } from "@/lib/types";
import AddProductToCard from "./add-to-cart";

const ProductCard = ({ product }: { product: Product }) => {
  const [quantity, setQuantity] = useState<number>(1);

  const handleQuantityChange = (value: number) => {
    setQuantity(value);
  };

  return (
    <div className="relative border border-gray-200 rounded-md p-4 flex flex-col justify-between text-center bg-white shadow-sm">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none lg:h-60">
        <Image
          src={product.image}
          alt={product.title}
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
          width={150}
          height={150}
        />
      </div>
      <div className="mt-4 flex flex-col justify-between">
        <p className="mt-1 text-sm text-center text-gray-500">
          <span className="text-sm text-center text-gray-700">
            {product.title}
          </span>
          {product.category}
        </p>
      </div>

      <div className="mt-1 flex items-center justify-between">
        <select
          id="quantity"
          name="quantity"
          value={quantity}
          onChange={(e) => handleQuantityChange(Number(e.target.value))}
          className="mt-1 w-[72px] py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
        </select>

        <p className="text-sm font-medium text-gray-900 text-right">
          {product.price}₺
        </p>
      </div>

      <AddProductToCard
        product={{
          id: product.id,
          title: product.title,
          price: product.price,
          image: product.image,
          quantity: quantity,
        }}
      />
    </div>
  );
};

export default ProductCard;
