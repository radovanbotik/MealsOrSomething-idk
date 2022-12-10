import React from "react";
import classes from "./Navbar.module.css";
import { CartButton } from "./CartButton";

export const Navbar = () => {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.logo}>
          <h5>traditional cuisine</h5>
          <h1>
            <span className="material-symbols-outlined">restaurant_menu</span>
            papaj.sk
          </h1>
          <h6>Est. 2022</h6>
        </div>
        <CartButton />
      </header>
    </>
  );
};
