import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { Button, TextInput, Checkbox } from "react-native-paper";
import Footer from "../screens/Welcomescreens/Footer";

const { width, height } = Dimensions.get("window");

export default Singupwithphone = () => {
  return (
    <View style={styles.container}>
      <View style={styles.signupContainer}>
        <Text style={styles.signupText}>Sign Up </Text>
        <View>
          <View>
            <Text style={styles.signupDescHeader}>
              Enter your phone number below.{" "}
            </Text>
            <Text style={styles.signupDesc}>
              We will send a 6 digit verification code to verify your phone
              number.
            </Text>
          </View>

          <Text style={styles.phoneText}>Phone number</Text>
          <View style={styles.phoneContainer}>
            <View style={styles.countryCodeContainer}>
              <Text style={styles.countryCode}> +91 </Text>
            </View>
            <TextInput
              mode="outlined"
              placeholder="Enter Phone Number"
              style={[styles.numberInput, { marginTop: -width * 0.017 }]}
              outlineStyle={styles.outlines}
            />
          </View>
          <View style={styles.checkContainer}>
            <Checkbox
              onPress={() => {
                console.log("pressed");
              }}
            />
            <Text style={styles.terms}>
              I agree to the Terms & Conditions set by growthvine
            </Text>
          </View>
          <Button
            mode="contained"
            onPress={() => console.log("Pressed")}
            style={styles.submit}
            labelStyle={styles.buttonLabel}
          >
            Sign UP
          </Button>
          <Text style={styles.alreayRegistered}>
            Already registered ?{" "}
            <Text
              style={{
                fontSize: width * 0.045,
                color: "rgba(251, 133, 0, 1)",
                lineHeight: width * 0.06,
              }}
            >
              Sign In
            </Text>
          </Text>
        </View>
      </View>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
    flex: 1,
  },
  signupContainer: {
    padding: width * 0.056,
    width: width,
    marginTop: height * 0.1,
  },
  signupText: {
    marginBottom: height * 0.04,
    fontWeight: "700",
    fontSize: width * 0.08,
    lineHeight: width * 0.09,
    color: "rgba(2, 48, 71, 1)",
  },
  signupDescHeader: {
    marginBottom: height * 0.015,
    fontWeight: "500",
    fontSize: width * 0.04,
    lineHeight: width * 0.06,
    color: "rgba(2, 48, 71, 1)",
  },
  signupDesc: {
    fontWeight: "500",
    fontSize: width * 0.04,
    lineHeight: width * 0.06,
    color: "rgba(2, 48, 71, 1)",
  },
  phoneContainer: {
    marginTop: height * 0.02,
    flexDirection: "row",
  },
  phoneText: {
    marginTop: height * 0.05,
    fontWeight: "600",
    fontSize: width * 0.05,
    lineHeight: width * 0.07,
    color: "rgba(2, 48, 71, 1)",
  },
  countryCodeContainer: {
    borderColor: "rgba(72, 72, 74, 0.5)",
    borderWidth: 1,
    borderRadius: 8,
    alignItems: "center", // Center vertically
  },
  countryCode: {
    textAlign: "center",
    width: width * 0.2,
    padding: width * 0.04,
    fontWeight: "600",
    fontSize: width * 0.045,
    marginRight: width * 0.02, // Add margin here for spacing
  },
  numberInput: {
    marginLeft: width * 0.02, // Add margin here for spacing
    flex: 1,
  },
  checkContainer: {
    marginTop: height * 0.03,
    flexDirection: "row",
  },
  terms: {
    marginTop: width * 0.01,
    marginLeft: width * 0.02,
    fontWeight: "500",
    fontSize: width * 0.04,
    lineHeight: width * 0.07,
    color: "rgba(2, 48, 71, 1)",
  },
  submit: {
    marginTop: height * 0.05,
    height: height * 0.065,
    borderRadius: height * 0.013,
    backgroundColor: "rgba(2, 48, 71, 1)",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonLabel: {
    fontSize: width * 0.05, // Adjust the font size based on screen width
    fontWeight: "bold",
    color: "white",
  },
  alreayRegistered: {
    top: width * 0.12,
    width: width * 0.6,
    fontSize: width * 0.04,
    color: "rgb(166, 166, 166)",
    fontWeight: "600",
    lineHeight: width * 0.05,
  },
  outlines: {
    borderRadius: 8,
    borderColor: "rgba(72, 72, 74, 0.5)",
  },
});
