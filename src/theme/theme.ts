import { createTheme } from "@shopify/restyle";
import { normalize, normalizeHeight } from "@utils/normalize";

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
    grayThree: colors.gray.three,
    grayFour: colors.gray.four,
    grayFive: colors.gray.five,
    graySix: colors.gray.six,
    graySeven: colors.gray.seven,
    grayEight: colors.gray.eight,
    grayNine: colors.gray.nine,
    grayTen: colors.gray.ten,
    grayEleven: colors.gray.eleven,
    grayTwelve: colors.gray.twelve,
    grayThirteen: colors.gray.thirteen,
    grayFourteen: colors.gray.fourteen,
    transparent: "transparent",
    brown: colors.brown,
    red: colors.red,
  },
  spacing,
  breakpoints: {
    phone: 0,
    tablet: 769,
  },
  textVariants: {
    title: {
      color: "black",
      fontFamily: fontFamilies.PlayfairDisplayRegular,
      fontSize: normalize(22),
    },
    body: {
      color: "grayFive",
      fontFamily: fontFamilies.ProzaLibreRegular,
      fontSize: normalize(15),
      lineHeight: normalizeHeight(19),
    },
    label: {
      color: "grayThree",
      fontFamily: fontFamilies.ProzaLibreLight,
      fontSize: normalize(11),
    },
  },
  buttonVariants: {},
});

export type Theme = typeof theme;
export default theme;
