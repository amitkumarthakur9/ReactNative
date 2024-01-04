import React, { useEffect, useState } from "react";
import { LineChart } from "react-native-gifted-charts";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { height, width } from "../../Dimension";
import { Picker } from "@react-native-picker/picker";
import { Slider } from "@miblanchard/react-native-slider";
import { useRoute, useNavigation } from "@react-navigation/native";
import { Navdata, Risknavdata } from "./Data";
import Loader from "../Components/Loader";
import Getfirstdates from "./Monthlycalculation";

const Handleriskcalculator = async (
  investment,
  timePeriod,
  mfId,
  currentNav
) => {
  try {
    const response = await Risknavdata(mfId, timePeriod);
    const currentValue = (investment / response[0].nav) * currentNav;
    const gain = currentValue - investment;
    const percentage = ((currentValue - investment) / investment) * 100;
    return { currentValue, gain, percentage };
  } catch (error) {
    console.error("Error in Handleriskcalculator:", error);
  }
};

const Portfolio = () => {
  const [trendDuration, setTrendDuration] = useState(12);
  const [MonthlyInvestment, setMonthlyInvestment] = useState(1000);
  const [timePeriod, setTimePeriod] = useState(1);
  const route = useRoute();
  const { mfId, currentNav } = route.params;
  const ptData = Navdata(mfId, trendDuration);
  const [transformedData, settransformedData] = useState([]);
  const [showLoader, setShowLoader] = useState(false);
  const [onetime, setOnetime] = useState(true);
  const [monthly, setMonthly] = useState(false);
  const [currentvalue, setCurrentvalue] = useState("0");
  const [rgain, setRgain] = useState(0);
  const [rpercentage, setRpercentage] = useState(0);
  const getMonthlyCalculationData = Getfirstdates(
    mfId,
    timePeriod,
    MonthlyInvestment
  );

  useEffect(() => {
    if (ptData.length > 0 && ptData != null) {
      const navData = ptData.map((item) => {
        return {
          date: item.date,
          value: item.nav,
        };
      });

      settransformedData(navData);
      setShowLoader(false);
    }
  }, [ptData]);

  const handleduration = (itemValue) => {
    setTrendDuration(itemValue);
    setShowLoader(true);
  };

  const handleFrequency = (freq) => {
    if (freq == "onetime") {
      setOnetime(true);
      setMonthly(false);
    } else {
      setOnetime(false);
      setMonthly(true);
    }
  };

  const handleslider = (value, sliderName) => {
    if (sliderName == "investemnt") {
      Handleriskcalculator;
      const investment = value;
      setMonthlyInvestment(value);

      Handleriskcalculator(investment, timePeriod, mfId, currentNav).then(
        (response) => {
          const { currentValue, gain, percentage } = response;
          //   console.log("onetime", response);
          setCurrentvalue(currentValue);
          setRgain(gain);
          setRpercentage(percentage);
        }
      );
    }
    if (sliderName == "timePeriod") {
      const timeP = value;
      setTimePeriod(value);

      Handleriskcalculator(MonthlyInvestment, timeP, mfId, currentNav).then(
        (response) => {
          const { currentValue, gain, percentage } = response;
          //   console.log("time", response);
          setCurrentvalue(currentValue);
          setRgain(gain);
          setRpercentage(percentage);
        }
      );
    }
  };

  return (
    <View style={styles.portfolioContainer}>
      {transformedData.length > 0 &&
      transformedData != null &&
      showLoader === false ? (
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.Trend}>Trend</Text>
          <View style={styles.chartContainer}>
            <TouchableOpacity style={styles.dropdown}>
              <Picker
                selectedValue={trendDuration}
                onValueChange={(itemValue) => handleduration(itemValue)}
                mode="dropdown"
                style={styles.Picker}
              >
                <Picker.Item
                  label="Nav"
                  value="12"
                  style={styles.pickerLabelStyle}
                />
                <Picker.Item
                  label="1 Month"
                  value="1"
                  style={styles.pickerLabelStyle}
                />
                <Picker.Item
                  label="3 Months"
                  value="3"
                  style={styles.pickerLabelStyle}
                />
                <Picker.Item
                  label="6 Months"
                  value="6"
                  style={styles.pickerLabelStyle}
                />
                <Picker.Item
                  label="1 Year"
                  value="12"
                  style={styles.pickerLabelStyle}
                />
                <Picker.Item
                  label="3 Years"
                  value="24"
                  style={styles.pickerLabelStyle}
                />
                <Picker.Item
                  label="5 Years"
                  value="60"
                  style={styles.pickerLabelStyle}
                />
              </Picker>
            </TouchableOpacity>

            {/* <Text style={styles.gain}>+22.56 (7%)</Text> */}
            <View style={styles.chart}>
              <LineChart
                areaChart
                data={transformedData}
                width={width}
                hideDataPoints
                // spacing={1}
                color="rgba(61, 193, 84, 1)"
                // thickness={width * 0.015}
                startFillColor="rgba(193, 241, 142, 1)"
                endFillColor="rgba(254, 253, 255, 1)"
                initialSpacing={0}
                // yAxisThickness={0}
                xAxisColor="white"
                // hideYAxisText={true}
                adjustToWidth={true}
                pointerConfig={{
                  //   pointerStripHeight: height * 0.2,
                  //   pointerStripColor: "rgba(61, 193, 84, 1)",
                  //   pointerStripWidth: width * 0.015,
                  //   pointerColor: "rgba(61, 193, 84, 1)",
                  //   radius: width * 0.02,
                  //   pointerLabelWidth: width * 0.25,
                  //   activatePointersOnLongPress: true,
                  //   autoAdjustPointerLabelPosition: false,
                  pointerLabelComponent: (items) => {
                    return (
                      <View
                        style={{
                          height: width * 0.25,
                          width: width * 0.25,
                          justifyContent: "center",
                          //   marginTop: -30,
                          //   marginLeft: -40,
                          //   zIndex: 1,
                        }}
                      >
                        <Text
                          style={{
                            color: "rgba(122, 122, 122, 1)",
                            fontSize: 14,
                            marginBottom: 6,
                            textAlign: "center",
                          }}
                        >
                          {items[0].date}
                        </Text>

                        <View
                          style={{
                            paddingHorizontal: 14,
                            paddingVertical: 6,
                            borderRadius: 16,
                            backgroundColor: "rgba(55, 126, 54, 1)",
                            color: "rgba(122, 122, 122, 1)",
                          }}
                        >
                          <Text
                            style={{
                              fontWeight: "bold",
                              textAlign: "center",
                              color: "rgba(193, 241, 142, 1)",
                            }}
                          >
                            {items[0].value}
                          </Text>
                        </View>
                      </View>
                    );
                  },
                }}
              />
            </View>
          </View>
          <Text style={styles.Trend}>Risk Calculator</Text>
          <View
            style={[
              styles.chartContainer,
              { padding: width * 0.08, marginBottom: height * 0.01 },
            ]}
          >
            <View style={{ alignItems: "center" }}>
              <Text style={styles.riskCalculatorHeader}>
                Returns on Axis Multicap Growth Fund
              </Text>
              <Text style={styles.amount}>₹ {Math.floor(currentvalue)}</Text>
              <View style={styles.flexContainer}>
                <Text style={styles.absolute}>Absolute Returns :</Text>
                <Text style={styles.percentage}>
                  {" "}
                  {Math.floor(rgain)} ({Math.floor(rpercentage)}%)
                </Text>
              </View>
              <View style={styles.flexContainer}>
                <TouchableOpacity
                  onPress={() => handleFrequency("onetime")}
                  style={[
                    styles.frequencyButtons,
                    {
                      backgroundColor: onetime
                        ? "rgba(249, 174, 44, 1)"
                        : "white",
                    },
                  ]}
                >
                  <Text style={styles.frequencyButtonsText}>One - Time</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => handleFrequency("monthly")}
                  style={[
                    styles.frequencyButtons,
                    {
                      backgroundColor: monthly
                        ? "rgba(249, 174, 44, 1)"
                        : "white",
                    },
                  ]}
                >
                  <Text style={styles.frequencyButtonsText}>Monthly</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View>
              <View
                style={[styles.flexContainer, { marginTop: height * 0.04 }]}
              >
                <Text style={[styles.rangeText, { textAlign: "left" }]}>
                  Investment
                </Text>
                <Text style={styles.rangeTextPercentage}>
                  ₹ {MonthlyInvestment}
                </Text>
              </View>
              <Slider
                animateTransitions
                maximumTrackTintColor={"rgba(26, 28, 23, 0.12)"}
                minimumTrackTintColor={"rgba(2, 48, 71, 1)"}
                maximumValue={100000}
                minimumValue={1000}
                onValueChange={(value) =>
                  //setMonthlyInvestment(Math.floor(value))
                  //   Handleriskcalculator(Math.floor(value))
                  handleslider(Math.floor(value / 1000) * 1000, "investemnt")
                }
                value={Math.floor(MonthlyInvestment / 1000) * 1000}
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
                <Text style={styles.rangeTextPercentage}>
                  {timePeriod} Years
                </Text>
              </View>
              <Slider
                animateTransitions
                maximumTrackTintColor={"rgba(26, 28, 23, 0.12)"}
                minimumTrackTintColor={"rgba(2, 48, 71, 1)"}
                maximumValue={5}
                minimumValue={1}
                onValueChange={(yearValue) =>
                  // setTimePeriod(Math.floor(yearValue))
                  handleslider(Math.floor(yearValue), "timePeriod")
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
      ) : (
        <Loader />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  portfolioContainer: {
    flex: 1,
    backgroundColor: "white",
  },
  chartContainer: {
    padding: width * 0.04,
    marginTop: height * 0.02,
    backgroundColor: "white",
    borderWidth: width * 0.002,
    borderRadius: width * 0.045,
    borderColor: "rgb(230, 230, 230)",
    elevation: width * 0.01,
    marginBottom: height * 0.005,
  },
  Trend: {
    marginTop: height * 0.03,
    color: "rgba(2, 48, 71, 1)",
    fontWeight: "600",
    fontSize: width * 0.045,
    lineHeight: height * 0.035,
  },
  chart: {
    marginTop: height * 0.03,
    marginBottom: height * 0.04,
  },
  Picker: {
    color: "rgba(2, 48, 71, 1)",
    fontWeight: "600",
    width: width * 0.45,
  },
  buttonTextStyle: {
    color: "rgba(2, 48, 71, 1)",
    fontWeight: "600",
    fontSize: width * 0.04,
    lineHeight: height * 0.03,
  },
  buttonStyle: {
    backgroundColor: "white",
    width: width * 0.4,
  },
  gain: {
    marginLeft: width * 0.05,
    color: "rgba(35, 179, 113, 1)",
    fontWeight: "600",
    fontSize: width * 0.035,
    marginTop: -height * 0.015,
    lineHeight: height * 0.02,
  },
  pickerLabelStyle: {
    fontSize: width * 0.04,
    borderColor: "red",
  },
  riskCalculatorHeader: {
    color: "rgba(2, 48, 71, 1)",
    lineHeight: height * 0.02,
    fontSize: width * 0.035,
    fontWeight: "600",
    textAlign: "center",
    opacity: 0.8,
  },
  amount: {
    marginTop: height * 0.01,
    color: "rgba(2, 48, 71, 1)",
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
  frequencyButtonsText: {
    color: "rgba(2, 48, 71, 1)",
    // opacity: 0.6,
    fontSize: width * 0.035,
    lineHeight: height * 0.025,
    fontWeight: "500",
  },
  rangeText: {
    flex: 1,
    textAlign: "right",
    color: "rgba(2, 48, 71, 1)",
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

export default Portfolio;
