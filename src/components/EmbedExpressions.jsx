import React from "react";
import { View, Text } from "react-native";

function getMajor() {
  return "Fullstack Developer";
}

const companyName = "DumbWays.ID";

const x = 2;
const y = 2;

function result() {
  return x + y;
}

export default function EmbedExpression() {
  return (
    <View>
      <Text>
        Welcome to {companyName} class {getMajor()}
      </Text>
      <Text>{result()}</Text>
    </View>
  );
}
