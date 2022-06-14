import { useState } from "react";

import { HStack, VStack, Divider, Text, Box, Flex } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import { Avatar } from "@chakra-ui/avatar";
import { HamburgerIcon, Icon } from "@chakra-ui/icons";
import { ReactComponent as CartIcon } from "../../svg/icon-cart.svg";

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
    const text = ["Collections", "Men", "Women", "About", "Contact"];

    return (
      <HStack
        spacing={["4", "4", "4", "8"]}
        display={["none", "flex", "flex"]}
        cursor="pointer"
        alignContent="start"
        h="100%"
      >
        {text.map((t) => (
          <Box
            h="100%"
            _hover={{
              borderBottomColor: "orange",
              borderBottomWidth: "thick",
            }}
          >
            <Text>{t}</Text>
          </Box>
        ))}
      </HStack>
    );
  };

  const renderCartIcon = () => {
    return (
      <Box pos="relative">
        <CartIcon
          onClick={() => setIsCartShowing((prev) => !prev)}
          style={{ cursor: "pointer" }}
          fill="gray"
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
      <Box>
        <HStack h="100%" alignItems="center" spacing="6" margin="0">
          {renderCartIcon()}
          <Avatar
            name="Dan Abrahmov"
            src="https://bit.ly/dan-abramov"
            cursor="pointer"
            boxSize={["6", "8", "8", "10"]}
          />
        </HStack>
        {isCartShowing && <CartBox />}
      </Box>
    );
  };

  function openDrawer() {
    setIsDrawerOpening(true);
  }

  return (
    <>
      <HStack
        w="100%"
        h="16"
        alignItems={["center", "start"]}
        spacing={["4", "10", "10", "20"]}
        px={["4", "0"]}
        borderBottomColor="gray.200"
        borderBottomWidth="thin"
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
        <HStack
          w="100%"
          justifyContent={["flex-end", "space-between"]}
          alignItems="start"
          h="100%"
        >
          {renderNavLink()}
          {renderUserMenu()}
        </HStack>
      </HStack>

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
