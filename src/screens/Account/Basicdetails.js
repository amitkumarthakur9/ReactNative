import React, { useState } from "react";
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

const Form = () => {
  const [fullName, setFullName] = useState();
  const [date, setDate] = useState(new Date());
  const [email, setEmail] = useState();
  const [mobile, setMobile] = useState();
  const [occupation, setOccupation] = useState();
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [panNumber, setPanNumber] = useState();
  const [image, setImage] = useState(null);

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

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
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
          value={fullName}
          onChangeText={(e) => setFullName(e)}
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
          value={email}
          onChangeText={(e) => setEmail(e)}
          style={styles.input}
          outlineStyle={styles.outline}
          theme={styles.themeStyle}
          contentStyle={styles.contentStyle}
        />
        <TextInput
          mode="outlined"
          placeholder="Mobile Number"
          placeholderTextColor="rgb(191, 191, 191)"
          value={mobile}
          onChangeText={(e) => setMobile(e)}
          style={styles.input}
          outlineStyle={styles.outline}
          keyboardType="phone-pad"
          theme={styles.themeStyle}
          contentStyle={styles.contentStyle}
        />
        <TextInput
          mode="outlined"
          placeholder="Occupation"
          placeholderTextColor="rgb(191, 191, 191)"
          value={occupation}
          onChangeText={(e) => setOccupation(e)}
          style={styles.input}
          outlineStyle={styles.outline}
          theme={styles.themeStyle}
          contentStyle={styles.contentStyle}
        />

        <TextInput
          mode="outlined"
          value={panNumber}
          onChangeText={(e) => setPanNumber(e)}
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
