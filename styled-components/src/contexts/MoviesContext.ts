import { createContext, type Dispatch } from "react";
import type { Product } from "../models/Product";
import type { Action } from "../reducers/ProductReducer";

interface IMovieContext {
  products: Product[];
  dispatch: Dispatch<Action>;
}

export const MoviesContext = createContext<IMovieContext>({
  products: [],
  dispatch: () => {},
});
