import CartItem from "./CartItem";
import CartICon from "./icons/CartIcon";
import CrossIcon from "./icons/CrossIcon";

type productDataType = {
  id: string;
  name: string;
  category: string;
  price: number;
  image_url: string;
  rating: number;
  has_discount: boolean;
};

export default function Cart({
  showCart,
  setShowCart,
  cartData,
  setCartData,
  totalAmount,
  setTotalAmount,
}: {
  showCart: boolean;
  setShowCart: (arg01: boolean) => void;
  cartData: productDataType[];
  setCartData: (arg01: productDataType[]) => void;
  totalAmount: number;
  setTotalAmount: (arg01: number) => void;
}) {
  return (
    <>
      <div className="cart-wrapper">
        <div className="cart-container">
          <div className="cart-header">
            <button
              className="button-ghost"
              onClick={() => setShowCart(!showCart)}
            >
              <CrossIcon />
            </button>
            <div className="cart-title-wrapper">
              <span className="cart-title">My Cart</span>
              <CartICon />
            </div>
          </div>
          <hr />

          {cartData.length === 0 && (
            <div className="notification-message">
              <p>No Item has been Selected</p>
            </div>
          )}

          {cartData.map((cartItem) => {
            return (
              <>
                <CartItem
                  cartItemData={cartItem}
                  totalAmount={totalAmount}
                  setTotalAmount={setTotalAmount}
                  cartData={cartData}
                  setCartData={setCartData}
                />
                <hr />
              </>
            );
          })}

          {cartData.length > 0 && (
            <div className="notification-message">
              <p>Hey get Free shipping on order over 250$</p>
            </div>
          )}

          {cartData.length > 0 && (
            <div className="checkout-details">
              <div className="total">
                <p style={{ marginBottom: "0px", color: "#959EAD" }}>
                  Sub total:
                </p>
                <p style={{ marginTop: "0px" }}>${totalAmount}</p>
              </div>
              <button className="checkout-button">Checkout</button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
