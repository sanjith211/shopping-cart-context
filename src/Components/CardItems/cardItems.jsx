import { useContext, useState } from "react";
import "./cardItems.css";
import { AppContext } from "../../App";

const CardItems = (props) => {
  const { product, inCart } = props;
  const [addedToCart, setAddedToCart] = useState(false);

  //   console.log(product.thumbnail);

  const { cartItems, addToCart, removeFromCart } = useContext(AppContext);

  const addingItemToCart = (item) => {
    addToCart({ ...item, quantity: 1 });
  };

  const removingItemFromCart = (item) => {
    removeFromCart(item);
  };

  return (
    <div className="card-items">
      {product.thumbnail && (
        <div className="image-container">
          <img
            className="image"
            src={product.thumbnail}
            alt={product.thumbnail}
          />
        </div>
      )}
      <h3 className="title">Name : {product.title}</h3>
      <h2 className="price">Price : {product.price}</h2>
      {product.description && (
        <div className="description">
          <b>Description :</b> {product.description}
        </div>
      )}
      <div className="button-container">
        {cartItems.some((item) => item.id === product.id) ? (
          //   <div
          //     className="remove-from-cart"
          //     onClick={() => removingItemFromCart(product)}
          //   >
          //     Remove from cart
          //   </div>
          <div className="item-added">Item added to cart</div>
        ) : (
          <div
            className="add-to-cart"
            onClick={() => addingItemToCart(product)}
          >
            Add to cart
          </div>
        )}
      </div>
    </div>
  );
};

export default CardItems;
