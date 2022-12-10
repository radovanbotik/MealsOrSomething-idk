import React from "react";
import classes from "./Modal.module.css";
import ReactDOM from "react-dom";
import { useGlobalCart } from "../../context/CartContext";

export const Modal = props => {
  const portalLocation = document.querySelector("#overlay");
  return (
    <>
      {ReactDOM.createPortal(<ModalBackdrop />, portalLocation)}
      {ReactDOM.createPortal(
        <ModalBody>{props.children}</ModalBody>,
        portalLocation
      )}
    </>
  );
};

const ModalBackdrop = props => {
  const { hideCart } = useGlobalCart();
  return <div className={classes.backdrop} onClick={hideCart}></div>;
};
const ModalBody = props => {
  return (
    <div className={classes.body}>
      <div className={classes.bodycontrol}>{props.children}</div>
    </div>
  );
};
