import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

function Greetings() {
  return alert("Good morning all dumbways students!");
}

export default function Event() {
  return (
    <View>
      <Text>When you click this, something will pop up!</Text>
      <TouchableOpacity onPress={() => alert("Good morning all students!")}>
        <Text>Click Here</Text>
      </TouchableOpacity>

      <Text>When you click this, something will pop up!</Text>
      <TouchableOpacity onPress={Greetings}>
        <Text>Click Here</Text>
      </TouchableOpacity>
    </View>
  );
}
