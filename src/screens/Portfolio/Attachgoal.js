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
import { Goalfetch } from "../../api/services/endpoints/goalEndpoints";
import { useSelector } from "react-redux";
export default Index = () => {
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
  const [goallist, setGoallist] = useState(undefined);

  const userId = useSelector((state) => state.user.id);

  const navigation = useNavigation();

  const handleAddGoal = () => {
    if (goallist != undefined) {
      Alert.alert("Please select goal");
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

  const handleSlider = (yearValue) => {
    setyearValue(yearValue);
    setTimePeriod(Math.floor(yearValue, 2));
    handleInflation();
  };

  useEffect(() => {
    Goalfetch(userId)
      .then((response) => {
        if (response.data.success) {
          console.log("goal lists", response.data.goals);
          setGoallist(response.data.goals);
        }
      })
      .catch((e) => {
        console.warn(e);
      });
  }, []);

  return (
    <View style={styles.container}>
      <Header title="Attach Goal" showPlusSign={false} />
      <ScrollView style={styles.contentContainer}>
        <TouchableOpacity style={styles.dropdown}>
          <Picker
            selectedValue={category}
            onValueChange={(itemValue, itemIndex) => setCategory(itemValue)}
            mode="dropdown"
            style={styles.Picker}
          >
            <Picker.Item label="Select Goal" value="" />
            {goallist &&
              goallist.map((value, index) => (
                <Picker.Item label={value.name} value={value.id} key={index} />
              ))}
          </Picker>
        </TouchableOpacity>
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
          Holding Percentage
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

        <Text style={[styles.header, { marginTop: height * 0.02 }]}>
          Goal Percentage
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

        <View style={styles.footerButton}>
          {loader ? (
            <Loader />
          ) : (
            <TouchableOpacity activeOpacity={0.7}>
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
                Submit
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
  contentContainer: {
    margin: width * 0.05,
    marginTop: height * 0.07,
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
    marginBottom: height * 0.03,
    borderColor: "rgb(191, 191, 191)",
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
  },
  footerButton: {
    backgroundColor: "white",
    borderColor: "rgb(230, 230, 230)",
    marginTop: height * 0.02,
  },
});
