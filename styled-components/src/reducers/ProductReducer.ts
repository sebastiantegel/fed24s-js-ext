import type { Product } from "../models/Product";

export enum ActionTypes {
  LOADED,
  SELECTED,
}

export type Action = {
  type: ActionTypes;
  payload: string;
};

export const ProductReducer = (products: Product[], action: Action) => {
  switch (action.type) {
    case ActionTypes.LOADED: {
      return JSON.parse(action.payload) as Product[];
    }

    case ActionTypes.SELECTED: {
      return products.map((p) => {
        if (p.id === +action.payload) {
          return { ...p, selected: !p.selected };
        }
        return p;
      });
    }

    default:
      return products;
  }
};
