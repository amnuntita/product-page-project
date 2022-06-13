import { FC, useState } from "react";

import { VStack, Box, HStack, Text, Flex, Grid } from "@chakra-ui/layout";
import { Image, useMediaQuery } from "@chakra-ui/react";

import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

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
          w="100%"
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
      <HStack w={isLightbox ? "70%" : "100%"} spacing="4">
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
      boxSize={["100%", "70%"]}
      alignContent="center"
      h={props.h ?? "100%"}
    >
      {renderLargeImage()}
      {!isMobile && renderThumbnails()}
    </VStack>
  );
};

export default Gallery;
