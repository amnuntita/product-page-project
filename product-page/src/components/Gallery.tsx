import { FC, useState } from "react";

import { VStack, Box, HStack, Text, Flex, Grid } from "@chakra-ui/layout";
import { Image, useMediaQuery } from "@chakra-ui/react";

import { CloseIcon } from "@chakra-ui/icons";
import { ReactComponent as NextIcon } from "../svg/icon-next.svg";
import { ReactComponent as PrevIcon } from "../svg/icon-previous.svg";

import useDevice from "../hooks/useDevice";

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
  const { isSmallDevice, isDesktop } = useDevice();

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
            <Box
              stroke="black"
              _hover={{
                stroke: "orange",
              }}
            >
              <PrevIcon />
            </Box>
          ) : (
            <Box
              stroke="black"
              _hover={{
                stroke: "orange",
              }}
            >
              <NextIcon />
            </Box>
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
              _hover={{
                color: "orange",
              }}
            />
          )}

          <HStack
            pos="absolute"
            zIndex="2"
            marginTop="0"
            top="50%"
            px={isSmallDevice ? "2" : "0"}
            w={isSmallDevice ? "100%" : "110%"}
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
          cursor={openLightbox && isDesktop ? "pointer" : "default"}
          onClick={() => {
            if (openLightbox && isDesktop) {
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
                _hover={{
                  opacity: 0.5,
                }}
              />
            </Box>
          );
        })}
      </HStack>
    );
  };

  return (
    <VStack
      boxSize={isLightbox ? "70%" : "100%"}
      alignContent="center"
      justifyContent="center"
      spacing="4"
    >
      {renderLargeImage()}
      {isDesktop && renderThumbnails()}
    </VStack>
  );
};

export default Gallery;
