import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import State from "./src/components/State";

export default function App() {
  return (
    <View style={{ marginTop: 200 }}>
      <StatusBar />
      <State />
    </View>
  );
}
