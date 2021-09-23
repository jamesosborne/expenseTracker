import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import Form from "../components/Form";

export default function AddBillScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add a bill</Text>
      <Form />
      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>Add Bill</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f3f2",
    paddingHorizontal: 40,
  },
  title: {
    fontSize: 32,
    color: "#616771",
    paddingTop: 120,
  },
  addButton: {
    width: "100%",
    backgroundColor: "orange",
    height: 70,
    marginTop: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  addButtonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 14,
  },
  back: {
    height: 20,
    width: 20,
    position: "absolute",
    top: 60,
    left: 40,
  },
  backImage: {
    width: 20,
    height: 20,
  },
  menu: {
    height: 20,
    width: 20,
    position: "absolute",
    top: 60,
    right: 40,
  },
  menuImage: {
    width: 30,
    height: 30,
  },
});
