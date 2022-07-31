import { useState } from "react";
import LikeICon from "./icons/LikeIcon";
import StarIcon from "./icons/StarIcon";

type productDataType = {
  id: string;
  name: string;
  category: string;
  price: number;
  image_url: string;
  rating: number;
  has_discount: boolean;
};

export default function ProductCard({
  id,
  name,
  price,
  category,
  image_url,
  rating,
  has_discount,
  cartData,
  setCartData,
  totalAmount,
  setTotalAmount,
}: {
  id: string;
  name: string;
  price: number;
  category: string;
  image_url: string;
  rating: number;
  has_discount: boolean;
  cartData: productDataType[];
  setCartData: (arg01: productDataType[]) => void;
  totalAmount: number;
  setTotalAmount: (arg01: number) => void;
}) {
  const [favorite, setFavorite] = useState<boolean>(false);

  const handleAddToCart = () => {
    // Check if item is already exist in the cart
    const existItemInCart = cartData.find(
      (item: productDataType) => item.id === id
    );

    if (existItemInCart === undefined) {
      setCartData([
        ...cartData,
        { id, name, price, image_url, rating, has_discount, category },
      ]);
      setTotalAmount(totalAmount + price);
    }
  };

  return (
    <div className="card-wrapper" key={id}>
      <div className="card-top-area">
        <div className="sale-tag">{has_discount && <span>sale</span>}</div>
        <button className="button-ghost" onClick={() => setFavorite(!favorite)}>
          <LikeICon favorite={favorite} />
        </button>
      </div>
      <div className="card-img">
        <img src={image_url} alt="product-image" />
      </div>
      <div className="card-info">
        <span>{category}</span>
        <div className="card-title">
          <h3>{name}</h3>
        </div>
        <div className="card-ratings">
          {Array(rating)
            .fill(0)
            .map(() => {
              return <StarIcon />;
            })}
        </div>
        <button
          className="card-button-area button-ghost"
          onClick={handleAddToCart}
        >
          <h4>Add To Cart</h4>
          <h5>${price}</h5>
        </button>
      </div>
    </div>
  );
}
