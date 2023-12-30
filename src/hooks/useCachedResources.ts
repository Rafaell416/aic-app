import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

type useCachedResourcesPayload = {
  loaded: boolean;
};

export const useCachedResources = (): useCachedResourcesPayload => {
  const [loaded, error] = useFonts({
    "PlayfairDisplay-Bold": require("../../assets/fonts/PlayfairDisplay-Bold.ttf"),
    "PlayfairDisplay-Medium": require("../../assets/fonts/PlayfairDisplay-Medium.ttf"),
    "PlayfairDisplay-Regular": require("../../assets/fonts/PlayfairDisplay-Regular.ttf"),
    "PlayfairDisplay-SemiBold": require("../../assets/fonts/PlayfairDisplay-SemiBold.ttf"),
    "ProzaLibre-Bold": require("../../assets/fonts/ProzaLibre-Bold.ttf"),
    "ProzaLibre-Light": require("../../assets/fonts/ProzaLibre-Light.ttf"),
    "ProzaLibre-Medium": require("../../assets/fonts/ProzaLibre-Medium.ttf"),
    "ProzaLibre-Regular": require("../../assets/fonts/ProzaLibre-Regular.ttf"),
    "ProzaLibre-SemiBold": require("../../assets/fonts/ProzaLibre-SemiBold.ttf"),
  });

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  return {
    loaded,
  };
};
