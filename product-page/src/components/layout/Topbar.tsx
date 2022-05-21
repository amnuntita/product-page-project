import { useState } from "react";

import { HStack, VStack, Divider, Text, Box } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import { Avatar } from "@chakra-ui/avatar";

import Logo from "./Logo";
import CartBox from "../CartBox";

import { useCart } from "../../context/Cart";

const Topbar = () => {
  const [isCartShowing, setIsCartShowing] = useState(false);

  const renderNavLink = () => {
    return (
      <HStack spacing="8" display={["none", "flex", "flex"]}>
        <Text>Collections</Text>
        <Text>Men</Text>
        <Text>Women</Text>
        <Text>About</Text>
        <Text>Contact</Text>
      </HStack>
    );
  };

  const renderUserMenu = () => {
    return (
      <HStack h="100%" alignItems="center" spacing="6" pos="relative">
        <Image
          src="/images/icon-cart.svg"
          cursor="pointer"
          onClick={() => setIsCartShowing((prev) => !prev)}
        />
        <Avatar
          name="Dan Abrahmov"
          src="https://bit.ly/dan-abramov"
          cursor="pointer"
        />
        {isCartShowing && <CartBox />}
      </HStack>
    );
  };

  return (
    <>
      <HStack w="100%" h="10" alignItems="start" spacing="20">
        <Logo />
        {renderNavLink()}
        <Box flexGrow="1" />
        {renderUserMenu()}
      </HStack>
      <Divider />
    </>
  );
};

export default Topbar;
