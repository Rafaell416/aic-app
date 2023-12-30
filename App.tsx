import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { useCallback } from 'react'
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'

SplashScreen.preventAutoHideAsync()

export default function App() {
  const [fontsLoaded] = useFonts({
    'PlayfairDisplay-Bold': require('./assets/fonts/PlayfairDisplay-Bold.ttf'),
    'PlayfairDisplay-Medium': require('./assets/fonts/PlayfairDisplay-Medium.ttf'),
    'PlayfairDisplay-Regular': require('./assets/fonts/PlayfairDisplay-Regular.ttf'),
    'PlayfairDisplay-SemiBold': require('./assets/fonts/PlayfairDisplay-SemiBold.ttf'),
    'ProzaLibre-Bold': require('./assets/fonts/ProzaLibre-Bold.ttf'),
    'ProzaLibre-Light': require('./assets/fonts/ProzaLibre-Light.ttf'),
    'ProzaLibre-Medium': require('./assets/fonts/ProzaLibre-Medium.ttf'),
    'ProzaLibre-Regular': require('./assets/fonts/ProzaLibre-Regular.ttf'),
    'ProzaLibre-SemiBold': require('./assets/fonts/ProzaLibre-SemiBold.ttf'),
  })

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync()
    }
  }, [fontsLoaded])

  if (!fontsLoaded) {
    return null
  }
  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <Text style={{fontFamily: 'PlayfairDisplay-Medium'}}>Open up App.tsx to start working on your app!</Text>
      <Text style={{fontFamily: 'ProzaLibre-Regular'}}>Open up App.tsx to start working on your app!</Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
