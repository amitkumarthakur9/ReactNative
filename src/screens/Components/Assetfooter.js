import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { height, width } from "../../Dimension";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { Button } from "react-native-paper";
import { useRoute, useNavigation } from "@react-navigation/native";
import { useFonts } from "expo-font";
export default Assetfooter = (props) => {
  const navigation = useNavigation();
  const mfData = props.mfData;

  const [fontsLoaded] = useFonts({
    "Inter-Black": require("../../../assets/fonts/metropolis-latin-500-normal.ttf"),
  });
  return (
    <View style={styles.footerContainer}>
      <TouchableOpacity
        onPress={() => navigation.navigate("Onetimesip", { mfData })}
      >
        <Button
          mode="contained"
          style={styles.footerButton}
          labelStyle={styles.labelStyle}
        >
          One Time
        </Button>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Sip", { mfData })}>
        <Button
          mode="contained"
          style={[
            styles.footerButton,
            {
              backgroundColor: "rgb(0, 56, 116 )",
              borderColor: "rgb(0, 56, 116 )",
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
    color: "rgb(0, 56, 116 )",
    fontFamily: "Inter-Black",
    fontWeight: "600",
    fontSize: width * 0.042,
  },
});
