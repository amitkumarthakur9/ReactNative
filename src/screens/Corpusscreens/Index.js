import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import { height, width } from "../../Dimension";
import { Ionicons } from "@expo/vector-icons";
import { Slider } from "@miblanchard/react-native-slider";
import Header from "../Components/Header";
import { useFonts } from "expo-font";
export default Uploadscreens = () => {
  const [isMonthly, setIsMonthly] = useState(true);
  const [investmentAmount, setInvestmentAmount] = useState(1000);
  const [annualReturn, setAnnualReturn] = useState(5);
  const [timePeriod, setTimePeriod] = useState(5);

  const [fontsLoaded] = useFonts({
    "Inter-Black": require("../../../assets/fonts/metropolis-latin-500-normal.ttf"),
  });

  const calculateTotalWealth = () => {
    const principal = isMonthly
      ? investmentAmount * (timePeriod * 12)
      : investmentAmount;
    const rate = annualReturn / 100;
    let sum = 0;
    let totalWealth;
    if (isMonthly) {
      let monthlygrowth = rate / 12;

      for (i = 0; i < timePeriod * 12; i++) {
        sum += Math.pow(1 + monthlygrowth, i + 1);
      }

      totalWealth = investmentAmount * sum;
      compoundInterest = totalWealth - principal;
    } else {
      for (i = 0; i < timePeriod; i++) {
        sum += Math.pow(1 + compoundInterest, i + 1);
      }
      compoundInterest = principal * (Math.pow(1 + rate, timePeriod) - 1);
      totalWealth = principal + compoundInterest;
    }

    return {
      investment: parseFloat(principal).toFixed(),
      wealthGain: parseFloat(compoundInterest).toFixed(),
      totalWealth: parseFloat(totalWealth).toFixed(),
    };
  };

  const { investment, wealthGain, totalWealth } = calculateTotalWealth();

  return (
    <View style={styles.container}>
      <Header title="Corpus" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.chartContainer}>
          <View style={{ alignItems: "center" }}>
            <View style={styles.flexContainer}>
              <TouchableOpacity
                style={[
                  styles.frequencyButtons,
                  isMonthly && styles.activeButton,
                ]}
                onPress={() => setIsMonthly(true)}
              >
                <Text style={styles.frequencyButtonsText}>Monthly</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  styles.frequencyButtons,
                  !isMonthly && styles.activeButton,
                ]}
              >
                <Text
                  style={[styles.frequencyButtonsText]}
                  onPress={() => setIsMonthly(false)}
                >
                  One - Time
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <View style={[styles.flexContainer, { marginTop: height * 0.04 }]}>
              <Text style={[styles.rangeText, { textAlign: "left" }]}>
                {isMonthly ? "Monthly Investment" : "One-Time Investment"}
              </Text>
              <Text
                style={[
                  styles.rangeTextPercentage,
                  { marginRight: width * -0.196, marginTop: height * 0.002 },
                ]}
              >
                {" "}
                ₹
              </Text>
              <TextInput
                style={styles.rangeTextPercentage}
                value={investmentAmount.toString()}
                keyboardType="numeric"
                onChangeText={(text) =>
                  setInvestmentAmount(parseInt(text) || 0)
                }
              />
            </View>
            <Slider
              animateTransitions
              maximumTrackTintColor={"rgba(26, 28, 23, 0.12)"}
              minimumTrackTintColor={"#023047"}
              maximumValue={isMonthly ? 100000 : 100000}
              minimumValue={isMonthly ? 100 : 1000}
              onValueChange={(value) => setInvestmentAmount(Math.floor(value))}
              value={investmentAmount}
              thumbTintColor={"rgba(33, 158, 188, 1)"}
              trackStyle={{
                height: 8,
                borderRadius: width * 0.03,
              }}
            />
          </View>

          <View style={{ marginBottom: height * 0.02 }}>
            <View style={styles.flexContainer}>
              <Text style={[styles.rangeText, { textAlign: "left" }]}>
                Annual Return
              </Text>
              <Text style={styles.rangeTextPercentage}>{annualReturn} %</Text>
            </View>
            <Slider
              animateTransitions
              maximumTrackTintColor={"rgba(26, 28, 23, 0.12)"}
              minimumTrackTintColor={"#023047"}
              maximumValue={100}
              minimumValue={0}
              onValueChange={(value) => setAnnualReturn(Math.floor(value))}
              value={annualReturn}
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
              maximumValue={50}
              minimumValue={1}
              onValueChange={(value) => setTimePeriod(Math.floor(value))}
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

      <View style={styles.footer}>
        <Image
          style={[styles.footerImage, { width: "auto", height: height * 0.32 }]}
          source={require("../../../assets/corpusIcon/Corpus.png")}
        />
        <View style={styles.totalWealthContainer}>
          <Text style={styles.totalWealthText}>
            Investment {"\n"}
            {"\n"}
          </Text>
        </View>
        <View style={styles.totalWealthContainer}>
          <Text style={styles.totalWealthTextA}>₹ {investment}</Text>
        </View>

        <View style={styles.totalWealthContainer}>
          <Text style={styles.totalWealthText1}>Wealth Gain</Text>
        </View>
        <View style={styles.totalWealthContainer}>
          <Text style={styles.totalWealthTextB}>₹ {wealthGain}</Text>
        </View>

        <View style={styles.totalWealthContainer}>
          <Text style={styles.totalWealthText2}>Total Wealth Generated</Text>
        </View>
        <View style={styles.totalWealthContainer}>
          <Text style={styles.totalWealthText3}>₹ {totalWealth}</Text>
        </View>
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
    fontFamily: "Inter-Black",
    fontWeight: "600",
    fontSize: width * 0.037,
    lineHeight: height * 0.028,
    marginLeft: width * 0.047,
  },

  chartContainer: {
    padding: width * 0.08,
    // marginTop: -height * 0.02,
    marginBottom: height * 0.01,
  },

  buttonTextStyle: {
    color: "ntainter",
    fontFamily: "Inter-Black",
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
    fontFamily: "Inter-Black",
    fontWeight: "600",
    textAlign: "center",
    opacity: 0.8,
  },
  amount: {
    marginTop: height * 0.01,
    color: "#023047",
    fontFamily: "Inter-Black",
    fontWeight: "600",
    fontSize: width * 0.045,
  },
  flexContainer: {
    flexDirection: "row",
    marginTop: height * 0.02,
  },
  absolute: {
    color: "rgba(2, 48, 71, 0.5)",
    fontSize: width * 0.035,
    fontFamily: "Inter-Black",
    fontWeight: "500",
  },
  percentage: {
    color: "rgba(35, 179, 113, 1)",
    fontFamily: "Inter-Black",
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
    // color: "#023047",
    fontSize: width * 0.032,
    lineHeight: height * 0.04,
    fontFamily: "Inter-Black",
    fontWeight: "500",
  },

  frequencyButtonsText1: {
    // color: "#023047",
    fontSize: width * 0.032,
    lineHeight: height * 0.024,
    fontFamily: "Inter-Black",
    fontWeight: "500",
    marginTop: height * -0.024,
    marginBottom: height * 0.004,
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
  },
  footer: {
    // position: "absolute",
    bottom: 0,
    width: width * 1.04,
    borderTopLeftRadius: width * 0.14,
    borderTopRightRadius: width * 0.1,
    overflow: "hidden",
    marginLeft: width * -0.03,
  },
  totalWealthContainer: {
    alignItems: "center",
  },
  totalWealthText: {
    marginTop: height * -0.27,
    marginLeft: width * -0.4,
    fontSize: width * 0.042,

    fontFamily: "Inter-Black",
    fontWeight: "400",
    overflow: "hidden",
    color: "#C3C3C3",
  },
  totalWealthTextA: {
    marginTop: height * -0.23,
    marginLeft: width * -0.4,
    fontSize: width * 0.053,

    fontFamily: "Inter-Black",
    fontWeight: "400",
    overflow: "hidden",
    color: "#FFFFFF",
    lineHeight: height * 0.028,
  },

  totalWealthText1: {
    marginTop: height * -0.27,
    marginRight: width * -0.41,
    fontSize: width * 0.042,

    fontFamily: "Inter-Black",
    fontWeight: "400",
    overflow: "hidden",
    color: "#C3C3C3",
  },

  totalWealthTextB: {
    marginTop: height * -0.23,
    marginRight: width * -0.4,
    fontSize: width * 0.053,

    fontFamily: "Inter-Black",
    fontWeight: "400",
    overflow: "hidden",
    color: "#FFFFFF",
    lineHeight: height * 0.028,
  },

  totalWealthText2: {
    marginTop: height * -0.16,
    fontSize: width * 0.042,

    fontFamily: "Inter-Black",
    fontWeight: "400",
    overflow: "hidden",
    color: "#C3C3C3",
    lineHeight: height * 0.028,
  },
  totalWealthText3: {
    fontSize: width * 0.066,

    fontFamily: "Inter-Black",
    fontWeight: "600",
    overflow: "hidden",
    marginTop: height * -0.12,
    color: "#FFFFFF",
  },
  activeButton: {
    backgroundColor: "#F9AE2C",
  },
});
