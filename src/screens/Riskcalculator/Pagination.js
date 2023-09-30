import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Button } from "react-native-paper";
import { width, height } from "../../Dimension";

export default pagination = ({ data, updateActiveIndex }) => {
  const { activeIndex, totalDots } = data;

  const handleDotPress = (index) => {
    updateActiveIndex(index); // Call the function to update activeIndex
  };

  return (
    <View style={styles.contentContainer}>
      <Text style={styles.header}>Risk Profile Calculator</Text>
      <View style={styles.paginationContainer}>
        {Array.from({ length: totalDots }, (_, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.pagination,
              {
                backgroundColor:
                  index === activeIndex
                    ? "rgba(33, 158, 188, 1)"
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
    marginTop: height * 0.1,
    padding: width * 0.02,
    resizeMode: "contain",
  },
  header: {
    color: "rgba(2, 48, 71, 1)",
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
