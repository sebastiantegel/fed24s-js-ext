import { RouterProvider } from "react-router";
import "./App.css";
import { router } from "./Router";
import { useEffect, useReducer } from "react";
import { getProducts } from "./service/productService";
import { ActionTypes, ProductReducer } from "./reducers/ProductReducer";
import { MoviesContext } from "./contexts/MoviesContext";

function App() {
  const [products, dispatch] = useReducer(ProductReducer, []);

  useEffect(() => {
    if (products.length > 0) return;

    const getData = async () => {
      const products = await getProducts();

      dispatch({
        type: ActionTypes.LOADED,
        payload: JSON.stringify(products),
      });
    };

    getData();
  });

  return (
    <MoviesContext value={{ products, dispatch }}>
      <RouterProvider router={router}></RouterProvider>
    </MoviesContext>
  );
}

export default App;
