import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { height, width } from "../../Dimension";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { Button } from "react-native-paper";

export default Assetheader = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Ionicons
          name="arrow-back"
          size={width * 0.07}
          color="white"
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.header}>Axis Multicap Gowth Fund</Text>
        <View style={styles.flexContainer}>
          <Text style={styles.mfTypeButtons}>Equity</Text>
          <Text style={styles.mfTypeButtons}>Large Cap</Text>
        </View>
        <View
          style={[
            styles.flexContainer,
            { marginTop: height * 0.02, marginBottom: height * 0.01 },
          ]}
        >
          <View style={styles.view}>
            <Text style={styles.duration}>1 yr</Text>
            <Text style={styles.percentage}>16%</Text>
          </View>
          <View style={styles.view}>
            <Text style={styles.duration}>3 yr</Text>
            <Text style={styles.percentage}>20%</Text>
          </View>
          <View style={styles.view}>
            <Text style={styles.duration}>5 yr</Text>
            <Text style={styles.percentage}>22.8%</Text>
          </View>
          <View style={[styles.view, { borderRightWidth: 0 }]}>
            <Text style={styles.duration}>Risk </Text>
            <Text style={styles.percentage}>Moderate</Text>
          </View>
        </View>
        <StatusBar hidden={false} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "orange",
    borderWidth: width * 0.01,
    borderColor: "orange",
    borderBottomLeftRadius: width * 0.08,
    borderBottomRightRadius: width * 0.08,
    paddingLeft: width * 0.04,
  },
  headerContainer: {
    backgroundColor: "orange",
    marginTop: height * 0.07,
    // padding: width * 0.02,
    borderBottomLeftRadius: width * 0.08,
    borderBottomRightRadius: width * 0.08,
  },
  header: {
    marginTop: height * 0.02,
    fontWeight: "600",
    fontSize: width * 0.056,
    color: "rgba(255, 255, 255, 1)",
    lineHeight: height * 0.04,
    marginLeft: width * 0.01,
  },
  flexContainer: {
    flexDirection: "row",
    // marginTop: height * 0.01,
  },
  mfTypeButtons: {
    margin: width * 0.01,
    borderWidth: width * 0.002,
    borderColor: "white",
    borderRadius: width * 0.03,
    opacity: 0.7,
    color: "white",
    padding: width * 0.02,
    fontSize: width * 0.036,
  },
  labelStyle: {
    color: "white",
    fontSize: width * 0.04,
  },
  view: {
    borderRightWidth: width * 0.002,
    borderColor: "white",
    paddingRight: width * 0.05,
    margin: width * 0.02,
  },
  duration: {
    fontSize: width * 0.035,
    color: "rgba(255, 255, 255, 1)",
    opacity: 0.6,
    fontWeight: "500",
    lineHeight: height * 0.025,
  },
  percentage: {
    fontSize: width * 0.035,
    color: "rgba(255, 255, 255, 1)",
    fontWeight: "600",
  },
});
