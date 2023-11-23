import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { height, width } from "../../Dimension";
import { Button } from "react-native-paper";

const Navigatescreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.bodyContainer}>
        <View style={styles.contentContainer1}>
          <Text style={styles.topHeading}>Getting Started</Text>
          <Text style={styles.toppara}>
            Choose one of the options below to begin your journey with
            Growthvine
          </Text>
        </View>
        <View style={styles.contentContainer}>
          <TouchableOpacity onPress={() => navigation.push("Riskcalculator")}>
            <View style={styles.buttonContainer}>
              <Image
                source={require("../../../assets/navigateScreens/1.png")}
                style={styles.image}
              />
            </View>
            <Text style={styles.text}>Calculate your{"\n"} Risk Profile</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.push("Upload")}>
            <View style={styles.buttonContainer}>
              <Image
                source={require("../../../assets/navigateScreens/2.png")}
                style={styles.image}
              />
            </View>
            <Text style={styles.text}>
              Upload existing{"\n"} Mutual Fund{"\n"} investment
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.contentContainer}>
          <TouchableOpacity onPress={() => navigation.push("Corpus")}>
            <View style={styles.buttonContainer}>
              <Image
                source={require("../../../assets/navigateScreens/3.png")}
                style={styles.image}
              />
            </View>
            <Text style={styles.text}>
              How to create an{"\n"} Emergency{"\n"} Corpus of 1Cr
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.push("Signup")}>
            <View style={styles.buttonContainer}>
              <Image
                source={require("../../../assets/navigateScreens/4.png")}
                style={[styles.image]}
              />
            </View>
            <Text style={styles.text}>Create Account /{"\n"}Login</Text>
          </TouchableOpacity>
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
    flexDirection: "row",
    gap: width * 0.07,
    justifyContent: "center",
  },
  bodyContainer: {
    padding: width * 0.06,
    marginTop: height * 0.1,
  },
  topHeading: {
    fontSize: width * 0.073,
    fontWeight: "700",
    color: "#023047",
  },
  toppara: {
    fontSize: width * 0.037,
    fontWeight: "500",
    marginTop: height * 0.028,
    marginBottom: height * 0.015,
    lineHeight: height * 0.028,
  },
  buttonContainer: {
    width: width * 0.292,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: width * 0.0028,
    borderColor: "#D9D9D9",
    backgroundColor: "white",
    borderRadius: width * 0.032,
    padding: height * 0.02,
    marginTop: height * 0.032,
  },
  image: {
    width: width * 0.2,
    height: height * 0.09,
  },
  text: {
    color: "#023047", // Your text color
    fontSize: width * 0.037,
    marginLeft: width * 0.018,
    lineHeight: height * 0.028,
    textAlign: "center",
  },
  signupContainer: {
    marginTop: height * 0.04,
    width: width,
    height: height * 0.17,
    justifyContent: "center",
    alignContent: "center",
    textAlign: "center",
    marginTop: height * 0.05,
  },
  phoneSignUp: {
    left: "50%",
    marginLeft: -width * 0.43, // Adjust the margin based on screen width
    width: width * 0.86, // Adjust the width based on screen width
    height: width * 0.14, // Adjust the height based on screen width
    borderRadius: width * 0.03, // Adjust the border radius based on screen width
    alignItems: "center", // Center the content horizontally
    justifyContent: "center", // Center the content vertically
    backgroundColor: "white",
    borderColor: "rgb(204, 204, 204)",
  },
  googleSignUp: {
    top: width * 0.03,
    left: "50%",
    marginLeft: -width * 0.43, // Adjust the margin based on screen width
    width: width * 0.86, // Adjust the width based on screen width
    height: width * 0.14, // Adjust the height based on screen width
    borderRadius: width * 0.03, // Adjust the border radius based on screen width
    alignItems: "center", // Center the content horizontally
    justifyContent: "center", // Center the content vertically
    backgroundColor: "white",
    borderColor: "rgb(204, 204, 204)",
  },
  buttonLabel: {
    fontSize: width * 0.045, // Adjust the font size based on screen width
    fontWeight: "600",
  },
  icon: {
    width: width * 0.06,
    height: width * 0.06,
    left: -width * 0.04,
  },
});

export default Navigatescreen;
