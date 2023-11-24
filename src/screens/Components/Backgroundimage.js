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
  const { Headerheight } = Props;
  const navigation = useNavigation();
  return (
    <ImageBackground
      source={require("../../../assets/icons/header.png")}
      style={{ width: width, height: height * Headerheight }}
      resizeMode="stretch"
    ></ImageBackground>
  );
};

const styles = StyleSheet.create({});
