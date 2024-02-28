import React, { useEffect } from "react";
import { View, Image, StyleSheet, Alert } from "react-native";
import { width, height } from "./Dimension";
import { Session } from "./screens/Components/Data";
import Biometric from "./screens/Components/Biometric";
const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    Session().then((response) => {
      if (response === false) {
        Biometric()
          .then((bio) => {
            if (bio) {
              navigation.push("Dashboard");
            } else {
              Alert.alert(
                "Authentication Cancelled",
                "Please approve the authentication for going ahead.",
                [
                  {
                    text: "OK",
                    onPress: () => {
                      navigation.push("Splash");
                    },
                  },
                ]
              );
            }
          })
          .catch((e) => {
            Alert.alert(e);
          });
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
