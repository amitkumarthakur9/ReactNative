import React from "react";
import { View, StyleSheet } from "react-native";
import Svg, { Circle } from "react-native-svg";

const ProgressCircle = () => {
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (circumference * 90) / 100;

  return (
    <View style={styles.container}>
      <Svg>
        <Circle
          cx={radius * 2}
          cy={radius * 2}
          r={radius}
          fill="transparent"
          stroke="white" // White border color
          strokeWidth={10}
        />
        <Circle
          cx={radius * 2}
          cy={radius * 2}
          r={radius}
          fill="transparent"
          stroke="#00ff00" // Green fill color
          strokeWidth={10}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
        />
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    alignItems: "center",
    backgroundColor: "red",
  },
});

export default ProgressCircle;
