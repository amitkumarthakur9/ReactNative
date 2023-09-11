import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  Button,
} from "react-native";
import Footer from "../screens/Welcomescreens/Footer";

const { width, height } = Dimensions.get("window");

export default GLSuccessful = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.gliContainer}>
        <Image
          source={require("../../assets/signup/googleLoginSuccessful.png")}
          style={styles.glsImage}
        />
      </View>
      <Button title="Sign Out" mode="contained" onPress={signOut}>
        Sign Out
      </Button>
      <Text>{console.log(props.user)}</Text>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center", // Center horizontally
    justifyContent: "center", // Center vertically
  },
  glsImage: {
    resizeMode: "contain",
    width: width,
    height: height * 0.25,
  },
});
