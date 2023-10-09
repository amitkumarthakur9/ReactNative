import React, { useState } from "react";
import { ScrollView, Text, View, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";
import { height, width } from "../../Dimension";
import Accountpagination from "./Accountpagination";
import Form from "./Form";

const Account = () => {
  const [currentForm, setCurrentForm] = useState(0);
  return (
    <View style={styles.container}>
      <Accountpagination
        data={{ currentForm: currentForm, setCurrentForm: setCurrentForm }}
      />
      <Form
        data={{ currentForm: currentForm, setCurrentForm: setCurrentForm }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: width * 0.06,
  },
  formContainer: {
    marginTop: height * 0.01,
  },
  desc: {
    color: "rgba(2, 48, 71, 1)",
    fontSize: width * 0.04,
    fontWeight: "400",
    lineHeight: height * 0.03,
    marginTop: height * 0.02,
    marginBottom: height * 0.05,
  },
});
export default Account;
