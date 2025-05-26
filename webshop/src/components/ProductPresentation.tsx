import type { Product } from "../models/Product";

type ProductPresentationProps = {
  product: Product;
  addToCart: (product: Product) => void;
};

export const ProductPresentation = ({
  product,
  addToCart,
}: ProductPresentationProps) => {
  return (
    <div className="product">
      <h3>{product.name}</h3>
      <div className="img-container">
        <img src={product.imageUrl} alt={product.name} />
      </div>
      <div className="price-container">
        <p>{product.price}</p>
        <button onClick={() => addToCart(product)}>Add to cart</button>
      </div>
    </div>
  );
};
