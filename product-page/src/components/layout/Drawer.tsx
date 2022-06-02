import { FC } from "react";

import {
  Drawer,
  DrawerProps,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
} from "@chakra-ui/react";
import { VStack, Text, Box } from "@chakra-ui/layout";
import { CloseIcon } from "@chakra-ui/icons";

const DrawerNav: FC<Partial<DrawerProps>> = ({
  isOpen = false,
  placement,
  onClose = () => {},
  finalFocusRef,
}) => {
  return (
    <Drawer
      isOpen={isOpen}
      placement={placement}
      onClose={onClose}
      finalFocusRef={finalFocusRef}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerBody>
          <VStack spacing="4" w="100%" align="flex-start" py="2">
            <CloseIcon fontWeight="bold" onClick={onClose} cursor="pointer" />
            <Box h="6"></Box>
            <Text>Collections</Text>
            <Text>Men</Text>
            <Text>Women</Text>
            <Text>About</Text>
            <Text>Contact</Text>
          </VStack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default DrawerNav;
