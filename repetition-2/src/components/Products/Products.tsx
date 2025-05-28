import { useContext } from "react";
import { ProductContext } from "../../contexts/ProductContext";
import "./Products.css";
import { CartContext } from "../../contexts/CartContext";
import { CartActionTypes } from "../../reducers/CartReducer";

export const Products = () => {
  const { products } = useContext(ProductContext);
  const { dispatch } = useContext(CartContext);

  return (
    <div className="products">
      {products.map((p) => (
        <div key={p.id} className="product">
          <h3>{p.name}</h3>
          <div className="img-container">
            <img src={p.imageUrl} alt={p.name} />
          </div>
          <p>{p.price}</p>
          <button
            onClick={() =>
              dispatch({
                type: CartActionTypes.ADDED,
                payload: JSON.stringify(p),
              })
            }
          >
            Köp
          </button>
        </div>
      ))}
    </div>
  );
};
