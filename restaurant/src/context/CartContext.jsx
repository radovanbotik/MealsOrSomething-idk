import React from "react";
import { useContext } from "react";
import { useState, useReducer } from "react";
import { cartReducer } from "../reducer/cartReducer";
import { ADD_ITEM, REMOVE_ITEM } from "../utility/actions";

const cartProvider = React.createContext();

export const CartContext = ({ children }) => {
  const initialState = {
    items: [],
    totalAmount: 0,
  };
  const [cartState, dispatch] = useReducer(cartReducer, initialState);

  const [isOpen, setIsOpen] = useState(false);

  const showCart = e => {
    setIsOpen(true);
  };
  const hideCart = e => {
    setIsOpen(false);
  };

  const addItem = item => {
    dispatch({
      type: ADD_ITEM,
      payload: item,
    });
  };
  const removeItem = id => {
    dispatch({ type: REMOVE_ITEM, payload: id });
  };

  return (
    <cartProvider.Provider
      value={{
        isOpen,
        setIsOpen,
        showCart,
        hideCart,
        addItem,
        removeItem,
        cartState,
      }}
    >
      {children}
    </cartProvider.Provider>
  );
};
export const useGlobalCart = () => {
  return useContext(cartProvider);
};
