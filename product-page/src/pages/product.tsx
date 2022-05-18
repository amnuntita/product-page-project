import { VStack } from "@chakra-ui/layout";

import Container from "../components/layout/Container";
import Content from "../components/layout/Content";

const ProductPage = () => {
  return (
    <Container>
      <Content>
        <VStack w="100%" h="500px" bgColor="blue.500" />
        <VStack w="100%" h="500px" bgColor="blue.500" />
      </Content>
    </Container>
  );
};

export default ProductPage;
