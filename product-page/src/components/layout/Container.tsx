import { FC } from "react";
import { VStack } from "@chakra-ui/layout";

import Topbar from "./Topbar";

const Container: FC = ({ children }) => {
  return (
    <VStack
      w="100%"
      minH="100vh"
      px={["0", "15vw"]}
      py={["4", "5vh"]}
      spacing="8"
    >
      <Topbar />
      {children}
    </VStack>
  );
};

export default Container;
