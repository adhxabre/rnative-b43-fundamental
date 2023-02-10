import React from "react";
import { Text, Box, FlatList, Pressable } from "native-base";

export default function ListSoc({ navigation }) {
  const [data, _] = React.useState([
    "Netflix",
    "YouTube",
    "Tikitoko",
    "Bigo",
    "Instagram",
  ]);

  const handlePress = (value) => {
    navigation.navigate("Detail Social", { value });
  };

  return (
    <Box
      safeArea
      bg="primary.100"
      flex={1}
      alignItems="center"
      justifyContent="center"
      p={10}
    >
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <Pressable onPress={() => handlePress(item)}>
            <Text
              fontFamily="body"
              fontWeight={400}
              fontStyle="italic"
              fontSize={30}
              margin={5}
              color="muted.900"
            >
              {item}
            </Text>
          </Pressable>
        )}
        keyExtractor={(item) => item}
      />
    </Box>
  );
}
