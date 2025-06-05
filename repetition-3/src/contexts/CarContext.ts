import { createContext, type Dispatch } from "react";
import { Car } from "../models/Car";
import type { Action } from "../reducers/CarReducer";

interface ICarContext {
  cars: Car[];
  dispatch: Dispatch<Action>;
}

export const CarContext = createContext<ICarContext>({
  cars: [],
  dispatch: () => {},
});
