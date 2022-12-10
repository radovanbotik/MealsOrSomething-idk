import { ADD_ITEM, REMOVE_ITEM } from "../utility/actions";

export const cartReducer = (state, action) => {
  if (action.type === ADD_ITEM) {
    const { item, price, value } = action.payload;
    console.log(state);
    return {
      ...state,
      items: [...state.items, item],
      totalAmount: state.totalAmount + price * value,
    };
  }
  //   return state;
  throw new Error(`cant find action :${action}`);
};
