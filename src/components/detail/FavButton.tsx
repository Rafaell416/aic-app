import Box from "@components/common/Box";
import { AntDesign as Icon } from "@expo/vector-icons";
import colors from "@theme/colors";
import shadows from "@theme/shadows";
import { memo, useState } from "react";
import { Pressable } from "react-native";

interface FavButtonProps {
  onPress: () => void;
  eventSaved: boolean;
}

const FavButton: React.FC<FavButtonProps> = ({ onPress, eventSaved }) => {
  const [checked, setChecked] = useState(eventSaved);

  const handlePress = () => {
    onPress?.();
    setChecked(!checked);
  };

  const iconName = checked ? "heart" : "hearto";
  const iconColor = checked ? colors.red : colors.black;

  return (
    <Pressable onPress={handlePress}>
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
        <Icon name={iconName} size={20} color={iconColor} />
      </Box>
    </Pressable>
  );
};

export default memo(FavButton);
