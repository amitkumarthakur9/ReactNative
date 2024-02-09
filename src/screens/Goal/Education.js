import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { height, width } from "../../Dimension";
import Header from "../Components/Header";
import { Fontisto } from "@expo/vector-icons";
import CircularProgress from "react-native-circular-progress-indicator";
import { Card, Avatar, Button } from "react-native-paper";
import { useFonts } from "expo-font";
export default Education = () => {
  const [fontsLoaded] = useFonts({
    "Inter-Black": require("../../../assets/fonts/metropolis-latin-500-normal.ttf"),
  });
  return (
    <View style={styles.container}>
      <Header title="Education" showPlusSign={true} />
      <ScrollView>
        <View style={styles.contentContainer}>
          <View style={styles.chartItem}>
            <View style={styles.profileImageContainer}>
              <View style={[styles.circleContainer, { top: 0 }]}>
                <CircularProgress
                  value={6}
                  radius={180}
                  duration={2000}
                  maxValue={20}
                  clockwise={true}
                  progressValueColor={"transparent"}
                  activeStrokeColor={"rgba(169, 190, 244, 1)"}
                  inActiveStrokeColor={"rgb(210, 221, 249)"}
                  inActiveStrokeWidth={width * 0.07}
                  activeStrokeWidth={width * 0.07}
                />
              </View>
              <View style={[styles.circleContainer, { top: 40 }]}>
                <CircularProgress
                  value={5}
                  radius={140}
                  duration={2000}
                  maxValue={20}
                  clockwise={true}
                  progressValueColor={"transparent"}
                  activeStrokeColor={"rgba(232, 193, 135, 1)"}
                  inActiveStrokeColor={"rgb(247, 233, 212)"}
                  inActiveStrokeWidth={width * 0.07}
                  activeStrokeWidth={width * 0.07}
                />
              </View>
              <View style={[styles.circleContainer, { top: 80 }]}>
                <CircularProgress
                  value={8}
                  radius={100}
                  duration={2000}
                  maxValue={20}
                  clockwise={true}
                  progressValueColor={"transparent"}
                  activeStrokeColor={"rgba(220, 110, 216, 1)"}
                  inActiveStrokeColor={"rgb(245, 214, 244)"}
                  inActiveStrokeWidth={width * 0.06}
                  activeStrokeWidth={width * 0.06}
                />
              </View>
              <Image
                source={require("../../../assets/Goal/profile.png")}
                style={styles.profileImage}
              />
            </View>
          </View>
          <View style={styles.content}>
            <View style={{ left: -width * 0.05 }}>
              <View style={styles.Achieved}>
                <Text style={styles.AchievedItem}>Achieved</Text>
                <Text style={styles.AchievedPercentage}>15%</Text>
                <Fontisto name="angle-up" style={styles.AchievedPercentage} />
              </View>
              <Text style={styles.amount}> ₹ 80.4k</Text>
              <Text style={styles.percentOf}> 20% of 2L </Text>
            </View>
            {/* <View
              style={[
                styles.fundDetails,
                { borderLeftColor: "rgba(220, 110, 216, 1)" },
              ]}
            >
              <Text style={styles.fundName}>Axis Multi Cap...</Text>
              <Text style={styles.fundAmount}> ₹ 20.4k</Text>
              <View style={{ flexDirection: "row" }}>
                <Text style={styles.fundpercentOf}> 20% of 2L </Text>
                <Text style={[styles.fundPercentage]}>
                  15% <Fontisto name="angle-up" />
                </Text>
              </View>
            </View>
            <View
              style={[
                styles.fundDetails,
                { borderLeftColor: "rgba(232, 193, 135, 1)" },
              ]}
            >
              <Text style={styles.fundName}>Axis Multi Cap...</Text>
              <Text style={styles.fundAmount}> ₹ 20.4k</Text>
              <View style={{ flexDirection: "row" }}>
                <Text style={styles.fundpercentOf}> 20% of 2L </Text>
                <Text style={[styles.fundPercentage]}>
                  15% <Fontisto name="angle-up" />
                </Text>
              </View>
            </View>
            <View
              style={[
                styles.fundDetails,
                {
                  borderLeftColor: "rgba(169, 190, 244, 1)",
                },
              ]}
            >
              <Text style={styles.fundName}>Axis Multi Cap...</Text>
              <Text style={styles.fundAmount}> ₹ 20.4k</Text>
              <View style={{ flexDirection: "row" }}>
                <Text style={styles.fundpercentOf}> 20% of 2L </Text>
                <Text style={[styles.fundPercentage]}>
                  15% <Fontisto name="angle-up" />
                </Text>
              </View>
            </View> */}
          </View>
        </View>
        <View style={styles.your}>
          <Text style={styles.yourHeader}> Your Investment</Text>
          <View style={styles.cart}>
            <View style={styles.individualCarts}>
              <ImageBackground
                source={require("../../../assets/Goal/rectengal.png")}
              >
                <Image
                  source={require("../../../assets/Goal/sideImage.png")}
                  style={styles.sideImage}
                />
                <Image
                  source={require("../../../assets/Goal/rectengal2.png")}
                  style={styles.rectengal2}
                />
                <View style={styles.investmentContainer}>
                  <View style={styles.flexRow}>
                    <Avatar.Image
                      size={width * 0.2}
                      source={require("../../../assets/icon.png")}
                      style={{ marginTop: height * 0.01 }}
                    />
                    <Text style={styles.investmentHeader}>
                      Axis Multicap Growth Fund
                    </Text>
                  </View>
                  <View style={[styles.flexRow, { marginLeft: width * 0.02 }]}>
                    <Text style={styles.descHeader}>Current</Text>
                    <Text style={styles.descHeader}>Goal</Text>
                    <Text style={styles.descHeader}>Gain</Text>
                  </View>
                  <View style={[styles.flexRow, { marginLeft: width * 0.02 }]}>
                    <Text style={styles.descValue}> ₹ 80.4k</Text>
                    <Text style={styles.descValue}>₹ 10</Text>
                    <Text style={styles.descValue}>3.8%</Text>
                  </View>
                </View>
              </ImageBackground>
            </View>
          </View>
          <View style={styles.cart}>
            <View style={styles.individualCarts}>
              <ImageBackground
                source={require("../../../assets/Goal/rectengal.png")}
              >
                <Image
                  source={require("../../../assets/Goal/sideImage.png")}
                  style={styles.sideImage}
                />
                <Image
                  source={require("../../../assets/Goal/rectengal2.png")}
                  style={styles.rectengal2}
                />
                <View style={styles.investmentContainer}>
                  <View style={styles.flexRow}>
                    <Avatar.Image
                      size={width * 0.2}
                      source={require("../../../assets/icon.png")}
                      style={{ marginTop: height * 0.01 }}
                    />
                    <Text style={styles.investmentHeader}>
                      Axis Multicap Growth Fund
                    </Text>
                  </View>
                  <View style={[styles.flexRow, { marginLeft: width * 0.02 }]}>
                    <Text style={styles.descHeader}>Current</Text>
                    <Text style={styles.descHeader}>Goal</Text>
                    <Text style={styles.descHeader}>Gain</Text>
                  </View>
                  <View style={[styles.flexRow, { marginLeft: width * 0.02 }]}>
                    <Text style={styles.descValue}> ₹ 80.4k</Text>
                    <Text style={styles.descValue}>₹ 10</Text>
                    <Text style={styles.descValue}>3.8%</Text>
                  </View>
                </View>
              </ImageBackground>
            </View>
          </View>
          <View style={styles.cart}>
            <View style={styles.individualCarts}>
              <ImageBackground
                source={require("../../../assets/Goal/rectengal.png")}
              >
                <Image
                  source={require("../../../assets/Goal/sideImage.png")}
                  style={styles.sideImage}
                />
                <Image
                  source={require("../../../assets/Goal/rectengal2.png")}
                  style={styles.rectengal2}
                />
                <View style={styles.investmentContainer}>
                  <View style={styles.flexRow}>
                    <Avatar.Image
                      size={width * 0.2}
                      source={require("../../../assets/icon.png")}
                      style={{ marginTop: height * 0.01 }}
                    />
                    <Text style={styles.investmentHeader}>
                      Axis Multicap Growth Fund
                    </Text>
                  </View>
                  <View style={[styles.flexRow, { marginLeft: width * 0.02 }]}>
                    <Text style={styles.descHeader}>Current</Text>
                    <Text style={styles.descHeader}>Goal</Text>
                    <Text style={styles.descHeader}>Gain</Text>
                  </View>
                  <View style={[styles.flexRow, { marginLeft: width * 0.02 }]}>
                    <Text style={styles.descValue}> ₹ 80.4k</Text>
                    <Text style={styles.descValue}>₹ 10</Text>
                    <Text style={styles.descValue}>3.8%</Text>
                  </View>
                </View>
              </ImageBackground>
            </View>
          </View>
          <View style={styles.cart}>
            <View style={styles.individualCarts}>
              <ImageBackground
                source={require("../../../assets/Goal/rectengal.png")}
              >
                <Image
                  source={require("../../../assets/Goal/sideImage.png")}
                  style={styles.sideImage}
                />
                <Image
                  source={require("../../../assets/Goal/rectengal2.png")}
                  style={styles.rectengal2}
                />
                <View style={styles.investmentContainer}>
                  <View style={styles.flexRow}>
                    <Avatar.Image
                      size={width * 0.2}
                      source={require("../../../assets/icon.png")}
                      style={{ marginTop: height * 0.01 }}
                    />
                    <Text style={styles.investmentHeader}>
                      Axis Multicap Growth Fund
                    </Text>
                  </View>
                  <View style={[styles.flexRow, { marginLeft: width * 0.02 }]}>
                    <Text style={styles.descHeader}>Current</Text>
                    <Text style={styles.descHeader}>Goal</Text>
                    <Text style={styles.descHeader}>Gain</Text>
                  </View>
                  <View style={[styles.flexRow, { marginLeft: width * 0.02 }]}>
                    <Text style={styles.descValue}> ₹ 80.4k</Text>
                    <Text style={styles.descValue}>₹ 10</Text>
                    <Text style={styles.descValue}>3.8%</Text>
                  </View>
                </View>
              </ImageBackground>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  contentContainer: {
    marginTop: height * 0.04,
    flexDirection: "row",
    height: height * 0.5,
  },
  chartItem: {
    // backgroundColor: "red",
    width: width * 0.6,
    height: height * 0.5,
  },
  profileImageContainer: {
    flex: 1,
    justifyContent: "center",
    left: -width * 0.28,
    top: height * 0.05,
  },
  content: {
    // backgroundColor: "red",
    left: -width * 0.01,
  },
  profileImage: {
    position: "absolute",
    width: width * 0.21,
    height: width * 0.21,
    left: width * 0.26,
    top: 140,
  },
  Achieved: {
    flexDirection: "row",
  },
  AchievedItem: {
    color: "rgba(2, 48, 71, 1)",
    fontSize: width * 0.045,
    lineHeight: height * 0.03,
    fontFamily: "Inter-Black",
    fontWeight: "600",
    margin: width * 0.01,
    opacity: 0.85,
  },
  AchievedPercentage: {
    color: "rgba(61, 193, 84, 1)",
    fontSize: width * 0.04,
    lineHeight: height * 0.025,
    fontFamily: "Inter-Black",
    fontWeight: "600",
    margin: width * 0.01,
  },
  amount: {
    color: "rgba(2, 48, 71, 1)",
    fontSize: width * 0.09,
    lineHeight: height * 0.055,
    fontFamily: "Inter-Black",
    fontWeight: "400",
  },
  percentOf: {
    color: "rgba(2, 48, 71, 1)",
    fontSize: width * 0.035,
    lineHeight: height * 0.025,
    fontFamily: "Inter-Black",
    fontWeight: "500",
    opacity: 0.5,
    marginBottom: height * 0.025,
  },
  circleContainer: {
    position: "absolute",
    alignSelf: "center",
  },
  circleMainContainer: {
    // marginTop: -height * 0.35,
  },
  fundName: {
    color: "rgba(2, 48, 71, 1)",
    fontFamily: "Inter-Black",
    fontWeight: "600",
    fontSize: width * 0.04,
    lineHeight: height * 0.03,
    opacity: 0.85,
  },
  fundAmount: {
    color: "rgba(2, 48, 71, 1)",
    fontFamily: "Inter-Black",
    fontWeight: "500",
    fontSize: width * 0.045,
    lineHeight: height * 0.035,
  },
  fundDetails: {
    marginTop: height * 0.02,
    borderLeftWidth: width * 0.01,
    padding: width * 0.02,
  },
  fundpercentOf: {
    fontFamily: "Inter-Black",
    fontWeight: "500",
    fontSize: width * 0.03,
    lineHeight: height * 0.02,
    color: "rgba(2, 48, 71, 1)",
    flex: 1,
  },
  fundPercentage: {
    color: "rgba(61, 193, 84, 1)",
    fontSize: width * 0.025,
    lineHeight: height * 0.02,
    fontFamily: "Inter-Black",
    fontWeight: "500",
  },
  your: {
    marginTop: height * 0.07,
  },
  yourHeader: {
    color: "rgba(2, 48, 71, 1)",
    fontSize: width * 0.045,
    lineHeight: height * 0.035,
    fontFamily: "Inter-Black",
    fontWeight: "600",
    left: width * 0.05,
  },
  cart: {
    flexDirection: "column",
  },
  individualCarts: {
    margin: height * 0.01,
    // backgroundColor: "white",
    // borderWidth: width * 0.002,
    // borderRadius: width * 0.04,
    // borderColor: "rgba(0, 0, 0, 0.15)",
  },
  cardTitle: {
    marginTop: height * 0.02,
    color: "rgba(2, 48, 71, 1)",
    fontSize: width * 0.045,
    lineHeight: height * 0.035,
    fontFamily: "Inter-Black",
    fontWeight: "600",
    textAlign: "center",
  },
  cardDesc: {
    marginTop: height * 0.015,
    color: "rgba(2, 48, 71, 1)",
    fontSize: width * 0.03,
    fontFamily: "Inter-Black",
    fontWeight: "500",
    textAlign: "center",
    lineHeight: height * 0.02,
    opacity: 0.6,
    marginBottom: height * 0.02,
  },
  moreDetails: {
    color: "rgba(33, 158, 188, 1)",
    fontSize: width * 0.03,
    fontFamily: "Inter-Black",
    fontWeight: "600",
    textAlign: "center",
    lineHeight: height * 0.02,
  },
  cardDetailsContainer: {
    flexDirection: "row",
  },
  cardDetails: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: width * 0.035,
    lineHeight: height * 0.025,
    fontFamily: "Inter-Black",
    fontWeight: "500",
    opacity: 0.3,
    flex: 1,
  },
  cardDetailsValue: {
    color: "rgba(73, 69, 79, 1)",
    fontSize: width * 0.03,
    lineHeight: height * 0.03,
    fontFamily: "Inter-Black",
    fontWeight: "500",
    flex: 1,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: height * 0.04,
    left: -width * 0.03,
  },
  buttonStyle: {
    height: height * 0.05,
    margin: width * 0.01,
    borderWidth: width * 0.004,
    borderColor: "rgba(26, 28, 23, 0.12)",
    borderRadius: width * 0.03,
  },
  labelStyle: {
    color: "rgba(2, 48, 71, 1)",
    fontSize: width * 0.03,
    lineHeight: height * 0.02,
    fontFamily: "Inter-Black",
    fontWeight: "500",
    textAlign: "center",
  },
  sideImage: {
    height: height * 0.2,
    resizeMode: "contain",
    left: -width * 0.02,
  },
  investmentContainer: {
    position: "absolute",
    marginLeft: width * 0.08,
  },
  investmentHeader: {
    color: "rgba(2, 48, 71, 1)",
    fontFamily: "Inter-Black",
    fontWeight: "600",
    fontSize: width * 0.045,
    lineHeight: height * 0.035,
    margin: width * 0.05,
    width: width * 0.45,
  },
  flexRow: {
    flexDirection: "row",
  },
  rectengal2: {
    position: "absolute",
    height: height * 0.18,
    resizeMode: "contain",
    right: -width * 0.14,
    top: -height * 0.03,
    zIndex: -1,
  },
  descHeader: {
    marginLeft: width * 0.01,
    color: "rgba(0, 0, 0, 1)",
    lineHeight: height * 0.025,
    fontSize: width * 0.035,
    fontFamily: "Inter-Black",
    fontWeight: "500",
    opacity: 0.3,
    flex: 1,
  },
  descValue: {
    marginLeft: width * 0.01,
    color: "rgba(73, 69, 79, 1)",
    lineHeight: height * 0.025,
    fontSize: width * 0.035,
    fontFamily: "Inter-Black",
    fontWeight: "600",
    flex: 1,
  },
});
