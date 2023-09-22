import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Dimensions, Image } from "react-native";
import { Button, TextInput, Checkbox } from "react-native-paper";
import auth from "@react-native-firebase/auth"; // Import Firebase auth
import { width, height } from "../../Dimension";

export default Singupwithphone = ({ navigation }) => {
  const [checked, setChecked] = useState(false);
  const [phone, setPhone] = useState("");
  const [phonevalidation, setPhonevalidation] = useState(false);
  const [confirm, setConfirm] = useState(null);
  const countryCode = "+91";

  function onAuthStateChanged(user) {
    if (user) {
      // Some Android devices can automatically process the verification code (OTP) message, and the user would NOT need to enter the code.
      // Actually, if he/she tries to enter it, he/she will get an error message because the code was already used in the background.
      // In this function, make sure you hide the component(s) for entering the code and/or navigate away from this screen.
      // It is also recommended to display a message to the user informing him/her that he/she has successfully logged in.
    }
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  async function signInWithPhoneNumber(phoneNumber) {
    try {
      const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
      setConfirm(confirmation);
      //   console.log(confirmation);
      return confirmation;
    } catch (error) {
      console.error("Error sending verification code:", error);
      return null;
    }
  }

  const handlePhone = (number) => {
    const phonePattern = /^[0-9]{10}$/;
    setPhone(number);
    const numberValidation = phonePattern.test(number);
    setPhonevalidation(numberValidation);
  };

  const handleSignup = async () => {
    const mobileNumber = countryCode + phone;
    try {
      const confirmation = await signInWithPhoneNumber(mobileNumber);
      if (confirmation) {
        // console.log(confirmation);
        navigation.navigate("Otp", { confirmation }); // Navigate to the "Otp" screen
      } else {
        console.error("No confirmation object received.");
      }
    } catch (error) {
      console.error("Error sending verification code:", error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.signupContainer}>
        <Text style={styles.signupText}>Sign Up </Text>
        <View>
          <View>
            <Text style={styles.signupDescHeader}>
              Enter your phone number below.
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
              style={styles.numberInput}
              outlineStyle={styles.outlines}
              cursorColor="rgb(2, 48, 71)"
              textColor="rgb(2, 48, 71)"
              keyboardType="numeric"
              maxLength={10}
              onChangeText={handlePhone}
              value={phone}
            />
          </View>
          {!phonevalidation && phone !== "" && (
            <Text style={styles.errorText}>
              <Image
                source={require("../../../assets/signup/errorText.png")}
                style={{
                  width: width * 0.07,
                  height: height * 0.035,
                }}
              />
              {"   "}Invalid Phone number. Please enter a valid phone number
            </Text>
          )}
          <View style={styles.checkContainer}>
            <Checkbox
              status={checked ? "checked" : "unchecked"}
              onPress={() => setChecked(!checked)}
              color="rgb(2, 48, 71)"
              uncheckedColor="red"
            />
            <Text style={styles.terms}>
              I agree to the Terms & Conditions set by growthvine
            </Text>
          </View>
          <Button
            mode="contained"
            labelStyle={styles.buttonLabel}
            disabled={!phonevalidation || !checked}
            onPress={handleSignup}
            style={
              phonevalidation && checked
                ? styles.enabledButton
                : styles.disabledButton
            }
          >
            Sign Up
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
    flex: 1,
    backgroundColor: "white",
  },
  signupContainer: {
    left: "50%",
    width: width * 0.9,
    marginLeft: -width * 0.45,
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
    textAlign: "justify",
  },
  phoneContainer: {
    marginTop: height * 0.02,
    flexDirection: "row",
  },
  phoneText: {
    marginTop: height * 0.04,
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
    backgroundColor: "white",
  },
  checkContainer: {
    marginTop: height * 0.02,
    flexDirection: "row",
  },
  terms: {
    marginTop: width * 0.01,
    marginLeft: width * 0.02,
    fontWeight: "500",
    fontSize: width * 0.04,
    lineHeight: width * 0.07,
    color: "rgba(2, 48, 71, 1)",
    flex: 1,
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
  alreayRegistered: {
    marginTop: width * 0.05,
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
  errorText: {
    color: "rgba(186, 27, 27, 1)",
    fontWeight: "500",
    fontSize: width * 0.036,
    lineHeight: width * 0.06,
  },
});
