import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
  FlatList,
} from "react-native";
import { Button, TextInput } from "react-native-paper";
import { Picker } from "@react-native-picker/picker";
import { height, width } from "../../Dimension";
import { Mfuuserdata } from "../../api/services/endpoints/userEndpoints";
import Loader from "../Components/Loader";
import { Getbank } from "./Data";

const Bankdetails = ({ data }) => {
  const { accountData, setAccountData, currentForm, setCurrentForm } =
    data || [];
  const [loader, setLoader] = useState();

  const banks = Getbank();
  const [searchBank, setSearchBank] = useState();
  const [searchBankCode, setSearchBankCode] = useState();
  const [accountType, setAccountType] = useState("SB");
  const [ifscCode, setIfscCode] = useState("");
  const [accountNo, setAccountNo] = useState("");
  const [proofOfAccount, setProofOfAccount] = useState("14");
  const [filteredBank, setFilteredBank] = useState();
  const [optionsVisible, setOptionsVisible] = useState(false);

  const handleSearch = (text) => {
    const filtered = banks.filter((item) =>
      item.bankName.toLowerCase().includes(text.toLowerCase())
    );
    setOptionsVisible(true);
    setFilteredBank(filtered);
    setSearchBank(text);
  };

  const handleChange = (e, key) => {
    setAccountData((preData) => {
      const newData = { ...preData };
      {
        key == "ifscCode"
          ? setIfscCode(e)
          : key == "accountNo"
          ? setAccountNo(e)
          : key == "accountType"
          ? setAccountType(e)
          : key == "proofOfAccount"
          ? setProofOfAccount(e)
          : "";
      }
      return newData;
    });
  };

  const handlemfu = () => {
    setLoader(true);

    accountData["basket[0][ifscCode]"] = ifscCode;
    accountData["basket[0][accountNumber]"] = "";
    accountData["basket[0][bankAccountType]"] = accountType;
    accountData["basket[0][micr]"] = "";
    accountData["basket[0][proofOfAccount]"] = proofOfAccount;
    accountData["basket[0][bankName]"] = searchBank;
    accountData["basket[0][accountNo]"] = accountNo;
    accountData["basket[0][accountType]"] = accountType;
    accountData["basket[0][bankCode]"] = searchBankCode;
    accountData.web = true;
    accountData.action = "bankDetails";

    Mfuuserdata(accountData)
      .then((response) => {
        console.log("response data of bank details", response.data);
        response.data.success
          ? (setLoader(false), setCurrentForm(currentForm + 1))
          : (Alert.alert("Failed", response.data.error), setLoader(false));
      })
      .catch((error) => {
        console.warn(error);
      });
  };

  const handleItemPress = (selectedItem) => {
    setSearchBank(selectedItem.bankName);
    setSearchBankCode(selectedItem.bankCode);
    setOptionsVisible(false);
  };

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
        value={accountData["basket[0][ifscCode]"]}
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
        value={accountData["basket[0][accountNo]"]}
        onChangeText={(e) => handleChange(e, "accountNo")}
        style={styles.input}
        outlineStyle={styles.outline}
        theme={styles.themeStyle}
        contentStyle={styles.contentStyle}
        keyboardType="phone-pad"
      />

      <TouchableOpacity style={[styles.dropdown]}>
        <Picker
          selectedValue={accountData["basket[0][accountType]"]}
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
        onChangeText={(e) => handleSearch(e)}
        value={searchBank}
        style={styles.input}
        outlineStyle={styles.outline}
        theme={styles.themeStyle}
        contentStyle={styles.contentStyle}
      />

      {filteredBank && optionsVisible && (
        <>
          <ScrollView contentContainerStyle={styles.optionContainer}>
            {filteredBank.map((item) => (
              <TouchableOpacity
                key={item.bankCode}
                onPress={() => handleItemPress(item)}
                style={{ margin: width * 0.02 }}
              >
                <Text style={{ fontSize: width * 0.038, fontWeight: "400" }}>
                  {item.bankName}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </>
      )}

      <TouchableOpacity style={[styles.dropdown]}>
        <Picker
          selectedValue={accountData["basket[0][proofOfAccount]"]}
          onValueChange={(itemValue, itemIndex) =>
            handleChange(itemValue, "proofOfAccount")
          }
          mode="dropdown"
          style={styles.Picker}
        >
          {/* <Picker.Item label="Proof Of Account" /> */}
          <Picker.Item value="14" label="Latest Bank Passbook" />
          <Picker.Item value="15" label="Latest Bank Account Statement" />
          <Picker.Item value="77" label="Cheque Copy" />
          <Picker.Item value="78" label="Bank Letter" />
        </Picker>
      </TouchableOpacity>
      {loader ? (
        <Loader />
      ) : (
        <>
          <TouchableOpacity activeOpacity={0.7} onPress={handlemfu}>
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
        </>
      )}
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
  optionContainer: {
    backgroundColor: "aqua",
    borderWidth: width * 0.005,
    borderColor: "rgb(204, 204, 204)",
    paddingLeft: width * 0.05,
    borderRadius: width * 0.02,
    zIndex: 100,
  },
});

export default Bankdetails;
