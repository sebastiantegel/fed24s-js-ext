import { CartItem } from "../models/CartItem";
import type { Product } from "../models/Product";

export enum CartActionTypes {
  ADDED,
  REMOVED,
  INCREASED,
  DECREASED,
}

export type CartAction = {
  type: CartActionTypes;
  payload: string;
};

export const CartReducer = (
  cart: CartItem[],
  action: CartAction
): CartItem[] => {
  switch (action.type) {
    case CartActionTypes.ADDED: {
      const clickedProduct: Product = JSON.parse(action.payload);

      const foundProduct = cart.find(
        (ci) => ci.product.id === clickedProduct.id
      );

      if (!foundProduct) {
        return [...cart, new CartItem(clickedProduct, 1)];
      } else {
        return cart.map((ci) => {
          if (ci.product.id === clickedProduct.id)
            return { ...ci, amount: ci.amount + 1 };
          return ci;
        });
      }
    }

    case CartActionTypes.REMOVED: {
      return cart.filter((ci) => ci.product.id !== +action.payload);
    }

    case CartActionTypes.INCREASED: {
      return cart.map((ci) => {
        if (ci.product.id === +action.payload)
          return { ...ci, amount: ci.amount + 1 };
        return ci;
      });
    }

    case CartActionTypes.DECREASED: {
      const cartItem = cart.find((ci) => ci.product.id === +action.payload);

      if (!cartItem) return cart;

      if (cartItem.amount > 1) {
        return cart.map((ci) => {
          if (ci.product.id === +action.payload)
            return { ...ci, amount: ci.amount - 1 };
          return ci;
        });
      } else {
        return cart.filter((ci) => ci.product.id !== +action.payload);
      }
    }

    default:
      return cart;
  }
};
