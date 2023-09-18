import React from "react";
import { View, StyleSheet, Dimensions, Image } from "react-native";

import { width, height } from "./Dimension";

const Footer = () => {
  return (
    <View style={styles.polygonImages}>
      <Image
        source={require("../assets/Polygon.png")}
        style={{
          width: width,
          height: height * 0.22,
          resizeMode: "contain",
          zIndex: 1,
        }}
      />
      <Image
        source={require("../assets/Polygon2.png")}
        style={{
          position: "absolute",
          width: width,
          height: height * 0.22,
          resizeMode: "contain",
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  polygonImages: {
    position: "absolute",
    bottom: 0,
    width: width,
    height: height * 0.22,
  },
});

export default Footer;
