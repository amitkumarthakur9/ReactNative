import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Button, TextInput } from "react-native-paper";
import { Picker } from "@react-native-picker/picker";
import { height, width } from "../../Dimension";

const Fatca = () => {
  const [incomeSlab, setIncomeSlab] = useState();
  const [wealthSource, setWealthSource] = useState();
  const [politically, setPolitically] = useState();
  const [occupationCode, setOccupationCode] = useState();
  const [countryOfBirth, setCountryOfBirth] = useState(false);
  const [nationality, setNationality] = useState();
  const [citizenship, setCitizenship] = useState();
  const [placeOfBirth, setPlaceOfBirth] = useState();
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Text style={styles.desc}>
        You can make changes to these details later under Account - Fatca
      </Text>

      <Text style={styles.header}>Fatca Details</Text>
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
          selectedValue={wealthSource}
          onValueChange={(itemValue, itemIndex) => setWealthSource(itemValue)}
          mode="dropdown"
          style={styles.Picker}
        >
          <Picker.Item label="Wealth Source" />
          <Picker.Item value="01" label="Salary" />
          <Picker.Item value="02" label="Business Income" />
          <Picker.Item value="03" label="Gift" />
          <Picker.Item value="04" label="Ancestral Property" />
          <Picker.Item value="05" label="Rental Income" />
          <Picker.Item value="06" label="Prize Money" />
          <Picker.Item value="07" label="Royalty" />
          <Picker.Item value="08" label="Others" />
        </Picker>
      </TouchableOpacity>

      <TouchableOpacity style={styles.dropdown}>
        <Picker
          selectedValue={politically}
          onValueChange={(itemValue, itemIndex) => setPolitically(itemValue)}
          mode="dropdown"
          style={styles.Picker}
        >
          <Picker.Item label="Politically Exposed Person" />
          <Picker.Item
            value="NA"
            label="the investor is not politically exposed person"
          />
          <Picker.Item
            value="PEP"
            label="the investor is politically exposed person"
          />
          <Picker.Item
            value="RPEP"
            label="if the investor is a relative of the politically exposed
            person"
          />
        </Picker>
      </TouchableOpacity>

      {/* <TouchableOpacity style={styles.dropdown}>
        <Picker
          selectedValue={occupationCode}
          onValueChange={(itemValue, itemIndex) => setOccupationCode(itemValue)}
          mode="dropdown"
          style={styles.Picker}
        >
          <Picker.Item label="Occupation Code" value="Occupation Code" />
          <Picker.Item label="91" value="91" />
          <Picker.Item label="911" value="911" />
        </Picker>
      </TouchableOpacity>

      <TouchableOpacity style={styles.dropdown}>
        <Picker
          selectedValue={countryOfBirth}
          onValueChange={(itemValue, itemIndex) => setCountryOfBirth(itemValue)}
          mode="dropdown"
          style={styles.Picker}
        >
          <Picker.Item label="Country of Birth" value="Country of Birth" />
          <Picker.Item label="india" value="india" />
        </Picker>
      </TouchableOpacity>

      <TouchableOpacity style={styles.dropdown}>
        <Picker
          selectedValue={nationality}
          onValueChange={(itemValue, itemIndex) => setNationality(itemValue)}
          mode="dropdown"
          style={styles.Picker}
        >
          <Picker.Item label="Nationality" value="Nationality" />
          <Picker.Item label="india" value="india" />
        </Picker>
      </TouchableOpacity>

      <TouchableOpacity style={styles.dropdown}>
        <Picker
          selectedValue={citizenship}
          onValueChange={(itemValue, itemIndex) => setCitizenship(itemValue)}
          mode="dropdown"
          style={styles.Picker}
        >
          <Picker.Item label="Citizenship" value="Citizenship" />
          <Picker.Item label="India" value="India" />
        </Picker>
      </TouchableOpacity> */}

      <TextInput
        mode="outlined"
        value={placeOfBirth}
        onChangeText={(e) => setPlaceOfBirth(e)}
        style={styles.input}
        outlineStyle={styles.outline}
        placeholder="Place Of Birth"
        theme={styles.themeStyle}
        contentStyle={styles.contentStyle}
        placeholderTextColor="rgb(191, 191, 191)"
      />
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

export default Fatca;
