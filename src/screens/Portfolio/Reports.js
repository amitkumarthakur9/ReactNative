import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { width, height } from "../../Dimension";

const Reports = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
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
                  <Text style={styles.descHeader}>Initial Investment</Text>
                  <Text style={styles.descHeader}>Returns</Text>
                </View>
                <View style={styles.flexRow}>
                  <Text style={styles.descValue}> ₹ 2,00,000.00 </Text>
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
                    <Text style={styles.descHeader}>One Day Gain</Text>
                    <Text style={styles.descHeader}>One Day Return</Text>
                  </View>
                  <View style={styles.flexRow}>
                    <Text style={styles.descValue}> ₹ 2,00.00 </Text>
                    <Text
                      style={[
                        styles.descValue,
                        {
                          color: "rgba(61, 193, 84, 1)",
                        },
                      ]}
                    >
                      0.28%
                    </Text>
                  </View>
                </View>

                <View style={styles.valueContainer}>
                  <View style={styles.flexRow}>
                    <Text style={styles.descHeader}>Current Gain</Text>
                    <Text style={styles.descHeader}>XIRR</Text>
                  </View>
                  <View style={styles.flexRow}>
                    <Text style={styles.descValue}> ₹ 59,00.00 </Text>
                    <Text
                      style={[
                        styles.descValue,
                        {
                          color: "rgba(61, 193, 84, 1)",
                        },
                      ]}
                    >
                      12.8%
                    </Text>
                  </View>
                </View>

                <View style={styles.valueContainer}>
                  <View style={styles.flexRow}>
                    <Text style={styles.descHeader}>SIP - Total</Text>
                    <Text style={styles.descHeader}>SIP Amount</Text>
                  </View>
                  <View style={styles.flexRow}>
                    <Text style={styles.descValue}> 1 </Text>
                    <Text
                      style={[
                        styles.descValue,
                        {
                          color: "black",
                        },
                      ]}
                    >
                      ₹ 5,000
                    </Text>
                  </View>
                </View>
                <TouchableOpacity style={styles.downloadReportsContainer}>
                  <Text style={styles.downloadReportsText}>
                    Download Reports
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </ImageBackground>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
  cart: {
    marginTop: height * 0.02,
  },
  rec1: {
    height: height * 0.6,
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
    marginTop: height * 0.05,
  },
  investmentContainer: {
    position: "absolute",
    width: width,
    marginLeft: width * 0.1,
    marginTop: height * 0.015,
  },
  flexRow: {
    flexDirection: "row",
  },
  rectengal2: {
    position: "absolute",
    height: height * 0.18,
    resizeMode: "contain",
    right: -width * 0.11,
    top: -height * 0.016,
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
  valueContainer: {
    marginTop: height * 0.025,
  },
  downloadReportsContainer: {
    alignItems: "center",
    padding: width * 0.035,
    borderWidth: width * 0.002,
    borderRadius: width * 0.03,
    borderColor: "rgba(207, 208, 205, 1)",
    marginTop: height * 0.04,
    width: width * 0.7,
  },
  downloadReportsText: {
    color: "rgba(33, 158, 188, 1)",
    fontWeight: "600",
    fontSize: width * 0.04,
  },
});

export default Reports;
