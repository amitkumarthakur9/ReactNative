import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { height, width } from "../../Dimension";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default Header = (Props) => {
  const { title, showPlusSign, Headerheight } = Props;
  const navigation = useNavigation();
  return (
    <ImageBackground
      source={require("../../../assets/icons/header.png")}
      style={{ width: width, height: height * Headerheight }}
      resizeMode="stretch"
    >
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <Ionicons
            name="arrow-back"
            size={width * 0.08}
            color="white"
            onPress={() => navigation.goBack()}
            style={styles.item}
          />
          <Text style={[styles.item, styles.goal]}>{title}</Text>
          {showPlusSign && (
            <TouchableOpacity onPress={() => navigation.push("Goalform")}>
              <Image
                source={require("../../../assets/Goal/plus.png")}
                style={[styles.plusImage]}
              />
            </TouchableOpacity>
          )}
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height * 0.17,
    borderColor: "rgba(0, 0, 0, 0.3)",
    borderRadius: width * 0.06,
  },
  contentContainer: {
    flexDirection: "row",
    padding: width * 0.02,
    marginTop: height * 0.025,
  },
  plusImage: {
    width: width * 0.1,
    height: width * 0.1,
    marginTop: height * 0.06,
  },
  item: {
    marginTop: height * 0.05,
    margin: width * 0.03,
    flex: 1,
  },
  goal: {
    marginLeft: -width * 0.55,
    color: "rgba(255, 255, 255, 1)",
    fontWeight: "600",
    fontSize: width * 0.045,
    lineHeight: height * 0.04,
  },
});
