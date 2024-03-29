import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
} from "react-native";
import { height, width } from "../../Dimension";
import { useFonts } from "expo-font";
const Navigatescreen = ({ navigation }) => {
  const [fontsLoaded] = useFonts({
    "Inter-Black": require("../../../assets/fonts/metropolis-latin-500-normal.ttf"),
  });
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <Text style={styles.topHeading}>Getting Started</Text>
          <Text style={styles.toppara}>
            Choose one of the options below to begin your journey with
            Growthvine
          </Text>

          <TouchableOpacity onPress={() => navigation.push("Riskcalculator")}>
            <View style={styles.buttonContainer}>
              <Image
                source={require("../../../assets/navigateScreens/image4.png")}
                style={styles.imageA}
              />
              <Text style={styles.textA}>Calculate your Risk Profile</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.push("Upload")}>
            <View style={styles.buttonContainer}>
              <Image
                source={require("../../../assets/navigateScreens/image5.png")}
                style={styles.imageB}
              />
              <Text style={styles.textB}>
                Upload existing Mutual Fund {"\n"}Investment
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.push("Corpus")}>
            <View style={styles.buttonContainer}>
              <Image
                source={require("../../../assets/navigateScreens/image6.png")}
                style={styles.imageC}
              />
              <Text style={styles.textC}>
                How to Create an Emergency {"\n"}Corpus of 1Cr
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.push("Signup")}>
            <View style={styles.buttonContainer}>
              <Image
                source={require("../../../assets/navigateScreens/image7.png")}
                style={styles.imageD}
              />
              <Text style={styles.textD}>
                Create Account / Login to existing{"\n"}Account
              </Text>
            </View>
          </TouchableOpacity>

          {/* <TouchableOpacity onPress={() => navigation.push("Assetpreview")}>
            <View style={styles.buttonContainer}>
              <Image
              source={require("../../../assets/navigateScreens/image7.png")}
              style={styles.imageD}
            />
              <Text style={styles.textD}>Navigate Asset Preview</Text>
            </View>
          </TouchableOpacity> */}

          <TouchableOpacity onPress={() => navigation.push("Dashboard")}>
            <View style={styles.buttonContainer}>
              {/* <Image
              source={require("../../../assets/navigateScreens/image7.png")}
              style={styles.imageD}
            /> */}
              <Text style={styles.textD}>Navigate Dashboard</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.push("Account")}>
            <View style={styles.buttonContainer}>
              {/* <Image
              source={require("../../../assets/navigateScreens/image7.png")}
              style={styles.imageD}
            /> */}
              <Text style={styles.textD}>Navigate Account Screens</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.push("Goal")}>
            <View style={styles.buttonContainer}>
              {/* <Image
              source={require("../../../assets/navigateScreens/image7.png")}
              style={styles.imageD}
            /> */}
              <Text style={styles.textD}>Navigate Goal Dashboard</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.push("Portfolio")}>
            <View style={styles.buttonContainer}>
              {/* <Image
              source={require("../../../assets/navigateScreens/image7.png")}
              style={styles.imageD}
            /> */}
              <Text style={styles.textD}>Navigate Portfolio</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  contentContainer: {
    marginTop: height * 0.1,
    padding: width * 0.06,
  },
  topHeading: {
    fontSize: width * 0.073,
    fontFamily: "Inter-Black",
    fontWeight: "700",
    color: "#023047",
  },
  toppara: {
    fontSize: width * 0.037,
    fontFamily: "Inter-Black",
    fontWeight: "500",
    marginTop: height * 0.028,
    marginBottom: height * 0.015,
    lineHeight: height * 0.028,
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: width * 0.0028,
    borderColor: "#D9D9D9",
    backgroundColor: "white",
    borderRadius: width * 0.032,
    padding: height * 0.02,
    marginTop: height * 0.032,
  },
  imageA: {
    width: width * 0.1,
    height: height * 0.05,
    marginLeft: width * -0.23,
  },
  textA: {
    color: "#023047", // Your text color
    fontSize: width * 0.037,
    marginLeft: width * 0.018,
    lineHeight: height * 0.028,
  },

  imageB: {
    width: width * 0.1,
    height: height * 0.05,
    marginLeft: width * -0.19,
  },
  textB: {
    color: "#023047", // Your text color
    fontSize: width * 0.037,
    marginLeft: width * 0.018,
    lineHeight: height * 0.028,
  },

  imageC: {
    width: width * 0.1,
    height: height * 0.05,
    marginLeft: width * -0.17,
  },
  textC: {
    color: "#023047", // Your text color
    fontSize: width * 0.037,
    marginLeft: width * 0.018,
    lineHeight: height * 0.028,
  },

  imageD: {
    width: width * 0.1,
    height: height * 0.05,
    marginLeft: width * -0.08,
  },
  textD: {
    color: "#023047", // Your text color
    fontSize: width * 0.037,
    marginLeft: width * 0.018,
    lineHeight: height * 0.028,
  },
  imageE: {
    width: width * 0.1,
    height: height * 0.05,
    marginLeft: width * 0.049,
  },
  textE: {
    color: "#023047", // Your text color
    fontSize: width * 0.037,
    marginLeft: width * 0.018,
    lineHeight: height * 0.028,
  },
});

export default Navigatescreen;
