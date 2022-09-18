import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import linking from './linking'
import screens from 'utils/screens'
import MainProviders from 'screens/MainProviders'
import MainChat from 'screens/MainChat'

const AppStack = createNativeStackNavigator<RootStackParamList>()

const MainRoutes = () => {
  return (
    <AppStack.Navigator
      initialRouteName={screens.MainProviders}
      screenOptions={{ headerShown: false }}
    >
      <AppStack.Screen name={screens.MainProviders} component={MainProviders} />
      <AppStack.Screen name={screens.MainChat} component={MainChat} />
    </AppStack.Navigator>
  )
}

export default MainRoutes
