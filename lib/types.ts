export interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
}

export interface CartItem extends Omit<Product, "description" | "category"> {
  title: string;
  image: string;
  price: number;
  quantity: number;
}
