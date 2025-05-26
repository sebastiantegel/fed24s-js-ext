import { useReducer } from "react";
import { ActionTypes, CartReducer } from "../reducers/CartReducer";

export const Cart = () => {
  const [cart, dispatch] = useReducer(
    CartReducer,
    JSON.parse(localStorage.getItem("cart") || "[]")
  );

  localStorage.setItem("cart", JSON.stringify(cart));

  return (
    <>
      {cart.map((ci) => (
        <div key={ci.product.id}>
          <h2>{ci.product.name}</h2>
          <div>
            <img src={ci.product.imageUrl} alt={ci.product.name} />
          </div>
          <div>
            <button
              onClick={() => {
                dispatch({
                  type: ActionTypes.DECREASED,
                  payload: ci.product.id.toString(),
                });
              }}
            >
              -
            </button>
            <span>{ci.amount}</span>
            <button
              onClick={() => {
                dispatch({
                  type: ActionTypes.INCREASED,
                  payload: ci.product.id.toString(),
                });
              }}
            >
              +
            </button>
          </div>
        </div>
      ))}
    </>
  );
};
