import { FC, useState } from "react";

import { VStack, Box, HStack, Text, Flex } from "@chakra-ui/layout";
import { Image, useMediaQuery } from "@chakra-ui/react";

import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

export interface GalleryProps {
  imageList: string[];
  openLightbox?: (imgList: string[]) => void;
  h?: string;
  showArrow?: boolean;
}

const Gallery: FC<GalleryProps> = ({ imageList, openLightbox, ...props }) => {
  const [largeImgIdx, setLargeImgIdx] = useState(0);
  const [isMobile] = useMediaQuery("(max-width: 500px)");

  const renderLargeImage = () => {
    const arrow = (dir: "left" | "right") => {
      return (
        <Flex
          boxSize="40px"
          borderRadius="99px"
          bgColor="white"
          zIndex="2"
          justifyContent="center"
          alignItems="center"
          position="absolute"
          left={dir === "left" ? "0" : "auto"}
          right={dir === "left" ? "auto" : "0"}
          cursor="pointer"
          onClick={() => {
            if (dir === "left" && largeImgIdx > 0) {
              setLargeImgIdx((idx) => idx - 1);
              console.log(largeImgIdx);
            } else if (dir === "right" && largeImgIdx < imageList.length - 1) {
              setLargeImgIdx((idx) => idx + 1);
              console.log(largeImgIdx);
            }
          }}
        >
          {dir === "left" ? (
            <ChevronLeftIcon boxSize="1.75rem" />
          ) : (
            <ChevronRightIcon boxSize="1.75rem" />
          )}
        </Flex>
      );
    };

    return (
      <HStack h="70%" w="100%" pos="relative">
        {arrow("left")}
        <Image
          src={imageList[largeImgIdx]}
          h="100%"
          objectFit="contain"
          borderRadius="16px"
          cursor={openLightbox ? "pointer" : "default"}
          onClick={() => {
            if (openLightbox) {
              openLightbox(imageList);
            }
          }}
        />
        {arrow("right")}
      </HStack>
    );
  };

  const renderThumbnails = () => {
    return (
      <HStack
        justifyContent="space-between"
        h="20%"
        w="100%"
        display={["none", "flex"]}
      >
        {imageList.map((img, idx) => {
          const activeStyle =
            idx === largeImgIdx
              ? {
                  border: "3px solid orange",
                  opacity: "0.5",
                }
              : {};
          return (
            <Image
              boxSize="90px"
              src={img}
              borderRadius="8px"
              cursor="pointer"
              onClick={() => setLargeImgIdx(idx)}
              {...activeStyle}
            />
          );
        })}
      </HStack>
    );
  };

  return (
    <VStack w="fit-content" spacing="4" h={props.h ?? "100%"}>
      {props.showArrow ? (
        renderLargeImage()
      ) : (
        <Image
          src={imageList[largeImgIdx]}
          h={["auto", "70%"]}
          objectFit="contain"
          borderRadius={["0", "16px"]}
          cursor={openLightbox && !isMobile ? "pointer" : "default"}
          onClick={() => {
            if (openLightbox && !isMobile) {
              openLightbox(imageList);
            }
          }}
        />
      )}
      {renderThumbnails()}
    </VStack>
  );
};

export default Gallery;
