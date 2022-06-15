import { VStack } from "@chakra-ui/layout";

import Container from "../components/layout/Container";
import Content from "../components/layout/Content";
import Gallery from "../components/Gallery";
import ProductDetail from "../components/ProductDetail";
import Lightbox from "../components/Lightbox";

import useLightbox from "../hooks/useLightbox";
import useDevice from "../hooks/useDevice";

const images = [
  "/images/image-product-1.jpg",
  "/images/image-product-2.jpg",
  "/images/image-product-3.jpg",
  "/images/image-product-4.jpg",
];

const productDetail = {
  seller: " Sneaker Company",
  productID: "1",
  productName: "Fall Limited Edition Sneaker",
  price: 250.0,
  discount: 0.5,
};

const ProductPage = () => {
  const { isShowing, open, close, imageList } = useLightbox();
  const { isSmallDevice } = useDevice();

  return (
    <>
      <Container>
        <Content>
          <VStack w="100%" alignContent="center">
            {isSmallDevice ? (
              <Gallery imageList={images} showArrow={true} />
            ) : (
              <Gallery imageList={images} openLightbox={open} />
            )}
          </VStack>
          <ProductDetail {...productDetail} thumbnail={images[0]} />
        </Content>
      </Container>
      <Lightbox isShowing={isShowing} close={close} imageList={imageList} />
    </>
  );
};

export default ProductPage;
