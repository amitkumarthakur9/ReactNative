import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Alert, Image } from "react-native";
import { Button } from "react-native-paper";
import { width, height } from "../../Dimension";
import CircularProgress from "react-native-circular-progress-indicator";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Header from "../Components/Header";
import { useFonts } from "expo-font";
const Riskcalculator = ({ navigation }) => {
  const [finalscore, setFinalscore] = useState(0);
  const [imageUrl, setImageUrl] = useState(
    require("../../../assets/riskCalculator/1.png")
  );
  const [riskName, setRiskName] = useState("Conservative");
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
        total <= 8
          ? (setImageUrl(require("../../../assets/riskCalculator/1.png")),
            setRiskName("Conservative"))
          : total > 8 && total <= 16
          ? (setImageUrl(require("../../../assets/riskCalculator/2.png")),
            setRiskName("Moderately Conservative"))
          : total > 16 && total <= 24
          ? (setImageUrl(require("../../../assets/riskCalculator/3.png")),
            setRiskName("Moderate"))
          : total > 24 && total <= 32
          ? (setImageUrl(require("../../../assets/riskCalculator/4.png")),
            setRiskName("Aggressive"))
          : total > 32 && total <= 40
          ? (setImageUrl(require("../../../assets/riskCalculator/5.png")),
            setRiskName(" Extremely Aggressive"))
          : (setImageUrl(require("../../../assets/riskCalculator/1.png")),
            setRiskName("Conservative"));
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

  const [fontsLoaded] = useFonts({
    "Inter-Black": require("../../../assets/fonts/metropolis-latin-500-normal.ttf"),
  });

  return (
    <View style={styles.container}>
      <Header title="Your Risk Score" />
      <View style={styles.contentContainer}>
        {/* <Text style={styles.header}>Your Risk Score</Text> */}
        <Text style={styles.desc}>
          * Calculated based on your responses to the questions
        </Text>
        <View style={styles.circularProgressContainer}>
          {/* <CircularProgress
            value={finalscore}
            radius={80}
            duration={2000}
            maxValue={40}
            clockwise={false}
            title={"Out of 40"}
            titleColor={"rgba(33, 158, 188, 1)"}
            titleStyle={{  fontFamily: "Inter-Black",fontWeight: "600", fontSize: width * 0.04 }}
            progressValueColor={"rgba(2, 48, 71, 1)"}
            progressValueFontSize={width * 0.175}
            activeStrokeColor={"rgba(251, 133, 0, 1)"}
            inActiveStrokeColor={"rgba(42, 42, 42, 0.1)"}
            inActiveStrokeWidth={12}
            activeStrokeWidth={12}
          /> */}

          <Image source={imageUrl} style={styles.image} />
        </View>
        <Text style={styles.text}>
          Risk profile :{" "}
          <Text style={{ color: "rgba(251, 133, 0, 1)" }}>{riskName}</Text>
        </Text>
        <View style={styles.continueContainer}>
          <Button
            mode="contained"
            icon="recycle-variant"
            style={[styles.calculateButton, { marginRight: width * 0.1 }]}
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
            labelStyle={styles.buttonLabel}
            onPress={() => {
              navigation.push("Signup");
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
    marginTop: height * 0.05,
  },
  header: {
    marginTop: height * 0.01,
    fontFamily: "Inter-Black",
    fontWeight: "600",
    fontSize: width * 0.06,
    lineHeight: height * 0.04,
    textAlign: "center",
    color: "rgba(2, 48, 71, 1)",
  },
  desc: {
    marginTop: height * 0.01,
    fontFamily: "Inter-Black",
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
    fontFamily: "Inter-Black",
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
  image: {
    width: width,
    height: height * 0.2,
    resizeMode: "contain",
  },
});

export default Riskcalculator;
