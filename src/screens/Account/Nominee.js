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

const Nominee = () => {
  const [firstNominee, setFirstNominee] = useState();
  const [relationWithNominee, setRelationWithNominee] = useState();
  const [nomineeDOB, setNomineeDOB] = useState();
  const [nomineeShare, setNomineeShare] = useState();

  const [secondNominee, setSecondNominee] = useState();
  const [secondrelationWithNominee, setSecondrelationWithNominee] = useState();
  const [secondnomineeDOB, setSecondnomineeDOB] = useState();
  const [secondnomineeShare, setSecondnomineeShare] = useState();

  const [thirdNominee, setThirdNominee] = useState();
  const [thirdrelationWithNominee, setThirdrelationWithNominee] = useState();
  const [thirdnomineeDOB, setThirdnomineeDOB] = useState();
  const [thirdnomineeShare, setThirdnomineeShare] = useState();

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Text style={styles.desc}>
        You can make changes to these details later under Account - Nominee
      </Text>

      <Text style={styles.header}>Nominee Details</Text>
      <TextInput
        mode="outlined"
        value={firstNominee}
        onChangeText={(e) => setFirstNominee(e)}
        style={styles.input}
        outlineStyle={styles.outline}
        placeholder="Nominee Name"
        theme={styles.themeStyle}
        contentStyle={styles.contentStyle}
        placeholderTextColor="rgb(191, 191, 191)"
      />

      <TextInput
        mode="outlined"
        value={relationWithNominee}
        onChangeText={(e) => setRelationWithNominee(e)}
        style={styles.input}
        outlineStyle={styles.outline}
        placeholder="Relation With Nominee"
        theme={styles.themeStyle}
        contentStyle={styles.contentStyle}
        placeholderTextColor="rgb(191, 191, 191)"
      />

      <TextInput
        mode="outlined"
        value={nomineeDOB}
        onChangeText={(e) => setNomineeDOB(e)}
        style={styles.input}
        outlineStyle={styles.outline}
        placeholder="Relation With Nominee"
        theme={styles.themeStyle}
        contentStyle={styles.contentStyle}
        placeholderTextColor="rgb(191, 191, 191)"
      />

      <TextInput
        mode="outlined"
        value={nomineeShare}
        onChangeText={(e) => setNomineeShare(e)}
        style={styles.input}
        outlineStyle={styles.outline}
        placeholder="Relation With Nominee"
        theme={styles.themeStyle}
        contentStyle={styles.contentStyle}
        placeholderTextColor="rgb(191, 191, 191)"
      />

      <Text style={styles.header}>Second Nominee Details</Text>
      <TextInput
        mode="outlined"
        value={secondNominee}
        onChangeText={(e) => setSecondNominee(e)}
        style={styles.input}
        outlineStyle={styles.outline}
        placeholder="Nominee Name"
        theme={styles.themeStyle}
        contentStyle={styles.contentStyle}
        placeholderTextColor="rgb(191, 191, 191)"
      />

      <TextInput
        mode="outlined"
        value={secondrelationWithNominee}
        onChangeText={(e) => setSecondrelationWithNominee(e)}
        style={styles.input}
        outlineStyle={styles.outline}
        placeholder="Relation With Nominee"
        theme={styles.themeStyle}
        contentStyle={styles.contentStyle}
        placeholderTextColor="rgb(191, 191, 191)"
      />

      <TextInput
        mode="outlined"
        value={secondnomineeDOB}
        onChangeText={(e) => setSecondnomineeDOB(e)}
        style={styles.input}
        outlineStyle={styles.outline}
        placeholder="Relation With Nominee"
        theme={styles.themeStyle}
        contentStyle={styles.contentStyle}
        placeholderTextColor="rgb(191, 191, 191)"
      />

      <TextInput
        mode="outlined"
        value={secondnomineeShare}
        onChangeText={(e) => setSecondnomineeShare(e)}
        style={styles.input}
        outlineStyle={styles.outline}
        placeholder="Relation With Nominee"
        theme={styles.themeStyle}
        contentStyle={styles.contentStyle}
        placeholderTextColor="rgb(191, 191, 191)"
      />

      <Text style={styles.header}>Third Nominee Details</Text>
      <TextInput
        mode="outlined"
        value={thirdNominee}
        onChangeText={(e) => setThirdNominee(e)}
        style={styles.input}
        outlineStyle={styles.outline}
        placeholder="Nominee Name"
        theme={styles.themeStyle}
        contentStyle={styles.contentStyle}
        placeholderTextColor="rgb(191, 191, 191)"
      />

      <TextInput
        mode="outlined"
        value={thirdrelationWithNominee}
        onChangeText={(e) => setThirdrelationWithNominee(e)}
        style={styles.input}
        outlineStyle={styles.outline}
        placeholder="Relation With Nominee"
        theme={styles.themeStyle}
        contentStyle={styles.contentStyle}
        placeholderTextColor="rgb(191, 191, 191)"
      />

      <TextInput
        mode="outlined"
        value={thirdnomineeDOB}
        onChangeText={(e) => setThirdnomineeDOB(e)}
        style={styles.input}
        outlineStyle={styles.outline}
        placeholder="Relation With Nominee"
        theme={styles.themeStyle}
        contentStyle={styles.contentStyle}
        placeholderTextColor="rgb(191, 191, 191)"
      />

      <TextInput
        mode="outlined"
        value={thirdnomineeShare}
        onChangeText={(e) => setThirdnomineeShare(e)}
        style={styles.input}
        outlineStyle={styles.outline}
        placeholder="Relation With Nominee"
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

export default Nominee;
