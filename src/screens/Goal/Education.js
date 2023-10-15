import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { height, width } from "../../Dimension";
import Header from "../Components/Header";
import { Fontisto } from "@expo/vector-icons";
import CircularProgress from "react-native-circular-progress-indicator";
import { Card, Avatar, Button } from "react-native-paper";

export default Education = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Header title="Education" />
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
            <View style={styles.fundDetails}>
              <Text style={styles.fundName}>Axis Multi Cap...</Text>
              <Text style={styles.fundAmount}> ₹ 20.4k</Text>
              <View style={{ flexDirection: "row" }}>
                <Text style={styles.fundpercentOf}> 20% of 2L </Text>
                <Text style={[styles.fundPercentage]}>
                  15% <Fontisto name="angle-up" />
                </Text>
              </View>
            </View>
            <View style={styles.fundDetails}>
              <Text style={styles.fundName}>Axis Multi Cap...</Text>
              <Text style={styles.fundAmount}> ₹ 20.4k</Text>
              <View style={{ flexDirection: "row" }}>
                <Text style={styles.fundpercentOf}> 20% of 2L </Text>
                <Text style={[styles.fundPercentage]}>
                  15% <Fontisto name="angle-up" />
                </Text>
              </View>
            </View>
            <View style={styles.fundDetails}>
              <Text style={styles.fundName}>Axis Multi Cap...</Text>
              <Text style={styles.fundAmount}> ₹ 20.4k</Text>
              <View style={{ flexDirection: "row" }}>
                <Text style={styles.fundpercentOf}> 20% of 2L </Text>
                <Text style={[styles.fundPercentage]}>
                  15% <Fontisto name="angle-up" />
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.recommended}>
          <Text style={styles.recommendedHeader}>Recommended Investments</Text>
          <View style={styles.cart}>
            <Card style={styles.individualCarts}>
              <Avatar.Image
                size={width * 0.2}
                source={require("../../../assets/icon.png")}
                style={{ alignSelf: "center" }}
              />
              <Card.Content>
                <Text variant="titleLarge" style={styles.cardTitle}>
                  Axis Multicap Gowth Fund
                </Text>
                <Text variant="bodyMedium" style={styles.cardDesc}>
                  Lorem impsome delmonto elsondn oklsdoliston amdelo toydj
                  jojsdojf osjko.
                </Text>
                <View style={styles.cardDetailsContainer}>
                  <Text style={styles.cardDetails}>Risk</Text>
                  <Text style={styles.cardDetails}>Moderate</Text>
                </View>
                <View style={styles.cardDetailsContainer}>
                  <Text style={styles.cardDetailsValue}>Returns</Text>
                  <Text
                    style={[
                      styles.cardDetailsValue,
                      { color: "rgba(61, 193, 84, 1)" },
                    ]}
                  >
                    32.8%
                  </Text>
                </View>
                <View style={styles.buttonContainer}>
                  <Button
                    mode="contained"
                    style={[styles.buttonStyle, { backgroundColor: "white" }]}
                    labelStyle={styles.labelStyle}
                  >
                    Know More
                  </Button>
                  <Button
                    mode="contained"
                    style={[
                      styles.buttonStyle,
                      { backgroundColor: "rgba(2, 48, 71, 1)" },
                    ]}
                    labelStyle={[styles.labelStyle, { color: "white" }]}
                  >
                    Invest
                  </Button>
                </View>
              </Card.Content>
            </Card>
            <Card style={styles.individualCarts}>
              <Avatar.Image
                size={width * 0.2}
                source={require("../../../assets/icon.png")}
                style={{ alignSelf: "center" }}
              />
              <Card.Content>
                <Text variant="titleLarge" style={styles.cardTitle}>
                  Axis Multicap Gowth Fund
                </Text>
                <Text variant="bodyMedium" style={styles.cardDesc}>
                  Lorem impsome delmonto elsondn oklsdoliston amdelo toydj
                  jojsdojf osjko.
                </Text>
                <View style={styles.cardDetailsContainer}>
                  <Text style={styles.cardDetails}>Risk</Text>
                  <Text style={styles.cardDetails}>Moderate</Text>
                </View>
                <View style={styles.cardDetailsContainer}>
                  <Text style={styles.cardDetailsValue}>Returns</Text>
                  <Text
                    style={[
                      styles.cardDetailsValue,
                      { color: "rgba(61, 193, 84, 1)" },
                    ]}
                  >
                    32.8%
                  </Text>
                </View>
                <View style={styles.buttonContainer}>
                  <Button
                    mode="contained"
                    style={[styles.buttonStyle, { backgroundColor: "white" }]}
                    labelStyle={styles.labelStyle}
                  >
                    Know More
                  </Button>
                  <Button
                    mode="contained"
                    style={[
                      styles.buttonStyle,
                      { backgroundColor: "rgba(2, 48, 71, 1)" },
                    ]}
                    labelStyle={[styles.labelStyle, { color: "white" }]}
                  >
                    Invest
                  </Button>
                </View>
              </Card.Content>
            </Card>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
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
    fontWeight: "600",
    margin: width * 0.01,
    opacity: 0.85,
  },
  AchievedPercentage: {
    color: "rgba(61, 193, 84, 1)",
    fontSize: width * 0.04,
    lineHeight: height * 0.025,
    fontWeight: "600",
    margin: width * 0.01,
  },
  amount: {
    color: "rgba(2, 48, 71, 1)",
    fontSize: width * 0.09,
    lineHeight: height * 0.055,
    fontWeight: "400",
  },
  percentOf: {
    color: "rgba(2, 48, 71, 1)",
    fontSize: width * 0.035,
    lineHeight: height * 0.025,
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
    fontWeight: "600",
    fontSize: width * 0.04,
    lineHeight: height * 0.03,
    opacity: 0.85,
  },
  fundAmount: {
    color: "rgba(2, 48, 71, 1)",
    fontWeight: "500",
    fontSize: width * 0.045,
    lineHeight: height * 0.035,
  },
  fundDetails: {
    marginTop: height * 0.02,
    borderLeftWidth: width * 0.01,
    borderLeftColor: "rgba(234, 162, 236, 1)",
    padding: width * 0.02,
  },
  fundpercentOf: {
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
    fontWeight: "500",
  },
  recommended: {
    marginTop: height * 0.07,
  },
  recommendedHeader: {
    color: "rgba(2, 48, 71, 1)",
    fontSize: width * 0.045,
    lineHeight: height * 0.035,
    fontWeight: "600",
  },
  cart: {
    flexDirection: "row",
  },
  individualCarts: {
    width: width * 0.7,
    margin: height * 0.02,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: width * 0.002,
    borderRadius: width * 0.04,
    borderColor: "rgba(0, 0, 0, 0.15)",
    paddingTop: width * 0.05,
  },
  cardTitle: {
    marginTop: height * 0.02,
    color: "rgba(2, 48, 71, 1)",
    fontSize: width * 0.045,
    lineHeight: height * 0.035,
    fontWeight: "600",
    textAlign: "center",
  },
  cardDesc: {
    marginTop: height * 0.015,
    color: "rgba(2, 48, 71, 1)",
    fontSize: width * 0.03,
    fontWeight: "500",
    textAlign: "center",
    lineHeight: height * 0.02,
    opacity: 0.6,
    marginBottom: height * 0.02,
  },
  moreDetails: {
    color: "rgba(33, 158, 188, 1)",
    fontSize: width * 0.03,
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
    fontWeight: "500",
    opacity: 0.3,
    flex: 1,
  },
  cardDetailsValue: {
    color: "rgba(73, 69, 79, 1)",
    fontSize: width * 0.03,
    lineHeight: height * 0.03,
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
    fontWeight: "500",
    textAlign: "center",
  },
});
