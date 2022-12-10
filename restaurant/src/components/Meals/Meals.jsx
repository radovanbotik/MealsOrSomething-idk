import React from "react";
import { MealsMenu } from "./MealsMenu";
import { MealsSummary } from "./MealsSummary";

export const Meals = () => {
  return (
    <>
      <MealsSummary />
      <MealsMenu />
    </>
  );
};
