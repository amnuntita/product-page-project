import { useState, FC } from "react";

import { VStack, HStack, Text } from "@chakra-ui/layout";
import { Badge } from "@chakra-ui/react";
import { Image } from "@chakra-ui/image";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/button";

import { useCart } from "../context/Cart";
import { addItem } from "../context/cartReducer";

interface ProductDetailProps {
  productID: string;
  productName: string;
  price: number;
  discount: number;
  seller: string;
  thumbnail?: string;
}

const ProductDetail: FC<ProductDetailProps> = ({
  productID,
  productName,
  seller,
  price,
  discount,
  thumbnail,
}) => {
  const [amount, setAmount] = useState(0);
  const { dispatch } = useCart();

  const renderTitle = () => {
    return (
      <VStack spacing="1" alignItems="start" mb="2">
        <Text fontSize="lg" fontWeight="bold">
          {seller}
        </Text>
        <Text fontSize="4xl" fontWeight="extrabold">
          {productName}
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
          <Text fontSize="3xl">${price * (1 - discount)}</Text>
          <Badge fontSize="lg">{discount * 100}%</Badge>
        </HStack>
        <Text as="s" fontSize="lg">
          ${price}
        </Text>
      </VStack>
    );
  };

  const renderCartButton = () => {
    const add = () => {
      if (amount > 0) {
        dispatch(
          addItem({
            itemID: productID,
            itemName: productName,
            price: price,
            amount: amount,
            thumbnail: thumbnail ?? "",
          })
        );
      }
    };

    return (
      <Button onClick={add}>
        <Image src="/images/icon-cart.svg" />
        <Text fontSize="md">Add To Cart</Text>
      </Button>
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

  return (
    <VStack
      w="100%"
      h={["fit-content", "70vh"]}
      justifyContent={["flex-start", "center"]}
      alignItems="start"
      spacing="4"
      px={["3", "0"]}
      pb="4"
    >
      {renderTitle()}
      {renderDescription()}
      {renderPrice()}
      <HStack h="12" spacing="6">
        {renderAmountButton()}
        {renderCartButton()}
      </HStack>
    </VStack>
  );
};

export default ProductDetail;
