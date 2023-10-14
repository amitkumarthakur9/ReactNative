import React, { useState } from "react";
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

const Portfolio = () => {
  const [trendDuration, setTrendDuration] = useState();
  const [MonthlyInvestment, setMonthlyInvestment] = useState(1000);
  const [timePeriod, setTimePeriod] = useState(1);
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
    <View style={styles.portfolioContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.Trend}>Trend</Text>
        <View style={styles.chartContainer}>
          <TouchableOpacity style={styles.dropdown}>
            <Picker
              selectedValue={trendDuration}
              onValueChange={(itemValue, itemIndex) =>
                setTrendDuration(itemValue)
              }
              mode="dropdown"
              style={styles.Picker}
            >
              <Picker.Item
                label="Last Week"
                value="Last Week"
                style={styles.pickerLabelStyle}
              />
              <Picker.Item
                label="Last Month"
                value="Last Month"
                style={styles.pickerLabelStyle}
              />
            </Picker>
          </TouchableOpacity>

          <Text style={styles.gain}>+22.56 (7%)</Text>
          <View style={styles.chart}>
            <LineChart
              areaChart
              data={ptData}
              width={width}
              hideDataPoints
              spacing={width * 0.05}
              color="rgba(61, 193, 84, 1)"
              thickness={width * 0.015}
              startFillColor="rgba(193, 241, 142, 1)"
              endFillColor="rgba(254, 253, 255, 1)"
              initialSpacing={0}
              yAxisThickness={0}
              xAxisColor="white"
              hideYAxisText={true}
              pointerConfig={{
                pointerStripHeight: height * 0.2,
                pointerStripColor: "rgba(61, 193, 84, 1)",
                pointerStripWidth: width * 0.015,
                pointerColor: "rgba(61, 193, 84, 1)",
                radius: width * 0.02,
                pointerLabelWidth: width * 0.25,
                activatePointersOnLongPress: true,
                autoAdjustPointerLabelPosition: false,
                pointerLabelComponent: (items) => {
                  return (
                    <View
                      style={{
                        height: width * 0.25,
                        width: width * 0.25,
                        justifyContent: "center",
                        marginTop: -30,
                        marginLeft: -40,
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
                          {"+" + items[0].value + ".0"}
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
            <Text style={styles.amount}>₹10,600.00</Text>
            <View style={styles.flexContainer}>
              <Text style={styles.absolute}>Absolute Returns :</Text>
              <Text style={styles.percentage}> +32.3 (9%)</Text>
            </View>
            <View style={styles.flexContainer}>
              <TouchableOpacity
                style={[styles.frequencyButtons, { backgroundColor: "white" }]}
              >
                <Text style={styles.frequencyButtonsText}>One - Time</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.frequencyButtons,
                  { backgroundColor: "rgba(249, 174, 44, 1)" },
                ]}
              >
                <Text style={styles.frequencyButtonsText}>Monthly</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <View style={[styles.flexContainer, { marginTop: height * 0.04 }]}>
              <Text style={[styles.rangeText, { textAlign: "left" }]}>
                Monthly Investment
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
                Time Period
              </Text>
              <Text style={styles.rangeTextPercentage}>{timePeriod} Years</Text>
            </View>
            <Slider
              animateTransitions
              maximumTrackTintColor={"rgba(26, 28, 23, 0.12)"}
              minimumTrackTintColor={"rgba(2, 48, 71, 1)"}
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
    elevation: width * 0.02,
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
