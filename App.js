import React from "react";
import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider, extendTheme } from "native-base";

import AppLoading from "expo-app-loading";
import {
  useFonts,
  BalsamiqSans_400Regular,
  BalsamiqSans_400Regular_Italic,
  BalsamiqSans_700Bold,
  BalsamiqSans_700Bold_Italic,
} from "@expo-google-fonts/balsamiq-sans";

import Container from "./Container";

export default function App() {
  let [fontsLoaded] = useFonts({
    BalsamiqSans_400Regular,
    BalsamiqSans_400Regular_Italic,
  });

  const fontConfig = {
    BalsamiqSans: {
      400: {
        normal: "BalsamiqSans_400Regular",
        italic: "BalsamiqSans_400Regular_Italic",
      },
    },
  };

  // custom theme
  const theme = extendTheme({
    fontConfig,
    fonts: {
      heading: "BalsamiqSans",
      body: "BalsamiqSans",
      mono: "BalsamiqSans",
    },
    config: { initialColorMode: "dark" },
  });

  if (!fontsLoaded) {
    return;
  } else {
    return (
      <NativeBaseProvider theme={theme}>
        <Container />
      </NativeBaseProvider>
    );
  }
}
