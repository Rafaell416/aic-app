import { useCachedResources } from "@hooks/useCachedResources";
import * as SplashScreen from "expo-splash-screen";
import { StyleSheet, View } from "react-native";

import AppRoutes from "./src/routes";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const { loaded } = useCachedResources();

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <AppRoutes />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
