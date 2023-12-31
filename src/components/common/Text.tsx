import { createText } from "@shopify/restyle";
import { Theme } from "@theme/theme";
import { ComponentProps } from "react";

const Text = createText<Theme>();
export type TextProps = ComponentProps<typeof Text>;
export default Text;
