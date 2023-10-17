import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { height, width } from "../../Dimension";
import { Ionicons } from "@expo/vector-icons";
import { TextInput } from "react-native-paper";
import Uploadoptions from "./Uploadoptions";
export default Uploadscreens = ({ navigation }) => {
  const [text, setText] = React.useState("");
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.backgroundImage}
          source={require("../../../assets/uploadIcon/Frame.png")}
        />
      </View>
      <View style={styles.arrowContainer}>
        <TouchableOpacity style={styles.arrow}>
          <Ionicons
            style={styles.iconArrow}
            name="arrow-back"
            size={width * 0.08}
            color="white"
            onPress={() => navigation.goBack()}
          />
          <Text style={styles.headerText}>
            Upload Existing Mutual Fund Invest...
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.headerParagraph}>
          Enter Email Id used to purchase Mutual Funds to upload your holdings
        </Text>

        <TextInput
          mode="outlined"
          label="Email"
          placeholder="Entert your Email id"
          style={{
            backgroundColor: "transparent",
            marginTop: height * 0.032,
            fontSize: width * 0.032,
            fontWeight: "500",
            fontFamily: "Metropolis",
            lineHeight: height * 0.016,
            marginLeft: width * 0.047,
          }}
        />
      </View>
      <View>
        {/* <Getstart /> */}
        <Uploadoptions />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    // alignItems: "center",
  },
  imageContainer: {
    width: "100%",
    height: height * 0.43,
    overflow: "hidden",
    borderBottomLeftRadius: width * 0.08,
    borderBottomRightRadius: width * 0.08,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },
  arrowContainer: {
    flexDirection: "row",
    marginTop: height * 0.09,
    paddingLeft: width * 0.04,
    position: "absolute",
  },
  arrow: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconArrow: {
    marginLeft: width * 0.047,
  },
  headerText: {
    color: "#FFFFFF",
    fontWeight: "600",
    fontFamily: "Metropolis",
    fontSize: width * 0.037,
    lineHeight: height * 0.028,
    marginLeft: width * 0.047,
  },
  inputContainer: {
    marginTop: height * 0.2,
    paddingLeft: width * 0.04,
    position: "absolute",
  },
  headerParagraph: {
    color: "#FFFFFF",
    lineHeight: height * 0.028,
    fontSize: width * 0.037,
    fontFamily: "Metropolis",
    fontWeight: "500",
    marginLeft: width * 0.047,
  },
  inputEmail: {
    marginTop: height * 0.05,
    // opacity: 0.6,
    padding: height * 0.009,
  },
});
