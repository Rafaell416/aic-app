import { AnimatedBox } from "@components/common/Box";
import { AntDesign as Icon } from "@expo/vector-icons";
import colors from "@theme/colors";
import shadows from "@theme/shadows";
import { memo, useState } from "react";
import { Pressable } from "react-native";
import {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";

interface FavButtonProps {
  onPress: () => void;
  eventSaved: boolean;
}

const FavButton: React.FC<FavButtonProps> = ({ onPress, eventSaved }) => {
  const [checked, setChecked] = useState(eventSaved);
  const scale = useSharedValue(1);

  const handlePress = () => {
    onPress?.();
    setChecked(!checked);

    scale.value = withSpring(checked ? 1 : 1.3, { damping: 2 }, () => {
      if (checked) {
        scale.value = withSpring(1);
      }
    });
  };

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  });

  const iconName = checked ? "heart" : "hearto";
  const iconColor = checked ? colors.red : colors.black;

  return (
    <Pressable onPress={handlePress}>
      <AnimatedBox
        backgroundColor="white"
        height={35}
        width={35}
        borderRadius={17.5}
        alignItems="center"
        justifyContent="center"
        elevation={5}
        {...shadows.ios}
        style={animatedStyles}
      >
        <Icon name={iconName} size={20} color={iconColor} />
      </AnimatedBox>
    </Pressable>
  );
};

export default memo(FavButton);
