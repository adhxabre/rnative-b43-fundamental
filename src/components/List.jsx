import React from "react";
import { FlatList, View, Text } from "react-native";

const data = [
  { name: "Abel Dustin", email: "abeldustin06@gmail.com" },
  { name: "Cintara Surya", email: "suryaelz@gmail.com" },
  { name: "Dandi Saputra", email: "dandisapoetra@gmail.com" },
];

export default function List() {
  return (
    <View>
      <Text>This is list on React Native</Text>

      <FlatList
        data={data}
        renderItem={({ item }) => (
          <Text>
            {item.name} | {item.email}
          </Text>
        )}
        keyExtractor={(item) => item.name}
      />
    </View>
  );
}
