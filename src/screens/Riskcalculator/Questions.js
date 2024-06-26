import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Button } from "react-native-paper";
import { width, height } from "../../Dimension";
import MCQ from "./Mcq";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { useFonts } from "expo-font";
export default Questions = ({ data, updateActiveIndex }) => {
  const mcq = MCQ;
  const { activeIndex } = data;
  const navigation = useNavigation();

  const storeData = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (e) {
      // console.log(e);
    }
  };

  const handleOption = async (newIndex, activeIndex, index) => {
    try {
      const key = `question_${activeIndex}`;
      const ans = index + 1;
      await storeData(key, ans.toString());
      updateActiveIndex(newIndex);
      if (activeIndex == 9) {
        navigation.push("Result");
      }
    } catch (error) {
      // console.error("Error storing data:", error);
    }
  };

  const [fontsLoaded] = useFonts({
    "Inter-Black": require("../../../assets/fonts/metropolis-latin-500-normal.ttf"),
  });

  return (
    <View style={styles.contentContainer}>
      <Text style={styles.header}>{mcq[activeIndex].question}</Text>
      <View style={styles.optionContainer}>
        {mcq[activeIndex].options.map((option, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={0.6}
            onPress={() =>
              handleOption(
                activeIndex <= 8 ? activeIndex + 1 : activeIndex,
                activeIndex,
                index
              )
            }
          >
            <Button
              key={index}
              mode="contained"
              style={styles.optionButton}
              labelStyle={{
                fontSize: width * 0.042,
                fontFamily: "Inter-Black",
                fontWeight: "700",
              }}
            >
              {option}
            </Button>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  contentContainer: {
    marginTop: height * 0.03,
    padding: width * 0.02,
    resizeMode: "contain",
  },
  header: {
    color: "rgba(2, 48, 71, 1)",
    fontFamily: "Inter-Black",
    fontWeight: "600",
    fontSize: width * 0.05,
    textAlign: "center",
  },
  optionContainer: {
    marginTop: height * 0.07,
  },
  optionButton: {
    alignItems: "center",
    justifyContent: "center",
    height: height * 0.07,
    backgroundColor: "rgb(0, 56, 116 )",
    borderRadius: width * 0.035,
    marginBottom: height * 0.02,
  },
});
