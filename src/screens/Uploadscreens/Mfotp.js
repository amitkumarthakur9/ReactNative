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
import { Valideotp, Casdetails } from "../../api/services/endpoints/mfcenteral";
export default Mfotp = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [isSignUpDisabled, setIsSignUpDisabled] = useState(true);
  const [showLoader, setShowLoader] = useState(false);

  const inputRefs = useRef([]);

  const route = useRoute();
  const navigation = useNavigation();
  const clientRefNo = route.params.clientRefNo;
  useEffect(() => {
    return () => {
      setOtp(["", "", "", "", "", ""]);
      setIsSignUpDisabled(true);
      setShowLoader(false);
    };
  }, []);

  async function confirmCode() {
    setShowLoader(true);
    try {
      const stringOtp = otp.join("");
      let data = {
        clientRefNo: clientRefNo,
        otp: stringOtp,
      };
      data = JSON.stringify(data);

      const response = await Valideotp(data);
      console.log("fkdjfajlk", response.data);
      if (response.data.success === false) {
        Alert.alert("Failed", response.data.error);
      } else if (response.data.success === true) {
        const result = await Casdetails(clientRefNo);
        if (!result.data.success) {
          const result = await Casdetails(clientRefNo);
        } else {
          Alert.alert("Success");
          navigation.push("Dashboard");
        }
      }
    } catch (error) {
      Alert.alert("Failed", error.message);
    } finally {
      setShowLoader(false);
      setOtp(["", "", "", "", "", ""]);
    }
  }

  async function confirmCode() {
    setShowLoader(true);
    try {
      const stringOtp = otp.join("");
      let data = {
        clientRefNo: clientRefNo,
        otp: stringOtp,
      };
      data = JSON.stringify(data);

      const response = await Valideotp(data);
      console.log("fkdjfajlk", response.data);
      if (response.data.success === false) {
        Alert.alert("Failed", response.data.error);
      } else if (response.data.success === true) {
        let success = false;
        while (!success) {
          const result = await Casdetails(clientRefNo);
          if (!result.data.success) {
            console.log("Retrying Casdetails...");
            setShowLoader(true);
          } else {
            success = true;
            Alert.alert("Successfully fetched MF Portfolio");
            navigation.push("Dashboard");
            setShowLoader(false);
          }
        }
      }
    } catch (error) {
      Alert.alert("Failed", error.message);
    } finally {
      setShowLoader(false);
      setOtp(["", "", "", "", "", ""]);
    }
  }

  const handleOtpChange = (oneTimePassword, index) => {
    const newOtp = [...otp];
    newOtp[index] = oneTimePassword;
    setOtp(newOtp);

    const isAnyFieldEmpty = newOtp.some(
      (oneTimePassword) => oneTimePassword === ""
    );

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
      <Header title="Portfolio Authentication" />
      {!showLoader ? (
        <ScrollView>
          <View style={styles.otpContainer}>
            <Text style={styles.desc}>
              Please enter the 6-digit verification code sent to your selected
              mode.
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
                    Submit
                  </Button>
                </TouchableOpacity>
              </>
            )}
          </View>
        </ScrollView>
      ) : (
        <Loader />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  otpContainer: {
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
    fontSize: width * 0.05,
    fontFamily: "Inter-Black",
    fontWeight: "bold",
    color: "white",
  },
});
