import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { TextInput } from "react-native-paper";

const { width, height } = Dimensions.get("window");

export default Otp = () => {
  return (
    <View style={styles.container}>
      <View style={styles.otpContainer}>
        <Text style={styles.header}>Phone Verification</Text>
        <Text style={styles.desc}>
          Please enter the 6-digit verification code sent to your phone.
        </Text>
        <Text style={styles.verificationHeader}>Verification Code</Text>
        <View style={styles.inputContainer}>
          <TextInput mode="" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
  },
  otpContainer: {
    padding: width * 0.05,
    marginTop: height * 0.15,
    backgroundColor: "yellow",
  },
  header: {
    color: "rgba(2, 48, 71, 1)",
    fontWeight: "700",
    fontSize: width * 0.08,
    lineHeight: width * 0.1,
    marginBottom: height * 0.04,
  },
  desc: {
    fontWeight: "500",
    fontSize: width * 0.04,
    lineHeight: width * 0.06,
    marginBottom: height * 0.1,
    color: "rgba(2, 48, 71, 1)",
  },
  inputContainer: {
    // Add styles for your OTP input container, e.g., flexDirection, justifyContent
  },
  verificationHeader: {
    fontWeight: "600",
    fontSize: width * 0.05,
    lineHeight: width * 0.07,
    color: "rgba(2, 48, 71, 1)",
    marginBottom: height * 0.04,
  },
});
