import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StatusBar } from 'expo-status-bar'
import Home from '../screens/Home'

const Stack = createNativeStackNavigator<RoutesParamList>()

function AppRoutes() {
  return (
    <NavigationContainer>
      <StatusBar style='dark' />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Home' component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppRoutes