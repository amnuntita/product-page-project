import { FC } from "react";

import { Stack } from "@chakra-ui/layout";

const Content: FC = ({ children }) => {
  return (
    <Stack
      direction={["column", "row"]}
      spacing={["4", "24"]}
      w="100%"
      h="100%"
    >
      {children}
    </Stack>
  );
};

export default Content;
