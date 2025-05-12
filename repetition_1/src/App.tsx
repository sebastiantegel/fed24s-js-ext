import { useEffect, useState } from "react";
import "./App.css";
import { IProduct } from "./models/IProduct";
import { Product } from "./components/Product";
import { Spinner } from "./components/Spinner";
import axios from "axios";

function App() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get<IProduct[]>(
        "https://medieinstitutet-wie-products.azurewebsites.net/api/products"
      );

      setIsLoading(false);
      console.log(response.data);

      setProducts(response.data);
    };

    getData();
  }, []);

  const myAwesomeFunction = () => {
    console.log("Whohooo!");
  };

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="products">
          {products.map((p) => (
            <Product key={p.id} product={p} someFunction={myAwesomeFunction} />
          ))}
        </div>
      )}
    </>
  );
}

export default App;
