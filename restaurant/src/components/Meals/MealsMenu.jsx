import React from "react";
import classes from "./MealsMenu.module.css";
import { DUMMY_MEALS } from "../../utility/data.js";
import { Grouping } from "../UI/Grouping";
import { MealItem } from "./MealItem/MealItem";

export const MealsMenu = () => {
  const meals = DUMMY_MEALS.map(meal => {
    return <MealItem key={meal.id} {...meal}></MealItem>;
  });
  return (
    <section className={classes.section}>
      <Grouping>
        <ul>{meals}</ul>
      </Grouping>
    </section>
  );
};
