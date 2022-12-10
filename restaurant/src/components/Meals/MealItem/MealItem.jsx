import React from "react";
import classes from "./MealItem.module.css";
import { MealItemForm } from "./MealItemForm";

export const MealItem = props => {
  const addItem = amount => {};
  return (
    <li className={classes.mealitem}>
      <div>
        <h3>{props.name}</h3>
        <div>{props.description}</div>
        <div>{props.price}</div>
      </div>
      <MealItemForm {...props} />
    </li>
  );
};
