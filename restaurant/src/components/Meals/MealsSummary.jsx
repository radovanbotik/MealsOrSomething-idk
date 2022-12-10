import React from "react";
import classes from "./MealsSummary.module.css";

export const MealsSummary = () => {
  return (
    <section className={classes.section}>
      <h2>Delicious food one click away</h2>
      <p>Pick your favourite from our broad selection of traditional meals.</p>
      <p>
        All the dishes are prepared with love, high-quality ingredients and
        delivered to you sizzling hot!
      </p>
    </section>
  );
};
