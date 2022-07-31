import CartICon from "./icons/CartIcon";

export default function MainHeader({
  showCart,
  setShowCart,
  cartData,
}: {
  showCart: boolean;
  setShowCart: (arg01: boolean) => void;
  cartData: [];
}) {
  return (
    <header className="header">
      <div className="logo">
        <p>On Air Sell</p>
      </div>
      <ul>
        <li>
          <button
            className="button-ghost"
            onClick={() => setShowCart(!showCart)}
          >
            <CartICon />
            <span className="cart-icon-badge">{cartData.length}</span>
          </button>
        </li>
      </ul>
    </header>
  );
}
