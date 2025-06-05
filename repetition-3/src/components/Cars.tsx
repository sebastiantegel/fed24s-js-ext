import { useContext } from "react";
import { CarContext } from "../contexts/CarContext";
import { ActionTypes } from "../reducers/CarReducer";

export const Cars = () => {
  const { cars, dispatch } = useContext(CarContext);

  return (
    <>
      {cars.map((c) => (
        <div key={`${c.brand}_${c.model}`}>
          <h3>
            {c.brand} - {c.model}
          </h3>
          <p>{c.color}</p>
          <p>{c.mileage}</p>
          <button
            // action = { type: "REMOVED", payload: "Volvo" }
            onClick={() =>
              dispatch({ type: ActionTypes.REMOVED, payload: c.brand })
            }
          >
            Ta bort
          </button>
          <button
            onClick={() =>
              dispatch({ type: ActionTypes.DRIVEN, payload: c.brand })
            }
          >
            Drive
          </button>
        </div>
      ))}
    </>
  );
};
