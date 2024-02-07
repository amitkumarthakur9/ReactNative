import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Avatar } from "react-native-paper";
import { width, height } from "../../Dimension";
import { Userlogin } from "../../api/services/endpoints/userEndpoints";

const Dashboardhome = () => {
  //   useEffect(() => {
  //     Userlogin()
  //       .then((response) => {
  //         // console.log(response.data);
  //       })
  //       .catch((error) => {
  //         console.warn("login failed:", error);
  //       });
  //   }, []);

  return (
    <View style={styles.container}>
      <View style={styles.cart}>
        <View style={styles.individualCarts}>
          <ImageBackground
            source={require("../../../assets/dashboard/rectengal.png")}
            style={styles.rec1}
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
                        textAlign: "right",
                      },
                    ]}
                  >
                    32.8%
                  </Text>
                  <TouchableOpacity style={styles.investNow}>
                    <Text style={styles.investNowText}>Invest Now</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </ImageBackground>
        </View>
      </View>
      <View style={styles.fundContainer}>
        <View style={[styles.flexRow, { marginBottom: height * 0.02 }]}>
          <Text style={styles.leftContent}>Suggested for you</Text>
          {/* <Text style={styles.rightContent}>View all</Text> */}
        </View>
        <View style={styles.flexRow}>
          <Image
            source={require("../../../assets/dashboard/ad1.png")}
            style={styles.adSliderImage}
          />
        </View>
        <View style={[styles.flexRow, { marginTop: height * 0.04 }]}>
          <Text style={styles.leftContent}>Investment Baskets</Text>
          {/* <Text style={styles.rightContent}>View all</Text> */}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    zIndex: 1,
  },
  cart: {
    flexDirection: "column",
  },
  individualCarts: {
    margin: height * 0.01,
  },
  rec1: {
    height: height * 0.22,
    resizeMode: "contain",
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
    width: width * 0.8,
    marginLeft: width * 0.08,
  },
  investmentHeader: {
    color: "rgba(2, 48, 71, 1)",
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
    right: -width * 0.11,
    top: -height * 0.03,
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
  fundContainer: {
    padding: width * 0.06,
    marginTop: -height * 0.015,
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
  adSliderImage: {
    resizeMode: "contain",
    width: width * 0.9,
    height: height * 0.2,
  },
});

export default Dashboardhome;
