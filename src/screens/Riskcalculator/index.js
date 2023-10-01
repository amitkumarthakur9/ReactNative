import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Button } from "react-native-paper";
import { width, height } from "../../Dimension";

const Riskcalculator = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text
          style={styles.skip}
          onPress={() => navigation.push("Optionscreen")}
        >
          Skip
        </Text>
        <Image
          source={require("../../../assets/riskCalculator/1.png")}
          style={styles.image}
        />
        <Text style={styles.header}>Calculate Risk Profile</Text>
        <Text style={styles.desc}>
          This will help us understand your risk appetite and suggest relevant
          investment options for you
        </Text>
        <View>
          <Button
            mode="contained"
            style={styles.calculateButton}
            icon="arrow-right-bold"
            contentStyle={{
              flexDirection: "row-reverse",
            }}
            labelStyle={styles.buttonLabel} // Increase text size and change text color
            onPress={() => navigation.push("Rpscreens")}
          >
            Calculate
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
  skip: {
    fontWeight: "600",
    fontSize: width * 0.045,
    lineHeight: height * 0.03,
    color: "rgba(63, 148, 182, 1)",
    left: width * 0.85,
  },
  image: {
    width: width,
    height: height * 0.2,
    resizeMode: "contain",
    marginTop: height * 0.04,
  },
  header: {
    marginTop: height * 0.05,
    fontWeight: "700",
    fontSize: width * 0.08,
    lineHeight: height * 0.04,
    textAlign: "center",
    color: "rgba(2, 48, 71, 1)",
  },
  desc: {
    marginTop: height * 0.02,
    fontWeight: "500",
    fontSize: width * 0.04,
    lineHeight: height * 0.03,
    textAlign: "center",
    color: "rgba(2, 48, 71, 1)",
  },
  calculateButton: {
    marginTop: height * 0.1,
    width: width * 0.4,
    height: height * 0.06,
    borderRadius: width * 0.03,
    backgroundColor: "rgba(0, 53, 102, 1)", // Change button color
    justifyContent: "center", // Center button text horizontally
    textAlign: "center",
    left: width - width * 0.45,
  },
  buttonLabel: {
    fontSize: width * 0.045, // Adjust the font size based on screen width
  },
});

export default Riskcalculator;
