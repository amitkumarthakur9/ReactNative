import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Button } from "react-native-paper";
import { width, height } from "../../Dimension";
import Pagination from "./Pagination";
import Questions from "./Questions";

export default Rpscreens = ({ navigation }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalDots = 10;

  const updateActiveIndex = (newIndex) => {
    setActiveIndex(newIndex);
  };
  return (
    <View style={styles.container}>
      <Pagination
        data={{ activeIndex: activeIndex, totalDots: totalDots }}
        updateActiveIndex={updateActiveIndex}
      />
      <Questions
        data={{ activeIndex: activeIndex, totalDots: totalDots }}
        updateActiveIndex={updateActiveIndex}
      />
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
    fontSize: width * 0.04,
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
