import { Image as ExpoImage } from "expo-image";
import { ComponentProps } from "react";
import Animated from "react-native-reanimated";

const Image = Animated.createAnimatedComponent(ExpoImage);

export default Image;
export type ImageProps = ComponentProps<typeof Image>;
