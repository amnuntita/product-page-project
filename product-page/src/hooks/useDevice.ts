import { useMediaQuery } from "@chakra-ui/react";

const useDevice = () => {
  const [isSmallDevice] = useMediaQuery("(max-width: 950px)");
  const [isDesktop] = useMediaQuery("(min-width: 1100px)");

  return { isSmallDevice, isDesktop };
};

export default useDevice;
