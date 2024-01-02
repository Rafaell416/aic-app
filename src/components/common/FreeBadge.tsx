import { memo } from "react";

import Box from "./Box";
import Text from "./Text";

const FreeBadge = () => (
  <Box
    backgroundColor="brown"
    maxWidth={60}
    paddingVertical="y-8"
    paddingHorizontal="x-12"
    borderRadius={2}
    alignItems="center"
    justifyContent="center"
    marginTop="y-16"
  >
    <Text variant="label" color="white">
      FREE
    </Text>
  </Box>
);

export default memo(FreeBadge);
