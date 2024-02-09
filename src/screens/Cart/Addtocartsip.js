import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { width, height } from "../../Dimension";
import Header from "../Components/Header";
import { Foundation, SimpleLineIcons, FontAwesome } from "@expo/vector-icons";
import { Fetchcart, Removecart } from "./Data";
import Loader from "../Components/Loader";
import Formatfundname from "../Components/Formatfundname";
import { Entypo } from "@expo/vector-icons";
import Paymentoptions from "../Payment/Paymentoptions";
import Sippaymentoptions from "../Payment/Sippaymentoption";
import Formatdate from "../Components/Formatdate";
import { useFonts } from "expo-font";

export const AddToCart = () => {
  const [fetchCart, setFetchCart] = useState(null);
  const [removed, setRemoved] = useState(null);
  const [show, setShow] = useState(false);

  const [orderData, setOrderData] = useState({});

  const [fontsLoaded] = useFonts({
    "Inter-Black": require("../../../assets/fonts/metropolis-latin-500-normal.ttf"),
  });

  useEffect(() => {
    Fetchcart()
      .then((response) => {
        setFetchCart(response);
        // console.log("car data", response);
        setRemoved(null);
      })
      .catch((erorr) => {
        console.warn("amit", erorr);
      });
  }, [removed]);

  useEffect(() => {
    if (fetchCart != null && fetchCart.length > 0) {
      if (fetchCart[0].monthly === true) {
        const updatedOrderData = {
          action: "cartOrder",
          monthly: 1,
          paymentMode: "DM",
          paymentFlag: 0,
          ...fetchCart.reduce((accumulator, item, index) => {
            accumulator[`basket[${index}][mutualFundId]`] = item.mutualFund.id;
            accumulator[`basket[${index}][amount]`] = item.amount;
            accumulator[`basket[${index}][folioNumberString]`] =
              item.folioNumberString ?? "";
            accumulator[`basket[${index}][monthly]`] = 1;
            accumulator[`basket[${index}][sipTenure]`] =
              item.noOfInstallments / 12;
            accumulator[`basket[${index}][frequency]`] = item.frequency;
            accumulator[`basket[${index}][noOfInstallments]`] =
              item.noOfInstallments;
            accumulator[`basket[${index}][startDate]`] = Formatdate(
              item.sipDate
            );
            return accumulator;
          }, {}),
        };
        setOrderData(updatedOrderData);
      }
    }

    if (fetchCart != null && fetchCart.length > 0) {
      setShow(fetchCart.some((item) => item.monthly === true));
    }
  }, [fetchCart, removed]);

  //   console.log("amit sip", orderData);

  const handleRemovefromcart = (cartId, mutualFundId) => {
    const data = {
      action: "deleteFromCartBulk",
      mutualFundId: mutualFundId,
      cartId: cartId,
    };
    Removecart(data).then((response) => {
      //   console.log("card removed", response);
      setRemoved(response);
    });
  };

  return (
    <>
      {fetchCart != null && fetchCart.length > 0 ? (
        <>
          <ScrollView
            style={{ backgroundColor: "rgba(255, 255, 255,0.8)" }}
            showsVerticalScrollIndicator={false}
          >
            <View style={styles.container}>
              {show && (
                <>
                  <Text style={styles.headerText}>
                    YOUR RECURRING ORDER BASKET
                  </Text>
                </>
              )}
              {fetchCart.map(
                (item, key) =>
                  item.monthly === true && (
                    <TouchableOpacity style={styles.flexRow} key={key}>
                      <View style={styles.card}>
                        <View style={[styles.flexRow]}>
                          <View style={styles.trendImage}>
                            <Image
                              style={{
                                width: width * 0.14,
                                height: width * 0.14,
                              }}
                              source={{
                                uri: item.mutualFund.fundHouse.logoUrl,
                              }}
                              resizeMode="contain"
                            />
                          </View>
                          <View>
                            <TouchableOpacity
                              onPress={() =>
                                handleRemovefromcart(
                                  item.cartId,
                                  item.mutualFund.id
                                )
                              }
                            >
                              <Entypo
                                name="cross"
                                color="black"
                                style={{
                                  alignSelf: "flex-end",
                                  fontSize: width * 0.045,
                                }}
                              />
                            </TouchableOpacity>
                          </View>
                        </View>
                        <Text style={styles.fundName}>
                          {Formatfundname(item.mutualFund.name)}
                        </Text>
                        <View
                          style={[styles.flexRow, { marginTop: height * 0.02 }]}
                        >
                          <View style={styles.flexContent}>
                            <Text style={styles.type}>
                              Start Date : {item.sipDate}
                              {removed}
                            </Text>
                          </View>
                          <FontAwesome name="rupee" size={20} color="black" />
                          <Text style={styles.rating}>{item.amount}</Text>
                        </View>
                      </View>
                    </TouchableOpacity>
                  )
              )}
              {show && (
                <>
                  <Sippaymentoptions orderData={orderData} />
                </>
              )}
            </View>
          </ScrollView>
        </>
      ) : fetchCart == null ? (
        <>
          <Loader />
        </>
      ) : (
        <>
          <View
            style={{
              justifyContent: "center",
              flex: 1,
              alignSelf: "center",
            }}
          >
            <Text style={styles.fundName}>
              You do not have anything in your cart.
            </Text>
          </View>
        </>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: width * 0.04,
    backgroundColor: "rgba(255, 255, 255,0.8)",
    flex: 1,
  },
  flexRow: {
    flexDirection: "row",
  },
  card: {
    marginBottom: height * 0.015,
    width: width,
    backgroundColor: "white",
    borderWidth: width * 0.002,
    borderColor: "rgb(204, 204, 204)",
    borderRadius: width * 0.05,
    padding: width * 0.03,
    flex: 1,
  },
  trendImage: {
    width: "50%",
    flex: 1,
  },
  fundName: {
    color: "rgba(2, 48, 71, 1)",
    fontFamily: "Inter-Black",
    fontWeight: "600",
    fontSize: width * 0.04,
    lineHeight: height * 0.03,
    // marginTop: height * 0.015,
  },
  flexContent: {
    width: "50%",
    flex: 1,
  },
  type: {
    color: "rgba(2, 48, 71, 1)",
    fontSize: width * 0.032,
    lineHeight: height * 0.02,
    fontFamily: "Inter-Black",
    fontWeight: "500",
    // opacity: 0.5,
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
  rating: {
    // backgroundColor: "green",
    // color: "white",
    fontFamily: "Inter-Black",
    fontWeight: "500",
    marginLeft: width * 0.02,
    // padding: width * 0.01,
    // borderRadius: width * 0.01,
  },
  headerText: {
    color: "#023047",
    fontFamily: "Inter-Black",
    fontWeight: "600",
    fontSize: width * 0.04,
    marginTop: height * 0.032,
    marginBottom: height * 0.032,
    textAlign: "center",
  },
});

export default AddToCart;
