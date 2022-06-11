import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";

import ProductPage from "./pages/product";
import theme from "./theme";

import { CartProvider } from "./context/Cart";

export const App = () => (
  <ChakraProvider theme={theme}>
    <CartProvider>
      <ProductPage />
    </CartProvider>
  </ChakraProvider>
);
