import { FC } from "react";

import { VStack, HStack, Box, Text } from "@chakra-ui/layout";
import { CloseIcon } from "@chakra-ui/icons";

import Gallery from "./Gallery";

interface LightboxProps {
  isShowing: boolean;
  close: Function;
  imageList: string[];
}

const Lightbox: FC<LightboxProps> = ({ isShowing, close, imageList }) => {
  if (isShowing) {
    return (
      <VStack
        position="fixed"
        width="100%"
        h="100%"
        top="0"
        left="0"
        right="0"
        bottom="0"
        margin="auto"
        backgroundColor="rgba(0,0,0,0.8)"
        zIndex="2"
        alignItems="center"
        justifyItems="start"
      >
        <VStack h="100%" justifyContent="center" spacing="4">
          <CloseIcon
            color="white"
            cursor="pointer"
            onClick={() => close()}
            marginLeft="auto"
            mr="0"
          />
          <Gallery imageList={imageList} h="80vh" showArrow={true} />
        </VStack>
      </VStack>
    );
  } else {
    return <></>;
  }
};

export default Lightbox;
