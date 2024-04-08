import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { height, width } from "../../Dimension";
import { useFonts } from "expo-font";

const Accountpagination = ({ data }) => {
  const { currentForm, setCurrentForm } = data;
  const totalDots = 5;
  const [fontsLoaded] = useFonts({
    "Inter-Black": require("../../../assets/fonts/metropolis-latin-500-normal.ttf"),
  });
  return (
    <View style={styles.contentContainer}>
      <Text style={styles.header}>Account Setup - Profile</Text>
      <View style={styles.paginationContainer}>
        {Array.from({ length: totalDots }, (_, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.pagination,
              {
                backgroundColor:
                  index === currentForm
                    ? "rgb(0, 56, 116 )"
                    : index < currentForm
                    ? "rgba(2, 48, 71, 1)"
                    : "rgba(26, 28, 23, 0.12)",
              },
            ]}
            onPress={() => setCurrentForm(index)}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    // marginTop: height * 0.1,
  },
  header: {
    color: "rgba(2, 48, 71, 1)",
    fontSize: width * 0.04,
    fontFamily: "Inter-Black",
    fontWeight: "600",
    marginBottom: height * 0.015,
  },
  paginationContainer: {
    flexDirection: "row",
  },
  pagination: {
    height: height * 0.01,
    borderRadius: width * 0.01,
    margin: width * 0.005,
    flex: 1,
  },
});

export default Accountpagination;
