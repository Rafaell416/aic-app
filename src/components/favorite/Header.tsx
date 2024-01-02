import { FontAwesome5 as Icon } from "@expo/vector-icons";
import useAppNavigation from "@hooks/useAppNavigation";
import colors from "@theme/colors";
import fontFamilies from "@theme/fontFamilies";
import { normalize, normalizeHeight } from "@utils/normalize";
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";

interface HeaderProps {
  title: string;
  showBackButton?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ title, showBackButton }) => {
  const navigation = useAppNavigation();
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {showBackButton && (
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => navigation.goBack()}
            style={styles.iconContainer}
          >
            <Icon name="chevron-left" size={18} color={colors.white} />
          </TouchableOpacity>
        )}
        <Text style={styles.title}>{title}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: colors.red,
  },
  container: {
    paddingHorizontal: normalize(16),
    paddingBottom: normalize(16),
  },
  title: {
    color: colors.white,
    fontSize: normalize(24),
    fontWeight: "500",
    textAlign: "left",
    fontFamily: fontFamilies.PlayfairDisplayBold,
  },
  iconContainer: {
    height: normalizeHeight(25),
    width: normalize(25),
    justifyContent: "center",
  },
});
