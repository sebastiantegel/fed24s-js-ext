import type { CartItem } from "../models/CartItem";
import type { Product } from "../models/Product";

export enum ActionTypes {
  ADDED,
  REMOVED,
  INCREASED,
  DECREASED,
}

type Action = {
  type: ActionTypes;
  payload: string;
};

export const CartReducer = (cartItems: CartItem[], action: Action) => {
  switch (action.type) {
    case ActionTypes.ADDED: {
      const productToAdd = JSON.parse(action.payload) as Product;
      const foundProduct = cartItems.find(
        (ci) => ci.product.id === productToAdd.id
      );

      if (!foundProduct) {
        return [...cartItems, { product: productToAdd, amount: 1 }];
      } else {
        return cartItems.map((ci) => {
          if (ci.product.id === productToAdd.id) {
            return { ...ci, amount: ci.amount + 1 };
          }
          return ci;
        });
      }
    }

    case ActionTypes.INCREASED: {
      return cartItems.map((ci) => {
        if (ci.product.id === +action.payload) {
          return { ...ci, amount: ci.amount + 1 };
        }
        return ci;
      });
    }

    case ActionTypes.DECREASED: {
      const foundProduct = cartItems.find(
        (ci) => ci.product.id === +action.payload
      );

      if (!foundProduct) {
        return cartItems;
      }

      if (foundProduct.amount > 1) {
        return cartItems.map((ci) => {
          if (ci.product.id === +action.payload) {
            return { ...ci, amount: ci.amount - 1 };
          }
          return ci;
        });
      } else {
        return cartItems.filter((ci) => ci.product.id !== +action.payload);
      }
    }

    case ActionTypes.REMOVED: {
      return cartItems.filter((ci) => ci.product.id !== +action.payload);
    }

    default:
      return cartItems;
  }
};
