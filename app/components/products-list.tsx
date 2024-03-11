import { Suspense } from "react";
import { getAllProducts } from "../db/actions";
import { Product } from "@/lib/types";
import ProductCard from "./product-card";

const ProductsList = async () => {
  const products: Product[] = await getAllProducts();

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </Suspense>
  );
};

export default ProductsList;
