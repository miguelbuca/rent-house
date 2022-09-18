import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import linking from './linking'
import screens from 'utils/screens'
import AuthProviders from 'screens/AuthProviders'
import AuthPhone from 'screens/AuthPhone'

const AppStack = createNativeStackNavigator<RootStackParamList>()

const AuthRoutes = () => {
  return (
    <AppStack.Navigator
      initialRouteName={screens.AuthProviders}
      screenOptions={{ headerShown: false }}
    >
      <AppStack.Screen name={screens.AuthProviders} component={AuthProviders} />
      <AppStack.Screen name={screens.AuthPhone} component={AuthPhone} />
    </AppStack.Navigator>
  )
}

export default AuthRoutes
