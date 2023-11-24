import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Image,
} from "react-native";
import Backgroundimage from "../Components/Backgroundimage";
import { height, width } from "../../Dimension";
import { Ionicons, EvilIcons } from "@expo/vector-icons";
import { Avatar } from "react-native-paper";
import { NforenderItem, SchemesrenderItem } from "./Explore";
import DashboardData from "./Data";

const Home = ({ navigation }) => {
  const { trendingschemes, trendingNfo } = DashboardData();
  return (
    <View style={styles.container}>
      <Backgroundimage Headerheight={0.29} />
      <View style={styles.contentContainer}>
        <View style={styles.flexRow}>
          <Avatar.Image
            size={width * 0.1}
            source={require("../../../assets/upload/Avatar.png")}
          />
          <Text style={styles.name}>Hello Sumesh !</Text>
          <View style={[styles.flexRow, { flex: 1, alignSelf: "center" }]}>
            <TouchableOpacity
              style={{ marginLeft: width * 0.03 }}
              onPress={() => navigation.push("Searchbox")}
            >
              <EvilIcons name="search" size={width * 0.07} color="white" />
            </TouchableOpacity>
            <TouchableOpacity style={{ marginLeft: width * 0.03 }}>
              <Ionicons
                name="notifications-outline"
                size={width * 0.06}
                color="white"
              />
            </TouchableOpacity>
          </View>
        </View>
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
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.fundContainer}>
            <View style={[styles.flexRow, { marginBottom: height * 0.02 }]}>
              <Text style={styles.leftContent}>Suggested for you</Text>
              <Text style={styles.rightContent}>View all</Text>
            </View>
            <View style={styles.flexRow}>
              <Image
                source={require("../../../assets/dashboard/ad1.png")}
                style={styles.adSliderImage}
              />
            </View>
            {/* <View
              style={[
                styles.flexRow,
                { marginTop: height * 0.04, marginBottom: height * 0.02 },
              ]}
            >
              <Text style={styles.leftContent}>Investment Baskets</Text>
              <Text style={styles.rightContent}>View all</Text>
            </View> */}
            <View
              style={[
                styles.flexRow,
                { marginTop: height * 0.04, marginBottom: height * 0.02 },
              ]}
            >
              <Text style={styles.leftContent}>Trending NFO’s </Text>
              <Text style={styles.rightContent}>View all</Text>
            </View>
            <ScrollView horizontal>
              {trendingNfo ? <NforenderItem nfo={trendingNfo} /> : <Loader />}
            </ScrollView>
            <View
              style={[
                styles.flexRow,
                { marginTop: height * 0.04, marginBottom: height * 0.02 },
              ]}
            >
              <Text style={styles.leftContent}>Trending Schemes </Text>
              <Text style={styles.rightContent}>View all</Text>
            </View>
            <ScrollView horizontal>
              {trendingschemes ? (
                <SchemesrenderItem schemes={trendingschemes} />
              ) : (
                <Loader />
              )}
            </ScrollView>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  bodyContainer: {},
  flexRow: {
    flexDirection: "row",
  },
  contentContainer: {
    marginTop: -height * 0.2,
    padding: width * 0.04,
    flex: 1,
  },
  name: {
    color: "rgba(255, 255, 255, 1)",
    lineHeight: height * 0.03,
    fontSize: width * 0.06,
    fontWeight: "700",
    flex: 3,
    marginLeft: width * 0.05,
    alignSelf: "center",
  },
  cart: {
    // flexDirection: "column",
  },
  individualCarts: {
    marginTop: height * 0.03,
    // backgroundColor: "red",
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
  rectengal2: {
    position: "absolute",
    height: height * 0.18,
    resizeMode: "contain",
    right: -width * 0.11,
    top: -height * 0.027,
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
    marginTop: height * 0.015,
    // backgroundColor: "red",
  },
  leftContent: {
    textAlign: "left",
    color: "rgba(33, 0, 93, 1)",
    fontWeight: "600",
    fontSize: width * 0.045,
    flex: 1,
  },
  rightContent: {
    textAlign: "right",
    color: "rgba(0, 0, 0, 1)",
    fontWeight: "500",
    fontSize: width * 0.035,
    opacity: 0.4,
    flex: 1,
  },
  adSliderImage: {
    resizeMode: "contain",
    width: width * 0.9,
    height: height * 0.2,
  },
});

export default Home;
