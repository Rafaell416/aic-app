import { createText } from "@shopify/restyle";
import { Theme } from "@theme/theme";
import { ComponentProps } from "react";
import Animated from "react-native-reanimated";

const Text = createText<Theme>();
export const AnimatedText = Animated.createAnimatedComponent(Text);

export type TextProps = ComponentProps<typeof Text>;
export default Text;
