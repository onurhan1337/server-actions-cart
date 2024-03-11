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
  try {
    const existingProducts =
      await sql`SELECT * FROM cart WHERE title = ${product.title}`;

    if (existingProducts.length > 0) {
      await sql`
        UPDATE cart
        SET quantity = quantity + 1
        WHERE title = ${product.title}
      `;
    } else {
      await sql`
        INSERT INTO cart (title, price, image, quantity)
        VALUES (${product.title}, ${product.price}, ${product.image}, ${product.quantity})
      `;
    }

    revalidatePath("/cart");
  } catch (error) {
    console.error("Failed to add product to cart:", error);
  }
}

export async function removeFromCart(product: CartItem) {
  try {
    const existingProducts =
      await sql`SELECT * FROM cart WHERE title = ${product.title}`;

    if (existingProducts.length > 0) {
      if (existingProducts[0].quantity === 1) {
        await sql`
          DELETE FROM cart
          WHERE title = ${product.title}
        `;
      } else {
        await sql`
          UPDATE cart
          SET quantity = quantity - 1
          WHERE title = ${product.title}
        `;
      }
    }

    revalidatePath("/cart");
  } catch (error) {
    console.error("Failed to remove product from cart:", error);
  }
}

export async function getCartItems() {
  const cartItems: CartItem[] = await sql`SELECT * FROM cart`;

  return cartItems;
}
