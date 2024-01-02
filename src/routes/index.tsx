import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Detail from "@screens/Detail";
import Saved from "@screens/Saved";
import { StatusBar } from "expo-status-bar";
import { RootStackParamsList } from "src/@types/navigation";

import { ScreenNames } from "./screenNames";
import Home from "../screens/Home";

const Stack = createNativeStackNavigator<RootStackParamsList>();

function AppRoutes() {
  return (
    <NavigationContainer>
      <StatusBar style="dark" />
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animation: "fade",
          animationDuration: 100,
        }}
      >
        <Stack.Screen name={ScreenNames.Home} component={Home} />
        <Stack.Screen name={ScreenNames.Detail} component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppRoutes;
