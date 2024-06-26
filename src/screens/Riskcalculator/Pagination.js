import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Button } from "react-native-paper";
import { width, height } from "../../Dimension";
import { useFonts } from "expo-font";
export default pagination = ({ data, updateActiveIndex }) => {
  const { activeIndex, totalDots } = data;

  const handleDotPress = (index) => {
    updateActiveIndex(index); // Call the function to update activeIndex
  };
  const [fontsLoaded] = useFonts({
    "Inter-Black": require("../../../assets/fonts/metropolis-latin-500-normal.ttf"),
  });

  return (
    <View style={styles.contentContainer}>
      <View style={styles.paginationContainer}>
        {Array.from({ length: totalDots }, (_, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.pagination,
              {
                backgroundColor:
                  index === activeIndex
                    ? "rgb(0, 56, 116 )"
                    : index < activeIndex
                    ? "rgba(2, 48, 71, 1)"
                    : "rgba(26, 28, 23, 0.12)",
              },
            ]}
            onPress={() => handleDotPress(index)}
          />
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
    padding: width * 0.02,
    resizeMode: "contain",
  },
  header: {
    color: "rgba(2, 48, 71, 1)",
    fontFamily: "Inter-Black",
    fontWeight: "600",
    fontSize: width * 0.045,
  },
  paginationContainer: {
    flexDirection: "row",
    marginTop: height * 0.03,
  },
  pagination: {
    height: height * 0.01,
    borderRadius: width * 0.01,
    margin: width * 0.005,
    flex: 1,
  },
});
