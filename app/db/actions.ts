"use server";

import { CartItem, Product } from "@/lib/types";
import { sql } from "./postgres";
import { revalidatePath } from "next/cache";

const MAX_PRODUCTS = 10;
const API_URL = "https://fakestoreapi.com/products";

export async function getAllProducts() {
  const products: Product[] = await fetch(`${API_URL}?limit=${MAX_PRODUCTS}`)
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
