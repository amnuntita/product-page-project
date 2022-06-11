import { useReducer, useCallback } from "react";
import { CartItem, CartState } from "./Cart";

const initialState: CartState = { items: [] };

enum ActionType {
  ADD_TO_CART = "add_to_cart",
  REMOVE_FROM_CART = "remove_from_cart",
}

interface CartAction {
  type: string;
  payload: CartItem;
}

export function addItem(item: CartItem): CartAction {
  return { type: ActionType.ADD_TO_CART, payload: item };
}

export function removeItem(item: CartItem): CartAction {
  return { type: ActionType.REMOVE_FROM_CART, payload: item };
}

export const cartReducer = (
  state: CartState = initialState,
  action: CartAction
): CartState => {
  if (action.type === ActionType.ADD_TO_CART) {
    const items = [...state.items];
    const itemIndex = items.findIndex(
      (i) => i.itemID === action.payload.itemID
    );
    const hasItem = itemIndex !== -1;

    if (hasItem) {
      const updatedItems = { ...items[itemIndex] };
      updatedItems.amount += action.payload.amount ?? 0;
      items[itemIndex] = updatedItems;

      return {
        items: items,
      };
    } else {
      return {
        items: [...state.items, action.payload],
      };
    }
  } else if (action.type === ActionType.REMOVE_FROM_CART) {
    const itemID = action.payload.itemID;
    const items = [...state.items];
    const removeIndex = items.findIndex((i) => i.itemID === itemID);

    items.splice(removeIndex);

    return {
      items: items,
    };
  }
  return state;
};

export function useCartReducer() {
  return useReducer(cartReducer, initialState);
}