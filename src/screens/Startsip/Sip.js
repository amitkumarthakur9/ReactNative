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
import { TextInput, Button } from "react-native-paper";
import { Picker } from "@react-native-picker/picker";
import Footerbutton from "./Footerbutton";
import { Slider } from "@miblanchard/react-native-slider";
import { Foliodata } from "../Assetpreview/Data";
import Loader from "../Components/Loader";
import Formatfundname from "../Components/Formatfundname";
import { useRoute, useNavigation } from "@react-navigation/native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Yearmonthday } from "../Components/Formatdate";
import { addToCartSip } from "../Dashboard/Explore";
import { useFonts } from "expo-font";
export default Sip = ({ navigation }) => {
  const [folioNumber, setFolioNumber] = useState();
  const [timePeriod, setTimePeriod] = useState(1);
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const route = useRoute();
  const { mfData } = route.params;
  const folio = Foliodata(mfData.fundHouse.id);
  const [amount, setAmount] = useState(mfData.minPurchase.toString());

  const handleDatePress = () => {
    setShowDatePicker(true);
  };

  const handleDateChange = (event, selectedDate) => {
    currentDate = selectedDate || date;
    setShowDatePicker(false);
    setDate(currentDate);
  };

  const handleInvestNow = (mfId, minPurchase, folioNumber, Sdate, Months) => {
    const sipDate = Yearmonthday(Sdate);
    const noOfMonths = 12 * Months;

    addToCartSip(mfId, minPurchase, folioNumber, sipDate, noOfMonths).then(
      (response) => {
        if (response) {
          navigation.push("AddToCart");
        }
      }
    );
  };

  const [fontsLoaded] = useFonts({
    "Inter-Black": require("../../../assets/fonts/metropolis-latin-500-normal.ttf"),
  });

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
          <Text style={[styles.item, styles.goal]}>New SIP</Text>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {Object.keys(mfData).length > 0 ? (
          <>
            <View style={styles.axisBox}>
              <View
                style={{
                  marginTop: height * -0.12,
                  marginBottom: height * -0.02,
                }}
              >
                <View style={styles.headerContainer}>
                  <Image
                    source={{ uri: mfData.fundHouse.logoUrl }}
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
                        fontFamily: "Inter-Black",
                        fontWeight: "600",
                        lineHeight: height * 0.035,
                        textAlign: "left",
                      }}
                    >
                      {Formatfundname(mfData.name)}
                    </Text>
                  </View>
                </View>
                {/* <Text style={styles.desc}>
                  Lorem impsome delmonto elsondn oklsdoliston amdelo toydj
                  jojsdojf osjko.
                </Text> */}
                <View style={styles.typeContainer}>
                  <View>
                    <Text style={styles.percentage}>
                      {mfData.schemeType} | {mfData.type} | Min Amount :
                      {mfData.minPurchase}
                    </Text>
                  </View>
                </View>
              </View>
            </View>

            <View
              style={{
                padding: width * 0.04,
                marginTop: height * 0.04,
              }}
            >
              {folio.length > 0 && (
                <>
                  <Text style={styles.header}>Select Folio</Text>

                  <TouchableOpacity
                    style={[styles.dropdown, { marginBottom: height * 0.03 }]}
                  >
                    <Picker
                      selectedValue={folioNumber}
                      onValueChange={(itemValue, itemIndex) =>
                        setFolioNumber(itemValue)
                      }
                      mode="dropdown"
                    >
                      <Picker.Item label="New Folio" value="" />
                      {folio.map((item, index) => (
                        <Picker.Item label={item} value={item} key={index} />
                      ))}
                    </Picker>
                  </TouchableOpacity>
                </>
              )}

              {/* <Text style={styles.header}>Select Mandate</Text>

              <TouchableOpacity
                style={[styles.dropdown, { marginBottom: height * 0.003 }]}
              >
                <Picker
                  selectedValue={Bank}
                  onValueChange={(itemValue, itemIndex) =>
                    setBankName(itemValue)
                  }
                  mode="dropdown"
                  style={styles.Picker}
                >
                  <Picker.Item label="Choose Mandate" value="Choose Mandate" />
                </Picker>
              </TouchableOpacity> */}

              <View>
                <View style={{ marginTop: height * 0.026 }}>
                  <Text style={styles.header}>SIP Start Date</Text>
                  {/* <Text
                    style={[
                      styles.header,
                      { marginLeft: width * 0.21, lineHeight: height * 0.028 },
                    ]}
                  >
                    Frequency
                  </Text> */}
                </View>
                <View style={styles.flexContainer}>
                  <TouchableOpacity onPress={handleDatePress}>
                    <TextInput
                      mode="outlined"
                      //   label={
                      //     <Text
                      //       style={{
                      //         color: "rgb(191, 191, 191)",
                      //         fontFamily: "Inter-Black",
                      //         fontWeight: "400",
                      //       }}
                      //     >
                      //       Choose Date
                      //     </Text>
                      //   }
                      placeholder="Date"
                      value={date.toDateString()}
                      editable={false}
                      style={[
                        styles.input,
                        { marginTop: height * -0.01, width: width * 0.43 },
                      ]}
                      outlineStyle={styles.outline}
                      theme={styles.themeStyle}
                      contentStyle={styles.contentStyle}
                    />
                  </TouchableOpacity>
                  {showDatePicker && (
                    <DateTimePicker
                      value={date}
                      mode="date" // or "time" for time picker
                      display="default" // Set display to "spinner" for Android
                      onChange={(event, selectedDate) =>
                        handleDateChange(event, selectedDate)
                      }
                    />
                  )}

                  {/* <TouchableOpacity
                    style={[
                      styles.dropdown,
                      {
                        marginTop: height * -0.004,
                        width: width * 0.43,
                        height: height * 0.069,
                        marginLeft: width * 0.053,
                      },
                    ]}
                  >
                    <Picker
                      selectedValue={Bank}
                      onValueChange={(itemValue, itemIndex) =>
                        setBankName(itemValue)
                      }
                      mode="dropdown"
                      style={styles.Picker}
                    >
                      <Picker.Item
                        label="Choose Mandate"
                        value="Choose Mandate"
                      />
                    </Picker>
                  </TouchableOpacity> */}
                </View>
              </View>
            </View>
            <View
              style={{
                padding: width * 0.04,
              }}
            >
              <View>
                <View style={styles.flexContainer}>
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
                      fontFamily: "Inter-Black",
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
                    value={amount}
                    onChangeText={(e) => setAmount(e)}
                    style={[styles.input]}
                    outlineStyle={styles.outline}
                    theme={styles.themeStyle}
                    contentStyle={styles.contentStyle}
                    keyboardType="phone-pad"
                  />
                </View>
              </View>

              <View>
                <View style={styles.flexContainer}>
                  <Text
                    style={[
                      styles.rangeText,
                      { textAlign: "left", marginTop: width * 0.053 },
                    ]}
                  >
                    Time Period
                  </Text>
                  <Text style={styles.rangeTextPercentage}>
                    {timePeriod} Years
                  </Text>
                </View>
                <Slider
                  marginTop={height * 0.013}
                  animateTransitions
                  maximumTrackTintColor={"rgba(26, 28, 23, 0.12)"}
                  minimumTrackTintColor={"#023047"}
                  maximumValue={30}
                  minimumValue={1}
                  onValueChange={(yearValue) =>
                    setTimePeriod(Math.floor(yearValue))
                  }
                  value={timePeriod}
                  thumbTintColor={"rgba(33, 158, 188, 1)"}
                  trackStyle={{
                    height: height * 0.008,
                    borderRadius: width * 0.03,
                  }}
                />
              </View>
              <View
                style={{
                  marginTop: height * 0.05,
                  marginBottom: height * 0.02,
                }}
              >
                <TouchableOpacity
                  onPress={() =>
                    handleInvestNow(
                      mfData.id,
                      amount,
                      folioNumber,
                      date,
                      timePeriod
                    )
                  }
                >
                  <Button mode="contained" style={styles.Button}>
                    Invest Now
                  </Button>
                </TouchableOpacity>
              </View>
            </View>
          </>
        ) : (
          <>
            <Loader />
          </>
        )}
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
    fontFamily: "Inter-Black",
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
    marginTop: height * 0.015,
  },

  header: {
    fontSize: width * 0.045,
    color: "rgba(2, 48, 71, 1)",
    fontFamily: "Inter-Black",
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
    fontFamily: "Inter-Black",
    fontWeight: "500",
    opacity: 0.6,
    lineHeight: height * 0.02,
    padding: width * 0.04,
  },

  percentage: {
    fontSize: width * 0.037,
    color: "#023047",
    fontFamily: "Inter-Black",
    fontWeight: "600",
    lineHeight: height * 0.03,
    padding: width * 0.04,
  },
  typeContainer: {
    flexDirection: "row",
  },

  input: {
    borderRadius: width * 0.05,
    marginBottom: height * 0.01,
    fontSize: width * 0.043,
    width: width * 0.4,
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
    marginBottom: height * 0.01,
    borderColor: "rgb(191, 191, 191)",
  },
  Picker: {
    color: "rgb(191, 191, 191)",
  },

  flexContainer: {
    flexDirection: "row",
    marginTop: height * 0.01,
  },

  percentage1: {
    color: "rgba(35, 179, 113, 1)",
    fontFamily: "Inter-Black",
    fontWeight: "600",
    fontSize: width * 0.035,
  },

  rangeText: {
    flex: 1,
    textAlign: "right",
    color: "#023047",
    lineHeight: height * 0.025,
    fontSize: width * 0.035,
    fontFamily: "Inter-Black",
    fontWeight: "500",
    opacity: 0.8,
  },
  rangeTextPercentage: {
    flex: 1,
    textAlign: "left",
    color: "rgba(73, 69, 79, 1)",
    lineHeight: height * 0.03,
    fontSize: width * 0.04,
    fontFamily: "Inter-Black",
    fontWeight: "600",
    width: width * 0.373,
    borderWidth: width * 0.001,
    marginLeft: width * 0.2,
    borderColor: "#48484A",
    borderRadius: width * 0.021,
    padding: width * 0.04,
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
