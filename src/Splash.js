import React, { useEffect } from "react";
import { View, Image, StyleSheet } from "react-native";
import { width, height } from "./Dimension";
import { Session } from "./screens/Components/Data";

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    Session().then((response) => {
      if (response === false) {
        navigation.push("Dashboard");
      } else {
        const timer = setTimeout(() => {
          navigation.reset({
            index: 0,
            routes: [{ name: "Getstarted" }],
          });
        }, 5600);

        return () => clearTimeout(timer);
      }
    });
    // const timer = setTimeout(() => {
    //   navigation.reset({
    //     index: 0,
    //     routes: [{ name: "Getstarted" }],
    //   });
    // }, 5600);

    // return () => clearTimeout(timer);
  }, []);

  //   useEffect(() => {
  //     Session().then((response) => {
  //       if (response === false) {
  //         navigation.push("Dashboard");
  //       }
  //     });
  //   }, []);

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
