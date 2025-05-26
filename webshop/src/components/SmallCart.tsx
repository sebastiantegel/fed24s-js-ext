import type { CartItem } from "../models/CartItem";

type SmallCartProps = {
  cart: CartItem[];
  increaseAmount: (id: number) => void;
  decreaseAmount: (id: number) => void;
};

export const SmallCart = ({
  cart,
  increaseAmount,
  decreaseAmount,
}: SmallCartProps) => {
  return (
    <>
      {cart.map((ci) => (
        <div key={ci.product.id}>
          <button onClick={() => decreaseAmount(ci.product.id)}>-</button>
          <b>{ci.product.name}</b>: {ci.amount}
          <button onClick={() => increaseAmount(ci.product.id)}>+</button>
        </div>
      ))}
    </>
  );
};
