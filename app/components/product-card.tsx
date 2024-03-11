import Image from "next/image";
import { Product } from "@/lib/types";
import AddProductToCard from "./add-to-cart";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="relative border border-gray-200 rounded-md p-4 flex flex-col justify-between text-center bg-white shadow-sm">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none lg:h-60">
        <Image
          src={product.image}
          alt={product.title}
          className="h-full w-full object-contain object-center lg:h-full lg:w-full"
          width={150}
          height={150}
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">{product.title}</h3>
          <p className="mt-1 text-sm text-gray-500">{product.category}</p>
        </div>
        <p className="text-sm font-medium text-gray-900">{product.price}</p>
      </div>
      <AddProductToCard
        product={{
          id: product.id,
          title: product.title,
          price: product.price,
          image: product.image,
          quantity: 1,
        }}
      />
    </div>
  );
};

export default ProductCard;
