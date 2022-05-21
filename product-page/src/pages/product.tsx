import { useState } from "react";

import { VStack } from "@chakra-ui/layout";

import Container from "../components/layout/Container";
import Content from "../components/layout/Content";
import Gallery from "../components/Gallery";
import ProductDetail from "../components/ProductDetail";
import Lightbox from "../components/Lightbox";

import useLightbox from "../hooks/useLightbox";

const images = [
  "/images/image-product-1.jpg",
  "/images/image-product-2.jpg",
  "/images/image-product-3.jpg",
  "/images/image-product-4.jpg",
];

const ProductPage = () => {
  const { isShowing, open, close, imageList } = useLightbox();
  return (
    <>
      <Container>
        <Content>
          <VStack w="100%" h="70vh" alignContent="center">
            <Gallery imageList={images} openLightbox={open} />
          </VStack>
          <ProductDetail />
        </Content>
      </Container>
      <Lightbox isShowing={isShowing} close={close} imageList={imageList} />
    </>
  );
};

export default ProductPage;
