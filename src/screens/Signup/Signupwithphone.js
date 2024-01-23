import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Button, TextInput, Checkbox } from "react-native-paper";
import auth from "@react-native-firebase/auth"; // Import Firebase auth
import { width, height } from "../../Dimension";
import { Ionicons } from "@expo/vector-icons";
import Header from "../Components/Header";
import Loader from "../Components/Loader";
import { Phonelogin } from "../../api/services/endpoints/userEndpoints";

export default Singupwithphone = ({ navigation }) => {
  const [checked, setChecked] = useState(false);
  const [phone, setPhone] = useState("");
  const [phonevalidation, setPhonevalidation] = useState(false);
  const [confirm, setConfirm] = useState(null);
  const countryCode = "+91";
  const [showLoader, setShowLoader] = useState(false);
  const [otpSent, setOtpSent] = useState(false);

  const loginWithPhone = () => {
    setShowLoader(true);
    Phonelogin(phone).then((response) => {
      //   console.log(response.data);
      if (response.data.success) {
        setOtpSent(true);
      }
    });
  };

  useEffect(() => {
    if (showLoader) {
      navigation.navigate("Otp", { mobileNumber: phone });
    }
    return () => {
      setShowLoader(false);
    };
  }, [showLoader]);

  const handlePhone = (number) => {
    const phonePattern = /^[0-9]{10}$/;
    setPhone(number);
    const numberValidation = phonePattern.test(number);
    setPhonevalidation(numberValidation);
  };
  return (
    <View style={styles.container}>
      <Header title="Sign Up" />
      <ScrollView>
        <View style={styles.signupContainer}>
          {/* <Ionicons
            name="arrow-back"
            size={width * 0.08}
            color="rgba(56, 102, 100, 1)"
            onPress={() => navigation.goBack()}
            style={{ marginBottom: height * 0.03 }}
          /> */}
          {/* <Text style={styles.signupText}>Sign Up </Text> */}
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
            {showLoader ? (
              <Loader />
            ) : (
              <>
                <TouchableOpacity onPress={loginWithPhone}>
                  <Button
                    mode="contained"
                    labelStyle={styles.buttonLabel}
                    disabled={!phonevalidation || !checked}
                    style={
                      phonevalidation && checked
                        ? styles.enabledButton
                        : styles.disabledButton
                    }
                  >
                    Sign Up
                  </Button>
                </TouchableOpacity>
              </>
            )}

            {/* <Text style={styles.alreayRegistered}>
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
            </Text> */}
          </View>
        </View>
      </ScrollView>
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
    // left: "50%",
    // width: width * 0.9,
    // marginLeft: -width * 0.45,
    marginTop: height * 0.02,
    padding: width * 0.05,
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
