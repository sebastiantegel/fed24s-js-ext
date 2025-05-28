import { useContext } from "react";
import "./SmallCart.css";
import { CartContext } from "../../contexts/CartContext";
import { CartActionTypes } from "../../reducers/CartReducer";

export const SmallCart = () => {
  const { cart, dispatch } = useContext(CartContext);

  return (
    <div className="cart">
      {cart.map((ci) => (
        <div key={ci.product.id} className="cartitem">
          <button
            onClick={() =>
              dispatch({
                type: CartActionTypes.DECREASED,
                payload: ci.product.id.toString(),
              })
            }
          >
            -
          </button>
          <h5>
            {ci.product.name} - {ci.amount}
          </h5>
          <button
            onClick={() =>
              dispatch({
                type: CartActionTypes.INCREASED,
                payload: ci.product.id.toString(),
              })
            }
          >
            +
          </button>
        </div>
      ))}
    </div>
  );
};
