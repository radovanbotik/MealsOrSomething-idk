import React from "react";
import classes from "./MealItemForm.module.css";
import { Input } from "../../UI/Input";
import { useGlobalCart } from "../../../context/CartContext";
import { useRef, useState } from "react";

export const MealItemForm = props => {
  const [error, setError] = useState(false);
  const amountInputRef = useRef();
  const { addItem } = useGlobalCart();
  return (
    <form
      className={classes.form}
      onSubmit={e => {
        e.preventDefault();
        if (Number(amountInputRef.current.value) < 1) {
          setError(true);
          return;
        } else {
          addItem({
            item: amountInputRef.current,
            value: amountInputRef.current.value,
            price: props.price,
          });
          setError(false);
        }
      }}
    >
      <Input
        {...props}
        ref={amountInputRef}
        input={{
          id: "amount",
          type: "number",
          min: 1,
          max: 5,
          step: 1,
          defaultValue: 1,
        }}
        headline="choose the amount"
      />
      <button>add</button>
      {error && <p>please enter valid amount.</p>}
    </form>
  );
};
