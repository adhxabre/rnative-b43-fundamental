import React from "react";

import { NavigationContainer } from "@react-navigation/native";

import { createStackNavigator } from "@react-navigation/stack";

import { useTheme } from "native-base";

import Hello from "./src/components/Hello";
import FormNativeBase from "./src/components/FormNativeBase";
import IncDec from "./src/components/IncDec";

const Stack = createStackNavigator();

export default function Container() {
  const theme = useTheme();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerMode: "screen",
          headerTintColor: "black",
          headerStyle: { backgroundColor: theme.colors.white },
        }}
      >
        <Stack.Screen
          name="Home"
          component={Hello}
          options={{
            title: "Hello screen",
          }}
        />
        <Stack.Screen
          name="Form"
          component={FormNativeBase}
          options={{
            title: "Form",
          }}
        />
        <Stack.Screen
          name="IncDec"
          component={IncDec}
          options={{
            title: "Increment Decrement",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
