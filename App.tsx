import { useCachedResources } from "@hooks/useCachedResources";
import { ThemeProvider } from "@theme/ThemeProvider";
import * as SplashScreen from "expo-splash-screen";
import { StyleSheet } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import AppRoutes from "./src/routes";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const { loaded } = useCachedResources();

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider>
      <GestureHandlerRootView style={styles.container}>
        <AppRoutes />
      </GestureHandlerRootView>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
