import { useCachedResources } from "@hooks/useCachedResources";
import { ThemeProvider } from "@theme/ThemeProvider";
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
    <ThemeProvider>
      <View style={styles.container}>
        <AppRoutes />
      </View>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
