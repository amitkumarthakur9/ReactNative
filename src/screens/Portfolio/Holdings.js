import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import {
  TextInput,
  FontAwesome,
  Card,
  Button,
  Avatar,
} from "react-native-paper";
import { width, height } from "../../Dimension";

const Dashboardexplore = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <View style={styles.card}>
        <View style={styles.trendImage}>
          <Avatar.Image
            size={width * 0.15}
            source={require("../../../assets/icon.png")}
            style={{ alignSelf: "center" }}
          />
        </View>
        <Text style={styles.fundName}>Axis Multicap Growth Fund</Text>
        <Text style={styles.folio}>Folio No: 212229/12</Text>
        <View style={styles.boxBottomContainer}>
          <View style={styles.flexRow}>
            <Text style={styles.descHeader}>Initial Investment</Text>
            <Text style={styles.descHeader}>Current Value</Text>
          </View>
          <View style={styles.flexRow}>
            <Text style={styles.descValue}> ₹ 2,00,000.00 </Text>
            <Text style={styles.descValue}>₹ 21,000.00 </Text>
          </View>

          <View style={styles.valueContainer}>
            <View style={styles.flexRow}>
              <Text style={styles.descHeader}>Current Gain</Text>
              <Text style={styles.descHeader}>XIRR</Text>
            </View>
            <View style={styles.flexRow}>
              <Text style={styles.descValue}> ₹ 1,00.00 </Text>
              <Text
                style={[
                  styles.descValue,
                  {
                    color: "rgba(61, 193, 84, 1)",
                  },
                ]}
              >
                2.8%
              </Text>
            </View>
          </View>
        </View>
        <TouchableOpacity style={styles.ViewTransactionContainer}>
          <Text style={styles.viewTransactionText}>View Transactions</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.card}>
        <View style={styles.trendImage}>
          <Avatar.Image
            size={width * 0.15}
            source={require("../../../assets/icon.png")}
            style={{ alignSelf: "center" }}
          />
        </View>
        <Text style={styles.fundName}>Axis Multicap Growth Fund</Text>
        <Text style={styles.folio}>Folio No: 212229/12</Text>
        <View style={styles.boxBottomContainer}>
          <View style={styles.flexRow}>
            <Text style={styles.descHeader}>Initial Investment</Text>
            <Text style={styles.descHeader}>Current Value</Text>
          </View>
          <View style={styles.flexRow}>
            <Text style={styles.descValue}> ₹ 2,00,000.00 </Text>
            <Text style={styles.descValue}>₹ 21,000.00 </Text>
          </View>

          <View style={styles.valueContainer}>
            <View style={styles.flexRow}>
              <Text style={styles.descHeader}>Current Gain</Text>
              <Text style={styles.descHeader}>XIRR</Text>
            </View>
            <View style={styles.flexRow}>
              <Text style={styles.descValue}> ₹ 1,00.00 </Text>
              <Text
                style={[
                  styles.descValue,
                  {
                    color: "rgba(61, 193, 84, 1)",
                  },
                ]}
              >
                2.8%
              </Text>
            </View>
          </View>
        </View>
        <TouchableOpacity style={styles.ViewTransactionContainer}>
          <Text style={styles.viewTransactionText}>View Transactions</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  contentStyle: {
    marginLeft: width * 0.02,
  },
  NfoContainer: {
    marginTop: height * 0.07,
    marginBottom: height * 0.02,
  },
  TrendingSchemes: {
    marginTop: height * 0.05,
    marginBottom: height * 0.02,
  },
  flexRow: {
    flexDirection: "row",
  },
  leftContent: {
    textAlign: "left",
    color: "rgba(33, 0, 93, 1)",
    fontWeight: "600",
    fontSize: width * 0.045,
    width: "50%",
    flex: 1,
  },
  rightContent: {
    textAlign: "right",
    color: "rgba(0, 0, 0, 1)",
    fontWeight: "500",
    fontSize: width * 0.035,
    opacity: 0.4,
    width: "50%",
    flex: 1,
  },
  trendImage: {
    flex: 1,
  },
  percentage: {
    color: "rgba(251, 133, 0, 1)",
    fontWeight: "600",
    fontSize: width * 0.035,
    lineHeight: height * 0.03,
    textAlign: "right",
  },
  desc: {
    color: "rgba(0, 0, 0, 1)",
    fontWeight: "500",
    fontSize: width * 0.03,
    lineHeight: height * 0.02,
    opacity: 0.3,
    textAlign: "right",
  },
  card: {
    padding: width * 0.05,
    marginTop: height * 0.03,
    borderWidth: width * 0.002,
    borderRadius: width * 0.035,
    borderColor: "rgba(2, 48, 71, 0.2)",
    backgroundColor: "rgba(255, 255, 255, 1)",
    flex: 1,
  },
  fundName: {
    color: "rgba(2, 48, 71, 1)",
    fontWeight: "600",
    fontSize: width * 0.045,
    lineHeight: height * 0.03,
    marginTop: height * 0.015,
    textAlign: "center",
  },
  flexContent: {
    width: "50%",
    flex: 1,
  },
  starNumber: {
    color: "rgba(2, 48, 71, 1)",
    fontSize: width * 0.03,
    fontWeight: "500",
    lineHeight: height * 0.02,
    opacity: 0.8,
    marginRight: width * 0.01,
  },
  star: {
    color: "rgba(255, 195, 0, 1)",
  },
  type: {
    color: "rgba(2, 48, 71, 1)",
    fontSize: width * 0.03,
    lineHeight: height * 0.02,
    fontWeight: "500",
    opacity: 0.5,
  },
  folio: {
    color: "rgba(2, 48, 71, 1)",
    fontSize: width * 0.034,
    lineHeight: height * 0.02,
    fontWeight: "600",
    opacity: 0.6,
    textAlign: "center",
    marginTop: height * 0.008,
  },
  topImage: {
    width: width * 0.9,
    height: height * 0.065,
    justifyContent: "center",
  },
  trendCardContainer: {
    borderWidth: width * 0.002,
    borderColor: "rgb(204, 204, 204)",
    borderBottomLeftRadius: width * 0.05,
    borderBottomRightRadius: width * 0.05,
    backgroundColor: "white",
    padding: width * 0.03,
  },
  trendingSchemesContainer: {
    marginBottom: width * 0.05,
  },
  flexItem: {
    margin: width * 0.04,
  },
  trendingFundName: {
    color: "rgba(255, 255, 255, 1)",
    fontWeight: "600",
    fontSize: width * 0.035,
  },
  cagr: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: width * 0.035,
    lineHeight: height * 0.025,
    fontWeight: "500",
    opacity: 0.3,
  },
  Cagrpercentage: {
    fontSize: width * 0.04,
    color: "rgba(61, 193, 84, 1)",
    fontWeight: "600",
    lineHeight: height * 0.03,
  },
  cagrContainer: {
    width: width * 0.3,
    borderWidth: width * 0.001,
    borderColor: "rgba(255, 195, 0, 1)",
    padding: width * 0.015,
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
  benchmarkContainer: {
    width: width,
    borderWidth: width * 0.001,
    borderColor: "rgba(255, 195, 0, 1)",
    padding: width * 0.015,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    borderRightWidth: 0,
    flex: 1,
    alignItems: "flex-start",
  },
  benchmarkReturn: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: width * 0.035,
    lineHeight: height * 0.025,
    fontWeight: "500",
    opacity: 0.3,
    marginLeft: width * 0.03,
  },
  benchmarkPercentage: {
    color: "rgba(73, 69, 79, 1)",
    fontWeight: "600",
    fontSize: width * 0.04,
    lineHeight: height * 0.03,
    marginLeft: width * 0.02,
  },
  risk: {
    textAlign: "center",
    padding: width * 0.05,
    color: "rgba(0, 0, 0, 1)",
    fontSize: width * 0.035,
    lineHeight: height * 0.025,
    fontWeight: "500",
    opacity: 0.5,
  },
  riskContainer: {
    flexDirection: "row",
  },
  speedIcon: {
    margin: width * 0.04,
    fontSize: width * 0.06,
    color: "red",
  },
  riskText: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: width * 0.035,
    fontWeight: "500",
    opacity: 0.6,
    lineHeight: height * 0.025,
  },
  Button: {
    backgroundColor: "white",
    padding: width * 0.025,
    borderRadius: width * 0.02,
    borderWidth: width * 0.002,
    borderColor: "rgb(204, 204, 204)",
    margin: width * 0.02,
    width: width * 0.38,
    alignItems: "center",
  },
  AddToCart: {
    color: "rgba(33, 158, 188, 1)",
    fontSize: width * 0.035,
    fontWeight: "500",
  },
  invest: {
    color: "white",
    fontSize: width * 0.037,
    fontWeight: "700",
  },

  boxBottomContainer: {
    marginTop: height * 0.05,
  },
  descHeader: {
    color: "rgba(0, 0, 0, 1)",
    lineHeight: height * 0.03,
    fontSize: width * 0.035,
    fontWeight: "500",
    opacity: 0.3,
    flex: 1,
    textAlign: "center",
  },
  descValue: {
    color: "rgba(73, 69, 79, 1)",
    lineHeight: height * 0.025,
    fontSize: width * 0.035,
    fontWeight: "600",
    flex: 1,
    textAlign: "center",
  },
  valueContainer: {
    marginTop: height * 0.025,
  },
  ViewTransactionContainer: {
    alignItems: "center",
    padding: width * 0.035,
    borderWidth: width * 0.002,
    borderRadius: width * 0.03,
    borderColor: "rgba(207, 208, 205, 1)",
    marginTop: height * 0.04,
  },
  viewTransactionText: {
    color: "rgba(33, 158, 188, 1)",
    fontWeight: "600",
    fontSize: width * 0.04,
  },
});

export default Dashboardexplore;