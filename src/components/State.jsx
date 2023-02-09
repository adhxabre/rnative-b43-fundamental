import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function State() {
  const [counter, setCounter] = useState(0);

  const Add = () => {
    return setCounter(counter + 1);
  };

  const Less = () => {
    counter == 0 ? null : setCounter(counter - 1);
  };

  return (
    <View>
      <Text style={{ fontSize: 50 }}>This is counter!</Text>
      <Text style={{ fontSize: 50 }}>{counter}</Text>

      <TouchableOpacity onPress={Add}>
        <Text style={{ fontSize: 50 }}>Add</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={Less}>
        <Text style={{ fontSize: 50 }}>Less</Text>
      </TouchableOpacity>
    </View>
  );
}
