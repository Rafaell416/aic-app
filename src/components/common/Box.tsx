import { createBox } from "@shopify/restyle";
import { Theme } from "@theme/theme";
import { ComponentProps } from "react";
import Animated from "react-native-reanimated";

const Box = createBox<Theme>();
export const AnimatedBox = Animated.createAnimatedComponent(Box);

export type BoxProps = ComponentProps<typeof Box>;
export default Box;
