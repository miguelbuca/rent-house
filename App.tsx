import { useFonts } from 'expo-font';
import { useCallback, useEffect } from 'react';
import { View } from 'react-native';
import * as SplashScreen from "expo-splash-screen";
import Routes from 'routes/index.routes';

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
    <View className='flex-1' onLayout={onLayoutRootView}>
      <Routes/>
    </View>
  );
}
