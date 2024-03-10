import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { height, width } from "../../Dimension";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useFonts } from "expo-font";

export default Header = (Props) => {
  const { title, showPlusSign, showDeleteSign, fncall } = Props;
  const navigation = useNavigation();
  const [fontsLoaded] = useFonts({
    "Inter-Black": require("../../../assets/fonts/metropolis-latin-500-normal.ttf"),
  });
  return (
    <View>
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
          {showDeleteSign && (
            <TouchableOpacity
              onPress={() => fncall()}
              style={[styles.plusImage]}
            >
              <MaterialIcons name="delete" size={width * 0.08} color="white" />
            </TouchableOpacity>
          )}
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(2, 48, 71, 1)",
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
    marginTop: height * 0.06,
    margin: width * 0.03,
    flex: 1,
  },
  goal: {
    marginLeft: -width * 0.55,
    color: "rgba(255, 255, 255, 1)",
    fontFamily: "Inter-Black",
    fontWeight: "600",
    fontSize: width * 0.045,
    lineHeight: height * 0.04,
  },
});
