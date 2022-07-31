import { useState } from "react";
import DecrementIcon from "./icons/DecrementIcon";
import DeleteIcon from "./icons/DeleteIcon";
import Increment from "./icons/IncrementIcon";

export default function CartItem({
  cartItemData,
  totalAmount,
  setTotalAmount,
  cartData,
  setCartData,
}: {
  cartItemData: {
    id: string;
    name: string;
    price: number;
    category: string;
    image_url: string;
    rating: number;
    has_discount: boolean;
  };
  totalAmount: number;
  setTotalAmount: (arg01: number) => void;
  cartData: [];
  setCartData: (arg01: {}) => void;
}) {
  const [quantity, setQuantity] = useState<number>(1);

  const { id, name, price, category, image_url, rating, has_discount } =
    cartItemData;

  const handleDelete = () => {
    const updatedCartData = cartData.filter((item: any) => item.id !== id);
    setCartData(updatedCartData);
    if (quantity === 1) {
      setTotalAmount(totalAmount - price);
    } else {
      const totalPrice = price * quantity;
      setTotalAmount(totalAmount - totalPrice);
    }
  };

  return (
    <div className="cart-item-wrapper">
      <div className="cart-image">
        <img src={image_url} alt={name} />
      </div>
      <div className="cart-info">
        <div className="cart-title">
          <h3>{name}</h3>
          <h5>
            Size: <span>Medium</span>
          </h5>
          <h4>
            ${price} {has_discount && <span>$100</span>}
          </h4>
        </div>
      </div>
      <div className="cart-action-area">
        <div className="trash-icon">
          <button className="button-ghost" onClick={handleDelete}>
            <DeleteIcon />
          </button>
        </div>
        <div className="increment-button">
          <button
            className="button-ghost"
            onClick={() => {
              if (quantity === 0) {
                return;
              }
              setQuantity(quantity - 1);
              setTotalAmount(totalAmount - price);
            }}
          >
            <DecrementIcon />
          </button>

          <p>{quantity}</p>
          <button
            className="button-ghost"
            onClick={() => {
              setQuantity(quantity + 1);
              setTotalAmount(totalAmount + price);
            }}
          >
            <Increment />
          </button>
        </div>
      </div>
    </div>
  );
}
