import React from "react";
import { Image, View, Text } from "react-native";

import List from "./List";

export default function Props() {
  let pic = {
    uri: "https://www.nipponexpress.com/press/report/img/06-Nov-20-ogp.jpeg",
  };

  return (
    <View>
      <Text>Dibawah ini ada props cuy! Coba deh liat</Text>
      <Image source={pic} style={{ width: "100%", height: 200 }} />

      <List listData="Pisang Cavendish" />
      <List listData="Piscok | Pisang Cok!" />
      <List listData="Pisang Om? Om Jangan Om!" />
    </View>
  );
}
