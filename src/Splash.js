import React, { useEffect } from "react";
import { View, Image, StyleSheet } from "react-native";
import { width, height } from "./Dimension";

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.reset({
        index: 0,
        routes: [{ name: "Getstarted" }],
      });
    }, 5600); // 6000 milliseconds = 6 seconds

    return () => clearTimeout(timer);
  });

  return (
    <View style={styles.container}>
      <Image source={require("../assets/freshlogo.gif")} style={styles.logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  logo: {
    width: width,
    height: height * 0.4, // Use a percentage of the screen height
    resizeMode: "contain",
  },
});

export default SplashScreen;
