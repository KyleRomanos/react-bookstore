import React, { useState, useEffect } from "react";
import "../styles/cart.css";
import useLocalStorage from "../useLocalStorage";
// import useLocalStorage from "../useLocalStorage";

const Cart = ({ cart, setCart, handleChange, }) => {
  const [price, setPrice] = useState(0)


  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    handlePrice();
    id.preventDefault()
  };

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.amount * item.price));
    setPrice(ans);
  };

  useEffect(() => {
    handlePrice();

  });

  return (
    <article>
      {cart.map((item) => (
        <div className="cart_box" key={item.id}>
          <div className="cart_img">
            <img src={item.img} alt="" />
            <p>{item.title}</p>
          </div>
          <div>
            <button className="add-minus-btn" onClick={() => handleChange(item, 1)}>+</button>
            <button className="add-minus-btn" >{item.amount}</button>
            <button className="add-minus-btn"  onClick={() => handleChange(item, -1)}>-</button>
          </div>
          <div>
            <span className="price-remove btn">{item.price}</span>
            <button className="price-remove btn" onClick={() => handleRemove(item.id)}>Remove</button>
          </div>
        </div>
      ))}
      <div className="total">
        <span>Total Price:</span>
        <span>$ {price}</span>
      </div>
      <button className="order-btn">Place Your Order</button>
    </article>
  );
};

export default Cart;