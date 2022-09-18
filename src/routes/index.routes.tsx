import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import linking from './linking'
import screens from 'utils/screens'
import MainRoutes from './main.routes'
import AuthRoutes from './auth.routes'

const AppStack = createNativeStackNavigator<RootStackParamList>()

const Routes = () => {
  return (
    <NavigationContainer linking={linking}>
      <AppStack.Navigator
        initialRouteName={screens.Main}
        screenOptions={{ headerShown: false }}
      >
        <AppStack.Screen
          name={screens.Auth}
          component={AuthRoutes}
        />
        <AppStack.Screen
          name={screens.Main}
          component={MainRoutes}
        />
      </AppStack.Navigator>
    </NavigationContainer>
  )
}

export default Routes
