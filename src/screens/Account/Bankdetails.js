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
import { Mfuuserdata } from "../../api/services/endpoints/userEndpoints";

const Bankdetails = ({ data }) => {
  const [ifsc, setIfsc] = useState();
  const [accountNumber, setAccountNumber] = useState();
  const [accountType, setAccountType] = useState();
  const [Bank, setBankName] = useState();
  const [proof, setProof] = useState();
  const { accountData, setAccountData, currentForm, setCurrentForm } =
    data || [];

  {
    if (accountData.hasOwnProperty("basket")) {
      console.log("yes");
    } else {
      accountData.basket = [
        {
          ifscCode: "",
          bankAccountType: "",
          micr: "",
          proofOfAccount: "",
          bankName: "STATE BANK OF INDIA",
          accountNo: "",
          accountType: "",
          bankCode: "002",
        },
      ];
    }
  }

  const handleChange = (e, key) => {
    setAccountData((preData) => {
      const newData = { ...preData };
      {
        key == "ifscCode"
          ? (newData.basket[0]["ifscCode"] = e)
          : key == "accountNo"
          ? (newData.basket[0]["accountNo"] = e)
          : key == "accountType"
          ? (newData.basket[0]["accountType"] = e)
          : key == "proofOfAccount"
          ? (newData.basket[0]["proofOfAccount"] = e)
          : (newData[key] = e);
      }
      return newData;
    });
  };

  const handlemfu = () => {
    accountData.userId = accountData.id;
    accountData.dob = "29-11-2000";
    accountData.action = "bankDetails";
    Mfuuserdata(accountData)
      .then((response) => {
        console.log("mfu bank data", response.data);
      })
      .catch((error) => {
        console.warn(error);
      });
    setCurrentForm(currentForm + 1);
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {console.log("data", accountData)}
      <Text style={styles.desc}>
        You can make changes to these details later under Account - Bank
      </Text>

      <Text style={styles.header}>Bank Details</Text>
      <TextInput
        mode="outlined"
        placeholder="Bank IFSC Code"
        placeholderTextColor="rgb(191, 191, 191)"
        value={accountData.basket[0]["ifscCode"]}
        onChangeText={(e) => handleChange(e, "ifscCode")}
        style={styles.input}
        outlineStyle={styles.outline}
        theme={styles.themeStyle}
        contentStyle={styles.contentStyle}
      />
      <TextInput
        mode="outlined"
        placeholder="Account Number"
        placeholderTextColor="rgb(191, 191, 191)"
        value={accountData.basket[0]["accountNo"]}
        onChangeText={(e) => handleChange(e, "accountNo")}
        style={styles.input}
        outlineStyle={styles.outline}
        theme={styles.themeStyle}
        contentStyle={styles.contentStyle}
        keyboardType="phone-pad"
      />

      <TouchableOpacity style={[styles.dropdown]}>
        <Picker
          selectedValue={accountData.basket[0]["accountType"]}
          onValueChange={(itemValue, itemIndex) =>
            handleChange(itemValue, "accountType")
          }
          mode="dropdown"
          style={styles.Picker}
        >
          <Picker.Item value="SB" label="Savings Account" />
          <Picker.Item value="CC" label="Cash/Credit" />
          <Picker.Item value="CA" label="Current Account" />
          <Picker.Item value="FCNR" label="Foreign Currency Non Resident" />
          <Picker.Item value="NRE" label="Non Resident External Account" />
          <Picker.Item value="NRO" label="Non Resident Ordinary" />
          <Picker.Item value="OD" label="Overdraft Account" />
          <Picker.Item value="PSB" label="Post Office Saving Bank Account" />
        </Picker>
      </TouchableOpacity>

      <TextInput
        mode="outlined"
        placeholder="Bank Name"
        placeholderTextColor="rgb(191, 191, 191)"
        value={"STATE BANK OF INDIA"}
        // onChangeText={(e) => setBankName(e)}
        style={styles.input}
        outlineStyle={styles.outline}
        theme={styles.themeStyle}
        contentStyle={styles.contentStyle}
        disabled
      />

      <TouchableOpacity style={[styles.dropdown]}>
        <Picker
          selectedValue={Bank}
          onValueChange={(itemValue, itemIndex) =>
            handleChange(itemValue, "proofOfAccount")
          }
          mode="dropdown"
          style={styles.Picker}
        >
          <Picker.Item label="Proof Of Account" />
          <Picker.Item value="14" label="Latest Bank Passbook" />
          <Picker.Item value="15" label="Latest Bank Account Statement" />
          <Picker.Item value="77" label="Cheque Copy" />
          <Picker.Item value="78" label="Bank Letter" />
        </Picker>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.7}
        //   onPress={() => setCurrentForm(currentForm + 1)}
        onPress={handlemfu}
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
    color: "rgba(2, 48, 71, 1)",
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
