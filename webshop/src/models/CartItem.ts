import type { Product } from "./Product";

export type CartItem = {
  product: Product;
  amount: number;
};
