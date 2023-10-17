import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { PieChart } from "react-native-gifted-charts";
import { height, width } from "../../Dimension";
import * as progress from "react-native-progress";

const Holdings = () => {
  const pieData = [
    { value: 10, color: "rgba(59, 130, 246, 1)", text: "54%" },
    { value: 10, color: "rgba(250, 204, 21, 1)", text: "30%" },
    { value: 10, color: "rgba(245, 158, 11, 1)", text: "26%" },
    { value: 10, color: "rgba(236, 72, 153, 1)", text: "30%" },
    { value: 10, color: "rgba(99, 102, 241, 1)", text: "26%" },
    { value: 10, color: "rgba(59, 130, 246, 1)", text: "26%" },
  ];

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={styles.donutContainer}>
          <Text style={styles.sectorHeading}>Sector Holdings</Text>
          <View style={styles.chartContainer}>
            <PieChart
              donut
              //   focusOnPress
              //   toggleFocusOnPress
              //   showText
              radius={width * 0.32}
              data={pieData}
              innerRadius={width * 0.22}
            />
          </View>
          <View
            style={[
              styles.sectorContainer,
              {
                borderBottomWidth: width * 0.005,
                borderColor: "rgb(230, 230, 230)",
              },
            ]}
          >
            <Text style={[styles.sectorHeader, { marginLeft: width * 0.09 }]}>
              Sector
            </Text>
            <Text style={[styles.sectorHeader, { textAlign: "right" }]}>
              Stake %
            </Text>
          </View>
          <View style={styles.sectorContainer}>
            <Text
              style={[
                styles.bullet,
                { backgroundColor: "rgba(59, 130, 246, 1)" },
              ]}
            />
            <Text style={styles.sectorItem}>Financial</Text>
            <Text style={[styles.sectorPercentage]}>62.5%</Text>
          </View>
          <View style={styles.sectorContainer}>
            <Text
              style={[
                styles.bullet,
                { backgroundColor: "rgba(245, 158, 11, 1)" },
              ]}
            />
            <Text style={styles.sectorItem}>Cash Holdings</Text>
            <Text style={[styles.sectorPercentage]}>25%</Text>
          </View>
          <View style={styles.sectorContainer}>
            <Text
              style={[
                styles.bullet,
                { backgroundColor: "rgba(250, 204, 21, 1)" },
              ]}
            />
            <Text style={styles.sectorItem}>Metal & Mining</Text>
            <Text style={[styles.sectorPercentage]}>12.5%</Text>
          </View>
          <View style={styles.sectorContainer}>
            <Text
              style={[
                styles.bullet,
                { backgroundColor: "rgba(236, 72, 153, 1)" },
              ]}
            />
            <Text style={styles.sectorItem}>Metal & Mining</Text>
            <Text style={[styles.sectorPercentage]}>30%</Text>
          </View>
          <View style={styles.sectorContainer}>
            <Text
              style={[
                styles.bullet,
                { backgroundColor: "rgba(99, 102, 241, 1)" },
              ]}
            />
            <Text style={styles.sectorItem}>Metal & Mining</Text>
            <Text style={[styles.sectorPercentage]}>30%</Text>
          </View>
          <View style={styles.sectorContainer}>
            <Text
              style={[
                styles.bullet,
                { backgroundColor: "rgba(59, 130, 246, 1)" },
              ]}
            />
            <Text style={styles.sectorItem}>Metal & Mining</Text>
            <Text style={[styles.sectorPercentage]}>30%</Text>
          </View>
        </View>
        <Text style={styles.companyHolding}>Company Holdings</Text>

        <View style={styles.progressBarContainer}>
          <View style={styles.progressBarItem}>
            <Text style={styles.progressHeader}>Others</Text>
            <progress.Bar
              progress={0.9}
              color={"rgba(251, 133, 0, 1)"}
              height={width * 0.015}
              width={width * 0.73}
              unfilledColor={"rgba(222, 222, 222, 0.8)"}
              borderColor={"rgba(222, 222, 222, 0.8)"}
            />
          </View>
          <Text style={styles.progressBarPercentage}>90%</Text>
        </View>

        <View style={styles.progressBarContainer}>
          <View style={styles.progressBarItem}>
            <Text style={styles.progressHeader}>RBI</Text>
            <progress.Bar
              progress={0.8}
              color={"rgba(251, 133, 0, 1)"}
              height={width * 0.015}
              width={width * 0.73}
              unfilledColor={"rgba(222, 222, 222, 0.8)"}
              borderColor={"rgba(222, 222, 222, 0.8)"}
            />
          </View>
          <Text style={styles.progressBarPercentage}>80%</Text>
        </View>

        <View style={styles.progressBarContainer}>
          <View style={styles.progressBarItem}>
            <Text style={styles.progressHeader}>Jio Financial Services</Text>
            <progress.Bar
              progress={0.7}
              color={"rgba(251, 133, 0, 1)"}
              height={width * 0.015}
              width={width * 0.73}
              unfilledColor={"rgba(222, 222, 222, 0.8)"}
              borderColor={"rgba(222, 222, 222, 0.8)"}
            />
          </View>
          <Text style={styles.progressBarPercentage}>70%</Text>
        </View>

        <View style={styles.progressBarContainer}>
          <View style={styles.progressBarItem}>
            <Text style={styles.progressHeader}>Hdfc Bank Limited</Text>
            <progress.Bar
              progress={0.6}
              color={"rgba(251, 133, 0, 1)"}
              height={width * 0.015}
              width={width * 0.73}
              unfilledColor={"rgba(222, 222, 222, 0.8)"}
              borderColor={"rgba(222, 222, 222, 0.8)"}
            />
          </View>
          <Text style={styles.progressBarPercentage}>60%</Text>
        </View>

        <View style={styles.progressBarContainer}>
          <View style={styles.progressBarItem}>
            <Text style={styles.progressHeader}>RBI</Text>
            <progress.Bar
              progress={0.5}
              color={"rgba(251, 133, 0, 1)"}
              height={width * 0.015}
              width={width * 0.73}
              unfilledColor={"rgba(222, 222, 222, 0.8)"}
              borderColor={"rgba(222, 222, 222, 0.8)"}
            />
          </View>
          <Text style={styles.progressBarPercentage}>50%</Text>
        </View>

        <View style={styles.progressBarContainer}>
          <View style={styles.progressBarItem}>
            <Text style={styles.progressHeader}>RBI</Text>
            <progress.Bar
              progress={0.4}
              color={"rgba(251, 133, 0, 1)"}
              height={width * 0.015}
              width={width * 0.73}
              unfilledColor={"rgba(222, 222, 222, 0.8)"}
              borderColor={"rgba(222, 222, 222, 0.8)"}
            />
          </View>
          <Text style={styles.progressBarPercentage}>40%</Text>
        </View>

        <View style={styles.progressBarContainer}>
          <View style={styles.progressBarItem}>
            <Text style={styles.progressHeader}>RBI</Text>
            <progress.Bar
              progress={0.2}
              color={"rgba(251, 133, 0, 1)"}
              height={width * 0.015}
              width={width * 0.73}
              unfilledColor={"rgba(222, 222, 222, 0.8)"}
              borderColor={"rgba(222, 222, 222, 0.8)"}
            />
          </View>
          <Text style={styles.progressBarPercentage}>20%</Text>
        </View>

        <View style={styles.progressBarContainer}>
          <View style={styles.progressBarItem}>
            <Text style={styles.progressHeader}>RBI</Text>
            <progress.Bar
              progress={0.1}
              color={"rgba(251, 133, 0, 1)"}
              height={width * 0.015}
              width={width * 0.73}
              unfilledColor={"rgba(222, 222, 222, 0.8)"}
              borderColor={"rgba(222, 222, 222, 0.8)"}
            />
          </View>
          <Text style={styles.progressBarPercentage}>10%</Text>
        </View>

        <View style={styles.progressBarContainer}>
          <View style={styles.progressBarItem}>
            <Text style={styles.progressHeader}>RBI</Text>
            <progress.Bar
              progress={0.8}
              color={"rgba(251, 133, 0, 1)"}
              height={width * 0.015}
              width={width * 0.73}
              unfilledColor={"rgba(222, 222, 222, 0.8)"}
              borderColor={"rgba(222, 222, 222, 0.8)"}
            />
          </View>
          <Text style={styles.progressBarPercentage}>80%</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  donutContainer: {
    padding: width * 0.06,
    marginTop: height * 0.03,
    borderWidth: width * 0.003,
    borderRadius: width * 0.035,
    borderColor: "rgb(230, 230, 230)",
    backgroundColor: "white",
    elevation: width * 0.01,
  },
  bullet: {
    width: width * 0.035,
    height: width * 0.035,
    marginTop: width * 0.04,
    backgroundColor: "red",
    borderRadius: (width * 0.035) / 2,
  },
  chartContainer: {
    alignSelf: "center",
    left: width * 0.03,
  },
  sectorHeading: {
    color: "rgba(2, 48, 71, 1)",
    fontWeight: "600",
    fontSize: width * 0.045,
    marginBottom: height * 0.04,
  },
  sectorContainer: {
    flexDirection: "row",
  },
  sectorHeader: {
    flex: 1,
    margin: width * 0.025,
    fontWeight: "600",
    fontSize: width * 0.04,
    lineHeight: height * 0.027,
    color: "rgba(115, 115, 115, 1)",
  },
  sectorItem: {
    flex: 1,
    margin: width * 0.03,
    fontWeight: "500",
    fontSize: width * 0.035,
    lineHeight: height * 0.027,
    color: "rgba(64, 64, 64, 1)",
    opacity: 0.85,
    marginLeft: width * 0.05,
  },
  sectorPercentage: {
    flex: 1,
    margin: width * 0.03,
    fontWeight: "500",
    fontSize: width * 0.038,
    lineHeight: height * 0.028,
    color: "rgba(2, 48, 71, 1)",
    opacity: 0.95,
    textAlign: "right",
  },
  companyHolding: {
    marginTop: height * 0.05,
    fontWeight: "600",
    fontSize: width * 0.045,
    lineHeight: height * 0.035,
    color: "rgba(2, 48, 71, 1)",
    marginBottom: height * 0.03,
  },
  progressBarContainer: {
    flexDirection: "row",
  },
  progressBarItem: {
    marginBottom: height * 0.02,
    flex: 1,
  },
  progressBarPercentage: {
    marginTop: height * 0.035,
    color: "rgba(33, 158, 188, 0.6)",
    fontSize: width * 0.035,
    lineHeight: height * 0.02,
    fontWeight: "600",
  },
  progressHeader: {
    color: "rgba(0, 0, 0, 1)",
    lineHeight: height * 0.04,
    fontSize: width * 0.035,
    fontWeight: "500",
  },
});

export default Holdings;
