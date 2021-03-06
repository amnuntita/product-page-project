import { FC } from "react";

import { VStack } from "@chakra-ui/layout";

import Gallery from "./Gallery";

interface LightboxProps {
  isShowing: boolean;
  close?: Function;
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
        <VStack justifyContent="center" boxSize="100%">
          <VStack
            w="50%"
            h="100%"
            justifyContent="center"
            alignContent="center"
            spacing="0"
          >
            <Gallery
              imageList={imageList}
              showArrow={true}
              closeLightbox={close}
              isLightbox={true}
            />
          </VStack>
        </VStack>
      </VStack>
    );
  } else {
    return <></>;
  }
};

export default Lightbox;
