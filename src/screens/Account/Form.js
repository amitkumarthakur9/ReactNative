import React, { useState } from "react";
import { ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { Button } from "react-native-paper";
import { height, width } from "../../Dimension";
import Bankdetails from "./Bankdetails";
import Fatca from "./Fatca";
import Nominee from "./Nominee";
import Basicdetails from "./Basicdetails";
const Form = ({ data }) => {
  const { currentForm, setCurrentForm } = data;
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.formContainer}
    >
      {currentForm === 0 ? (
        <Basicdetails />
      ) : currentForm === 1 ? (
        <Bankdetails />
      ) : currentForm === 2 ? (
        <Fatca />
      ) : (
        <Nominee />
      )}
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => setCurrentForm(currentForm + 1)}
      >
        <Button
          mode="contained"
          style={styles.button}
          labelStyle={{
            fontSize: width * 0.05,
            color: "rgba(255, 255, 255, 1)",
            textAlign: "center",
            fontWeight: "600",
          }}
        >
          Next
        </Button>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    // marginTop: height * 0.01,
  },
  button: {
    marginBottom: height * 0.04,
    marginTop: height * 0.03,
    height: height * 0.07,
    borderRadius: width * 0.03,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 53, 102, 1)",
  },
});
export default Form;
