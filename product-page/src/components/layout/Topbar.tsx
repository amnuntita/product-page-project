import { useState } from "react";

import { HStack, VStack, Divider, Text, Box, Flex } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import { Avatar } from "@chakra-ui/avatar";
import { HamburgerIcon } from "@chakra-ui/icons";

import Logo from "./Logo";
import CartBox from "../CartBox";
import DrawerNav from "./Drawer";

import { useCart } from "../../context/Cart";

const Topbar = () => {
  const { state } = useCart();
  const { totalAmount } = state;

  const [isCartShowing, setIsCartShowing] = useState(false);
  const [isDrawerOpening, setIsDrawerOpening] = useState(false);

  const renderNavLink = () => {
    return (
      <HStack spacing="8" display={["none", "flex", "flex"]} cursor="pointer">
        <Text>Collections</Text>
        <Text>Men</Text>
        <Text>Women</Text>
        <Text>About</Text>
        <Text>Contact</Text>
      </HStack>
    );
  };

  const renderCartIcon = () => {
    return (
      <Box pos="relative">
        <Image
          src="/images/icon-cart.svg"
          cursor="pointer"
          boxSize="5"
          pos="relative"
          onClick={() => setIsCartShowing((prev) => !prev)}
        />
        {totalAmount > 0 && (
          <Flex
            borderRadius="99px"
            w="4"
            h="3"
            bgColor="orange"
            pos="absolute"
            top="-1"
            right="-1"
            zIndex="1"
            justifyContent="center"
            alignContent="center"
            fontSize="0.5rem"
            color="white"
          >
            {totalAmount}
          </Flex>
        )}
      </Box>
    );
  };

  const renderUserMenu = () => {
    return (
      <>
        <HStack h="100%" alignItems="center" spacing="6" pos="relative">
          {renderCartIcon()}
          <Avatar
            name="Dan Abrahmov"
            src="https://bit.ly/dan-abramov"
            cursor="pointer"
            boxSize={["6", "12"]}
          />
        </HStack>
        {isCartShowing && <CartBox />}
      </>
    );
  };

  function openDrawer() {
    setIsDrawerOpening(true);
  }

  return (
    <>
      <HStack
        w="100%"
        h="10"
        alignItems={["center", "start"]}
        spacing={["4", "20"]}
        px={["4", "0"]}
      >
        <HStack>
          <HamburgerIcon
            fontSize="lg"
            display={["block", "none", "none"]}
            cursor="pointer"
            onClick={openDrawer}
          />
          <Logo />
        </HStack>
        {renderNavLink()}
        <Box flexGrow="1" />
        {renderUserMenu()}
      </HStack>
      <Divider display={["none", "initial"]} />
      {isDrawerOpening && (
        <DrawerNav
          isOpen={isDrawerOpening}
          placement="left"
          onClose={() => setIsDrawerOpening(false)}
        />
      )}
    </>
  );
};

export default Topbar;
