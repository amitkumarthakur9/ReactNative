import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import { height, width } from "../../Dimension";
import { Ionicons } from "@expo/vector-icons";
import { TextInput, Button, Checkbox, RadioButton } from "react-native-paper";
import { Picker } from "@react-native-picker/picker";
import { useRoute, useNavigation } from "@react-navigation/native";
import Loader from "../Components/Loader";
import Formatfundname from "../Components/Formatfundname";
import { useFonts } from "expo-font";
import {
  Mfubanksdata,
  Redeemholding,
} from "../../api/services/endpoints/buyEndpoints";
import Formatdate from "../Components/Formatdate";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Mandateregister } from "../../api/services/endpoints/buyEndpoints";
import Header from "../Components/Header";

export default Registermandate = () => {
  const [check, setCheck] = useState(true);
  const [banks, setBanks] = useState(null);
  const [bankid, setBankid] = useState(null);
  const [amountInput, setAmountInput] = useState("0");
  const [startdate, setStartdate] = useState("");
  const [showStartDatePicker, setShowStartDatePicker] = useState(false);
  const [date, setDate] = useState(new Date());
  const route = useRoute();
  const navigation = useNavigation();
  const [loader, setLoader] = useState(false);
  const [radioValue, setRadioValue] = useState("PN");

  const [fontsLoaded] = useFonts({
    "Inter-Black": require("../../../assets/fonts/metropolis-latin-500-normal.ttf"),
  });

  useEffect(() => {
    Mfubanksdata()
      .then((response) => {
        if (response.data.success) {
          setBanks(response.data.additionlBankArray);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const handleSubmit = () => {
    if (bankid == null) {
      Alert.alert("Please select bank account");
      return;
    }
    setLoader(true);
    const data = {
      amount: amountInput,
      startDate: startdate,
      regMode: radioValue,
      selectBankAccount: bankid,
      action: "epayzReg",
    };
    Mandateregister(data)
      .then((response) => {
        if (response.data.success) {
          Alert.alert("Success");
          setLoader(false);
        } else {
          Alert.alert("Failed", response.data.error);
          setLoader(false);
        }
      })
      .catch((e) => {
        Alert.alert("Failed", e);
        setLoader(false);
      });
  };

  const handleDatePress = () => {
    setShowStartDatePicker(true);
  };

  const handleChange = (value) => {
    setShowStartDatePicker(false);
    setStartdate(Formatdate(value));
  };

  return (
    <View style={styles.container}>
      <Header title="Register Mandate" />

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ marginTop: height * 0.02 }}
      >
        <View style={styles.Box}>
          <Text style={[styles.header, { marginTop: height * 0.02 }]}>
            Mandate Amount
          </Text>
          <TextInput
            mode="outlined"
            value={amountInput}
            placeholder="Enter Mandate Amount"
            outlineStyle={styles.outline}
            theme={styles.themeStyle}
            style={styles.input}
            keyboardType="number-pad"
            onChangeText={(e) => setAmountInput(e)}
          />
          <Text style={styles.header}>Choose Bank</Text>
          <TouchableOpacity style={styles.dropdown}>
            <Picker
              selectedValue={bankid}
              onValueChange={(itemValue) => setBankid(itemValue)}
              mode="dropdown"
            >
              <Picker.Item label="Select Bank Account" value="" />
              {banks ? (
                banks.map((data, index) => (
                  <Picker.Item
                    label={`${data.bankName}(${data.accountNo})`}
                    value={data.id}
                    key={index}
                  />
                ))
              ) : (
                <Picker.Item label="Bank not available" value="" />
              )}
            </Picker>
          </TouchableOpacity>
          <View
            style={{ marginBottom: height * 0.02, marginTop: height * 0.02 }}
          >
            <Text style={styles.header}>Registration Mode</Text>
            <RadioButton.Group
              onValueChange={(newValue) => setRadioValue(newValue)}
              value={radioValue}
            >
              <View style={styles.typeContainer}>
                <RadioButton value="PN" />
                <Text style={styles.radioTitle}>Payment Net-banking Mode</Text>
              </View>
              <View style={styles.typeContainer}>
                <RadioButton value="PD" />
                <Text style={styles.radioTitle}>Payment Debit Card Mode</Text>
              </View>
            </RadioButton.Group>
          </View>

          <TouchableOpacity onPress={() => handleDatePress()}>
            <TextInput
              label="Start Date"
              mode="outlined"
              placeholder="Start Date"
              placeholderTextColor="rgb(191, 191, 191)"
              value={startdate}
              editable={false}
              style={styles.input}
              outlineStyle={styles.outline}
              theme={styles.themeStyle}
              contentStyle={styles.contentStyle}
            />
          </TouchableOpacity>

          {showStartDatePicker && (
            <DateTimePicker
              value={date}
              mode="date"
              display="default"
              onChange={(e, value) => handleChange(value)}
            />
          )}

          <View
            style={{ marginTop: height * 0.03, marginBottom: height * 0.04 }}
          >
            {loader ? (
              <Loader />
            ) : (
              <TouchableOpacity onPress={() => handleSubmit()}>
                <Button mode="contained" style={styles.Button}>
                  Submit
                </Button>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    backgroundColor: "white",
  },
  Box: {
    padding: width * 0.05,
    borderWidth: width * 0.003,
    borderColor: "#D9D9D9",
    borderRadius: width * 0.042,
    margin: width * 0.04,
  },

  header: {
    fontSize: width * 0.045,
    color: "rgba(2, 48, 71, 1)",
    fontFamily: "Inter-Black",
    fontWeight: "500",
    marginBottom: height * 0.015,
    opacity: 0.6,
  },
  typeContainer: {
    flexDirection: "row",
  },

  input: {
    borderRadius: width * 0.05,
    marginBottom: height * 0.02,
    fontSize: width * 0.043,
  },
  outline: {
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

  Button: {
    alignItems: "center",
    borderRadius: width * 0.03,
    borderWidth: 1,
    borderColor: "#023047",
    padding: width * 0.01,
    backgroundColor: "#023047",
    marginTop: height * 0.02,
  },

  radioTitle: {
    alignSelf: "center",
    color: "rgba(2, 48, 71, 1)",
    opacity: 0.6,
  },
});
