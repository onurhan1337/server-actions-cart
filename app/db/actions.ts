"use server";

import { CartItem, Product } from "@/lib/types";
import { sql } from "./postgres";
import { revalidatePath } from "next/cache";

export async function getAllProducts() {
  const products: Product[] = await fetch(
    "https://fakestoreapi.com/products?limit=10"
  )
    .then((res) => res.json())
    .then((data) => data);

  return products;
}

export async function addToCart(product: CartItem) {
  await sql`
    INSERT INTO cart (title, price, image, quantity)
    VALUES (${product.title}, ${product.price}, ${product.image}, ${product.quantity})
  `;

  revalidatePath("/cart");
}

export async function getCartItems() {
  const cartItems: CartItem[] = await sql`SELECT * FROM cart`;

  return cartItems;
}
