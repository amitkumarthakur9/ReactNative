import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Button, TextInput } from "react-native-paper";
import { Picker } from "@react-native-picker/picker";
import { height, width } from "../../Dimension";

const Bankdetails = () => {
  const [ifsc, setIfsc] = useState();
  const [accountNumber, setAccountNumber] = useState();
  const [accountType, setAccountType] = useState();
  const [Bank, setBankName] = useState();
  const [proof, setProof] = useState();
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Text style={styles.desc}>
        You can make changes to these details later under Account - Bank
      </Text>

      <Text style={styles.header}>Bank Details</Text>
      <TextInput
        mode="outlined"
        placeholder="Bank IFSC Code"
        placeholderTextColor="rgb(191, 191, 191)"
        value={ifsc}
        onChangeText={(e) => setIfsc(e)}
        style={styles.input}
        outlineStyle={styles.outline}
        theme={styles.themeStyle}
        contentStyle={styles.contentStyle}
      />
      <TextInput
        mode="outlined"
        placeholder="Account Number"
        placeholderTextColor="rgb(191, 191, 191)"
        value={accountNumber}
        onChangeText={(e) => setAccountNumber(e)}
        style={styles.input}
        outlineStyle={styles.outline}
        theme={styles.themeStyle}
        contentStyle={styles.contentStyle}
        keyboardType="phone-pad"
      />

      <TouchableOpacity style={[styles.dropdown]}>
        <Picker
          selectedValue={accountType}
          onValueChange={(itemValue, itemIndex) => setAccountType(itemValue)}
          mode="dropdown"
          style={styles.Picker}
        >
          <Picker.Item
            label="Select Account Type"
            value="Select Account Type"
          />
          <Picker.Item label="Saving Account" value="Saving Account" />
          <Picker.Item label="Current Account" value="Current Account" />
        </Picker>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.dropdown]}>
        <Picker
          selectedValue={Bank}
          onValueChange={(itemValue, itemIndex) => setBankName(itemValue)}
          mode="dropdown"
          style={styles.Picker}
        >
          <Picker.Item label="Select Bank Name" value="Select Bank Name" />
          <Picker.Item label="Axis Bank" value="Axis Bank" />
          <Picker.Item label="Kotak Bank" value="Kotak Bank" />
        </Picker>
      </TouchableOpacity>

      <TouchableOpacity style={styles.dropdown}>
        <Picker
          selectedValue={proof}
          onValueChange={(itemValue, itemIndex) => setProof(itemValue)}
          mode="dropdown"
          style={styles.Picker}
        >
          <Picker.Item label="Select Proof" value="Select Proof" />
          <Picker.Item label="Adhaar Card" value="Adhaar Card" />
          <Picker.Item label="Pan Card" value="Pan Card" />
        </Picker>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  desc: {
    color: "rgba(2, 48, 71, 1)",
    fontSize: width * 0.04,
    fontWeight: "400",
    lineHeight: height * 0.03,
    marginTop: height * 0.01,
    marginBottom: height * 0.05,
  },
  header: {
    fontSize: width * 0.045,
    color: "rgba(2, 48, 71, 1)",
    fontWeight: "500",
    marginBottom: height * 0.015,
    opacity: 0.6,
  },
  input: {
    borderRadius: width * 0.05,
    fontSize: width * 0.043,
    marginBottom: height * 0.02,
  },
  outline: {
    borderRadius: width * 0.02,
    backgroundColor: "white",
    borderColor: "rgb(191, 191, 191)",
  },
  themeStyle: {
    colors: {
      primary: "rgba(2, 48, 71, 1)",
    },
  },
  contentStyle: {
    color: "rgba(2, 48, 71, 1)",
    fontWeight: "600",
  },
  dropdown: {
    borderWidth: height * 0.0015,
    borderRadius: width * 0.02,
    borderColor: "rgb(191, 191, 191)",
    marginBottom: height * 0.02,
  },
  Picker: {
    color: "rgb(191, 191, 191)",
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

export default Bankdetails;
