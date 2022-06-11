import { extendTheme } from "@chakra-ui/react";

const fonts = {
  body: "Kumbh Sans",
  heading: "Kumbh Sans",
};

const theme = extendTheme({
  colors: {
    orange: "hsl(26, 100%, 55%)",
    paleorange: "hsl(25, 100%, 94%)",
    darkblue: "hsl(220, 13%, 13%)",
    grayishblue: {
      100: "hsl(223, 64%, 98%)",
      300: "hsl(220, 14%, 75%)",
      900: "hsl(219, 9%, 45%)",
    },
    white: "hsl(0, 0%, 100%)",
    black: "hsl(0, 0%, 0%)",
  },
  components: {
    Button: {
      baseStyle: {
        width: "100%",
      },
      variants: {
        solid: {
          bg: "orange",
          height: "100%",
          color: "white",
          boxShadow: "hsl(25, 100%, 94%) 0px 8px 24px",

          _hover: {
            bg: "paleorange",
          },
        },
      },
    },
  },
  fonts,
  styles: {
    global: {
      body: {
        fontSize: "1rem",
        fontWeight: "400",
        color: "grayishblue.900",
      },
    },
  },
});

export default theme;
