import React, { useState, useEffect } from "react";
import {
  ScrollView,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { TextInput, Button, Avatar } from "react-native-paper";
import { height, width } from "../../Dimension";
import DateTimePicker from "@react-native-community/datetimepicker";
import * as ImagePicker from "expo-image-picker";
import { Accountdata } from "./Data";
import { Userlogin } from "../../api/services/endpoints/userEndpoints";
import { Picker } from "@react-native-picker/picker";

const Form = () => {
  const [fullName, setFullName] = useState();
  const [date, setDate] = useState(new Date());
  const [email, setEmail] = useState();
  const [mobile, setMobile] = useState();
  const [occupation, setOccupation] = useState();
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [panNumber, setPanNumber] = useState();
  const [image, setImage] = useState(null);
  // const accountData = Accountdata();
  const [accountData, setAccountData] = useState([]);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const handleDatePress = () => {
    setShowDatePicker(true);
  };

  const handleDateChange = (event, selectedDate) => {
    currentDate = selectedDate || date;
    setShowDatePicker(false);
    setDate(currentDate);
  };

  const handleChange = (e, key) => {
    // setAccountData((preData) => {
    //   //   const newData = preData.map(([k, v]) => (k === key ? [k, e] : [k, v]));
    //   const newData = preData.hasOwnProperty(key) && (preData[key] = e);
    //   return newData;
    // });
    setAccountData((preData) => {
      const newData = { ...preData };
      newData[key] = e;
      return newData;
    });
  };

  useEffect(() => {
    Userlogin()
      .then((response) => {
        setAccountData(response.data.user || []);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {console.log("change", accountData)}
      <Text style={styles.desc}>
        You can make changes to these details later under Account - Profile
      </Text>

      <View style={styles.contentContainer}>
        <TouchableOpacity style={styles.imageContainer} onPress={pickImage}>
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
          placeholder="Full Name"
          placeholderTextColor="rgb(191, 191, 191)"
          value={accountData.name}
          onChangeText={(e) => handleChange(e, "name")}
          style={styles.input}
          outlineStyle={styles.outline}
          theme={styles.themeStyle}
          contentStyle={styles.contentStyle}
        />
        <TouchableOpacity onPress={handleDatePress}>
          <TextInput
            label="Date Of Birth"
            mode="outlined"
            placeholder="Date Of Birth"
            placeholderTextColor="rgb(191, 191, 191)"
            value={date.toDateString()}
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
            onChange={(event, selectedDate) =>
              handleDateChange(event, selectedDate)
            }
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
            selectedValue={occupation}
            onValueChange={(itemValue, itemIndex) => setOccupation(itemValue)}
            mode="dropdown"
            style={styles.Picker}
          >
            <Picker.Item label="OCCUPATION" />
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
            <Picker.Item value="41" label="Private Sector Service" />
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
    color: "rgb(191, 191, 191)",
  },
});
export default Form;
