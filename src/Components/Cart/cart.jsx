import { useContext } from "react";
import { AppContext } from "../../App";
import "./cart.css";

const Cart = () => {
  const { cartItems, incrementQuantity, decrementQuantity, removeFromCart } =
    useContext(AppContext);

  console.log(cartItems);

  const removingItemFromCart = (item) => {
    removeFromCart(item);
  };

  const handleIncrement = (productId) => {
    incrementQuantity(productId);
  };

  const handleDecrement = (productId) => {
    decrementQuantity(productId);
  };

  // const calculateSubTotal = () => {
  //   return cartItems.reduce((total, item) => item.price * item.quantity, 0);
  // };

  const calculateTotalQuantity = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const calculateTotalAmount = () => {
    return cartItems.reduce(
      (total, item) => total + item.quantity * item.price,
      0
    );
  };

  return (
    <div>
      {cartItems && cartItems.length ? (
        <div>
          <h1 className="topic">Your Cart has</h1>
          <div className="title">
            <span className="row">Product</span>
            <span className="row">Brand</span>
            <span className="row">Price</span>
            {/* <span className="row">Description</span> */}
            <span className="row">Discount-Percentage</span>
            <span className="row">Rating</span>
            <span className="row">Quantity Increment/Decrement</span>
            <span className="row">Total Quantity</span>
            <span className="row">Sub-Total</span>
            <span className="row">Remove from Cart</span>
          </div>
          <div className="container">
            {cartItems.map((item, index) => (
              <div key={index} className="data">
                <div id="row1">
                  <img
                    className="images"
                    src={item.thumbnail}
                    alt={item.title}
                  />
                  <span>
                    <h3>{item.title}</h3>
                  </span>
                </div>
                <p id="row1">{item.brand}</p>
                <p id="row1">${item.price}</p>
                {/* <p id="row1" className="description">
                  {item.description}
                </p> */}
                <p id="row1">{item.discountPercentage}%</p>
                <p id="row1">{item.rating}</p>

                <div id="row1">
                  <button onClick={() => handleIncrement(item.id)}>+</button>
                  <button onClick={() => handleDecrement(item.id)}>-</button>
                </div>
                <p id="row1" className="quantity">
                  {item.quantity}
                </p>
                <p id="row1" className="subtotal">
                  <b>$</b>
                  {/* {calculateSubTotal(item.id)} */}
                  {item.price * item.quantity}
                </p>
                <div id="row1">
                  <button onClick={() => removingItemFromCart(item)}>
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <div className="totalquantity">
              <p>
                <b>Total Quantity</b>
              </p>
              <p>{calculateTotalQuantity()}</p>
            </div>
            <div className="totalamount">
              <p>
                <b>Total Amount</b>
              </p>
              <p>
                <b>$</b>
                {calculateTotalAmount()}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="empty-cart">Empty Cart</div>
      )}
    </div>
  );
};
export default Cart;
