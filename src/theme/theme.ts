import { createTheme } from "@shopify/restyle";

import colors from "./colors";
import fontFamilies from "./fontFamilies";
import shadows from "./shadows";
import spacing from "./spacing";

const theme = createTheme({
  shadows,
  fonts: fontFamilies,
  colors: {
    white: colors.white,
    black: colors.black,
    grayOne: colors.gray.one,
    grayTwo: colors.gray.two,
    transparent: "transparent",
  },
  spacing,
  breakpoints: {
    phone: 0,
    tablet: 769,
  },
  textVariants: {},
  buttonVariants: {},
});

export type Theme = typeof theme;
export default theme;
