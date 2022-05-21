import { useState } from "react";

import { VStack, HStack, Text } from "@chakra-ui/layout";
import { Badge } from "@chakra-ui/react";
import { Image } from "@chakra-ui/image";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";

const ProductDetail = () => {
  const [amount, setAmount] = useState(0);

  const renderTitle = () => {
    return (
      <VStack spacing="1" alignItems="start" mb="2">
        <Text fontSize="lg" fontWeight="bold">
          Sneaker Company
        </Text>
        <Text fontSize="4xl" fontWeight="extrabold">
          Fall Limited Edition Sneaker
        </Text>
      </VStack>
    );
  };

  const renderDescription = () => {
    return (
      <VStack>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et
          justo pharetra, fringilla urna eu, egestas nulla. Donec suscipit nibh
          vitae odio fringilla placerat. Pellentesque habitant morbi tristique
          senectus et netus et malesuada fames ac turpis egestas.{" "}
        </Text>
      </VStack>
    );
  };

  const renderPrice = () => {
    return (
      <VStack spacing="0.5" alignItems="start">
        <HStack spacing="4">
          <Text fontSize="3xl">$125.00</Text>
          <Badge fontSize="lg">50%</Badge>
        </HStack>
        <Text as="s" fontSize="lg">
          $250.00
        </Text>
      </VStack>
    );
  };

  const renderAmountButton = () => {
    return (
      <HStack
        justifyContent="space-between"
        alignContent="center"
        px="2"
        py="4"
        h="100%"
        w="36"
        borderRadius="4px"
        bgColor="blackAlpha.300"
        fontSize="xl"
        fontWeight="bold"
      >
        <MinusIcon
          cursor="pointer"
          onClick={() => {
            if (amount >= 1) {
              setAmount((prev) => prev - 1);
            }
          }}
        />
        <Text>{amount}</Text>
        <AddIcon
          cursor="pointer"
          onClick={() => setAmount((prev) => prev + 1)}
        />
      </HStack>
    );
  };

  const renderAddToCartButton = () => {
    return (
      <HStack
        w="56"
        h="100%"
        bgColor="blackAlpha.200"
        borderRadius="0.5rem"
        justifyContent="center"
      >
        <Image src="/images/icon-cart.svg" />
        <Text fontSize="md">Add To Cart</Text>
      </HStack>
    );
  };

  const renderButtons = () => {
    return (
      <HStack h="12" spacing="6">
        {renderAmountButton()}
        {renderAddToCartButton()}
      </HStack>
    );
  };

  return (
    <VStack
      w="100%"
      h="70vh"
      justifyContent="center"
      alignItems="start"
      spacing="4"
    >
      {renderTitle()}
      {renderDescription()}
      {renderPrice()}
      {renderButtons()}
    </VStack>
  );
};

export default ProductDetail;
