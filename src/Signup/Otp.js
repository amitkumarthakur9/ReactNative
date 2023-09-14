import React, { useState, useRef } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { TextInput, Button } from "react-native-paper";

const { width, height } = Dimensions.get("window");

export default Otp = () => {
  const [otp, setOtp] = useState(["", "", "", "", ""]);
  const [isSignUpDisabled, setIsSignUpDisabled] = useState(true);

  const inputRefs = useRef([]);

  const handleOtpChange = (oneTimePassword, index) => {
    const newOtp = [...otp];
    newOtp[index] = oneTimePassword;
    setOtp(newOtp);

    // Check if there are any empty fields in the OTP
    const isAnyFieldEmpty = newOtp.some(
      (oneTimePassword) => oneTimePassword === ""
    );

    // Update the button disabled state
    setIsSignUpDisabled(isAnyFieldEmpty);

    if (index < otp.length - 1 && oneTimePassword !== "") {
      inputRefs.current[index + 1].focus();
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.otpContainer}>
        <Text style={styles.header}>Phone Verification</Text>
        <Text style={styles.desc}>
          Please enter the 6-digit verification code sent to your phone.
        </Text>
        <Text style={styles.verificationHeader}>Verification Code</Text>
        <View style={styles.inputContainer}>
          {otp.map((digit, index) => (
            <TextInput
              key={index}
              style={styles.input}
              keyboardType="numeric"
              maxLength={1}
              onChangeText={(oneTimePassword) =>
                handleOtpChange(oneTimePassword, index)
              }
              value={digit}
              ref={(ref) => (inputRefs.current[index] = ref)}
            />
          ))}
        </View>
        <Text style={styles.resend}>
          Didn't receive the code ?
          <Text
            style={{
              color: "rgba(251, 133, 0, 1)",
              fontWeight: "600",
              fontSize: width * 0.045,
            }}
          >
            Resend Code
          </Text>
        </Text>
        <Button
          mode="contained"
          labelStyle={styles.buttonLabel}
          disabled={isSignUpDisabled}
          style={
            isSignUpDisabled ? styles.disabledButton : styles.enabledButton
          }
        >
          Sign Up
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  otpContainer: {
    left: "50%",
    width: width * 0.9,
    marginLeft: -width * 0.45,
    marginTop: height * 0.15,
    // backgroundColor: "yellow",
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
    flexDirection: "row",
    justifyContent: "space-between",
  },
  verificationHeader: {
    fontWeight: "600",
    fontSize: width * 0.05,
    lineHeight: width * 0.07,
    color: "rgba(2, 48, 71, 1)",
    marginBottom: height * 0.04,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "rgba(2, 48, 71, 1",
    fontSize: 24,
    padding: 1,
    textAlign: "center",
    color: "rgba(2, 48, 71, 1)",
    backgroundColor: "white",
  },
  resend: {
    fontWeight: "600",
    fontSize: width * 0.04,
    color: "rgba(2, 48, 71, 1)",
    marginTop: height * 0.02,
  },
  enabledButton: {
    marginTop: height * 0.05,
    height: height * 0.065,
    borderRadius: height * 0.013,
    backgroundColor: "rgba(2, 48, 71, 1)",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  disabledButton: {
    marginTop: height * 0.05,
    height: height * 0.065,
    borderRadius: height * 0.013,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgb(204, 204, 204)",
    opacity: 0.9,
  },
  buttonLabel: {
    fontSize: width * 0.05, // Adjust the font size based on screen width
    fontWeight: "bold",
    color: "white",
  },
});
