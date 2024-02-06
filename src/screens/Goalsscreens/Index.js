import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import { height, width } from "../../Dimension";
import { Ionicons } from "@expo/vector-icons";
import { Button, TextInput } from "react-native-paper";
import { Picker } from "@react-native-picker/picker";
import { Slider } from "@miblanchard/react-native-slider";
import DateTimePicker from "@react-native-community/datetimepicker";
import Header from "../Components/Header";
import formatNumberWithCommas from "../Components/Inrconverter";
import { Addgoalitem } from "./Data";
import convertToDateTime from "../Components/Datetime";
import Loader from "../Components/Loader";
import { useRoute, useNavigation } from "@react-navigation/native";

export default Goalsscreen = () => {
  const [category, setCategory] = useState("Education");
  const [timePeriod, setTimePeriod] = useState(1);
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [goalAmount, setGoalAmount] = useState("");
  const [color, setColor] = useState("#ffa500");
  const [goalInflationAmount, setGoalInflationAmount] = useState("0");
  const [loader, setLoader] = useState(false);

  const navigation = useNavigation();

  const handleDatePress = () => {
    setShowDatePicker(true);
  };

  const handleDateChange = (event, selectedDate) => {
    currentDate = selectedDate || date;
    setShowDatePicker(false);
    setDate(currentDate);
  };

  const handleAddGoal = () => {
    setLoader(true);
    const Year = date.getFullYear();
    const goalData = {
      action: "saveWish",
      wishName: title,
      description: desc,
      icon: "",
      color: color,
      years: Year,
      wishAmount: goalInflationAmount,
      category: category,
      lumpsumAmount: goalAmount,
    };
    Addgoalitem(goalData)
      .then((response) => {
        response.success
          ? (Alert.alert("Goal has been added successfully"),
            navigation.push("Dashboard"))
          : Alert.alert("Failed, Try Later");
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  const year = () => {
    const currentDate = new Date();

    const targetDate = date;

    const differenceInMs = targetDate.getTime() - currentDate.getTime();

    const millisecondsInOneDay = 1000 * 60 * 60 * 24;

    const a = millisecondsInOneDay * 365;

    const differenceInyears = differenceInMs / a;

    return differenceInyears;

    // console.log("Difference in days:", differenceInyears);
  };

  const handleInflation = (yearValue) => {
    // console.log("inflation:", Math.round(yearValue * 100) / 100);
    setTimePeriod(Math.floor(yearValue, 2));
    const yeartoCalculate = year();
    // console.log("year:", Math.round(yeartoCalculate * 100) / 100);

    // console.log("amount:", goalAmount);

    const current =
      goalAmount *
      Math.pow(
        1 + Math.round(yearValue * 100) / 100 / 100,
        Math.round(yeartoCalculate * 100) / 100
      );
    // console.log("current:", current);
    setGoalInflationAmount(Math.floor(current));
  };

  return (
    <View style={styles.container}>
      <Header title="Add Goal" showPlusSign={false} />
      <ScrollView>
        <View style={{ padding: width * 0.04 }}>
          <Text style={styles.header}>Goal Title</Text>
          <TextInput
            mode="outlined"
            // label={
            //   <Text style={{ color: "rgb(191, 191, 191)", fontWeight: "400" }}>
            //     Goal Name
            //   </Text>
            // }
            // placeholder="Enter Goal Name"
            value={title}
            onChangeText={(e) => setTitle(e)}
            style={styles.input}
            outlineStyle={styles.outline}
            theme={styles.themeStyle}
            contentStyle={styles.contentStyle}
          />
          <Text style={styles.header}>Goal Description</Text>
          <TextInput
            mode="outlined"
            // label={
            //   <Text style={{ color: "rgb(191, 191, 191)", fontWeight: "400" }}>
            //     Goal Description
            //   </Text>
            // }
            // placeholder="Enter Goal Description"
            value={desc}
            onChangeText={(e) => setDesc(e)}
            style={styles.input}
            outlineStyle={styles.outline}
            theme={styles.themeStyle}
            contentStyle={styles.contentStyle}
          />
          <Text style={styles.header}>Category</Text>
          <TouchableOpacity style={styles.dropdown}>
            <Picker
              selectedValue={category}
              onValueChange={(itemValue, itemIndex) => setCategory(itemValue)}
              mode="dropdown"
              style={styles.Picker}
            >
              <Picker.Item label="Education" value="Education" />
              <Picker.Item label="Car" value="Car" />
              <Picker.Item label="House" value="House" />
              <Picker.Item label="Marriage" value="Marriage" />
              <Picker.Item label="Retirement" value="Retirement" />
              <Picker.Item label="Vacation" value="Vacation" />
              <Picker.Item label="Emergency" value="Emergency" />
            </Picker>
          </TouchableOpacity>
          <Text style={styles.header}>Color</Text>
          <TouchableOpacity style={styles.dropdown}>
            <Picker
              selectedValue={color}
              onValueChange={(itemValue, itemIndex) => setColor(itemValue)}
              mode="dropdown"
              style={styles.Picker}
            >
              <Picker.Item label="Red" value="#ff0000" />
              <Picker.Item label="Orange" value="#ffa500" />
              <Picker.Item label="Blue" value="#0000ff" />
              <Picker.Item label="Green" value="#008000" />
              <Picker.Item label="Pink" value="#ffc0cb" />
            </Picker>
          </TouchableOpacity>
          <Text style={styles.header}>Achieve By</Text>
          <TouchableOpacity onPress={handleDatePress}>
            <TextInput
              mode="outlined"
              //   label={
              //     <Text
              //       style={{ color: "rgb(191, 191, 191)", fontWeight: "400" }}
              //     >
              //       Choose Date
              //     </Text>
              //   }
              //   placeholder="Select Date"
              value={date.toDateString()}
              editable={false}
              style={styles.input}
              outlineStyle={styles.outline}
              theme={styles.themeStyle}
              contentStyle={styles.contentStyle}
            />
          </TouchableOpacity>
          {showDatePicker && (
            <DateTimePicker
              value={date}
              mode="date"
              display="default"
              onChange={(event, selectedDate) =>
                handleDateChange(event, selectedDate)
              }
            />
          )}
          <Text style={styles.header}>Goal Amount</Text>
          <TextInput
            mode="outlined"
            // label={
            //   <Text style={{ color: "rgb(191, 191, 191)", fontWeight: "400" }}>
            //     Enter Amount required to Achieve goal
            //   </Text>
            // }
            // placeholder="Enter Goal Amount"
            value={goalAmount}
            onChangeText={(e) => setGoalAmount(e)}
            style={styles.input}
            outlineStyle={styles.outline}
            theme={styles.themeStyle}
            contentStyle={styles.contentStyle}
            keyboardType="phone-pad"
          />
          <Text style={[styles.header, { marginTop: height * 0.02 }]}>
            Account for Expected Average Inflation
          </Text>
          <View style={[{ flexDirection: "row" }]}>
            <Slider
              animateTransitions
              maximumTrackTintColor={"rgba(26, 28, 23, 0.12)"}
              minimumTrackTintColor={"#023047"}
              maximumValue={100}
              minimumValue={0}
              onValueChange={(yearValue) => handleInflation(yearValue)}
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
                  <Text style={styles.curentAmount}>
                    ₹ {goalAmount ? formatNumberWithCommas(goalAmount) : 0}
                  </Text>
                </View>
                <View style={styles.verticleLine}></View>
                <View>
                  <Text
                    style={{
                      color: "#000000",
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
                  <Text style={styles.curentAmount}>
                    ₹ {goalInflationAmount}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.footerButton}>
          {loader ? (
            <Loader />
          ) : (
            <TouchableOpacity activeOpacity={0.7} onPress={handleAddGoal}>
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
          )}
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
  Picker: {},
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
