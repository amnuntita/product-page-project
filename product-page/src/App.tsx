import * as React from "react";
import { ChakraProvider, theme } from "@chakra-ui/react";

import ProductPage from "./pages/product";

export const App = () => (
  <ChakraProvider theme={theme}>
    <ProductPage />
  </ChakraProvider>
);
