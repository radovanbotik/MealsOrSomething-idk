import React from "react";
import classes from "./Home.module.css";
import delivery from "../../assets/delivery.jpg";
import { Meals } from "../Meals/Meals";
import { Cart } from "../Cart/Cart";
import { useGlobalCart } from "../../context/CartContext";

export const Home = () => {
  const { isOpen, setIsOpen } = useGlobalCart();
  return (
    <section className={classes.section}>
      <div className={classes.imagecontrol}>
        <img src={delivery} alt="delivery" className={classes.heroimage} />
      </div>
      <Meals />
      {isOpen && <Cart />}
    </section>
  );
};
