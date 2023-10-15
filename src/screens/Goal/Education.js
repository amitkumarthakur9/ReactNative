import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { height, width } from "../../Dimension";
import Header from "../Components/Header";

export default Education = () => {
  return (
    <View>
      <Header title="Education" />
      <View style={styles.contentContainer}>
        <View style={styles.chartItem}>
          <TouchableOpacity style={styles.profileImageContainer}>
            <Image
              source={require("../../../assets/Goal/profile.png")}
              style={styles.profileImage}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.content}>
          <Text>kumarkkkkkkkkkkkkk</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  contentContainer: {
    marginTop: height * 0.04,
    flexDirection: "row",
    height: height * 0.5,
  },
  chartItem: {
    backgroundColor: "red",
    width: width * 0.6,
  },
  profileImageContainer: {
    flex: 1,
    justifyContent: "center",
  },
  content: {
    backgroundColor: "blue",
    width: width * 0.38,
  },
  profileImage: {
    width: width * 0.21,
    height: width * 0.21,
  },
});
