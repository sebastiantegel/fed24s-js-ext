import type { Car } from "../models/Car";

export type Action = {
  type: ActionTypes;
  payload: string;
};

export enum ActionTypes {
  REMOVED,
  DRIVEN,
}

export const CarReducer = (cars: Car[], action: Action): Car[] => {
  // action = { type: "REMOVED", payload: "Volvo" };
  // if (action.type === "REMOVED") {
  //   return cars.filter((c) => c.brand !== action.payload);
  // }

  //   if(action.type === "ADDED") {

  //   }

  // if (action.type === "DRIVEN") {
  //   return cars.map((c) => {
  //     if (c.brand === action.payload) {
  //       return { ...c, mileage: c.mileage + 100 };
  //     }
  //     return c;
  //   });
  // }

  // return cars;

  switch (action.type) {
    case ActionTypes.REMOVED: {
      return cars.filter((c) => c.brand !== action.payload);
    }

    case ActionTypes.DRIVEN: {
      return cars.map((c) => {
        if (c.brand === action.payload) {
          return { ...c, mileage: c.mileage + 100 };
        }
        return c;
      });
    }

    default:
      return cars;
  }
};
