import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import { width, height } from "../Dimension";

const OptionScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Button mode="contained" onPress={(e) => navigation.push("Signup")}>
          Sign Up
        </Button>
        <Button
          mode="contained"
          onPress={(e) => navigation.push("Riskcalculator")}
        >
          Risk Profile
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center", // Center vertically
  },
  contentContainer: {
    flexDirection: "row",
    justifyContent: "space-between", // Equal space between items
    marginHorizontal: 50, // Adjust horizontal spacing
  },
});

export default OptionScreen;
