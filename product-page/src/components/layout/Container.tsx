import { FC } from "react";
import { VStack } from "@chakra-ui/layout";

import Topbar from "./Topbar";

const Container: FC = ({ children }) => {
  return (
    <VStack w="100%" minH="100vh" px={["0", "40"]} py={["4", "10"]} spacing="8">
      <Topbar />
      {children}
    </VStack>
  );
};

export default Container;
