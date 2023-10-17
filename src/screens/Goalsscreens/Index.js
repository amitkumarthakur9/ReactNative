import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { height, width } from "../../Dimension";
import { Ionicons } from "@expo/vector-icons";
import { Button, TextInput } from "react-native-paper";
import { Picker } from "@react-native-picker/picker";
import { Slider } from "@miblanchard/react-native-slider";
import DateTimePicker from "@react-native-community/datetimepicker";
import Header from "../Components/Header";

export default Goalsscreen = () => {
  const [accountNumber, setAccountNumber] = useState();
  const [Description, setDescription] = useState();
  const [accountType, setAccountType] = useState();
  const [Bank, setBankName] = useState();
  const [ifsc, setIfsc] = useState();
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
      <Header title="Add Goal" showPlusSign={false} />
      {/* <View style={styles.arrowContainer}>
        <TouchableOpacity style={styles.arrow}>
          <Ionicons
            style={styles.iconArrow}
            name="arrow-back"
            size={30}
            onPress={() => navigation.goBack()}
          />
          <Text style={styles.headerText}>Add New Goal</Text>
          <Ionicons
            style={styles.iconClose}
            name="close"
            size={30}
            onPress={() => navigation.goBack()}
          />
        </TouchableOpacity>
      </View> */}

      <ScrollView>
        <View style={{ padding: width * 0.04 }}>
          <Text style={styles.header}>Goal Title</Text>
          <TextInput
            mode="outlined"
            label={
              <Text style={{ color: "rgb(191, 191, 191)", fontWeight: "400" }}>
                New Mobile
              </Text>
            }
            value={accountNumber}
            onChangeText={(e) => setAccountNumber(e)}
            style={[styles.input, { marginBottom: height * 0.03 }]}
            outlineStyle={styles.outline}
            theme={styles.themeStyle}
            contentStyle={styles.contentStyle}
            keyboardType="phone-pad"
          />

          <Text style={styles.header}>Goal Description</Text>
          <TextInput
            mode="outlined"
            label={
              <Text style={{ color: "rgb(191, 191, 191)", fontWeight: "400" }}>
                Message
              </Text>
            }
            value={ifsc}
            onChangeText={(e) => setDescription(e)}
            style={[
              styles.input,
              { marginBottom: height * 0.03, height: height * 0.175 },
            ]}
            outlineStyle={styles.outline}
            theme={styles.themeStyle}
            contentStyle={styles.contentStyle}
          />

          <Text style={styles.header}>Icon</Text>
          <TouchableOpacity
            style={[styles.dropdown, { marginBottom: height * 0.03 }]}
          >
            <Picker
              selectedValue={accountType}
              onValueChange={(itemValue, itemIndex) =>
                setAccountType(itemValue)
              }
              mode="dropdown"
              style={styles.Picker}
            >
              <Picker.Item label="Choose Icon" value="Choose Icon" />
              {/* <Picker.Item label="jpg" value="jpg" />
            <Picker.Item label="jpeg" value="jpeg" /> */}
            </Picker>
          </TouchableOpacity>

          <Text style={styles.header}>Color</Text>

          <TouchableOpacity
            style={[styles.dropdown, { marginBottom: height * 0.003 }]}
          >
            <Picker
              selectedValue={Bank}
              onValueChange={(itemValue, itemIndex) => setBankName(itemValue)}
              mode="dropdown"
              style={styles.Picker}
            >
              <Picker.Item label="Choose Color" value="Choose Color" />
              {/* <Picker.Item label="Black" value="Black" />
            <Picker.Item label="Rose" value="Rose" /> */}
            </Picker>
          </TouchableOpacity>

          <Text style={[styles.header, { marginTop: height * 0.022 }]}>
            Achieve By
          </Text>
          <TouchableOpacity onPress={handleDatePress}>
            <TextInput
              mode="outlined"
              label={
                <Text
                  style={{ color: "rgb(191, 191, 191)", fontWeight: "400" }}
                >
                  Choose Date
                </Text>
              }
              value={date.toDateString()}
              editable={false}
              style={[styles.input, { marginBottom: height * 0.005 }]}
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

          <Text style={[styles.header, { marginTop: height * 0.021 }]}>
            Current Goal
          </Text>

          <TextInput
            mode="outlined"
            label={
              <Text style={{ color: "rgb(191, 191, 191)", fontWeight: "400" }}>
                Enter Amount required to Achieve goal
              </Text>
            }
            value={ifsc}
            onChangeText={(e) => setIfsc(e)}
            style={[styles.input, { marginBottom: height * 0.03 }]}
            outlineStyle={styles.outline}
            theme={styles.themeStyle}
            contentStyle={styles.contentStyle}
          />

          <Text style={styles.header}>
            Account for Expected Average Inflation
          </Text>

          <View style={[{ flexDirection: "row" }]}>
            <Slider
              animateTransitions
              maximumTrackTintColor={"rgba(26, 28, 23, 0.12)"}
              minimumTrackTintColor={"#023047"}
              maximumValue={100}
              minimumValue={0}
              onValueChange={(yearValue) =>
                setTimePeriod(Math.floor(yearValue))
              }
              value={timePeriod}
              thumbTintColor={"rgba(33, 158, 188, 1)"}
              trackStyle={{
                width: width * 0.704,
                height: height * 0.008,
                borderRadius: width * 0.03,
                paddingRight: width * 0.05,
              }}
            />
            <Text style={styles.rangeTextPercentage}>{timePeriod} %</Text>
          </View>

          <View>
            <View
              style={[
                styles.flexContainer,
                { marginTop: height * -0.065, marginBottom: height * 0.168 },
              ]}
            >
              <View style={styles.arrowContainer}>
                <View>
                  <Text
                    style={{
                      color: "#000000",
                      fontFamily: "Metropolis",
                      fontSize: width * 0.032,
                      lineHeight: height * 0.028,
                      marginLeft: width * -0.011,
                      justifyContent: "space-between",
                    }}
                  >
                    Current Goal Amount
                  </Text>
                </View>
                <View>
                  <Text style={styles.curentAmount}>₹20,000.00</Text>
                </View>
                <View style={styles.verticleLine}></View>
                <View>
                  <Text
                    style={{
                      color: "#000000",
                      // fontFamily: "Metropolis",
                      fontSize: width * 0.032,
                      lineHeight: height * 0.024,
                      marginLeft: width * 0.1,
                      justifyContent: "space-between",
                    }}
                  >
                    Goal after Inflation
                  </Text>
                </View>

                <View>
                  <Text style={styles.curentAmount}>₹22,000.00</Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.footerButton}>
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
  arrowContainer: {
    flexDirection: "row",
    marginTop: height * 0.0582,
    paddingLeft: width * 0.04,
    position: "absolute",
    padding: width * 0.04,
  },
  arrow: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconArrow: {
    color: "#023047",
  },
  headerText: {
    color: "#023047",
    fontWeight: "600",
    // fontFamily: "Metropolis",
    fontSize: width * 0.042,
    lineHeight: height * 0.032,
    marginLeft: width * 0.04,
  },
  iconClose: {
    flexDirection: "row",
    marginLeft: width * 0.42,
    position: "relative",
  },

  header: {
    fontSize: width * 0.037,
    color: "#023047",
    fontWeight: "500",
    marginBottom: height * 0.015,
    opacity: 0.6,
    lineHeight: height * 0.028,
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
  flexContainer: {
    flexDirection: "row",
    marginTop: height * 0.03,
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
    textAlign: "right",
    color: "rgba(73, 69, 79, 1)",
    lineHeight: height * 0.03,
    fontSize: width * 0.04,
    fontWeight: "600",
    marginRight: width * 0.08,
    marginTop: height * 0.01,
    marginBottom: 20,
  },
  verticleLine: {
    // height: height * 0.056,
    width: width * 0.003,
    backgroundColor: "#FFC300",
    marginLeft: width * 0.105,
    borderWidth: width * 0.0001,
    borderColor: "#FFC300",
    // marginBottom: -10,
  },
  curentAmount: {
    fontSize: width * 0.037,
    fontWeight: "600",
    lineHeight: height * 0.028,
    marginLeft: width * -0.235,
    alignItems: "center",
    color: "#49454F",
    marginTop: height * 0.04,
  },

  button: {
    marginBottom: height * 0.02,
    marginTop: height * 0.02,
    height: height * 0.07,
    borderRadius: width * 0.03,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 53, 102, 1)",
    borderColor: "rgb(230, 230, 230)",
    elevation: width * 0.04,
  },
  footerButton: {
    padding: width * 0.04,
    backgroundColor: "white",
    borderWidth: width * 0.002,
    borderColor: "rgb(230, 230, 230)",
    elevation: width * 0.04,
  },
});
