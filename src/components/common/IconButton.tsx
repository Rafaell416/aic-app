import { Feather as Icon } from "@expo/vector-icons";
import colors from "@theme/colors";
import shadows from "@theme/shadows";
import { memo } from "react";
import { TouchableOpacity } from "react-native";

import Box from "./Box";

interface IconButtonProps {
  onPress: () => void;
  icon: string;
}

const IconButton: React.FC<IconButtonProps> = ({ onPress, icon }) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <Box
        backgroundColor="white"
        height={35}
        width={35}
        borderRadius={17.5}
        alignItems="center"
        justifyContent="center"
        elevation={5}
        {...shadows.ios}
      >
        <Icon name={icon} size={20} color={colors.black} />
      </Box>
    </TouchableOpacity>
  );
};

export default memo(IconButton);
