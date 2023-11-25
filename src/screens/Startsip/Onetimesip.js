import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { height, width } from "../../Dimension";
import { Ionicons } from "@expo/vector-icons";
import { TextInput } from "react-native-paper";
import { Picker } from "@react-native-picker/picker";
import Footerbutton from "../../screen/Startsip/Footerbutton";
import { Slider } from "@miblanchard/react-native-slider";
// import DateTimePicker from "@react-native-community/datetimepicker";

export default Uploadscreens = ({ navigation }) => {
  const [accountNumber, setAccountNumber] = useState();
  const [text, setText] = React.useState("");
  const [accountType, setAccountType] = useState();
  const [Bank, setBankName] = useState();
  const [MonthlyInvestment, setMonthlyInvestment] = useState(1000);
  const [timePeriod, setTimePeriod] = useState(1);
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleDatePress = () => {
    setShowDatePicker(true);
  };

  const handleDateChange = (event, selectedDate) => {
    currentDate = selectedDate || date;
    setShowDatePicker(false);
    setDate(currentDate);
  };

  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <View style={styles.contentContainer}>
          <Ionicons
            name="arrow-back"
            size={width * 0.08}
            color="white"
            onPress={() => navigation.goBack()}
            style={styles.item}
          />
          <Text style={[styles.item, styles.goal]}>One-Time Investment</Text>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.axisBox}>
          <View
            style={{ marginTop: height * -0.12, marginBottom: height * -0.02 }}
          >
            <View style={styles.headerContainer}>
              <Image
                source={require("../../../assets/startsipIcon/AXISBANK.png")}
                style={{
                  width: width * 0.13,
                  height: height * 0.055,
                  resizeMode: "contain",
                }}
              />
              <View style={styles.titleBox}>
                <Text
                  style={{
                    color: "rgba(2, 48, 71, 1)",
                    fontSize: width * 0.045,
                    fontWeight: "600",
                    lineHeight: height * 0.035,
                    textAlign: "left",
                  }}
                >
                  Axis Multicap Growth Fund
                </Text>
              </View>
            </View>
            <Text style={styles.desc}>
              Lorem impsome delmonto elsondn oklsdoliston amdelo toydj jojsdojf
              osjko.
            </Text>
            <View style={styles.typeContainer}>
              <View>
                <Text style={styles.percentage}>EQUITY | LARGE CAP</Text>
              </View>
            </View>
          </View>
        </View>

        <View
          style={{
            padding: width * 0.04,
            marginTop: height * 0.026,
          }}
        >
          <Text style={styles.header}>Select Folio</Text>

          <TouchableOpacity style={styles.dropdown}>
            <Picker
              selectedValue={accountType}
              onValueChange={(itemValue, itemIndex) =>
                setAccountType(itemValue)
              }
              mode="dropdown"
              style={styles.Picker}
            >
              <Picker.Item
                label="Create New"
                value="Create New"
                style={{ color: "#219EBC" }}
              />
              <Picker.Item label="Folio 123445" value="Folio 123445" />
              <Picker.Item label="Folio 123445" value="Folio 123445" />
              <Picker.Item label="Folio 123445" value="Folio 123445" />
            </Picker>
          </TouchableOpacity>
        </View>
        <View
          style={{
            padding: width * 0.04,
          }}
        >
          <View style={[styles.flexContainer]}>
            <Text
              style={[
                styles.rangeText,
                { textAlign: "left", marginTop: width * 0.053 },
              ]}
            >
              Investment Amount
            </Text>
            <Text
              style={{
                textAlign: "right",
                marginTop: width * 0.04,
                fontWeight: "600",
                fontSize: width * 0.05,
                marginRight: width * 0.053,
              }}
            >
              ₹
            </Text>

            <TextInput
              mode="outlined"
              placeholder="Enter Amount"
              placeholderTextColor="rgb(191, 191, 191)"
              value={accountNumber}
              onChangeText={(e) => setAccountNumber(e)}
              style={[styles.input]}
              outlineStyle={styles.outline}
              theme={styles.themeStyle}
              contentStyle={styles.contentStyle}
              keyboardType="phone-pad"
            />
          </View>
        </View>

        <View style={{ marginTop: height * 0.137 }}>
          <Footerbutton />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    // alignItems: "center",
  },
  container1: {
    backgroundColor: "rgba(2, 48, 71, 1)",
    width: width,
    height: height * 0.17,
    borderColor: "rgba(0, 0, 0, 0.3)",
    borderRadius: width * 0.06,
  },
  contentContainer: {
    flexDirection: "row",
    padding: width * 0.02,
    marginTop: height * 0.025,
  },

  item: {
    marginTop: height * 0.06,
    margin: width * 0.03,
    flex: 1,
  },
  goal: {
    marginLeft: -width * 0.55,
    color: "rgba(255, 255, 255, 1)",
    fontWeight: "600",
    fontSize: width * 0.045,
    lineHeight: height * 0.04,
  },

  axisBox: {
    padding: width * 0.053,
    borderColor: "#D9D9D9",
    borderWidth: width * 0.003,
    borderRadius: width * 0.042,
    marginLeft: width * 0.027,
    marginRight: width * 0.027,
    marginTop: height * 0.026,
  },

  header: {
    fontSize: width * 0.045,
    color: "rgba(2, 48, 71, 1)",
    fontWeight: "500",
    marginBottom: height * 0.015,
    opacity: 0.6,
  },

  inputContainer: {
    marginTop: height * 0.2,
    paddingLeft: width * 0.04,
    position: "absolute",
  },
  headerContainer: {
    flexDirection: "row",
    marginTop: height * 0.1,
    padding: width * 0.05,
  },

  titleBox: {
    flex: 1, // This makes the title take up the available space
    // alignItems: "center", // Center horizontally
    justifyContent: "center", // Center vertically
    marginLeft: width * 0.02,
  },
  desc: {
    fontSize: width * 0.03,
    color: "#023047",
    fontWeight: "500",
    opacity: 0.6,
    lineHeight: height * 0.02,
    padding: width * 0.04,
  },

  percentage: {
    fontSize: width * 0.037,
    color: "rgba(2, 48, 71, 1)",
    fontWeight: "600",
    lineHeight: height * 0.03,
    padding: width * 0.04,
  },
  typeContainer: {
    flexDirection: "row",
  },

  detailsView: {
    borderBottomWidth: width * 0.004,
    borderBottomColor: "rgb(230, 230, 230)",
    margin: width * 0.02,
    paddingBottom: width * 0.02,
  },

  input: {
    borderRadius: width * 0.05,
    marginBottom: height * 0.01,
    fontSize: width * 0.043,
    width: width * 0.45,
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

  flexContainer: {
    flexDirection: "row",
    marginTop: height * 0.026,
  },

  percentage1: {
    color: "rgba(35, 179, 113, 1)",
    fontWeight: "600",
    fontSize: width * 0.035,
  },

  rangeText: {
    flex: 1,
    textAlign: "right",
    color: "#023047",
    lineHeight: height * 0.025,
    fontSize: width * 0.035,
    fontWeight: "500",
    opacity: 0.8,
  },
  rangeTextPercentage: {
    flex: 1,
    textAlign: "left",
    color: "rgba(73, 69, 79, 1)",
    lineHeight: height * 0.03,
    fontSize: width * 0.04,
    fontWeight: "600",
    width: width * 0.373,
    borderWidth: width * 0.001,
    marginLeft: width * 0.2,
    borderColor: "#48484A",
    borderRadius: width * 0.021,
    padding: width * 0.04,
  },
});
