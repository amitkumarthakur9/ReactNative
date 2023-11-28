import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { height, width } from "../../Dimension";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { Button } from "react-native-paper";
import { useRoute, useNavigation } from "@react-navigation/native";
export default Assetfooter = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.footerContainer}>
      <TouchableOpacity onPress={() => navigation.push("Onetimesip")}>
        <Button
          mode="contained"
          style={styles.footerButton}
          labelStyle={styles.labelStyle}
        >
          One Time
        </Button>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.push("Sip")}>
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
          Start SIP
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
    fontWeight: "600",
    fontSize: width * 0.042,
  },
});
