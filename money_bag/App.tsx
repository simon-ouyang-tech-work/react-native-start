import React from 'react';
import 'react-native-gesture-handler';
import { useFonts } from "expo-font";
import RootStack from './src/navigators/RootStack'
import AppLoading from "expo-app-loading"
import Welcome from './src/screens/Welcome';

export default function App() {
  let [fontsLoaded] = useFonts({
    "Lato-Bold": require("./assets/fonts/Lato-Bold.ttf"),
    "Lato-Regular": require("./assets/fonts/Lato-Regular.ttf"),
  })

  if (fontsLoaded) {
    return <AppLoading />
  }

  return (
    <Welcome />
  );
}
