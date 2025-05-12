import { IProduct } from "../models/IProduct";
import "./Product.css";

type ProductProps = {
  product: IProduct;
  someFunction: () => void;
};

export const Product = (props: ProductProps) => {
  props.someFunction();

  return (
    <div className="product">
      <h3>{props.product.name}</h3>
      <p>{props.product.price}</p>
      <div className="img-container">
        <img src={props.product.imageUrl} alt={props.product.name} />
      </div>
    </div>
  );
};
