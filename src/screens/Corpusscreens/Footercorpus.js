import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import React from "react";
import { height, width } from "../../Dimension";

export default Footercorpus = () => {
  return (
    <View style={styles.footer}>
      <Image
        style={[styles.footerImage, { width: "auto", height: height * 0.32 }]}
        source={require("../../../assets/corpusIcon/Corpus.png")}
      />
      <View style={styles.totalWealthContainer}>
        <Text style={styles.totalWealthText}>
          Investment {"\n"}
          {"\n"}
        </Text>
      </View>
      <View style={styles.totalWealthContainer}>
        <Text style={styles.totalWealthTextA}>₹5,000</Text>
      </View>

      <View style={styles.totalWealthContainer}>
        <Text style={styles.totalWealthText1}>Wealth Gain</Text>
      </View>
      <View style={styles.totalWealthContainer}>
        <Text style={styles.totalWealthTextB}>₹5,600</Text>
      </View>

      <View style={styles.totalWealthContainer}>
        <Text style={styles.totalWealthText2}>Total Wealth Generated</Text>
      </View>
      <View style={styles.totalWealthContainer}>
        <Text style={styles.totalWealthText3}>₹10,600</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    // position: "absolute",
    bottom: 0,
    width: width * 1.04,
    borderTopLeftRadius: width * 0.14,
    borderTopRightRadius: width * 0.1,
    overflow: "hidden",
    marginLeft: width * -0.03,
  },
  totalWealthContainer: {
    alignItems: "center",
  },
  totalWealthText: {
    marginTop: height * -0.3,
    marginLeft: width * -0.4,
    fontSize: width * 0.042,
    fontFamily: "Metropolis",
    fontWeight: "400",
    overflow: "hidden",
    color: "#C3C3C3",
  },
  totalWealthTextA: {
    marginTop: height * -0.26,
    marginLeft: width * -0.4,
    fontSize: width * 0.053,
    fontFamily: "Metropolis",
    fontWeight: "400",
    overflow: "hidden",
    color: "#FFFFFF",
    lineHeight: height * 0.028,
  },

  totalWealthText1: {
    marginTop: height * -0.3,
    marginRight: width * -0.41,
    fontSize: width * 0.042,
    fontFamily: "Metropolis",
    fontWeight: "400",
    overflow: "hidden",
    color: "#C3C3C3",
  },

  totalWealthTextB: {
    marginTop: height * -0.26,
    marginRight: width * -0.4,
    fontSize: width * 0.053,
    fontFamily: "Metropolis",
    fontWeight: "400",
    overflow: "hidden",
    color: "#FFFFFF",
    lineHeight: height * 0.028,
  },

  totalWealthText2: {
    marginTop: height * -0.2,
    fontSize: width * 0.042,
    fontFamily: "Metropolis",
    fontWeight: "400",
    overflow: "hidden",
    color: "#C3C3C3",
    lineHeight: height * 0.028,
  },
  totalWealthText3: {
    fontSize: width * 0.066,
    fontFamily: "Metropolis",
    fontWeight: "600",
    overflow: "hidden",
    marginTop: height * -0.17,
    color: "#FFFFFF",
  },
});
