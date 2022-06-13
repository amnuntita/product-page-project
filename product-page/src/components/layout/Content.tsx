import { FC } from "react";

import { Stack } from "@chakra-ui/layout";

const Content: FC = ({ children }) => {
  return (
    <Stack
      direction={["column", "row"]}
      spacing={["10", "20"]}
      w="100%"
      h="100%"
      margin="0"
    >
      {children}
    </Stack>
  );
};

export default Content;
