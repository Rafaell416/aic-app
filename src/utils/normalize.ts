import { Dimensions, PixelRatio } from "react-native";

enum DIMENSION {
  "width" = "width",
  "height" = "height",
}

interface WindowSize {
  width: number;
  height: number;
}

const DEFAULT_WINDOW_SIZE: WindowSize = {
  width: 360,
  height: 640,
};

export const viewportSize = (): WindowSize => {
  const window = Dimensions.get("window");
  return {
    width: window.width || DEFAULT_WINDOW_SIZE.width,
    height: window.height || DEFAULT_WINDOW_SIZE.height,
  };
};

export const scaleDimension = (value: number, dimension: DIMENSION) => {
  const viewport = viewportSize();
  return value * (viewport[dimension] / DEFAULT_WINDOW_SIZE[dimension]);
};

export const scaleWidth = (value: number) =>
  scaleDimension(value, DIMENSION.width);

export const scaleHeight = (value: number) =>
  scaleDimension(value, DIMENSION.height);

export const normalize = (size: number): number => {
  const newSize = scaleWidth(size);
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
};

export const normalizeHeight = (size: number): number => {
  const newSize = scaleHeight(size);
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
};
