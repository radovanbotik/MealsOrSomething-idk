import React from "react";
import classes from "./Grouping.module.css";

export const Grouping = props => {
  return <div className={classes.group}>{props.children}</div>;
};
