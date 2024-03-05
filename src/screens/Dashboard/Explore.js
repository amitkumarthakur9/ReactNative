import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import {
  TextInput,
  FontAwesome,
  Card,
  Button,
  Avatar,
  Badge,
} from "react-native-paper";
import { width, height } from "../../Dimension";
import { Foundation, SimpleLineIcons } from "@expo/vector-icons";
import Formatfundname from "../Components/Formatfundname";
import Backgroundimage from "../Components/Backgroundimage";
import { Ionicons, Feather } from "@expo/vector-icons";
import Loader from "../Components/Loader";
import RenderStars from "../Components/Star";
import DashboardData, { addToCart } from "./Data";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";
import { incrementToCart } from "../../redux/slices/cart/Index";
import { useFonts } from "expo-font";

const handleInvest = (mfId, navigation, trendType) => {
  navigation.navigate("Assetpreview", { mfId, trendType });
};

export const addToCarts = (
  mutualfundId,
  minPurchase,
  folioNumber,
  dispatch
) => {
  return new Promise((resolve, reject) => {
    const folioNumbers = folioNumber || "";
    const data = {
      monthly: 0,
      action: "addToCartMfuMultiple",
      "basket[0][mutualFundId]": mutualfundId,
      "basket[0][amount]": minPurchase,
      "basket[0][frequency]": "",
      "basket[0][startDate]": "Invalid date",
      "basket[0][noOfMonths]": 0,
      "basket[0][folioNumberString]": folioNumbers,
      folioNumberString: folioNumbers,
    };
    addToCart(data)
      .then((response) => {
        if (response === true) {
          resolve(true);
        } else {
          resolve(false);
        }
        if (response === true && dispatch != null) {
          dispatch(incrementToCart());
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const addToCartSip = (
  mutualfundId,
  minPurchase,
  folioNumber,
  Sdate,
  Months
) => {
  return new Promise((resolve, reject) => {
    const folioNumbers = folioNumber || "";
    const data = {
      monthly: 1,
      action: "addToCartMfuMultiple",
      "basket[0][mutualFundId]": mutualfundId,
      "basket[0][amount]": minPurchase,
      "basket[0][frequency]": "M",
      "basket[0][startDate]": Sdate,
      "basket[0][noOfMonths]": Months,
      "basket[0][folioNumberString]": folioNumbers,
      folioNumberString: folioNumbers,
    };

    addToCart(data)
      .then((response) => {
        if (response === true) {
          resolve(true);
        } else {
          resolve(false);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const SchemesrenderItem = (props) => {
  const navigation = useNavigation();

  const dispatch = useDispatch();
  const [fontsLoaded] = useFonts({
    "Inter-Black": require("../../../assets/fonts/metropolis-latin-500-normal.ttf"),
  });

  return (
    <>
      {props.schemes.map((item, key) => (
        <View style={styles.trendingSchemesContainer} key={key}>
          <ImageBackground
            source={require("../../../assets/dashboard/topImage.png")}
            style={styles.topImage}
            resizeMode="stretch"
          >
            <View style={styles.flexRow}>
              <View style={styles.flexItem}>
                <Image
                  style={{
                    width: width * 0.14,
                    height: width * 0.1,
                  }}
                  source={{
                    uri: item.fundHouse.logoUrl,
                  }}
                  resizeMode="contain"
                />
              </View>
              <View style={[styles.flexItem, { justifyContent: "center" }]}>
                <Text style={styles.trendingFundName}>
                  {Formatfundname(item.name)}
                </Text>
              </View>
            </View>
          </ImageBackground>
          <View style={styles.trendCardContainer}>
            <View style={[styles.flexRow]}>
              <View style={styles.cagrContainer}>
                <Text style={styles.cagr}>1Y Return</Text>
                <Text style={styles.Cagrpercentage}>
                  {item.oneYearReturn
                    ? parseFloat(item.oneYearReturn).toFixed(2) + "%"
                    : "N/A"}
                </Text>
              </View>
              <View style={styles.cagrContainer}>
                <Text style={styles.cagr}>3Y Return</Text>
                <Text style={styles.Cagrpercentage}>
                  {item.threeYearReturns
                    ? parseFloat(item.threeYearReturns).toFixed(2) + "%"
                    : "N/A"}
                </Text>
              </View>
              <View style={styles.benchmarkContainer}>
                <Text style={styles.cagr}>5Y Return</Text>
                <Text style={styles.Cagrpercentage}>
                  {item.fiveYearReturns
                    ? parseFloat(item.fiveYearReturns).toFixed(2) + "%"
                    : "N/A"}
                </Text>
              </View>
            </View>
            <View style={[styles.flexRow, { alignSelf: "center" }]}>
              {RenderStars(item.rating)}
            </View>
            <View style={styles.flexRow}>
              <TouchableOpacity
                style={styles.Button}
                onPress={() =>
                  addToCarts(item.id, item.minPurchase, null, dispatch)
                }
              >
                <Text style={styles.AddToCart}>Add To Cart</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.Button,
                  { backgroundColor: "rgba(33, 158, 188, 1)" },
                ]}
                onPress={() => handleInvest(item.id, navigation, "schemes")}
              >
                <Text style={styles.invest}>Invest</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      ))}
    </>
  );
};

export const NforenderItem = (props) => {
  const navigation = useNavigation();
  const [fontsLoaded] = useFonts({
    "Inter-Black": require("../../../assets/fonts/metropolis-latin-500-normal.ttf"),
  });
  return (
    <>
      {props.nfo.map((item, key) => (
        <TouchableOpacity
          style={styles.flexRow}
          key={key}
          onPress={() => handleInvest(item.id, navigation, "nfo")}
        >
          <View style={styles.card}>
            <View style={styles.flexRow}>
              <View style={styles.trendImage}>
                <Image
                  style={{ width: width * 0.14, height: width * 0.14 }}
                  source={{
                    uri: item.fundHouse.logoUrl,
                  }}
                  resizeMode="contain"
                />
              </View>
              <Text style={[styles.fundName, { flex: 2 }]}>
                {Formatfundname(item.name)}
              </Text>
            </View>

            <View style={styles.flexRow}>
              <View style={styles.trendImage}></View>
              <Text style={[styles.type, { flex: 2 }]}>
                {item.schemeType} {item.type ? "-" + item.type : ""}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </>
  );
};

const Explore = () => {
  const { trendingschemes, trendingNfo } = DashboardData();
  const Cartcount = useSelector((state) => state.cart.count);
  const navigation = useNavigation();
  const [fontsLoaded] = useFonts({
    "Inter-Black": require("../../../assets/fonts/metropolis-latin-500-normal.ttf"),
  });
  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <Backgroundimage Headerheight={0.29} />
      <View style={styles.headerContainer}>
        <View style={styles.flexRow}>
          <Avatar.Image
            size={width * 0.1}
            source={require("../../../assets/upload/Avatar.png")}
          />
          <Text style={styles.name}>Explore Funds </Text>
          <View style={[styles.flexRow, { flex: 1, alignSelf: "center" }]}>
            <TouchableOpacity
              style={styles.headerIcon}
              //   onPress={() => navigation.push("AddToCart")}
            >
              {/* <Feather name="shopping-cart" size={width * 0.06} color="white" />
              <Badge
                style={{
                  position: "absolute",
                  top: -height * 0.015,
                  backgroundColor: "rgba(33, 158, 188, 1)",
                  fontFamily: "Inter-Black",
                  fontWeight: "600",
                }}
              >
                {Cartcount}
              </Badge> */}
            </TouchableOpacity>
            {/* <TouchableOpacity style={styles.headerIcon}>
              <Ionicons
                name="notifications-outline"
                size={width * 0.06}
                color="white"
              />
            </TouchableOpacity> */}
            <TouchableOpacity style={styles.headerIcon}>
              <MaterialCommunityIcons
                name="logout"
                size={width * 0.06}
                color="white"
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.contentContainer}>
          <TextInput
            mode="outlined"
            style={styles.searchInput}
            placeholder="Search"
            outlineStyle={{
              borderRadius: width * 0.06,
              borderColor: "white",
            }}
            // right={<TextInput.Icon icon="microphone" />}
            contentStyle={styles.contentStyle}
            onFocus={(e) => navigation.push("Searchbox")}
          />
        </View>
      </View>
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.NfoContainer}>
            <View style={styles.flexRow}>
              <Text style={styles.leftContent}>Trending NFOs</Text>
              {/* <Text style={styles.rightContent}>View all</Text> */}
            </View>
          </View>
          <View>
            <ScrollView horizontal>
              {trendingNfo ? <NforenderItem nfo={trendingNfo} /> : <Loader />}
            </ScrollView>
          </View>
          <View style={styles.TrendingSchemes}>
            <View style={styles.flexRow}>
              <Text style={styles.leftContent}>Trending Schemes</Text>
              {/* <Text style={styles.rightContent}>View all</Text> */}
            </View>
          </View>
          <View>
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
    padding: width * 0.04,
    backgroundColor: "white",
    marginTop: height * 0.04,
    flex: 1,
  },
  headerContainer: {
    marginTop: -height * 0.2,
    padding: width * 0.04,
  },
  searchInput: {
    height: height * 0.05,
    marginTop: height * 0.03,
  },
  contentStyle: {
    marginLeft: width * 0.02,
  },
  NfoContainer: {
    // marginTop: height * 0.07,
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
    fontFamily: "Inter-Black",
    fontWeight: "600",
    fontSize: width * 0.045,
    width: "50%",
    flex: 1,
  },
  rightContent: {
    textAlign: "right",
    color: "rgba(0, 0, 0, 1)",
    fontFamily: "Inter-Black",
    fontWeight: "500",
    fontSize: width * 0.035,
    opacity: 0.4,
    width: "50%",
    flex: 1,
  },
  trendImage: {
    flex: 1,
    justifyContent: "center",
  },
  percentage: {
    color: "rgba(251, 133, 0, 1)",
    fontFamily: "Inter-Black",
    fontWeight: "600",
    fontSize: width * 0.035,
    lineHeight: height * 0.03,
    textAlign: "right",
  },
  desc: {
    color: "rgba(0, 0, 0, 1)",
    fontFamily: "Inter-Black",
    fontWeight: "500",
    fontSize: width * 0.03,
    lineHeight: height * 0.02,
    opacity: 0.3,
    textAlign: "right",
  },
  card: {
    width: width * 0.64,
    backgroundColor: "white",
    marginRight: width * 0.04,
    borderWidth: width * 0.002,
    borderColor: "rgb(204, 204, 204)",
    borderRadius: width * 0.05,
    backgroundColor: "white",
    padding: width * 0.03,
    paddingBottom: 0,
  },
  fundName: {
    color: "rgba(2, 48, 71, 1)",
    fontFamily: "Inter-Black",
    fontWeight: "600",
    fontSize: width * 0.04,
    lineHeight: height * 0.03,
    textAlign: "justify",
    // marginTop: height * 0.015,
  },
  flexContent: {
    width: "50%",
    flex: 1,
  },
  starNumber: {
    color: "rgba(2, 48, 71, 1)",
    fontSize: width * 0.03,
    fontFamily: "Inter-Black",
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
    lineHeight: height * 0.06,
    fontFamily: "Inter-Black",
    fontWeight: "500",
    opacity: 0.5,
  },
  topImage: {
    // width: width * 0.9,
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
    width: width * 0.8,
    marginRight: width * 0.04,
  },
  flexItem: {
    marginLeft: width * 0.04,
  },
  trendingFundName: {
    color: "rgba(255, 255, 255, 1)",
    fontFamily: "Inter-Black",
    fontWeight: "600",
    fontSize: width * 0.035,
  },
  cagr: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: width * 0.035,
    lineHeight: height * 0.025,
    fontFamily: "Inter-Black",
    fontWeight: "500",
    opacity: 0.3,
  },
  Cagrpercentage: {
    fontSize: width * 0.04,
    color: "rgba(61, 193, 84, 1)",
    fontFamily: "Inter-Black",
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
    flex: 1,
    alignItems: "center",
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
    alignItems: "center",
  },
  benchmarkReturn: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: width * 0.035,
    lineHeight: height * 0.025,
    fontFamily: "Inter-Black",
    fontWeight: "500",
    opacity: 0.3,
    marginLeft: width * 0.03,
  },
  benchmarkPercentage: {
    color: "rgba(73, 69, 79, 1)",
    fontFamily: "Inter-Black",
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
    fontFamily: "Inter-Black",
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
    fontFamily: "Inter-Black",
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
    // width: width * 0.38,
    alignItems: "center",
    flex: 1,
  },
  AddToCart: {
    color: "rgba(33, 158, 188, 1)",
    fontSize: width * 0.035,
    fontFamily: "Inter-Black",
    fontWeight: "500",
  },
  invest: {
    color: "white",
    fontSize: width * 0.037,
    fontFamily: "Inter-Black",
    fontWeight: "700",
  },
  paginationContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: height * 0.02,
  },
  paginationDot: {
    width: width * 0.02,
    height: width * 0.02,
    borderRadius: width * 0.01,
    marginHorizontal: width * 0.01,
  },
  name: {
    color: "rgba(255, 255, 255, 1)",
    lineHeight: height * 0.03,
    fontSize: width * 0.06,
    fontFamily: "Inter-Black",
    fontWeight: "700",
    flex: 2,
    marginLeft: width * 0.05,
    alignSelf: "center",
  },
  headerIcon: {
    flex: 1,
  },
});

export default Explore;
