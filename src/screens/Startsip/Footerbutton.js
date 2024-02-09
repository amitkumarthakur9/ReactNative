import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { height, width } from "../../Dimension";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { Button } from "react-native-paper";
import { useRoute, useNavigation } from "@react-navigation/native";
import { useFonts } from "expo-font";
export default footerButton = () => {
  const navigation = useNavigation();
  const [fontsLoaded] = useFonts({
    "Inter-Black": require("../../../assets/fonts/metropolis-latin-500-normal.ttf"),
  });
  return (
    <View style={styles.footerContainer}>
      <TouchableOpacity>
        <Button
          mode="contained"
          style={styles.footerButton}
          labelStyle={styles.labelStyle}
        >
          Add to Cart
        </Button>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.push("Payment")}>
        <Button
          mode="contained"
          style={[
            styles.footerButton,
            {
              backgroundColor: "rgba(33, 158, 188, 1)",
              borderColor: "rgba(33, 158, 188, 1)",
            },
          ]}
          labelStyle={[styles.labelStyle, { color: "white" }]}
        >
          Invest Now
        </Button>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    bottom: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: width * 0.005,
    borderColor: "rgb(242, 242, 242)",
    padding: width * 0.02,
  },
  footerButton: {
    margin: width * 0.01,
    borderRadius: width * 0.03,
    backgroundColor: "white",
    borderWidth: width * 0.002,
    borderColor: "rgb(191, 191, 191)",
    height: height * 0.06,
    width: width * 0.41,
    justifyContent: "center",
    alignItems: "center",
  },
  labelStyle: {
    color: "rgba(33, 158, 188, 1)",
    fontFamily: "Inter-Black",
    fontWeight: "600",
    fontSize: width * 0.042,
  },
});
