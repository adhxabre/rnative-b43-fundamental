import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function Form() {
  return (
    <View style={style.container}>
      <Text style={style.header}>Sign In</Text>

      <Text style={style.textStyle}>Email</Text>
      <TextInput
        style={style.textInput}
        defaultValue="miraicchi.exe@gmail.com"
      />

      <Text style={style.textStyle}>Password</Text>
      <TextInput style={style.textInput} defaultValue="ex.AWOKAWOKAWOKAWOK" />

      <TouchableOpacity
        style={style.button}
        onPress={() => alert("Mau ngapain lo!")}
      >
        <Text style={style.buttonText}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    display: "flex",
    padding: 20,
  },
  header: {
    color: "black",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 50,
  },
  button: {
    backgroundColor: "orangered",
    height: 45,
    width: "100%",
    borderRadius: 10,
    justifyContent: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
  },
  textStyle: {
    color: "orangered",
    fontSize: 16,
    fontWeight: "semibold",
    marginBottom: 5,
  },
  textInput: {
    height: 45,
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    padding: 10,
    color: "black",
    border: "black",
  },
});
