import { FC } from "react";

import { HStack } from "@chakra-ui/layout";
import { Button, ButtonProps } from "@chakra-ui/button";

const AppButton: FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <Button onClick={props.onClick} h={props.height ?? "100%"} minH="8">
      <HStack spacing="2" w="100%" justifyContent="center" fontSize="sm">
        {children}
      </HStack>
    </Button>
  );
};

export default AppButton;
