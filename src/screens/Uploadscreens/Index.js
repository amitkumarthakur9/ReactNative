import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import { TextInput, Button } from "react-native-paper";
import { height, width } from "../../Dimension";
import { Ionicons } from "@expo/vector-icons";
import Uploadoptions from "./Uploadoptions";
import { useFonts } from "expo-font";
import Bgiheader from "../Components/Bgiheader";
import { Picker } from "@react-native-picker/picker";
import { useSelector } from "react-redux";
import Loader from "../Components/Loader";
import Sendotp from "../../api/services/endpoints/mfcenteral";

export default Uploadscreens = ({ navigation }) => {
  const [type, setType] = useState("mobile");
  const [mobile, setMobile] = useState("");
  const [mail, setMail] = useState("");
  const [loader, setLoader] = useState(false);

  const pan = useSelector((state) => state.user.pan);
  const session = useSelector((state) => state.user.session);

  const [fontsLoaded] = useFonts({
    "Inter-Black": require("../../../assets/fonts/metropolis-latin-500-normal.ttf"),
  });

  const handleOption = (value) => {
    if (value == "mobile") {
      setType(value);
      setMail("");
    } else if (value == "mail") {
      setType(value);
      setMobile("");
    }
  };

  useEffect(() => {
    if (session == true || session == "") {
      Alert.alert("You are not logged in");
      navigation.push("Navigatescreens");
    } else {
      if (!pan) {
        Alert.alert("Pan is not available . please fillup the pan first");
        navigation.push("Myprofile");
      }
    }
  }, []);

  const handleSubmit = async () => {
    setLoader(true);
    if (mobile != "" || mail != "") {
      let data = {
        pan: pan,
        email: mail,
        mobile: mobile,
      };
      data = JSON.stringify(data);
      console.log(data);
      try {
        const result = await Sendotp(data);
        console.log(result.data);
        if (result.data.success) {
          const clientRefNo = result.data.clientRefNo;
          setLoader(false);
          navigation.push("Mfotp", { clientRefNo });
        } else {
          Alert.alert(result.data.error);
          setLoader(false);
        }
      } catch (e) {
        console.warn(e);
        Alert.alert("Please try later");
        setLoader(false);
      }
    } else {
      Alert.alert("Please Enter Mobile Or Mail Id");
      setLoader(false);
    }
  };

  return (
    <View style={styles.container}>
      <Bgiheader
        title="Fetch MF Portfolio"
        showPlusSign={false}
        Headerheight={0.25}
      />
      <ScrollView style={styles.scrollContainer}>
        <Text style={styles.header}>Import Portfolio Via OTP </Text>
        <Text style={styles.desc}>
          {" "}
          * Daily Request Limit of 10 attempts has been set to your account.{" "}
        </Text>
        <Text style={styles.text}>PAN NUMBER</Text>
        <TextInput
          mode="outlined"
          placeholder="Adhar Number"
          placeholderTextColor="rgb(191, 191, 191)"
          value={pan}
          style={styles.input}
          outlineStyle={styles.outline}
          theme={styles.themeStyle}
          contentStyle={[
            styles.contentStyle,
            { backgroundColor: "rgb(230, 230, 230)" },
          ]}
          disabled
        />

        <Text style={styles.text}>Select Option</Text>
        <TouchableOpacity style={styles.dropdown}>
          <Picker
            selectedValue={type}
            onValueChange={(itemValue) => handleOption(itemValue)}
            mode="dropdown"
          >
            <Picker.Item value="mobile" label="Mobile Number" />
            <Picker.Item value="mail" label="Email Id" />
          </Picker>
        </TouchableOpacity>
        {type == "mobile" ? (
          <>
            <Text style={styles.text}>Mobile Number</Text>
            <TextInput
              mode="outlined"
              placeholder="Enter Mobile Number"
              placeholderTextColor="rgb(191, 191, 191)"
              value={mobile}
              onChangeText={(e) => setMobile(e)}
              style={styles.input}
              outlineStyle={styles.outline}
              theme={styles.themeStyle}
              contentStyle={styles.contentStyle}
              keyboardType="number-pad"
            />
          </>
        ) : (
          <>
            <Text style={styles.text}>Email Id</Text>
            <TextInput
              mode="outlined"
              placeholder="Enter Email Id"
              placeholderTextColor="rgb(191, 191, 191)"
              value={mail}
              onChangeText={(e) => setMail(e)}
              style={styles.input}
              outlineStyle={styles.outline}
              theme={styles.themeStyle}
              contentStyle={styles.contentStyle}
            />
          </>
        )}

        {!loader ? (
          <TouchableOpacity activeOpacity={0.5} onPress={() => handleSubmit()}>
            <Button
              mode="contained"
              style={styles.button}
              labelStyle={{
                fontSize: width * 0.05,
                color: "rgba(255, 255, 255, 1)",
                textAlign: "center",
                fontFamily: "Inter-Black",
                fontWeight: "600",
              }}
            >
              Next
            </Button>
          </TouchableOpacity>
        ) : (
          <Loader />
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  scrollContainer: {
    marginTop: height * 0.02,
    padding: width * 0.05,
  },
  dropdown: {
    borderWidth: height * 0.0015,
    borderRadius: width * 0.02,
    borderColor: "rgb(191, 191, 191)",
    marginBottom: height * 0.02,
  },
  input: {
    borderRadius: width * 0.05,
    fontSize: width * 0.043,
    marginBottom: height * 0.01,
  },
  outline: {
    borderRadius: width * 0.02,
    backgroundColor: "white",
    borderColor: "rgb(191, 191, 191)",
  },
  themeStyle: {
    colors: {
      primary: "rgba(2, 48, 71, 1)",
    },
  },
  contentStyle: {
    color: "rgba(2, 48, 71, 1)",
    fontFamily: "Inter-Black",
    fontWeight: "600",
  },
  button: {
    marginBottom: height * 0.04,
    marginTop: height * 0.03,
    height: height * 0.07,
    borderRadius: width * 0.03,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 53, 102, 1)",
  },
  text: {
    color: "rgba(2, 48, 71, 1)",
    fontSize: width * 0.04,
    fontFamily: "Inter-Black",
    fontWeight: "400",
    lineHeight: height * 0.03,
    marginTop: height * 0.01,
    opacity: 0.7,
  },
  header: {
    color: "rgba(2, 48, 71, 1)",
    fontSize: width * 0.05,
    fontFamily: "Inter-Black",
    fontWeight: "400",
    lineHeight: height * 0.03,
    marginBottom: height * 0.01,
    opacity: 0.9,
    marginBottom: height * 0.02,
  },
  desc: {
    fontFamily: "Inter-Black",
    color: "red",
    lineHeight: height * 0.025,
    marginBottom: height * 0.03,
  },
});
