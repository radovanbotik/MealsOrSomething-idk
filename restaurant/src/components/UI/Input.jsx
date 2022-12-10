import React from "react";
import classes from "./Input.module.css";
import { useGlobalCart } from "../../context/CartContext";

export const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.control}>
      <label htmlFor={props.id}>{props.headline}</label>
      <input type="number" id={props.id} name={props.name} ref={ref} min="1" />
    </div>
  );
});
