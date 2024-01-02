import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamsList } from "src/@types/navigation";

export default function useAppNavigation() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamsList>>();
  return navigation;
}
