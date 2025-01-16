import { createContext, useReducer } from "react";

const CartContext = createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
});

function cartReducer(state, action) {
  if (action.type === 'ADD_ITEM') {
    // add item to state
    const existingCartIndex = state.items.findIndex((item) => item.id === action.item.id);

    const updatedItems = [...state.items];

    if (existingCartIndex > -1) {
      const existingItem = state.items[existingCartIndex];
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity + 1
      };
      updatedItems[existingCartIndex] = updatedItem;
    } else {
      updatedItems.push({...action.item, quantity: 1});
    }

    return { ...state, items: updatedItems };
  }

  if (action.type === 'REMOVE_ITEM') {
    // remove an item from the state
  }
}

export function CartContextProvider({children}) {

  useReducer(cartReducer, {items: []});

  return (
    <CartContext>{children}</CartContext>
  )
}