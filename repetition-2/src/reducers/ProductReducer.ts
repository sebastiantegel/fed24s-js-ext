import type { Product } from "../models/Product";

export enum ProductActionTypes {
  LOADED,
}

export type ProductAction = {
  type: ProductActionTypes;
  payload: string;
};

export const ProductReducer = (
  products: Product[],
  action: ProductAction
): Product[] => {
  if (action.type === ProductActionTypes.LOADED) {
    return JSON.parse(action.payload) as Product[];
  }

  return products;
};
