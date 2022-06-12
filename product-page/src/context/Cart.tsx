import React, { FC, useReducer, useCallback, useMemo } from "react";
import { cartReducer, useCartReducer } from "./cartReducer";

export interface CartItem {
  itemID: string;
  itemName: string;
  price: number;
  thumbnail: string;
  amount: number;
}

export interface CartState {
  items: CartItem[];
  totalAmount: number;
}

const initialCartState = { items: [], totalAmount: 0 };
const CartContext = React.createContext<{
  state: CartState;
  dispatch: React.Dispatch<any>;
}>({ state: initialCartState, dispatch: () => {} });
export const useCart = () => React.useContext(CartContext);

export const CartProvider: FC = ({ children }) => {
  const [globalState, dispatch] = useCartReducer();

  return (
    <CartContext.Provider
      value={{
        state: globalState,
        dispatch: dispatch,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
