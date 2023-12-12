import React, { useState, useEffect } from "react";
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
import { Avatar, Card, IconButton } from "react-native-paper";
import { NforenderItem, SchemesrenderItem } from "./Explore";
import DashboardData, { Thematicbasket, Session, SessionEnd } from "./Data";
import usePortfolioData from "../Portfolio/Useportfoliodata";
import Loader from "../Components/Loader";
import formatNumberWithCommas from "../Components/Inrconverter";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Userlogin } from "../../api/services/endpoints/userEndpoints";
import { UserDetails } from "../Components/Data";

const Home = ({ navigation }) => {
  const { trendingschemes, trendingNfo } = DashboardData();
  const { allPortfolioData } = usePortfolioData();
  const { basketData } = Thematicbasket();
  const { session } = Session();
  const userData = UserDetails();
  const [image, setImage] = useState(null);

  console.log("user details amit", userData);

  const handleLogout = () => {
    if (session === false && logout) {
      navigation.push("Signup");
    }
  };

  useEffect(() => {
    if (
      userData !== null &&
      typeof userData === "object" &&
      userData.hasOwnProperty("profilepic")
    ) {
      setImage("https://data.fundexpert.in/profilepic/" + userData.profilepic);
    }
  }, [userData]);

  //   Userlogin();
  return (
    <View style={styles.container}>
      <Backgroundimage Headerheight={0.29} />
      <View style={styles.contentContainer}>
        <View style={styles.flexRow}>
          {/* <Avatar.Image
					  size={width * 0.1}
					  {image?uri:():source={require("../../../assets/upload/Avatar.png")}}
            
          />
				   */}
          <Avatar.Image
            size={width * 0.1}
            source={
              image
                ? { uri: image }
                : require("../../../assets/upload/Avatar.png")
            }
            style={{ backgroundColor: "white" }}
          />
          <Text style={styles.name}>
            Hello {userData ? userData.firstName : "Guest"} !
          </Text>
          <View
            style={[
              styles.flexRow,
              {
                flex: 1,
                alignSelf: "center",
              },
            ]}
          >
            <TouchableOpacity
              onPress={() => navigation.push("Searchbox")}
              style={styles.headerIcon}
            >
              <EvilIcons name="search" size={width * 0.07} color="white" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.headerIcon}>
              <Ionicons
                name="notifications-outline"
                size={width * 0.06}
                color="white"
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.headerIcon} onPress={handleLogout}>
              <MaterialCommunityIcons
                name="logout"
                size={width * 0.06}
                color="white"
              />
            </TouchableOpacity>
          </View>
        </View>
        {allPortfolioData == "showLoader" ? (
          <>
            <TouchableOpacity style={styles.cart} activeOpacity={0.5}>
              <View style={styles.individualCarts}>
                <ImageBackground
                  source={require("../../../assets/dashboard/rectengal.png")}
                  style={styles.rec1}
                >
                  <Image
                    source={require("../../../assets/Goal/rectengal2.png")}
                    style={styles.rectengal2}
                  />
                  <Loader />
                </ImageBackground>
              </View>
            </TouchableOpacity>
          </>
        ) : allPortfolioData == "showZeroValue" ? (
          <>
            <TouchableOpacity style={styles.cart} activeOpacity={0.5}>
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
                        Complete Portfolio Value
                      </Text>
                      <Text style={styles.desc}>₹ 0</Text>
                    </View>
                    <View style={styles.boxBottomContainer}>
                      <View style={styles.flexRow}>
                        <Text style={styles.descHeader}>
                          Initial Investment
                        </Text>
                        <Text style={styles.descHeader}>Returns</Text>
                      </View>
                      <View style={styles.flexRow}>
                        <Text style={styles.descValue}>₹ 0</Text>
                        <Text
                          style={[
                            styles.descValue,
                            {
                              color: "rgba(61, 193, 84, 1)",
                              textAlign: "right",
                            },
                          ]}
                        >
                          {" "}
                          0{"%"}
                        </Text>
                        <TouchableOpacity style={styles.investNow}>
                          <Text style={styles.investNowText}>Invest Now</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </ImageBackground>
              </View>
            </TouchableOpacity>
          </>
        ) : (
          <>
            <TouchableOpacity
              style={styles.cart}
              activeOpacity={0.5}
              onPress={() => navigation.push("Portfolio")}
            >
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
                        Complete Portfolio Value
                      </Text>
                      <Text style={styles.desc}>
                        ₹{" "}
                        {formatNumberWithCommas(
                          Math.round(allPortfolioData.currValue)
                        )}
                      </Text>
                    </View>
                    <View style={styles.boxBottomContainer}>
                      <View style={styles.flexRow}>
                        <Text style={styles.descHeader}>
                          Initial Investment
                        </Text>
                        <Text style={styles.descHeader}>Returns</Text>
                      </View>
                      <View style={styles.flexRow}>
                        <Text style={styles.descValue}>
                          ₹{" "}
                          {formatNumberWithCommas(
                            Math.round(allPortfolioData.cost)
                          )}{" "}
                        </Text>
                        <Text
                          style={[
                            styles.descValue,
                            {
                              color: "rgba(61, 193, 84, 1)",
                              textAlign: "right",
                            },
                          ]}
                        >
                          {" "}
                          {allPortfolioData.absRet
                            ? `${parseFloat(allPortfolioData.absRet).toFixed(
                                2
                              )}`
                            : "N/A"}
                          {"%"}
                        </Text>
                        <TouchableOpacity style={styles.investNow}>
                          <Text style={styles.investNowText}>Invest Now</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </ImageBackground>
              </View>
            </TouchableOpacity>
          </>
        )}

        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.fundContainer}>
            {/* <View style={[styles.flexRow, { marginBottom: height * 0.02 }]}>
              <Text style={styles.leftContent}>Suggested for you</Text>
              <Text style={styles.rightContent}>View all</Text>
            </View>
            <View style={styles.flexRow}>
              <Image
                source={require("../../../assets/dashboard/ad1.png")}
                style={styles.adSliderImage}
              />
            </View> */}
            <View
              style={[
                styles.flexRow,
                { marginTop: height * 0.03, marginBottom: height * 0.03 },
              ]}
            >
              <Text style={styles.leftContent}>Trending NFOs </Text>
              <Text style={styles.rightContent}>View all</Text>
            </View>
            <ScrollView horizontal>
              {trendingNfo ? <NforenderItem nfo={trendingNfo} /> : <Loader />}
            </ScrollView>
            <View
              style={[
                styles.flexRow,
                { marginTop: height * 0.03, marginBottom: height * 0.03 },
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
            <View
              style={[
                styles.flexRow,
                { marginTop: height * 0.04, marginBottom: height * 0.03 },
              ]}
            >
              <Text style={styles.leftContent}>Investment Basket </Text>
              <Text style={styles.rightContent}></Text>
            </View>
            <View style={styles.flexRow}>
              {basketData.length > 0 ? (
                basketData.map((item, key) => (
                  <Card style={styles.flexitem} key={key}>
                    <Card.Content>
                      <Image
                        source={require("../../../assets/icon.png")}
                        style={{
                          width: width * 0.2,
                          height: width * 0.2,
                        }}
                      />
                      <Text variant="titleLarge" style={styles.basketName}>
                        {item.basketName}
                      </Text>
                    </Card.Content>
                  </Card>
                ))
              ) : (
                <Loader />
              )}
            </View>
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
    flex: 2,
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
  flexitem: {
    flex: 1,
    marginRight: width * 0.04,
    margin: width * 0.01,
    backgroundColor: "white",
    alignItems: "center",
  },
  basketName: {
    fontSize: width * 0.035,
    lineHeight: height * 0.028,
    fontWeight: "500",
  },
  basketRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: height * 0.02,
  },
  headerIcon: {
    flex: 1,
  },
});

export default Home;
