import React from "react";
import { Foundation, SimpleLineIcons } from "@expo/vector-icons";
import { width, height } from "../../Dimension";
import { StyleSheet } from "react-native";
const RenderStars = (rating) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <Foundation
        key={i}
        name="star"
        size={width * 0.04}
        style={[
          styles.star,
          { color: i <= rating ? "rgba(255, 195, 0, 1)" : "gray" },
        ]}
      />
    );
  }
  return stars;
};

const styles = StyleSheet.create({
  star: {
    marginTop: height * 0.02,
    color: "rgba(255, 195, 0, 1)",
    marginBottom: height * 0.01,
    margin: width * 0.01,
  },
});

export default RenderStars;
