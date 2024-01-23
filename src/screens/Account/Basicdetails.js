import React, { useState, useEffect } from "react";
import {
  ScrollView,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import { TextInput, Button, Avatar } from "react-native-paper";
import { height, width } from "../../Dimension";
import DateTimePicker from "@react-native-community/datetimepicker";
import * as ImagePicker from "expo-image-picker";
import { Picker } from "@react-native-picker/picker";
import { Mfuuserdata } from "../../api/services/endpoints/userEndpoints";
import Loader from "../Components/Loader";
import Formatdate from "../Components/Formatdate";

const Basicdetails = ({ data }) => {
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [image, setImage] = useState(null);
  const { accountData, setAccountData, currentForm, setCurrentForm } =
    data || [];
  const options = {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  };
  const [loader, setLoader] = useState();

  //   const pickImage = async () => {
  //     let result = await ImagePicker.launchImageLibraryAsync({
  //       mediaTypes: ImagePicker.MediaTypeOptions.All,
  //       allowsEditing: true,
  //       aspect: [4, 3],
  //       quality: 1,
  //     });

  //     if (!result.canceled) {
  //       setImage(result.assets[0].uri);
  //     }
  //   };

  useEffect(() => {
    if (accountData.hasOwnProperty("profilepic")) {
      setImage(
        "https://data.fundexpert.in/profilepic/" + accountData.profilepic
      );
    }
  }, [accountData]);

  const handleDatePress = () => {
    setShowDatePicker(true);
  };

  const handleChange = (e, key) => {
    setAccountData((preData) => {
      const newData = { ...preData };
      key == "dob"
        ? ((newData[key] = Formatdate(e)), setShowDatePicker(false))
        : (newData[key] = e);
      return newData;
    });
  };

  const handlemfu = () => {
    setLoader(true);
    accountData.userId = accountData.id;
    accountData.minorAccount = 0;
    accountData.holdingMode = "SI";
    accountData.action = "basicDetails";
    Mfuuserdata(accountData)
      .then((response) => {
        response.data.success
          ? (setLoader(false), setCurrentForm(currentForm + 1))
          : (Alert.alert("Failed", response.data.error), setLoader(false));
      })
      .catch((error) => {
        console.warn(error);
      });
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {/* {console.log("basic details data", JSON.stringify(accountData, null, 1))} */}
      <Text style={styles.desc}>
        You can make changes to these details later under Account - Profile
      </Text>

      <View style={styles.contentContainer}>
        <TouchableOpacity
          style={styles.imageContainer}
          //   onPress={pickImage}
        >
          <Avatar.Image
            size={width * 0.36}
            source={
              image
                ? { uri: image }
                : require("../../../assets/upload/Avatar.png")
            }
            style={{ backgroundColor: "white" }}
          />
        </TouchableOpacity>
        <Text style={styles.header}>Basic Details</Text>
        <TextInput
          mode="outlined"
          value={accountData.panNumber}
          onChangeText={(e) => handleChange(e, "panNumber")}
          style={styles.input}
          outlineStyle={styles.outline}
          placeholder="Enter Pan Number"
          theme={styles.themeStyle}
          contentStyle={styles.contentStyle}
          placeholderTextColor="rgb(191, 191, 191)"
        />
        <TouchableOpacity onPress={handleDatePress}>
          <TextInput
            label="Date Of Birth"
            mode="outlined"
            placeholder="Date Of Birth"
            placeholderTextColor="rgb(191, 191, 191)"
            value={accountData.dob}
            editable={false}
            style={styles.input}
            outlineStyle={styles.outline}
            theme={styles.themeStyle}
            contentStyle={styles.contentStyle}
          />
        </TouchableOpacity>
        {showDatePicker && (
          <DateTimePicker
            value={date}
            mode="date"
            display="default"
            onChange={(e, value) => handleChange(value, "dob")}
          />
        )}
        <TextInput
          mode="outlined"
          placeholder="Email"
          placeholderTextColor="rgb(191, 191, 191)"
          value={accountData.email}
          onChangeText={(e) => handleChange(e, "email")}
          style={styles.input}
          outlineStyle={styles.outline}
          theme={styles.themeStyle}
          contentStyle={styles.contentStyle}
        />
        <TextInput
          mode="outlined"
          placeholder="Mobile Number"
          placeholderTextColor="rgb(191, 191, 191)"
          value={accountData.mobileNumber}
          onChangeText={(e) => handleChange(e, "mobileNumber")}
          style={styles.input}
          outlineStyle={styles.outline}
          keyboardType="phone-pad"
          theme={styles.themeStyle}
          contentStyle={styles.contentStyle}
        />
        <TouchableOpacity style={[styles.dropdown]}>
          <Picker
            selectedValue={accountData.occupation}
            onValueChange={(itemValue, itemIndex) =>
              handleChange(itemValue, "occupation")
            }
            mode="dropdown"
            style={styles.Picker}
          >
            <Picker.Item value="41" label="Private Sector Service" />
            <Picker.Item value="4" label="Agriculturist" />
            <Picker.Item value="1" label="Business" />
            <Picker.Item value="1A" label="Business Manufacturing" />
            <Picker.Item value="1B" label="Business Trading" />
            <Picker.Item value="43" label="Forex Dealer" />
            <Picker.Item value="2A" label="Government Service" />
            <Picker.Item value="6" label="Housewife" />
            <Picker.Item value="2B" label="Non-Government Service" />
            <Picker.Item value="9" label="Not Specified" />
            <Picker.Item value="8" label="Others" />
            <Picker.Item value="3C" label="Profession - Engineering" />
            <Picker.Item value="3B" label="Profession - Finance" />
            <Picker.Item value="3D" label="Profession - Legal" />
            <Picker.Item value="3A" label="Profession - Medicine" />
            <Picker.Item value="3" label="Professional" />
            <Picker.Item
              value="42"
              label="Public Sector / Government Service"
            />
            <Picker.Item value="5" label="Retired" />
            <Picker.Item value="2" label="Service" />
            <Picker.Item value="7" label="Student" />
          </Picker>
        </TouchableOpacity>

        {loader ? (
          <Loader />
        ) : (
          <>
            <TouchableOpacity activeOpacity={0.7} onPress={handlemfu}>
              <Button
                mode="contained"
                style={styles.button}
                labelStyle={{
                  fontSize: width * 0.05,
                  color: "rgba(255, 255, 255, 1)",
                  textAlign: "center",
                  fontWeight: "600",
                }}
              >
                Next
              </Button>
            </TouchableOpacity>
          </>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    marginTop: height * 0.02,
  },
  imageContainer: { alignItems: "center" },
  desc: {
    color: "rgba(2, 48, 71, 1)",
    fontSize: width * 0.04,
    fontWeight: "400",
    lineHeight: height * 0.03,
    marginTop: height * 0.01,
  },
  header: {
    fontSize: width * 0.045,
    color: "rgba(2, 48, 71, 1)",
    fontWeight: "500",
    marginBottom: height * 0.015,
    opacity: 0.6,
  },
  input: {
    borderRadius: width * 0.05,
    fontSize: width * 0.043,
    marginBottom: height * 0.02,
  },
  outline: {
    borderRadius: width * 0.02,
    backgroundColor: "white",
    borderColor: "rgb(191, 191, 191)",
  },
  dropdown: {
    borderWidth: height * 0.0015,
    borderRadius: width * 0.02,
    marginBottom: height * 0.01,
    borderColor: "rgb(191, 191, 191)",
  },
  themeStyle: {
    colors: {
      primary: "rgba(2, 48, 71, 1)",
    },
  },
  contentStyle: {
    color: "rgba(2, 48, 71, 1)",
    fontWeight: "600",
  },
  Picker: {
    color: "rgba(2, 48, 71, 1)",
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
});
export default Basicdetails;
