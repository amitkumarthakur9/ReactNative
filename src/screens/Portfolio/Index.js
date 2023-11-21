import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Bgiheader from "../Components/Bgiheader";
import { width, height } from "../../Dimension";
import Content from "./Content";
import Model from "../Components/Model";

const Portfolio = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Bgiheader title="Portfolio" showPlusSign={false} Headerheight={0.29} />
      <View style={styles.cart}>
        <View style={styles.individualCarts}>
          <ImageBackground
            source={require("../../../assets/portfolio/rec1.png")}
            style={styles.rec1}
            resizeMode="stretch"
          >
            <Image
              source={require("../../../assets/Goal/rectengal2.png")}
              style={styles.rectengal2}
            />
            <View style={styles.investmentContainer}>
              <View style={styles.headerBox}>
                <Text style={styles.header}>
                  Current Internal Portfolio Value
                </Text>
                <Text style={styles.desc}>₹ 2,59,000.00</Text>
              </View>
              <View style={styles.boxBottomContainer}>
                <View style={styles.flexRow}>
                  <Text style={styles.descHeader}>Investment</Text>
                  <Text style={styles.descHeader}>Current Gain</Text>
                  <Text style={styles.descHeader}>XIRR</Text>
                </View>
                <View style={styles.flexRow}>
                  <Text style={styles.descValue}> ₹ 2,00,000 </Text>
                  <Text style={styles.descValue}> ₹ 2,00,000 </Text>
                  <Text
                    style={[
                      styles.descValue,
                      {
                        color: "rgba(61, 193, 84, 1)",
                      },
                    ]}
                  >
                    32.8%
                  </Text>
                </View>
                <View style={styles.valueContainer}>
                  <View style={styles.flexRow}>
                    <Text style={styles.descHeader}>Return</Text>
                    <Text style={styles.descHeader}>One Day Change</Text>
                    <Text style={styles.descHeader}>Rating</Text>
                  </View>
                  <View style={styles.flexRow}>
                    <Text style={styles.descValue}> 100 </Text>
                    <Text style={styles.descValue}> 1000 </Text>
                    <Text style={styles.descValue}>4.5</Text>
                  </View>
                </View>
              </View>
            </View>
          </ImageBackground>
        </View>
      </View>
      <Content />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  cart: {
    marginTop: -height * 0.13,
    margin: width * 0.02,
    zIndex: 1,
  },
  individualCarts: {},
  rec1: {
    height: height * 0.3,
  },
  headerBox: {
    top: height * 0.02,
  },
  header: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: width * 0.035,
    fontWeight: "600",
    opacity: 0.3,
  },
  desc: {
    color: "rgba(33, 0, 93, 1)",
    fontSize: width * 0.07,
    fontWeight: "700",
    lineHeight: height * 0.04,
    marginTop: height * 0.01,
  },
  boxBottomContainer: {
    marginTop: height * 0.045,
  },
  investmentContainer: {
    position: "absolute",
    width: width,
    marginLeft: width * 0.1,
    marginTop: height * 0.01,
  },
  flexRow: {
    flexDirection: "row",
  },
  rectengal2: {
    position: "absolute",
    height: height * 0.18,
    resizeMode: "contain",
    right: -width * 0.11,
    top: -height * 0.023,
    zIndex: -1,
  },
  descHeader: {
    color: "rgba(0, 0, 0, 1)",
    lineHeight: height * 0.03,
    fontSize: width * 0.035,
    fontWeight: "500",
    opacity: 0.3,
    flex: 1,
  },
  descValue: {
    color: "rgba(73, 69, 79, 1)",
    lineHeight: height * 0.025,
    fontSize: width * 0.035,
    fontWeight: "600",
    flex: 1,
  },
  investNow: {
    borderTopLeftRadius: width * 0.05,
    borderBottomLeftRadius: width * 0.05,
    top: -height * 0.02,
    right: -width * 0.1,
    padding: width * 0.03,
    backgroundColor: "rgba(251, 133, 0, 1)",
  },
  investNowText: {
    left: width * 0.02,
    fontSize: width * 0.04,
    lineHeight: height * 0.028,
    fontWeight: "600",
    color: "rgba(255, 255, 255, 1)",
  },
  valueContainer: {
    marginTop: height * 0.025,
  },
});

export default Portfolio;
