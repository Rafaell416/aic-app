import { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { ScreenNames } from "src/routes/screenNames";

type RootStackParamsList = {
  [ScreenNames.Home]: undefined;
  Saved: undefined;
  [ScreenNames.Detail]: {
    event: Event;
    sharedTransitionTag: string;
  };
};

type RootStackNavigationProp<T extends keyof RootStackParamsList> =
  NativeStackScreenProps<RootStackParamsList, T>["navigation"];

type RootStackRouteProp<T extends keyof RootStackParamsList> =
  NativeStackScreenProps<RootStackParamsList, T>["route"];

type DetailsRouteProp = RootStackRouteProp<ScreenNames.Detail>;

export type { DetailsRouteProp, RootStackParamsList };
