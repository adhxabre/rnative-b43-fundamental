import React from "react";
import { View, Text } from "react-native";

const cars = ["BMW", "Mercedez", "Ferarri", "Honda"];

export default function List() {
  return (
    <View>
      <Text>This is list on React Native</Text>

      {cars.map((car) => (
        <Text key={car}>{car}</Text>
      ))}
    </View>
  );
}
