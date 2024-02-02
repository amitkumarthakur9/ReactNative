import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";
import { Button, TextInput, Checkbox } from "react-native-paper";
import { Picker } from "@react-native-picker/picker";
import { height, width } from "../../Dimension";
import { Mfuuserdata } from "../../api/services/endpoints/userEndpoints";
import DateTimePicker from "@react-native-community/datetimepicker";
import Loader from "../Components/Loader";
import Isovereeighteen from "../Components/Datediff";

const Nominee = ({ data }) => {
  const [checked, setChecked] = useState(false);
  const [thirdNomineeCheck, setThirdNomineeCheck] = useState(false);
  const { accountData, setAccountData, nomineeData } = data || [];
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [date, setDate] = useState(new Date());
  const [loader, setLoader] = useState();
  const [nominee, setNominee] = useState({
    name: "",
    relation: "",
    dob: "",
    percentage: "",
    nomineeOptedFlag: "Y",
    minor: false,
    secondNominee: false,
    thirdNominee: false,
    holdingMode: "SI",
    action: "NomineeDetails",
  });

  const handleCheckboxChange = () => {
    setChecked(!checked);
    if (!checked) {
      setNominee((preData) => {
        const newData = { ...preData };
        newData["secondNominee"] = true;
        newData["name2"] = "";
        newData["relation2"] = "";
        newData["dob2"] = "";
        newData["percentage2"] = "";
        newData["minor2"] = false;
        newData["percentage2"] = "";
        return newData;
      });
    }
  };
  const handlethirdCheckboxChange = () => {
    setThirdNomineeCheck(!thirdNomineeCheck);
    if (!thirdNomineeCheck) {
      setNominee((preData) => {
        const newData = { ...preData };
        newData["thirdNominee"] = true;
        newData["name3"] = "";
        newData["relation3"] = "";
        newData["dob3"] = "";
        newData["percentage3"] = "";
        newData["minor3"] = false;
        newData["percentage3"] = "";
        return newData;
      });
    }
  };

  const handleChange = (e, key) => {
    setNominee((preData) => {
      const newData = { ...preData };
      key == "dob"
        ? ((newData[key] = Formatdate(e)), setShowDatePicker(false))
        : key == "dob2"
        ? ((newData[key] = Formatdate(e)), setShowDatePicker(false))
        : key == "dob3"
        ? ((newData[key] = Formatdate(e)), setShowDatePicker(false))
        : (newData[key] = e);
      return newData;
    });
  };

  const handleDatePress = () => {
    setShowDatePicker(true);
  };

  const isValidDateFormat = (dateString) => {
    const regex = /^\d{2}-\d{2}-\d{4}$/;
    return regex.test(dateString);
  };

  const handlemfu = () => {
    setLoader(true);
    if (nominee.dob) {
      if (!isValidDateFormat(nominee.dob)) {
        const dob = Formatdate(nominee.dob);
        nominee.dob = dob;
      }
      if (!Isovereeighteen(nominee.dob)) {
        Alert.alert("Dob Should be greater than 18");
        setLoader(false);
        return;
      }
    }
    if (nominee.dob2) {
      if (!isValidDateFormat(nominee.dob2)) {
        const dob2 = Formatdate(nominee.dob2);
        nominee.dob2 = dob2;
      }
      if (!Isovereeighteen(dob2)) {
        Alert.alert("Dob2 Should be greater than 18");
        setLoader(false);
        return;
      }
    }
    if (nominee.dob3) {
      if (!isValidDateFormat(nominee.dob3)) {
        const dob3 = Formatdate(nominee.dob3);
        nominee.dob3 = dob3;
      }
      if (!Isovereeighteen(dob3)) {
        Alert.alert("Dob3 Should be greater than 18");
        setLoader(false);
        return;
      }
    }
    (nominee.userId = accountData.id),
      Mfuuserdata(nominee)
        .then((response) => {
          if (response.data.success) {
            const sendForCan = {
              userId: nominee.userId,
              action: "submitUserToMfu",
            };
            Mfuuserdata(sendForCan).then((canResponse) => {
              canResponse.data.success
                ? (Alert.alert("success"), setLoader(false))
                : (Alert.alert("Failed", canResponse.data.error),
                  setLoader(false));
            });
          }
        })
        .catch((error) => {
          console.warn(error);
        });
  };

  useEffect(() => {
    if (nomineeData != undefined && nomineeData.hasOwnProperty("name")) {
      setNominee((preData) => {
        const newData = { ...preData };

        newData["name"] = nomineeData.name;
        newData["relation"] = nomineeData.relation;
        newData["dob"] = nomineeData.dob;
        newData["percentage"] = nomineeData.percentage;
        return newData;
      });
    }

    if (nomineeData != undefined && nomineeData.hasOwnProperty("name2")) {
      setNominee((preData) => {
        const newData = { ...preData };

        newData["name2"] = nomineeData.name2;
        newData["relation2"] = nomineeData.relation2;
        newData["dob2"] = nomineeData.dob2;
        newData["percentage2"] = nomineeData.percentage2;
        return newData;
      });
    }

    if (nomineeData != undefined && nomineeData.hasOwnProperty("name3")) {
      setNominee((preData) => {
        const newData = { ...preData };

        newData["name3"] = nomineeData.name3;
        newData["relation3"] = nomineeData.relation3;
        newData["dob3"] = nomineeData.dob3;
        newData["percentage3"] = nomineeData.percentage3;
        return newData;
      });
    }
  }, []);

  console.log("nominee details", nomineeData);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Text style={styles.desc}>
        You can make changes to these details later under Account - Nominee
      </Text>

      <Text style={styles.header}>Nominee Details</Text>
      <TextInput
        mode="outlined"
        value={nominee.name}
        onChangeText={(e) => handleChange(e, "name")}
        style={styles.input}
        outlineStyle={styles.outline}
        placeholder="Nominee Name"
        theme={styles.themeStyle}
        contentStyle={styles.contentStyle}
        placeholderTextColor="rgb(191, 191, 191)"
      />

      <TextInput
        mode="outlined"
        value={nominee.relation}
        onChangeText={(e) => handleChange(e, "relation")}
        style={styles.input}
        outlineStyle={styles.outline}
        placeholder="Relation With Nominee"
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
          value={nominee.dob}
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
        value={`${nominee.percentage}`}
        onChangeText={(e) => handleChange(e, "percentage")}
        style={styles.input}
        outlineStyle={styles.outline}
        placeholder="Nominee Share"
        theme={styles.themeStyle}
        contentStyle={styles.contentStyle}
        placeholderTextColor="rgb(191, 191, 191)"
      />

      <View style={{ flexDirection: "row" }}>
        <Checkbox
          status={checked ? "checked" : "unchecked"}
          onPress={() => {
            handleCheckboxChange(); // Call the function to update the state
          }}
        />
        <Text
          style={[
            styles.header,
            { marginTop: height * 0.01, marginBottom: height * 0.02 },
          ]}
        >
          Add Second Nominee Details
        </Text>
      </View>

      {checked && (
        <>
          <Text style={styles.header}>Second Nominee Details</Text>
          <TextInput
            mode="outlined"
            value={nominee.name2}
            onChangeText={(e) => handleChange(e, "name2")}
            style={styles.input}
            outlineStyle={styles.outline}
            placeholder="Nominee Name"
            theme={styles.themeStyle}
            contentStyle={styles.contentStyle}
            placeholderTextColor="rgb(191, 191, 191)"
          />

          <TextInput
            mode="outlined"
            value={nominee.relation2}
            onChangeText={(e) => handleChange(e, "relation2")}
            style={styles.input}
            outlineStyle={styles.outline}
            placeholder="Relation With Nominee"
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
              value={nominee.dob2}
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
              onChange={(e, value) => handleChange(value, "dob2")}
            />
          )}

          <TextInput
            mode="outlined"
            value={`${nominee.percentage2}`}
            onChangeText={(e) => handleChange(e, "percentage2")}
            style={styles.input}
            outlineStyle={styles.outline}
            placeholder="Nominee Share"
            theme={styles.themeStyle}
            contentStyle={styles.contentStyle}
            placeholderTextColor="rgb(191, 191, 191)"
          />

          <View style={{ flexDirection: "row" }}>
            <Checkbox
              status={thirdNomineeCheck ? "checked" : "unchecked"}
              onPress={() => {
                handlethirdCheckboxChange();
              }}
            />
            <Text
              style={[
                styles.header,
                { marginTop: height * 0.01, marginBottom: height * 0.02 },
              ]}
            >
              Add Third Nominee Details
            </Text>
          </View>
        </>
      )}

      {thirdNomineeCheck && (
        <>
          <Text style={styles.header}>Third Nominee Details</Text>
          <TextInput
            mode="outlined"
            value={nominee.name3}
            onChangeText={(e) => handleChange(e, "name3")}
            style={styles.input}
            outlineStyle={styles.outline}
            placeholder="Nominee Name"
            theme={styles.themeStyle}
            contentStyle={styles.contentStyle}
            placeholderTextColor="rgb(191, 191, 191)"
          />

          <TextInput
            mode="outlined"
            value={nominee.relation3}
            onChangeText={(e) => handleChange(e, "relation3")}
            style={styles.input}
            outlineStyle={styles.outline}
            placeholder="Relation With Nominee"
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
              value={nominee.dob3}
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
              onChange={(e, value) => handleChange(value, "dob3")}
            />
          )}

          <TextInput
            mode="outlined"
            value={`${nominee.percentage3}`}
            onChangeText={(e) => handleChange(e, "percentage3")}
            style={styles.input}
            outlineStyle={styles.outline}
            placeholder="Nominee Share"
            theme={styles.themeStyle}
            contentStyle={styles.contentStyle}
            placeholderTextColor="rgb(191, 191, 191)"
          />
        </>
      )}
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
    </ScrollView>
  );
};

const styles = StyleSheet.create({
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
    fontSize: width * 0.043,
    marginBottom: height * 0.02,
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
    fontWeight: "600",
  },
  dropdown: {
    borderWidth: height * 0.0015,
    borderRadius: width * 0.02,
    borderColor: "rgb(191, 191, 191)",
    marginBottom: height * 0.02,
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

export default Nominee;
