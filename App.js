import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import List from "./src/components/List";

export default function App() {
  return (
    <View style={{ marginTop: 100 }}>
      <StatusBar />
      <List />
    </View>
  );
}
