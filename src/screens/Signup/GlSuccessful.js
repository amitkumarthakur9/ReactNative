import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  Button,
} from "react-native";
import Footer from "../../Footer";
import { width, height } from "../../Dimension";

export default GLSuccessful = () => {
  return (
    <View style={styles.container}>
      <View style={styles.gliContainer}>
        <Image
          source={require("../../../assets/signup/googleLoginSuccessful.png")}
          style={styles.glsImage}
        />
      </View>
      <Button title="Sign Out" mode="contained" onPress={signOut}>
        Sign Out
      </Button>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center", // Center horizontally
    justifyContent: "center", // Center vertically
    backgroundColor: "white",
  },
  glsImage: {
    resizeMode: "contain",
    width: width,
    height: height * 0.25,
  },
});
