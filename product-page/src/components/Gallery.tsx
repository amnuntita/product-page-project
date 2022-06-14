import { FC, useState } from "react";

import { VStack, Box, HStack, Text, Flex, Grid } from "@chakra-ui/layout";
import { Image, useMediaQuery } from "@chakra-ui/react";

import { ChevronLeftIcon, ChevronRightIcon, CloseIcon } from "@chakra-ui/icons";

import useLightbox from "../hooks/useLightbox";

export interface GalleryProps {
  imageList: string[];
  openLightbox?: (imgList: string[]) => void;
  h?: string;
  showArrow?: boolean;
  isLightbox?: boolean;
}

const Gallery: FC<GalleryProps> = ({
  imageList,
  openLightbox,
  isLightbox = false,
  ...props
}) => {
  const [largeImgIdx, setLargeImgIdx] = useState(0);
  const [isMobile] = useMediaQuery("(max-width: 500px)");
  const { close } = useLightbox();

  const renderLargeImage = () => {
    const arrow = (dir: "left" | "right") => {
      return (
        <Flex
          boxSize="40px"
          borderRadius="99px"
          bgColor="white"
          zIndex="2"
          pos="absolute"
          left="0"
          justifyContent="center"
          alignItems="center"
          cursor="pointer"
          onClick={() => {
            if (dir === "left" && largeImgIdx > 0) {
              setLargeImgIdx((idx) => idx - 1);
            } else if (dir === "right" && largeImgIdx < imageList.length - 1) {
              setLargeImgIdx((idx) => idx + 1);
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

    if (props.showArrow) {
      return (
        <HStack w={isLightbox ? "90%" : "100%"} pos="relative">
          <Image
            src={imageList[largeImgIdx]}
            w="100%"
            objectFit="contain"
            borderRadius="16px"
            cursor={openLightbox ? "pointer" : "default"}
            onClick={() => {
              if (openLightbox) {
                openLightbox(imageList);
              }
            }}
          />
        </HStack>
      );
    } else {
      return (
        <Image
          w={{ md: "100%", lg: "80%" }}
          src={imageList[largeImgIdx]}
          objectFit="contain"
          borderRadius={["0", "16px"]}
          cursor={openLightbox && !isMobile ? "pointer" : "default"}
          onClick={() => {
            if (openLightbox && !isMobile) {
              openLightbox(imageList);
            }
          }}
        />
      );
    }
  };

  const renderThumbnails = () => {
    return (
      <HStack w={isLightbox ? "70%" : { md: "100%", lg: "80%" }} spacing="6">
        {" "}
        {imageList.map((img, idx) => {
          const activeStyle =
            idx === largeImgIdx
              ? {
                  border: "3px solid orange",
                  opacity: "0.5",
                }
              : {};
          return (
            <Box>
              <Image
                key={img}
                src={img}
                borderRadius="8px"
                cursor="pointer"
                onClick={() => setLargeImgIdx(idx)}
                boxSizing="border-box"
                {...activeStyle}
              />
            </Box>
          );
        })}
      </HStack>
    );
  };

  return (
    // <VStack w="fit-content" spacing="4" h={props.h ?? "100%"} bgColor="red.100">
    //   {renderLargeImage()}
    //   {renderThumbnails()}
    // </VStack>
    <VStack
      boxSize={isLightbox ? "70%" : "100%"}
      alignContent="center"
      justifyContent="center"
      h={props.h ?? "100%"}
      spacing="4"
    >
      {renderLargeImage()}
      {!isMobile && renderThumbnails()}
    </VStack>
  );
};

export default Gallery;
