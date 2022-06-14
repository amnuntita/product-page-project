import { VStack, Text, Divider, HStack, Box } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";

import Button from "../components/AppButton";

import { useCart } from "../context/Cart";
import { removeItem } from "../context/cartReducer";

const CartBox = () => {
  const { state, dispatch } = useCart();

  const renderItem = (
    thumbnail: string,
    itemName: string,
    amount: number,
    price: number,
    itemID: string
  ) => {
    return (
      <HStack w="100%" justifyContent="space-between" alignItems="center">
        <Image src={thumbnail} boxSize="50px" borderRadius="8px" />
        <VStack fontSize="sm" spacing="0.5" alignItems="flex-start">
          <Text>{itemName}</Text>
          <Text>
            ${price} x {amount} <b color="black">${price * amount}</b>
          </Text>
        </VStack>
        <Image
          src="/images/icon-delete.svg"
          cursor="pointer"
          onClick={() =>
            dispatch(
              removeItem({
                itemID: itemID,
                itemName: itemName,
                amount: amount,
                price: price,
                thumbnail: "/mock",
              })
            )
          }
        />
      </HStack>
    );
  };

  return (
    <VStack
      bgColor="white"
      borderRadius="0.5rem"
      border="1px solid #E2E8F0"
      boxShadow="rgba(0, 0, 0, 0.25) 0px 5px 15px"
      w={["95vw", "80"]}
      h="fit-content"
      marginX="auto"
      right={["2.5vw", "2"]}
      bottom="0"
      top="24"
      zIndex="4"
      pos="absolute"
      spacing="4"
      px="4"
      py="2"
    >
      <VStack alignItems="flex-start" w="100%">
        <Text fontWeight="bold">Cart</Text>
      </VStack>
      <Divider />

      {state.items.length > 0 ? (
        <VStack w="100%" minH="36" spacing="3" justify="flex-start" py="2">
          {state.items.map((i) =>
            renderItem(i.thumbnail, i.itemName, i.amount, i.price, i.itemID)
          )}

          <Box h="10" w="100%">
            <Button w="100%">
              <Text>Checkout</Text>
            </Button>
          </Box>
        </VStack>
      ) : (
        <VStack w="100%" minH="36" spacing="3" justify="center">
          <Text>Your cart is empty</Text>
        </VStack>
      )}
    </VStack>
  );
};

export default CartBox;
