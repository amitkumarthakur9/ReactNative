import React, { useState } from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { ActivityIndicator, MD2Colors } from "react-native-paper";
import { width, height } from "../../Dimension";

export default Loader = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator
        animating={true}
        color={"rgba(33, 0, 93, 1)"}
        size={"large"}
      />
      <Image
        source={require("../../fixed/loader.png")}
        style={{
          position: "absolute",
          width: width * 0.09,
          height: width * 0.2,
          resizeMode: "contain",
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "white",
  },
});
