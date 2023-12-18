import React from "react";
import { Button } from "react-native-paper";
import { View, Text, StyleSheet } from "react-native";
import { width, height } from "../../Dimension";

const Buttonbox = () => {
  return (
    <View style={styles.container}>
      <Button mode="contained" style={styles.Button}>
        Complete Payments
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: height * 0.015,
    marginBottom: height * 0.03,
  },
  Button: {
    alignItems: "center",
    borderRadius: width * 0.03,
    borderWidth: 1,
    borderColor: "#023047",
    padding: width * 0.01,
    backgroundColor: "#023047",
  },
});
export default Buttonbox;
