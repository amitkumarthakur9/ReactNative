import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Button } from "react-native-paper";
import { width, height } from "../../Dimension";
import MCQ from "./Mcq";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native"; // Import the useNavigation hook

export default Questions = ({ data, updateActiveIndex }) => {
  const mcq = MCQ;
  const { activeIndex } = data;

  const navigation = useNavigation(); // Access the navigation object

  const storeData = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (e) {
      console.log(e);
    }
  };

  const getAllKeys = async () => {
    try {
      const allKeys = await AsyncStorage.getAllKeys();
      const allData = await AsyncStorage.multiGet(allKeys);

      console.log(allData);

      // 'allData' is an array of key-value pairs, so you can loop through it to access the data
      //   allData.forEach(([key, value]) => {
      //     console.log(`Key: ${key}, Value: ${value}`);
      //     // Handle the data as needed
      //   });
    } catch (e) {
      console.error("Error fetching keys:", e);
    }
  };

  const handleOption = async (newIndex, activeIndex, index) => {
    try {
      const key = `question_${activeIndex}`; // Unique key for each question
      await storeData(key, index.toString());
      // Data was successfully stored, now call getAllKeys
      updateActiveIndex(newIndex);
      if (activeIndex == 9) {
        navigation.push("Result");
      }
      // getAllKeys();
    } catch (error) {
      console.error("Error storing data:", error);
    }
  };

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
              labelStyle={{ fontSize: width * 0.042, fontWeight: "700" }}
            >
              {option}
            </Button>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

// ...styles definition remains the same...

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  contentContainer: {
    marginTop: height * 0.05,
    padding: width * 0.02,
    resizeMode: "contain",
  },
  header: {
    color: "rgba(2, 48, 71, 1)",
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
    backgroundColor: "rgba(33, 158, 188, 1)",
    borderRadius: width * 0.035,
    marginBottom: height * 0.02,
  },
});
