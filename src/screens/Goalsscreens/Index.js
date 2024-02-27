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
import { useFonts } from "expo-font";
import Formatdate from "../Components/Formatdate";
export default Goalsscreen = () => {
  const [category, setCategory] = useState("");
  const [timePeriod, setTimePeriod] = useState(5);
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [goalAmount, setGoalAmount] = useState("100000");
  const [color, setColor] = useState("");
  const [goalInflationAmount, setGoalInflationAmount] = useState("0");
  const [loader, setLoader] = useState(false);
  const [targetdate, setTargetdate] = useState(new Date());
  const [numberofyear, setNumberofyear] = useState("1");
  const [yearValue, setyearValue] = useState("5");

  const navigation = useNavigation();

  const handleAddGoal = () => {
    if (title == "") {
      Alert.alert("Please enter goal name");
      return;
    }
    if (category == "") {
      Alert.alert("Please select category");
      return;
    }
    if (color == "") {
      Alert.alert("Please select color");
      return;
    }
    if (goalAmount == "") {
      Alert.alert("Please enter goal amount");
      return;
    }
    if (goalInflationAmount == 0) {
      Alert.alert("Please select expected average inflation");
      return;
    }
    if (numberofyear == 0) {
      Alert.alert("Number of year should be greater than 0");
      return;
    }
    setLoader(true);
    const Year = date.getFullYear();
    const goalData = {
      action: "saveWish",
      wishName: title,
      description: desc,
      icon: "",
      color: color,
      years: numberofyear,
      wishAmount: goalInflationAmount,
      category: category,
      lumpsumAmount: goalAmount,
    };
    Addgoalitem(goalData)
      .then((response) => {
        response.success
          ? (Alert.alert("Goal has been added successfully"),
            navigation.push("Goalmenu"))
          : Alert.alert("Failed, Try Later");
        setLoader(false);
      })
      .catch((error) => {
        console.log("error", error);
        setLoader(false);
      });
  };

  const handleInflation = () => {
    const yeartoCalculate = numberofyear;
    const current =
      goalAmount *
      Math.pow(
        1 + Math.round(yearValue * 100) / 100 / 100,
        Math.round(yeartoCalculate * 100) / 100
      );

    setGoalInflationAmount(Math.floor(current));
  };

  const [fontsLoaded] = useFonts({
    "Inter-Black": require("../../../assets/fonts/metropolis-latin-500-normal.ttf"),
  });

  const handleNumberOfYear = (e) => {
    setNumberofyear(e);
    const currentDate = new Date();
    const dmy = Formatdate(currentDate).split("-");

    const day = dmy[0];
    const month = dmy[1];
    const year = dmy[2];

    const targetYear = +year + +e;
    setTargetdate(`${targetYear}-${month}-${day}`);
    console.log("e", e);
    handleInflation();
  };

  const handlegoalamount = (e) => {
    setGoalAmount(e);
    handleInflation();
  };

  useEffect(() => {
    handleInflation();
  }, [goalInflationAmount, goalAmount, timePeriod]);

  const handleSlider = (yearValue) => {
    setyearValue(yearValue);
    setTimePeriod(Math.floor(yearValue, 2));
    handleInflation();
  };

  return (
    <View style={styles.container}>
      <Header title="Add Goal" showPlusSign={false} />
      <ScrollView>
        <View style={{ padding: width * 0.04 }}>
          <TextInput
            mode="outlined"
            label="Goal Title"
            value={title}
            onChangeText={(e) => setTitle(e)}
            style={styles.input}
            outlineStyle={styles.outline}
            theme={styles.themeStyle}
            contentStyle={styles.contentStyle}
          />
          <TextInput
            mode="outlined"
            label="Goal Description"
            value={desc}
            onChangeText={(e) => setDesc(e)}
            style={styles.input}
            outlineStyle={styles.outline}
            theme={styles.themeStyle}
            contentStyle={styles.contentStyle}
          />
          <TouchableOpacity style={styles.dropdown}>
            <Picker
              selectedValue={category}
              onValueChange={(itemValue, itemIndex) => setCategory(itemValue)}
              mode="dropdown"
              style={styles.Picker}
            >
              <Picker.Item label="Select Category" value="" />
              <Picker.Item label="Education" value="Education" />
              <Picker.Item label="Car" value="Car" />
              <Picker.Item label="House" value="House" />
              <Picker.Item label="Marriage" value="Marriage" />
              <Picker.Item label="Retirement" value="Retirement" />
              <Picker.Item label="Vacation" value="Vacation" />
              <Picker.Item label="Emergency" value="Emergency" />
            </Picker>
          </TouchableOpacity>
          <TouchableOpacity style={styles.dropdown}>
            <Picker
              selectedValue={color}
              onValueChange={(itemValue, itemIndex) => setColor(itemValue)}
              mode="dropdown"
              style={styles.Picker}
            >
              <Picker.Item label="Select Color" value="" />
              <Picker.Item label="Red" value="#ff0000" />
              <Picker.Item label="Orange" value="#ffa500" />
              <Picker.Item label="Blue" value="#0000ff" />
              <Picker.Item label="Green" value="#008000" />
              <Picker.Item label="Pink" value="#ffc0cb" />
            </Picker>
          </TouchableOpacity>
          <TextInput
            mode="outlined"
            keyboardType="phone-pad"
            value={numberofyear}
            style={styles.input}
            outlineStyle={styles.outline}
            theme={styles.themeStyle}
            contentStyle={styles.contentStyle}
            label="Number of year"
            onChangeText={(e) => handleNumberOfYear(e)}
          />
          {numberofyear > 0 && (
            <Text style={styles.msg}>
              Selected target date will be {Formatdate(targetdate)}
            </Text>
          )}
          <TextInput
            mode="outlined"
            label="Goal Amount"
            value={goalAmount}
            onChangeText={(e) => handlegoalamount(e)}
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
              onValueChange={(yearValue) => handleSlider(yearValue)}
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
          <View style={styles.flexContainer}>
            <View style={styles.text}>
              <Text style={styles.header}>Current Goal Amount</Text>
              <Text style={styles.desc}>
                ₹ {goalAmount ? formatNumberWithCommas(goalAmount) : 0}
              </Text>
            </View>
            <View style={[styles.text, { borderColor: "white" }]}>
              <Text style={styles.header}>Goal after Inflation</Text>
              <Text style={styles.desc}>
                ₹ {goalAmount ? formatNumberWithCommas(goalInflationAmount) : 0}
              </Text>
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
                  fontFamily: "Inter-Black",
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
    fontFamily: "Inter-Black",
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
    fontFamily: "Inter-Black",
    fontWeight: "500",
    marginBottom: height * 0.015,
    opacity: 0.6,
    lineHeight: height * 0.028,
  },
  msg: {
    fontSize: width * 0.037,
    color: "red",
    fontFamily: "Inter-Black",
    fontWeight: "500",
    marginBottom: height * 0.015,
    opacity: 0.6,
    lineHeight: height * 0.028,
  },
  input: {
    borderRadius: width * 0.05,
    marginBottom: height * 0.02,
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
    fontFamily: "Inter-Black",
    fontWeight: "600",
  },
  dropdown: {
    borderWidth: height * 0.0015,
    borderRadius: width * 0.02,
    marginBottom: height * 0.02,
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
    fontFamily: "Inter-Black",
    fontWeight: "500",
    opacity: 0.8,
  },
  rangeTextPercentage: {
    flex: 1,
    textAlign: "right",
    color: "rgba(73, 69, 79, 1)",
    lineHeight: height * 0.03,
    fontSize: width * 0.04,
    fontFamily: "Inter-Black",
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
    fontFamily: "Inter-Black",
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
  text: {
    margin: width * 0.01,
    flex: 1,
    borderRightWidth: 1,
    borderColor: "orange",
    alignItems: "center",
  },
});
