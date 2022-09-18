import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { useCallback, useEffect } from 'react';
import { Text, View } from 'react-native';
import * as SplashScreen from "expo-splash-screen";

export default function App() {

  const [fontsLoaded] = useFonts({
    GothamBook: require("./assets/fonts/GothamBook.otf"),
    GothamBold: require("./assets/fonts/GothamBoldRegular.otf"),
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View className='flex justify-center items-center flex-1' onLayout={onLayoutRootView}>
      <Text className='text-primary font-GothamBook'>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
