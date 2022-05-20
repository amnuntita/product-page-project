import { HStack, Divider, Text, Box } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import { Avatar } from "@chakra-ui/avatar";

import Logo from "./Logo";

const Topbar = () => {
  const renderNavLink = () => {
    return (
      <HStack spacing="8">
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
      <HStack h="100%" alignItems="center" spacing="6">
        <Image src="/images/icon-cart.svg" />
        <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
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
