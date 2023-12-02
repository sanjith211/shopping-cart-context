import { useContext } from "react";
import cart_icon from "../../Assets/Icon/shopping-cart.png";
import "./header.css";
import { AppContext } from "../../App";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const { cartItems } = useContext(AppContext);
  const length = cartItems.length;
  const navigateToCart = () => {
    navigate("/cart");
  };

  const navigateToHome = () => {
    navigate("/");
  };

  return (
    <div className=" header-container">
      <div
        className="left"
        onClick={() => {
          navigateToHome();
        }}
      >
        My Mobiles
      </div>
      <div
        className="right"
        onClick={() => {
          navigateToCart();
        }}
      >
        <img className="icon" src={cart_icon} alt="Cart-Icon" />
        <span className="cart-count">{length}</span>
      </div>
    </div>
  );
};

export default Header;
