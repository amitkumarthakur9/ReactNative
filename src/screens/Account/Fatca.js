import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";
import { Button, TextInput } from "react-native-paper";
import { Picker } from "@react-native-picker/picker";
import { height, width } from "../../Dimension";
import { Mfuuserdata } from "../../api/services/endpoints/userEndpoints";
import Loader from "../Components/Loader";
import Formatdate from "../Components/Formatdate";
import { useFonts } from "expo-font";

const Fatca = ({ data }) => {
  const { accountData, setAccountData, currentForm, setCurrentForm } =
    data || [];
  const [loader, setLoader] = useState();

  const [fontsLoaded] = useFonts({
    "Inter-Black": require("../../../assets/fonts/metropolis-latin-500-normal.ttf"),
  });

  if (!accountData.hasOwnProperty("incomeSlab")) {
    const prevYear = new Date().getFullYear() - 1;
    const currentYear = new Date().getFullYear();

    if (new Date().getMonth() <= 3) {
      accountData.netWorthDate = `31-03-${prevYear}`;
    } else {
      accountData.netWorthDate = `31-03-${currentYear}`;
    }
    accountData.jointAccountNumber = "1";
    accountData.taxpayerIDN1 = accountData.panNumber;
    accountData.taxpayerIDDoc1 = "C";
    accountData.residenceCntry1 = "101";
    accountData.taxResFlag = "N";
    accountData.city = accountData.city;
    accountData.nationality = "101";
    accountData.citizenship = "101";
    accountData.birthCountry = "101";
    accountData.netWorth = "";
    accountData.wealthSource = "01";
    accountData.incomeSlab = "01";
    accountData.politicallyExposed = "NA";
    accountData.addressType = "2";
    accountData.occupationCode = accountData.occupation;
    accountData.holdingMode = "SI";
    accountData.userId = accountData.id;
    accountData.action = "fatcaReg";
  }

  const handleChange = (e, key) => {
    setAccountData((preData) => {
      const newData = { ...preData };
      {
        key == "incomeSlab"
          ? (newData.incomeSlab = e)
          : key == "wealthSource"
          ? (newData.wealthSource = e)
          : key == "politicallyExposed"
          ? (newData.politicallyExposed = e)
          : key == "city"
          ? (newData.city = e)
          : (newData[key] = e);
      }
      return newData;
    });
  };

  const handlemfu = () => {
    setLoader(true);
    Mfuuserdata(accountData)
      .then((response) => {
        response.data.success
          ? (setLoader(false), setCurrentForm(currentForm + 1))
          : (Alert.alert("Failed", response.data.error), setLoader(false));
      })
      .catch((error) => {
        console.warn(error);
      });
  };

  //   console.log("nominee", accountData.city);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps="always"
    >
      {/* {console.log("fatca", accountData)} */}
      <Text style={styles.desc}>
        You can make changes to these details later under Account - Fatca
      </Text>

      <Text style={styles.header}>Fatca Details</Text>
      <TouchableOpacity style={styles.dropdown}>
        <Picker
          selectedValue={accountData.incomeSlab}
          onValueChange={(itemValue, itemIndex) =>
            handleChange(itemValue, "incomeSlab")
          }
          mode="dropdown"
          style={styles.Picker}
        >
          {/* <Picker.Item value="" label="Income Slab" /> */}
          <Picker.Item value="01" label="Below 1 Lakh" />
          <Picker.Item value="02" label="> 1 <=5 Lac" />
          <Picker.Item value="03" label="> 5 <=10 Lacs" />
          <Picker.Item value="04" label="> 10 <= 25 Lacs" />
          <Picker.Item value="05" label="> 25 Lacs <= 1 Crore" />
          <Picker.Item value="06" label="Above 1 Crore" />
        </Picker>
      </TouchableOpacity>
      <TouchableOpacity style={styles.dropdown}>
        <Picker
          selectedValue={accountData.wealthSource}
          onValueChange={(itemValue, itemIndex) =>
            handleChange(itemValue, "wealthSource")
          }
          mode="dropdown"
          style={styles.Picker}
        >
          {/* <Picker.Item value="" label="Wealth Source" /> */}
          <Picker.Item value="01" label="Salary" />
          <Picker.Item value="02" label="Business Income" />
          <Picker.Item value="03" label="Gift" />
          <Picker.Item value="04" label="Ancestral Property" />
          <Picker.Item value="05" label="Rental Income" />
          <Picker.Item value="06" label="Prize Money" />
          <Picker.Item value="07" label="Royalty" />
          <Picker.Item value="08" label="Others" />
        </Picker>
      </TouchableOpacity>

      <TouchableOpacity style={styles.dropdown}>
        <Picker
          selectedValue={accountData.politicallyExposed}
          onValueChange={(itemValue, itemIndex) =>
            handleChange(itemValue, "politicallyExposed")
          }
          mode="dropdown"
          style={styles.Picker}
        >
          {/* <Picker.Item label="Politically Exposed Person" /> */}
          <Picker.Item
            value="NA"
            label="the investor is not politically exposed person"
          />
          <Picker.Item
            value="PEP"
            label="the investor is politically exposed person"
          />
          <Picker.Item
            value="RPEP"
            label="if the investor is a relative of the politically exposed
            person"
          />
        </Picker>
      </TouchableOpacity>

      <TextInput
        mode="outlined"
        value={accountData.city}
        onChangeText={(e) => handleChange(e, "city")}
        style={styles.input}
        outlineStyle={styles.outline}
        placeholder="Place Of Birth"
        theme={styles.themeStyle}
        contentStyle={styles.contentStyle}
        placeholderTextColor="rgb(191, 191, 191)"
      />
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
                fontFamily: "Inter-Black",
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
    fontFamily: "Inter-Black",
    fontWeight: "400",
    lineHeight: height * 0.03,
    marginTop: height * 0.01,
    marginBottom: height * 0.05,
  },
  header: {
    fontSize: width * 0.045,
    color: "rgba(2, 48, 71, 1)",
    fontFamily: "Inter-Black",
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
    fontFamily: "Inter-Black",
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
});

export default Fatca;
