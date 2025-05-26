import { useEffect, useReducer, useState } from "react";
import type { Product } from "../models/Product";
import axios from "axios";
import { ProductPresentation } from "../components/ProductPresentation";
import "./../styles/Product.css";
import { ActionTypes, CartReducer } from "../reducers/CartReducer";
import { SmallCart } from "../components/SmallCart";

export const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState("");
  const [hasFetched, setHasFetched] = useState(false);
  const [cart, dispatch] = useReducer(CartReducer, []);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get<Product[]>(
          "https://medieinstitutet-wie-products.azurewebsites.net/api/products"
        );

        if (response.status !== 200) {
          setError("Could not load products");
        }

        setProducts(response.data);
      } catch (error) {
        setError((error as Error).message);
      } finally {
        setHasFetched(true);
      }
    };

    if (!hasFetched) getProducts();
  });

  const addToCart = (productToAdd: Product) => {
    dispatch({
      type: ActionTypes.ADDED,
      payload: JSON.stringify(productToAdd),
    });
  };

  const increaseAmount = (productId: number) => {
    dispatch({
      type: ActionTypes.INCREASED,
      payload: productId.toString(),
    });
  };

  const decreaseAmount = (productId: number) => {
    dispatch({
      type: ActionTypes.DECREASED,
      payload: productId.toString(),
    });
  };

  if (error !== "") {
    return <h2>{error}</h2>;
  }

  localStorage.setItem("cart", JSON.stringify(cart));

  return (
    <>
      <div>
        <SmallCart
          cart={cart}
          increaseAmount={increaseAmount}
          decreaseAmount={decreaseAmount}
        />
      </div>
      <div className="products">
        {products.map((p) => (
          <ProductPresentation
            key={p.id}
            product={p}
            addToCart={addToCart}
          ></ProductPresentation>
        ))}
      </div>
    </>
  );
};
