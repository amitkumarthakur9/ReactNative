import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { height, width } from "../../Dimension";
import Assetheader from "../Components/Assetheader";
import Content from "./Content";
import Assetfooter from "../Components/Assetfooter";

const Assetpreview = () => {
  return (
    <View style={styles.mainContainer}>
      <Assetheader />
      <Content />
      <Assetfooter />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "white",
    flex: 1,
  },
});

export default Assetpreview;
