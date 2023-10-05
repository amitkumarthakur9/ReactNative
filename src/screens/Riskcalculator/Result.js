import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import { Button } from "react-native-paper";
import { width, height } from "../../Dimension";
import CircularProgress from "react-native-circular-progress-indicator";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Riskcalculator = ({ navigation }) => {
  const [finalscore, setFinalscore] = useState(0);
  useEffect(() => {
    async function fetchData() {
      try {
        const allKeys = await AsyncStorage.getAllKeys();
        const allData = await AsyncStorage.multiGet(allKeys);
        let total = 0;
        allData.forEach(([key, value]) => {
          let number = parseInt(value);
          total += number;
        });
        setFinalscore(total);
      } catch (e) {
        console.error("Error fetching keys:", e);
      }
    }

    fetchData(); // Call the async function immediately

    // Return an empty function for cleanup
    return () => {
      // You can add cleanup code here if needed
    };
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.header}>Your Risk Score</Text>
        <Text style={styles.desc}>
          * Calculated based on your responses to the questions
        </Text>
        <View style={styles.circularProgressContainer}>
          <CircularProgress
            value={finalscore}
            radius={80}
            duration={2000}
            maxValue={40}
            clockwise={false}
            title={"Out of 40"}
            titleColor={"rgba(33, 158, 188, 1)"}
            titleStyle={{ fontWeight: "600", fontSize: width * 0.04 }}
            progressValueColor={"rgba(2, 48, 71, 1)"}
            progressValueFontSize={width * 0.175}
            activeStrokeColor={"rgba(251, 133, 0, 1)"}
            inActiveStrokeColor={"rgba(42, 42, 42, 0.1)"}
            inActiveStrokeWidth={12}
            activeStrokeWidth={12}
            // onAnimationComplete={() => {
            //   alert("Your score is :" + finalscore);
            // }}
          />
        </View>
        <Text style={styles.text}>
          Risk profile :{" "}
          <Text style={{ color: "rgba(251, 133, 0, 1)" }}>Moderate</Text>
        </Text>
        <View style={styles.continueContainer}>
          <Button
            mode="text"
            icon="recycle-variant"
            style={{ marginRight: width * 0.2 }}
            onPress={() => {
              navigation.push("Riskcalculator");
            }}
          >
            Retake
          </Button>
          <Button
            mode="contained"
            style={styles.calculateButton}
            icon="arrow-right-bold"
            contentStyle={{
              flexDirection: "row-reverse",
            }}
            labelStyle={styles.buttonLabel} // Increase text size and change text color
            onPress={() => {
              navigation.push("Account");
            }}
          >
            Continue
          </Button>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  contentContainer: {
    marginTop: height * 0.1,
  },
  header: {
    marginTop: height * 0.01,
    fontWeight: "600",
    fontSize: width * 0.06,
    lineHeight: height * 0.04,
    textAlign: "center",
    color: "rgba(2, 48, 71, 1)",
  },
  desc: {
    marginTop: height * 0.01,
    fontWeight: "500",
    fontSize: width * 0.04,
    lineHeight: height * 0.03,
    textAlign: "center",
    color: "rgba(2, 48, 71, 1)",
    marginBottom: height * 0.08,
  },
  circularProgressContainer: {
    alignItems: "center", // Center contents horizontally
  },
  calculateButton: {
    width: width * 0.4,
    height: height * 0.06,
    borderRadius: width * 0.03,
    backgroundColor: "rgba(0, 53, 102, 1)", // Change button color
    justifyContent: "center", // Center button text horizontally
    textAlign: "center",
  },
  buttonLabel: {
    fontSize: width * 0.04, // Adjust the font size based on screen width
  },
  text: {
    textAlign: "center",
    marginTop: height * 0.04,
    color: "rgba(2, 48, 71, 1)",
    fontWeight: "600",
    fontSize: width * 0.042,
  },
  continueContainer: {
    marginTop: height * 0.06,
    flexDirection: "row",
    justifyContent: "flex-end", // Align buttons to the right
    alignItems: "center", // Center items vertically
    left: -width * 0.04,
  },
});

export default Riskcalculator;
