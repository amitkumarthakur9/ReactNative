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
import { Picker } from "@react-native-picker/picker";
import Form2 from "./Form2";
import * as ImagePicker from "expo-image-picker";

const Form = ({ data }) => {
  const [fullName, setFullName] = useState();
  const [occupation, setOccupation] = useState();
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [text, setText] = useState();
  const [mobile, setMobile] = useState();
  const [email, setEmail] = useState();
  const [address, setAddress] = useState();
  const [city, setCity] = useState();
  const [state, setState] = useState();
  const [documentType, setDocumentType] = useState();
  const [netWorth, setNetWorth] = useState();
  const [wealthSource, setWealthSource] = useState();
  const [pinCode, setPinCode] = useState();
  const [taxPayerNumber, setTaxPayerNumber] = useState();
  const [panNumber, setPanNumber] = useState();
  const [incomeSlab, setIncomeSlab] = useState();
  const { currentForm, setCurrentForm } = data;

  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    // console.log(result.assets[0].uri);

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
    <ScrollView style={styles.formContainer}>
      {currentForm === 0 ? (
        <View>
          <Text style={styles.desc}>
            You can make changes to these details later under Account - Profile
          </Text>

          <TouchableOpacity
            style={{
              alignItems: "center",
            }}
            onPress={pickImage}
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
          <Text style={styles.header}>About</Text>
          <TextInput
            mode="outlined"
            label={
              <Text style={{ color: "rgb(191, 191, 191)", fontWeight: "400" }}>
                Full Name
              </Text>
            }
            value={fullName}
            onChangeText={(e) => setFullName(e)}
            style={[styles.input, { marginBottom: height * 0.005 }]}
            outlineStyle={styles.outline}
            theme={styles.themeStyle}
            contentStyle={styles.contentStyle}
          />

          <TextInput
            mode="outlined"
            label={
              <Text style={{ color: "rgb(191, 191, 191)", fontWeight: "400" }}>
                Occupation
              </Text>
            }
            value={occupation}
            onChangeText={(e) => setOccupation(e)}
            style={[styles.input, { marginBottom: height * 0.01 }]}
            outlineStyle={styles.outline}
            theme={styles.themeStyle}
            contentStyle={styles.contentStyle}
          />

          <TouchableOpacity onPress={handleDatePress}>
            <TextInput
              mode="outlined"
              label={
                <Text
                  style={{ color: "rgb(191, 191, 191)", fontWeight: "400" }}
                >
                  Date Of Birth
                </Text>
              }
              value={date.toDateString()}
              editable={false}
              style={[styles.input, { marginBottom: height * 0.005 }]}
              outlineStyle={styles.outline}
              theme={styles.themeStyle}
              contentStyle={styles.contentStyle}
            />
          </TouchableOpacity>
          {showDatePicker && (
            <DateTimePicker
              value={date}
              mode="date" // or "time" for time picker
              display="default" // Set display to "spinner" for Android
              onChange={(event, selectedDate) =>
                handleDateChange(event, selectedDate)
              }
            />
          )}
          <Text style={[styles.header, { marginTop: height * 0.01 }]}>
            Contact
          </Text>
          <TextInput
            mode="outlined"
            label={
              <Text style={{ color: "rgb(191, 191, 191)", fontWeight: "400" }}>
                Mobile Number
              </Text>
            }
            value={mobile}
            onChangeText={(e) => setMobile(e)}
            style={[styles.input, { marginBottom: height * 0.005 }]}
            outlineStyle={styles.outline}
            keyboardType="phone-pad"
            theme={styles.themeStyle}
            contentStyle={styles.contentStyle}
          />
          <TextInput
            mode="outlined"
            label={
              <Text style={{ color: "rgb(191, 191, 191)", fontWeight: "400" }}>
                Email
              </Text>
            }
            value={email}
            onChangeText={(e) => setEmail(e)}
            style={styles.input}
            outlineStyle={styles.outline}
            theme={styles.themeStyle}
            contentStyle={styles.contentStyle}
          />
          <Text style={[styles.header, { marginTop: height * 0.01 }]}>
            Address
          </Text>
          <TextInput
            mode="outlined"
            value={address}
            onChangeText={(e) => setAddress(e)}
            style={styles.input}
            outlineStyle={styles.outline}
            placeholder="Enter Address"
            placeholderTextColor="rgb(191, 191, 191)"
            theme={styles.themeStyle}
            contentStyle={styles.contentStyle}
          />

          <TouchableOpacity style={styles.dropdown}>
            <Picker
              selectedValue={city}
              onValueChange={(itemValue, itemIndex) => setCity(itemValue)}
              mode="dropdown"
              style={styles.Picker}
            >
              <Picker.Item label="Choose City" value="Choose City" />
              <Picker.Item label="Madhubani" value="Madhubani" />
            </Picker>
          </TouchableOpacity>

          <TouchableOpacity style={styles.dropdown}>
            <Picker
              selectedValue={state}
              onValueChange={(itemValue, itemIndex) => setState(itemValue)}
              mode="dropdown"
              style={styles.Picker}
            >
              <Picker.Item label="Choose State" value="Choose State" />
              <Picker.Item label="Karnataka" value="Karnataka" />
            </Picker>
          </TouchableOpacity>
          <TextInput
            mode="outlined"
            value={pinCode}
            onChangeText={(e) => setPinCode(e)}
            style={styles.input}
            outlineStyle={styles.outline}
            placeholder="Enter Pincode"
            theme={styles.themeStyle}
            contentStyle={styles.contentStyle}
            placeholderTextColor="rgb(191, 191, 191)"
          />

          <Text style={[styles.header, { marginTop: height * 0.01 }]}>
            Identity Verification
          </Text>
          <TextInput
            mode="outlined"
            value={taxPayerNumber}
            onChangeText={(e) => setTaxPayerNumber(e)}
            style={styles.input}
            outlineStyle={styles.outline}
            placeholder="Tax Payer Identification Number"
            theme={styles.themeStyle}
            contentStyle={styles.contentStyle}
            placeholderTextColor="rgb(191, 191, 191)"
          />
          <TouchableOpacity style={styles.dropdown}>
            <Picker
              selectedValue={documentType}
              onValueChange={(itemValue, itemIndex) =>
                setDocumentType(itemValue)
              }
              mode="dropdown"
              style={styles.Picker}
            >
              <Picker.Item
                label="Select Document Type"
                value="Select Document Type"
              />
              <Picker.Item label="PAN CARD" value="PAN CARD" />
            </Picker>
          </TouchableOpacity>
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
          <Text style={[styles.header, { marginTop: height * 0.01 }]}>
            Other
          </Text>
          <TextInput
            mode="outlined"
            value={incomeSlab}
            onChangeText={(e) => setIncomeSlab(e)}
            style={styles.input}
            outlineStyle={styles.outline}
            placeholder="Income Slab"
            theme={styles.themeStyle}
            contentStyle={styles.contentStyle}
            placeholderTextColor="rgb(191, 191, 191)"
          />
          <TouchableOpacity style={styles.dropdown}>
            <Picker
              selectedValue={netWorth}
              onValueChange={(itemValue, itemIndex) => setNetWorth(itemValue)}
              mode="dropdown"
              style={styles.Picker}
            >
              <Picker.Item label="Net Worth" value="Net Worth" />
              <Picker.Item label="1 Rupees" value="1 Rupees" />
            </Picker>
          </TouchableOpacity>
          <TouchableOpacity style={styles.dropdown}>
            <Picker
              selectedValue={wealthSource}
              onValueChange={(itemValue, itemIndex) =>
                setWealthSource(itemValue)
              }
              mode="dropdown"
              style={styles.Picker}
            >
              <Picker.Item label="Wealth Source" value="Wealth Source" />
              <Picker.Item label="hehehehe" value="hheeheehhe" />
            </Picker>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => setCurrentForm(currentForm + 1)}
          >
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
        </View>
      ) : (
        <Form2 />
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    marginTop: height * 0.01,
  },
  desc: {
    color: "rgba(2, 48, 71, 1)",
    fontSize: width * 0.04,
    fontWeight: "400",
    lineHeight: height * 0.03,
    marginTop: height * 0.01,
    marginBottom: height * 0.05,
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
    marginBottom: height * 0.01,
    fontSize: width * 0.043,
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
export default Form;
