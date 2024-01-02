import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Detail from "@screens/Detail";
import Favorite from "@screens/Favorite";
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
        }}
      >
        <Stack.Screen name={ScreenNames.Home} component={Home} />
        <Stack.Screen name={ScreenNames.Detail} component={Detail} />
        <Stack.Screen name={ScreenNames.FavoriteEvents} component={Favorite} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppRoutes;
