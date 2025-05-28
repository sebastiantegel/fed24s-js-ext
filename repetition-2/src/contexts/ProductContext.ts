import { createContext, type Dispatch } from "react";
import type { Product } from "../models/Product";
import type { ProductAction } from "../reducers/ProductReducer";

interface IProductContext {
  products: Product[];
  dispatch: Dispatch<ProductAction>;
}

export const ProductContext = createContext<IProductContext>({
  products: [],
  dispatch: () => {},
});
