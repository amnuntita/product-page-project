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
  closeLightbox?: Function;
}

const Gallery: FC<GalleryProps> = ({
  imageList,
  openLightbox,
  closeLightbox,
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
          justifyContent="center"
          alignItems="center"
          cursor="pointer"
          onClick={() => {
            if (dir === "left" && largeImgIdx >= 0) {
              if (largeImgIdx == 0) {
                setLargeImgIdx(imageList.length - 1);
              } else {
                setLargeImgIdx((idx) => idx - 1);
              }
            } else if (dir === "right") {
              if (largeImgIdx === imageList.length - 1) {
                setLargeImgIdx(0);
              } else {
                setLargeImgIdx((idx) => idx + 1);
              }
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
        <VStack w={isLightbox ? "90%" : "100%"} pos="relative">
          {isLightbox && (
            <CloseIcon
              color="white"
              cursor="pointer"
              onClick={() =>
                closeLightbox ? closeLightbox() : console.log("to close")
              }
              alignSelf="flex-end"
            />
          )}

          <HStack
            pos="absolute"
            zIndex="2"
            marginTop="0"
            top="50%"
            px={isMobile ? "2" : "0"}
            w={isMobile ? "100%" : "110%"}
            justifyContent="space-between"
          >
            {arrow("left")}
            {arrow("right")}
          </HStack>

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
        </VStack>
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
      spacing="4"
    >
      {renderLargeImage()}
      {!isMobile && renderThumbnails()}
    </VStack>
  );
};

export default Gallery;
