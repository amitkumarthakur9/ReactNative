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

const Form2 = () => {
  const [accountNumber, setAccountNumber] = useState();
  const [accountType, setAccountType] = useState();
  const [Bank, setBankName] = useState();
  const [ifsc, setIfsc] = useState();
  const [proof, setProof] = useState();
  return (
    <ScrollView>
      <Text style={styles.desc}>
        You can make changes to these details later under Account - Payment
      </Text>

      <Text style={styles.header}>Account Details</Text>
      <TextInput
        mode="outlined"
        label={
          <Text style={{ color: "rgb(191, 191, 191)", fontWeight: "400" }}>
            Account Number
          </Text>
        }
        value={accountNumber}
        onChangeText={(e) => setAccountNumber(e)}
        style={[styles.input]}
        outlineStyle={styles.outline}
        theme={styles.themeStyle}
        contentStyle={styles.contentStyle}
        keyboardType="phone-pad"
      />

      <TouchableOpacity
        style={[styles.dropdown, { marginBottom: height * 0.03 }]}
      >
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

      <Text style={styles.header}>Bank Details</Text>

      <TouchableOpacity
        style={[styles.dropdown, { marginBottom: height * 0.003 }]}
      >
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

      <TextInput
        mode="outlined"
        label={
          <Text style={{ color: "rgb(191, 191, 191)", fontWeight: "400" }}>
            Bank IFSC Code
          </Text>
        }
        value={ifsc}
        onChangeText={(e) => setIfsc(e)}
        style={[styles.input, { marginBottom: height * 0.03 }]}
        outlineStyle={styles.outline}
        theme={styles.themeStyle}
        contentStyle={styles.contentStyle}
      />

      <Text style={styles.header}>Proof</Text>

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
      <TouchableOpacity activeOpacity={0.7}>
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
          Done
        </Button>
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
    marginBottom: height * 0.01,
    fontSize: width * 0.043,
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
    marginBottom: height * 0.01,
    borderColor: "rgb(191, 191, 191)",
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

export default Form2;
