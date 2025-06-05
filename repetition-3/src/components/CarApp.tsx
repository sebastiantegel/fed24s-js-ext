import { useReducer } from "react";
import { Car } from "../models/Car";
import { CarContext } from "../contexts/CarContext";
import { Cars } from "./Cars";
import { CarReducer } from "../reducers/CarReducer";

export const CarApp = () => {
  const [cars, dispatch] = useReducer(CarReducer, [
    new Car("Volvo", "V90", "Beige"),
    new Car("Saab", "95", "Silver"),
    new Car("Nissan", "Micra", "Röd"),
  ]);

  return (
    <CarContext.Provider value={{ cars, dispatch }}>
      <Cars />
    </CarContext.Provider>
  );
};
