import React, { useState } from "react";
import { ScrollView, Text, View, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";
import { height, width } from "../../Dimension";
import Accountpagination from "./Accountpagination";
import Form from "./Form";
import Header from "../Components/Header";
import { useSelector } from "react-redux";
import Setting from "./Setting";
import Myprofile from "./Myprofile";

const Account = () => {
  const profileCompleted = useSelector((state) => state.user.profileCompleted);
  return (
    <View style={styles.container}>
      {/* {profileCompleted ? <Setting /> : <Myprofile />} */}
      <Setting />
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
  },
});
export default Account;
