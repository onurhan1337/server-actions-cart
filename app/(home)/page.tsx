import { Suspense } from "react";
import Cart from "../components/cart";
import ProductsList from "../components/products-list";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex items-center justify-between w-full">
        <h1>Products</h1>
        <Cart />
      </div>
      <Suspense fallback={<div>Products are loading...</div>}>
        <ProductsList />
      </Suspense>
    </main>
  );
}
