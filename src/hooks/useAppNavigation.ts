import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export default function useAppNavigation() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RoutesParamList>>();
  return navigation;
}
