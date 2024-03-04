import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import Bgiheader from "../Components/Bgiheader";
import { height, width } from "../../Dimension";
import {
  TextInput,
  FontAwesome,
  Card,
  Button,
  Avatar,
} from "react-native-paper";
import { searchFund } from "../../api/services/endpoints/exploreEndpoints";
import { Foundation, SimpleLineIcons } from "@expo/vector-icons";
import Formatfundname from "../Components/Formatfundname";
import RenderStars from "../Components/Star";
import { useFonts } from "expo-font";
import Header from "../Components/Header";
import { Orders } from "../../api/services/endpoints/buyEndpoints";
import Formatdate from "../Components/Formatdate";
import Loader from "../Components/Loader";
import Inappbrowser from "../Components/Inappbrowser";
import Mbottommenu from "../Components/Mbottommenu";

export default Index = ({ navigation }) => {
  const [orderData, setOrderData] = useState(null);

  useEffect(() => {
    Orders()
      .then((response) => {
        setOrderData(response.data);
        // console.log(JSON.stringify(response.data.success));
      })
      .catch((e) => {
        console.warn(e);
      });
  }, []);

  const handleInvest = (mfId) => {
    const trendType = "schemes";
    navigation.navigate("Assetpreview", { mfId, trendType });
  };

  const [fontsLoaded] = useFonts({
    "Inter-Black": require("../../../assets/fonts/metropolis-latin-500-normal.ttf"),
  });

  const renderItem = ({ item }) => {
    return (
      <View style={styles.trendingSchemesContainer}>
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
                  uri: item.mutualFund.fundHouse.logoUrl,
                }}
                resizeMode="contain"
              />
            </View>
            <View style={[styles.flexItem, { justifyContent: "center" }]}>
              <Text style={styles.trendingFundName}>
                {Formatfundname(item.mutualFund.name)}
              </Text>
            </View>
          </View>
        </ImageBackground>
        <View style={styles.trendCardContainer}>
          <View style={[styles.flexRow]}>
            <View style={styles.cagrContainer}>
              <Text style={styles.cagr}>Order Type</Text>
              <Text style={styles.Cagrpercentage}>
                {item.buySell == 1
                  ? "Fresh Purchase"
                  : item.buySell == 2
                  ? "Redeem"
                  : item.buySell == 3
                  ? "Additional Purchase"
                  : item.buySell == 4
                  ? "Switch IN"
                  : item.buySell == 5
                  ? "Switch Out"
                  : "N/A"}
              </Text>
            </View>
            <View style={styles.cagrContainer}>
              <Text style={styles.cagr}>Amount</Text>
              <Text style={styles.Cagrpercentage}>{item.totalAmount}</Text>
            </View>
            <View style={styles.benchmarkContainer}>
              <Text style={styles.cagr}>Recurrence</Text>
              <Text style={styles.Cagrpercentage}>{item.frequencyName}</Text>
            </View>
          </View>
          <View style={[styles.flexRow]}>
            <View style={styles.cagrContainer}>
              <Text style={styles.cagr}>Order Status</Text>
              <Text style={styles.Cagrpercentage}>{item.orderStatus}</Text>
            </View>
            <View style={styles.cagrContainer}>
              <Text style={styles.cagr}>Payment Mode</Text>
              <Text style={styles.Cagrpercentage}>
                {item.paymentGatewayMode}
              </Text>
            </View>
            <View style={styles.benchmarkContainer}>
              <Text style={styles.cagr}>Created On</Text>
              <Text style={styles.Cagrpercentage}>
                {Formatdate(item.createdOn)}
              </Text>
            </View>
          </View>
          <View style={[styles.flexRow, { marginTop: height * 0.02 }]}>
            {/* <TouchableOpacity style={styles.Button}>
              <Text style={styles.AddToCart}>Add To Cart</Text>
            </TouchableOpacity> */}
            <TouchableOpacity
              style={[
                styles.Button,
                { backgroundColor: "rgba(33, 158, 188, 1)" },
              ]}
              onPress={() => Inappbrowser(item.paymentLinkUrl)}
            >
              <Text style={styles.invest}>Pay Now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Header title="Orders" showPlusSign={false} />
      {orderData != null && orderData != undefined ? (
        <>
          {orderData.length == 0 ? (
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={styles.text}>No Order Found</Text>
            </View>
          ) : (
            <View style={styles.contentContainer}>
              <FlatList
                data={orderData}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
              />
            </View>
          )}
        </>
      ) : (
        <Loader />
      )}
      <Mbottommenu />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    // marginBottom: height * 0.15,
  },
  contentContainer: {
    marginTop: height * 0.02,
    padding: width * 0.015,
    backgroundColor: "white",
  },
  trendingSchemesContainer: {
    marginBottom: width * 0.05,
  },
  topImage: {
    height: height * 0.065,
    justifyContent: "center",
  },
  flexRow: {
    flexDirection: "row",
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
  trendCardContainer: {
    borderWidth: width * 0.002,
    borderColor: "rgb(204, 204, 204)",
    borderBottomLeftRadius: width * 0.05,
    borderBottomRightRadius: width * 0.05,
    backgroundColor: "white",
    padding: width * 0.03,
  },
  cagrContainer: {
    width: width * 0.3,
    borderWidth: width * 0.001,
    borderColor: "rgba(255, 195, 0, 1)",
    padding: width * 0.015,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    alignItems: "center",
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
    width: width * 0.38,
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
  star: {
    marginTop: height * 0.02,
    color: "rgba(255, 195, 0, 1)",
    marginBottom: height * 0.01,
    margin: width * 0.01,
  },
  text: {
    textAlign: "center",
    justifyContent: "center",
    fontSize: width * 0.055,
    fontFamily: "Inter-Black",
  },
});
