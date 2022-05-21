import * as React from "react";
import { ChakraProvider, theme } from "@chakra-ui/react";

import ProductPage from "./pages/product";

import { CartProvider } from "./context/Cart";

export const App = () => (
  <ChakraProvider theme={theme}>
    <CartProvider>
      <ProductPage />
    </CartProvider>
  </ChakraProvider>
);
