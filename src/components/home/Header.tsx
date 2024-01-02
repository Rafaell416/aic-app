import Box from "@components/common/Box";
import Text from "@components/common/Text";
import useAppNavigation from "@hooks/useAppNavigation";
import { normalizeHeight, normalize } from "@utils/normalize";
import {
  SafeAreaView,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import { ScreenNames } from "../../routes/screenNames";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = ({}) => {
  const navigation = useAppNavigation();
  return (
    <SafeAreaView>
      <Box width="100%" backgroundColor="transparent">
        <Box
          marginHorizontal="x-20"
          borderBottomWidth={StyleSheet.hairlineWidth}
          borderBottomColor="grayEight"
          flexDirection="row"
          alignItems="flex-end"
          justifyContent="space-between"
        >
          <Image
            source={require("../../../assets/images/logo.png")}
            resizeMode="contain"
            style={{
              height: normalizeHeight(60),
              width: normalize(60),
            }}
          />
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => navigation.navigate(ScreenNames.FavoriteEvents)}
          >
            <Box marginBottom="y-2">
              <Text variant="body">Favorite Events</Text>
            </Box>
          </TouchableOpacity>
        </Box>
      </Box>
    </SafeAreaView>
  );
};

export default Header;
