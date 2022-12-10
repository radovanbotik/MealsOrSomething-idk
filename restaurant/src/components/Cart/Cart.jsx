import React from "react";
import { Modal } from "../UI/Modal";
import classes from "./Cart.module.css";
import { useGlobalCart } from "../../context/CartContext";

export const Cart = props => {
  const { hideCart } = useGlobalCart();
  const cartItems = (
    <ul className="cartitems">
      {[
        {
          id: "m1",
          name: "Sushi",
          amount: 2,
          price: 22.99,
        },
      ].map(entry => {
        return <div key={entry.id}>{entry.name}</div>;
      })}
    </ul>
  );
  return (
    <Modal>
      {cartItems}
      <div className={classes.totals}>
        <span>Total amount:</span>
        <span>35eur</span>
      </div>
      <div className={classes.buttons}>
        <button onClick={hideCart}>close</button>
        <button>order</button>
      </div>
    </Modal>
  );
};
