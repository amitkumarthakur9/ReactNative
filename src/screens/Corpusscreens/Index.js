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
import { Slider } from "@miblanchard/react-native-slider";
// import { Button } from "react-native-paper";
import Footercorpus from "./Footercorpus";

export default Uploadscreens = () => {
  const [MonthlyInvestment, setMonthlyInvestment] = useState(1000);
  const [timePeriod, setTimePeriod] = useState(1);
  const [percentage, setPercentage] = useState(0);

  const ptData = [
    { value: 160, date: "1 Apr 2022" },
    { value: 180, date: "2 Apr 2022" },
    { value: 190, date: "3 Apr 2022" },
    { value: 180, date: "4 Apr 2022" },
    { value: 140, date: "5 Apr 2022" },
    { value: 145, date: "6 Apr 2022" },
    { value: 160, date: "7 Apr 2022" },
    { value: 200, date: "8 Apr 2022" },

    { value: 220, date: "9 Apr 2022" },
    {
      value: 240,
      date: "10 Apr 2022",
      label: "10 Apr",
      labelTextStyle: {
        color: "rgba(131, 132, 139, 1)",
        width: 60,
      },
    },
    { value: 280, date: "11 Apr 2022" },
    { value: 260, date: "12 Apr 2022" },
    { value: 340, date: "13 Apr 2022" },
    { value: 385, date: "14 Apr 2022" },
    { value: 280, date: "15 Apr 2022" },
    { value: 390, date: "16 Apr 2022" },

    { value: 370, date: "17 Apr 2022" },
    { value: 285, date: "18 Apr 2022" },
    { value: 295, date: "19 Apr 2022" },
    {
      value: 300,
      date: "20 Apr 2022",
      label: "20 Apr",
      labelTextStyle: { color: "lightgray", width: 60 },
    },
    { value: 280, date: "21 Apr 2022" },
    { value: 295, date: "22 Apr 2022" },
    { value: 260, date: "23 Apr 2022" },
    { value: 255, date: "24 Apr 2022" },

    { value: 190, date: "25 Apr 2022" },
    { value: 220, date: "26 Apr 2022" },
    { value: 205, date: "27 Apr 2022" },
    { value: 230, date: "28 Apr 2022" },
    { value: 210, date: "29 Apr 2022" },
    {
      value: 200,
      date: "30 Apr 2022",
      label: "30 Apr",
      labelTextStyle: { color: "lightgray", width: 60 },
    },
    { value: 240, date: "1 May 2022" },
    { value: 250, date: "2 May 2022" },
    { value: 280, date: "3 May 2022" },
    { value: 250, date: "4 May 2022" },
    { value: 210, date: "5 May 2022" },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.arrowContainer}>
        <TouchableOpacity style={styles.arrow}>
          <Ionicons
            style={styles.iconArrow}
            name="arrow-back"
            size={30}
            color="white"
            onPress={() => navigation.goBack()}
          />
          <Text style={styles.headerText}>
            How to create an Emergency Corpus..
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.chartContainer}>
          <View style={{ alignItems: "center" }}>
            <View style={styles.flexContainer}>
              <TouchableOpacity
                style={[styles.frequencyButtons, { backgroundColor: "white" }]}
              >
                <Text style={styles.frequencyButtonsText}>Monthly</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.frequencyButtons1,
                  { backgroundColor: "rgba(249, 174, 44, 1)" },
                ]}
              >
                <Image
                  source={require("../../../assets/corpusIcon/Shape.png")}
                  style={{
                    width: width * 0.053,
                    height: height * 0.0182,
                    marginLeft: width * -0.261,
                    marginTop: height * 0.016,
                  }}
                />
                <Text
                  style={[
                    styles.frequencyButtonsText1,
                    {
                      marginTop: height * -0.024,
                      marginBottom: height * 0.004,
                    },
                  ]}
                >
                  One - Time
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <View style={[styles.flexContainer, { marginTop: height * 0.04 }]}>
              <Text style={[styles.rangeText, { textAlign: "left" }]}>
                One-Time Investment
              </Text>
              <Text style={styles.rangeTextPercentage}>
                ₹ {MonthlyInvestment}
              </Text>
            </View>
            <Slider
              animateTransitions
              maximumTrackTintColor={"rgba(26, 28, 23, 0.12)"}
              minimumTrackTintColor={"#023047"}
              maximumValue={100000}
              minimumValue={1000}
              onValueChange={(value) => setMonthlyInvestment(Math.floor(value))}
              value={MonthlyInvestment}
              thumbTintColor={"rgba(33, 158, 188, 1)"}
              trackStyle={{
                height: height * 0.008,
                borderRadius: width * 0.03,
              }}
            />
          </View>

          <View style={{ marginBottom: height * 0.02 }}>
            <View style={styles.flexContainer}>
              <Text style={[styles.rangeText, { textAlign: "left" }]}>
                Annual Return
              </Text>
              <Text style={styles.rangeTextPercentage}>{percentage} %</Text>
            </View>
            <Slider
              animateTransitions
              maximumTrackTintColor={"rgba(26, 28, 23, 0.12)"}
              minimumTrackTintColor={"#023047"}
              maximumValue={100}
              minimumValue={0}
              onValueChange={(yearValue) =>
                setPercentage(Math.floor(yearValue))
              }
              value={percentage}
              thumbTintColor={"rgba(33, 158, 188, 1)"}
              trackStyle={{
                height: height * 0.008,
                borderRadius: width * 0.03,
              }}
            />
          </View>

          <View style={{ marginBottom: height * 0.02 }}>
            <View style={styles.flexContainer}>
              <Text style={[styles.rangeText, { textAlign: "left" }]}>
                Time Period
              </Text>
              <Text style={styles.rangeTextPercentage}>{timePeriod} Years</Text>
            </View>
            <Slider
              animateTransitions
              maximumTrackTintColor={"rgba(26, 28, 23, 0.12)"}
              minimumTrackTintColor={"#023047"}
              maximumValue={15}
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
        </View>
      </ScrollView>

      <View>
        <Footercorpus />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    // alignItems: "center",
  },
  arrowContainer: {
    flexDirection: "row",
    marginTop: 70,
    paddingLeft: width * 0.04,
    position: "absolute",
  },
  arrow: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconArrow: {
    marginLeft: width * 0.01,
    color: "#386664",
  },
  headerText: {
    color: "#023047",
    fontWeight: "600",
    fontFamily: "Metropolis",
    fontSize: width * 0.037,
    lineHeight: height * 0.028,
    marginLeft: width * 0.047,
  },

  chartContainer: {
    padding: width * 0.08,
    marginTop: height * 0.12,
    // backgroundColor: "white",
    // borderWidth: width * 0.002,
    // borderRadius: width * 0.045,
    // borderColor: "rgb(230, 230, 230)",
    marginBottom: height * 0.01,
  },

  buttonTextStyle: {
    color: "ntainter",
    fontWeight: "600",
    fontSize: width * 0.04,
    lineHeight: height * 0.03,
  },
  buttonStyle: {
    backgroundColor: "white",
    width: width * 0.4,
  },

  riskCalculatorHeader: {
    color: "#023047",
    lineHeight: height * 0.02,
    fontSize: width * 0.035,
    fontWeight: "600",
    textAlign: "center",
    opacity: 0.8,
  },
  amount: {
    marginTop: height * 0.01,
    color: "#023047",
    fontWeight: "600",
    fontSize: width * 0.045,
  },
  flexContainer: {
    flexDirection: "row",
    marginTop: height * 0.03,
  },
  absolute: {
    color: "rgba(2, 48, 71, 0.5)",
    fontSize: width * 0.035,
    fontWeight: "500",
  },
  percentage: {
    color: "rgba(35, 179, 113, 1)",
    fontWeight: "600",
    fontSize: width * 0.035,
  },
  frequencyButtons: {
    flex: 1,
    margin: width * 0.02,
    alignItems: "center",
    borderRadius: width * 0.03,
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.25)",
    padding: width * 0.02,
  },

  frequencyButtons1: {
    flex: 1,
    margin: width * 0.02,
    alignItems: "center",
    borderRadius: width * 0.03,
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.25)",
    padding: width * 0.02,
  },
  frequencyButtonsText: {
    color: "#023047",
    fontSize: width * 0.032,
    lineHeight: height * 0.04,
    fontWeight: "500",
    fontFamily: "Metropolis",
  },

  frequencyButtonsText1: {
    color: "#023047",
    fontSize: width * 0.032,
    lineHeight: height * 0.024,
    fontWeight: "500",
    fontFamily: "Metropolis",
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
  },
});
