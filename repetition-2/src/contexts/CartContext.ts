import { createContext, type Dispatch } from "react";
import type { CartItem } from "../models/CartItem";
import type { CartAction } from "../reducers/CartReducer";

interface ICartContext {
  cart: CartItem[];
  dispatch: Dispatch<CartAction>;
}

export const CartContext = createContext<ICartContext>({
  cart: [],
  dispatch: () => {},
});
