import { useEffect, useReducer } from "react";
import "./App.css";
import { CartContext } from "./contexts/CartContext";
import { ProductContext } from "./contexts/ProductContext";
import { ProductActionTypes, ProductReducer } from "./reducers/ProductReducer";
import { CartReducer } from "./reducers/CartReducer";
import type { Product } from "./models/Product";
import { Products } from "./components/Products/Products";
import { SmallCart } from "./components/SmallCart/SmallCart";

function App() {
  // Använda en reducer (ProductReducer)
  const [products, productDispatch] = useReducer(ProductReducer, []);

  // Använda en reducer (CartReducer)
  const [cart, cartDispatch] = useReducer(CartReducer, []);

  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch(
        "https://medieinstitutet-wie-products.azurewebsites.net/api/products"
      );
      const products: Product[] = await response.json();

      productDispatch({
        type: ProductActionTypes.LOADED,
        payload: JSON.stringify(products),
      });
    };

    if (products.length > 0) return;

    getProducts();
  });

  return (
    <ProductContext.Provider value={{ products, dispatch: productDispatch }}>
      <CartContext.Provider value={{ cart, dispatch: cartDispatch }}>
        <SmallCart />
        <Products />
      </CartContext.Provider>
    </ProductContext.Provider>
  );
}

export default App;
