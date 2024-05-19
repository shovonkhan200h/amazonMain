import React, { useContext, useEffect, useState } from "react";
import { cartContext } from "../../App";

const Cart = ({ showCart, setShowCart }) => {
  const itemFromCart = JSON.parse(localStorage.getItem("cart")) || [];
  const [cart, setCart] = useState(itemFromCart);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const handleCountChange = (itemId, changeType) => {
    const updatedCart = cart
      .map((item) => {
        if (item.product.id === itemId) {
          if (changeType === "increase") {
            return { ...item, quantity: item.quantity + 1 };
          } else if (changeType === "decrease" && item.quantity > 0) {
            return { ...item, quantity: item.quantity - 1 };
          }
        }
        return item;
      })
      .filter((item) => item.quantity > 0); // Remove items with quantity 0 or less

    setCart(updatedCart);
  };

  const DELIVERY_FEE_LOW = 0;
  const DELIVERY_THRESHOLD = 5.99;
  const subTotal = cart.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );
  const tax = subTotal * 0.1;
  const totalbefore = subTotal + tax;
  const deliveryFee =
    totalbefore < DELIVERY_THRESHOLD ? DELIVERY_FEE_LOW : DELIVERY_THRESHOLD;
  const total = totalbefore + deliveryFee;

  return (
    <div className="w-60 h-screen top-[-11px] left-[-165px] bg-white absolute z-50 text-black">
      <div>
        {cart.map((item) => {
          return (
            <div className="flex items-center justify-center p-5 gap-2  border">
              <div>
                <img src={item.product.img} className="w-[60px]" />
              </div>

              <div>
                <h2 className="text-sm">
                  {item.product.name.substring(0, 10)}
                </h2>
                <p>${item.product.price}</p>
              </div>

              <div className="flex flex-col items-center justify-center border p-2">
                <button
                  onClick={() => handleCountChange(item.product.id, "increase")}
                >
                  +
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => handleCountChange(item.product.id, "decrease")}
                >
                  -
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <span
        className="text-white top-0  right-[250px] absolute rounded bg-gray-700 hover:bg-gray-900 p-2"
        onClick={() => setShowCart(false)}
      >
        X
      </span>

      <div className="p-5 text-sm">
        <p className="flex justify-between">
          <span>SubTotal: {}</span>
          <span>${subTotal.toFixed(2)}</span>
        </p>

        <p className="flex justify-between">
          <span>Delivery Fee:</span>
          <span>${deliveryFee.toFixed(2)}</span>
        </p>

        <p className="flex justify-between">
          <span>Tax:</span>
          <span>${tax.toFixed(2)}</span>
        </p>

        <p className="flex justify-between">
          <span>Total:</span>
          <span>${total.toFixed(2)}</span>
        </p>
      </div>
    </div>
  );
};

export default Cart;
