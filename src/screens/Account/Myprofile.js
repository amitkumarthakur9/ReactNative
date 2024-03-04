import React, { useState } from "react";
import { ScrollView, Text, View, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";
import { height, width } from "../../Dimension";
import Accountpagination from "./Accountpagination";
import Form from "./Form";
import Header from "../Components/Header";
import Mbottommenu from "../Components/Mbottommenu";

const Myprofile = () => {
  const [currentForm, setCurrentForm] = useState(0);
  return (
    <View style={styles.container}>
      <Header title="Account Setup" showPlusSign={false} />
      <ScrollView keyboardShouldPersistTaps="always">
        <View style={styles.profileContainer}>
          <Accountpagination
            data={{
              currentForm: currentForm,
              setCurrentForm: setCurrentForm,
            }}
          />
          <Form
            data={{
              currentForm: currentForm,
              setCurrentForm: setCurrentForm,
            }}
          />
        </View>
      </ScrollView>
      <Mbottommenu />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  profileContainer: {
    padding: width * 0.06,
    marginBottom: height * 0.1,
  },
});
export default Myprofile;
