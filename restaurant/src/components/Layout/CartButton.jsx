import React from "react";
import classes from "./CartButton.module.css";
import { useGlobalCart } from "../../context/CartContext";

export const CartButton = () => {
  const { showCart, cartState } = useGlobalCart();

  return (
    <button className={classes.cartbutton} onClick={showCart}>
      <h1>
        <span className="material-symbols-outlined">store</span>
        Your Order
        {cartState.items.length > 0 ? (
          <span className="count">
            {/* {cartState.items.reduce((acc, item) => acc + item.amount, 0)} */}
          </span>
        ) : null}
      </h1>
    </button>
  );
};
