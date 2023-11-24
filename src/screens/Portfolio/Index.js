import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Bgiheader from "../Components/Bgiheader";
import { width, height } from "../../Dimension";
import Content from "./Content";
import usePortfolioData from "./Useportfoliodata";
import Loader from "../Components/Loader";
import formatNumberWithCommas from "../Components/Inrconverter";

const Portfolio = () => {
  const { allPortfolioData, internalPortfolioData, externalPortfolioData } =
    usePortfolioData();
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {allPortfolioData != "allPortfolioData" ? (
        <>
          <Bgiheader
            title="Portfolio"
            showPlusSign={false}
            Headerheight={0.29}
            showBackArrow={false}
          />
          <View style={styles.cart}>
            <ScrollView horizontal>
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
                      <Text style={styles.header}>Complete Portfolio</Text>
                      <Text style={styles.desc}>
                        ₹{" "}
                        {formatNumberWithCommas(
                          Math.round(allPortfolioData.currValue)
                        )}
                      </Text>
                    </View>
                    <View style={styles.boxBottomContainer}>
                      <View style={styles.flexRow}>
                        <Text style={styles.descHeader}>Investment</Text>
                        <Text style={styles.descHeader}>Current Gain</Text>
                        <Text style={styles.descHeader}>XIRR</Text>
                      </View>
                      <View style={styles.flexRow}>
                        <Text style={styles.descValue}>
                          ₹{" "}
                          {formatNumberWithCommas(
                            Math.round(allPortfolioData.cost)
                          )}
                        </Text>
                        <Text style={styles.descValue}>
                          ₹{" "}
                          {formatNumberWithCommas(
                            Math.round(allPortfolioData.currValue) -
                              Math.round(allPortfolioData.cost)
                          )}
                        </Text>
                        <Text style={styles.descValue}>
                          {allPortfolioData.xirr.toFixed(2)}
                          {"%"}
                        </Text>
                      </View>
                      <View style={styles.valueContainer}>
                        <View style={styles.flexRow}>
                          <Text style={styles.descHeader}>Return</Text>
                          <Text style={styles.descHeader}>One Day Change</Text>
                          <Text style={styles.descHeader}>Rating</Text>
                        </View>
                        <View style={styles.flexRow}>
                          <Text style={styles.descValue}>
                            {" "}
                            {allPortfolioData.absRet.toFixed(2)}
                            {"%"}
                          </Text>
                          <Text style={styles.descValue}>
                            {" "}
                            {Math.round(allPortfolioData.oneDayChange)}
                          </Text>
                          <Text style={styles.descValue}>
                            {allPortfolioData.rating.toFixed(1)}
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                </ImageBackground>
              </View>
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
                      <Text style={styles.header}>Complete Portfolio</Text>
                      <Text style={styles.desc}>
                        ₹{" "}
                        {formatNumberWithCommas(
                          Math.round(allPortfolioData.currValue)
                        )}
                      </Text>
                    </View>
                    <View style={styles.boxBottomContainer}>
                      <View style={styles.flexRow}>
                        <Text style={styles.descHeader}>Investment</Text>
                        <Text style={styles.descHeader}>Current Gain</Text>
                        <Text style={styles.descHeader}>XIRR</Text>
                      </View>
                      <View style={styles.flexRow}>
                        <Text style={styles.descValue}>
                          ₹{" "}
                          {formatNumberWithCommas(
                            Math.round(allPortfolioData.cost)
                          )}
                        </Text>
                        <Text style={styles.descValue}>
                          ₹{" "}
                          {formatNumberWithCommas(
                            Math.round(allPortfolioData.currValue) -
                              Math.round(allPortfolioData.cost)
                          )}
                        </Text>
                        <Text style={styles.descValue}>
                          {allPortfolioData.xirr.toFixed(2)}
                          {"%"}
                        </Text>
                      </View>
                      <View style={styles.valueContainer}>
                        <View style={styles.flexRow}>
                          <Text style={styles.descHeader}>Return</Text>
                          <Text style={styles.descHeader}>One Day Change</Text>
                          <Text style={styles.descHeader}>Rating</Text>
                        </View>
                        <View style={styles.flexRow}>
                          <Text style={styles.descValue}>
                            {" "}
                            {allPortfolioData.absRet.toFixed(2)}
                            {"%"}
                          </Text>
                          <Text style={styles.descValue}>
                            {" "}
                            {Math.round(allPortfolioData.oneDayChange)}
                          </Text>
                          <Text style={styles.descValue}>
                            {allPortfolioData.rating.toFixed(1)}
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                </ImageBackground>
              </View>
            </ScrollView>
          </View>
          <Content />
        </>
      ) : (
        <Loader />
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  cart: {
    marginTop: -height * 0.13,
    margin: width * 0.02,
    zIndex: 1,
  },
  individualCarts: {},
  rec1: {
    width: width * 0.95,
    height: height * 0.3,
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
    marginTop: height * 0.045,
  },
  investmentContainer: {
    // position: "absolute",
    width: width,
    marginLeft: width * 0.1,
    marginTop: height * 0.01,
  },
  flexRow: {
    flexDirection: "row",
  },
  rectengal2: {
    position: "absolute",
    height: height * 0.18,
    resizeMode: "contain",
    right: -width * 0.11,
    top: -height * 0.023,
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
  valueContainer: {
    marginTop: height * 0.025,
  },
});

export default Portfolio;
