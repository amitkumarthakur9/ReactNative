import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Alert,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { TextInput, Button } from "react-native-paper";
import { width, height } from "../../Dimension";
import { useRoute, useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import Header from "../Components/Header";
import { Otpverify } from "../../api/services/endpoints/userEndpoints";
import Loader from "../Components/Loader";
import { useFonts } from "expo-font";
export default Otp = () => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [isSignUpDisabled, setIsSignUpDisabled] = useState(true);
  const [showLoader, setShowLoader] = useState(false);

  const inputRefs = useRef([]);

  const route = useRoute();
  const navigation = useNavigation();
  const mobileNumber = route.params.mobileNumber;

  // useEffect with a cleanup function
  useEffect(() => {
    return () => {
      // Reset your state when leaving the page
      setOtp(["", "", "", ""]);
      setIsSignUpDisabled(true);
      setShowLoader(false);
    };
  }, []);

  async function confirmCode() {
    setShowLoader(true);

    try {
      const stringOtp = otp.join("");
      const data = { mobileNumber: mobileNumber, otp: stringOtp };
      const response = await Otpverify(data);

      if (response.data.success === false) {
        Alert.alert("Failed", response.data.error);
      } else if (response.data.success === true) {
        navigation.push("Dashboard");
      }
    } catch (error) {
      Alert.alert("Failed", error.message);
    } finally {
      setShowLoader(false);
      setOtp(["", "", "", ""]);
    }
  }

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

  const [fontsLoaded] = useFonts({
    "Inter-Black": require("../../../assets/fonts/metropolis-latin-500-normal.ttf"),
  });

  return (
    <View style={styles.container}>
      <Header title="Phone Verification" />
      <ScrollView keyboardShouldPersistTaps="always">
        <View style={styles.otpContainer}>
          {/* <Ionicons
            name="arrow-back"
            size={width * 0.08}
            color="rgba(56, 102, 100, 1)"
            onPress={() => navigation.goBack()}
            style={{ marginBottom: height * 0.03 }}
          />
          <Text style={styles.header}>Phone Verification</Text> */}
          <Text style={styles.desc}>
            Please enter the 4-digit verification code sent to your phone.
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
          {/* <Text style={styles.resend}>
            Didn't receive the code ?
            <Text
              style={{
                color: "rgba(251, 133, 0, 1)",
                fontFamily: "Inter-Black",
                fontWeight: "600",
                fontSize: width * 0.045,
              }}
            >
              Resend Code
            </Text>
          </Text> */}
          {showLoader ? (
            <Loader />
          ) : (
            <>
              <TouchableOpacity onPress={confirmCode}>
                <Button
                  mode="contained"
                  labelStyle={styles.buttonLabel}
                  disabled={isSignUpDisabled}
                  style={
                    isSignUpDisabled
                      ? styles.disabledButton
                      : styles.enabledButton
                  }
                >
                  Sign Up
                </Button>
              </TouchableOpacity>
            </>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  otpContainer: {
    // left: "50%",
    // width: width * 0.9,
    // marginLeft: -width * 0.45,
    // marginTop: height * 0.1,
    marginTop: height * 0.02,
    padding: width * 0.06,
  },
  header: {
    color: "rgba(2, 48, 71, 1)",
    fontFamily: "Inter-Black",
    fontWeight: "700",
    fontSize: width * 0.08,
    lineHeight: width * 0.1,
    marginBottom: height * 0.04,
  },
  desc: {
    fontFamily: "Inter-Black",
    fontWeight: "500",
    fontSize: width * 0.04,
    lineHeight: width * 0.06,
    marginBottom: height * 0.08,
    color: "rgba(2, 48, 71, 1)",
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  verificationHeader: {
    fontFamily: "Inter-Black",
    fontWeight: "600",
    fontSize: width * 0.05,
    lineHeight: width * 0.07,
    color: "rgba(2, 48, 71, 1)",
    marginBottom: height * 0.04,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "rgba(2, 48, 71, 1",
    fontSize: width * 0.07,
    margin: width * 0.01,
    textAlign: "center",
    color: "rgba(2, 48, 71, 1)",
    backgroundColor: "white",
    flex: 1,
  },
  resend: {
    fontFamily: "Inter-Black",
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
    fontFamily: "Inter-Black",
    fontWeight: "bold",
    color: "white",
  },
});
