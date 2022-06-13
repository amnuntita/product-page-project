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
        top="0"
        left="0"
        right="0"
        bottom="0"
        margin="auto"
        backgroundColor="rgba(0,0,0,0.8)"
        zIndex="2"
        alignItems="center"
        justifyContent="center"
        w="100%"
        h="100%"
      >
        <VStack justifyContent="center" boxSize="100%" spacing="4">
          <VStack w="50%" h="100%" justifyContent="center">
            <CloseIcon
              color="white"
              cursor="pointer"
              onClick={() => close()}
              marginLeft="60%"
            />
            <Gallery imageList={imageList} showArrow={true} isLightbox={true} />
          </VStack>
        </VStack>
      </VStack>
    );
  } else {
    return <></>;
  }
};

export default Lightbox;
