import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
import Bgiheader from "../Components/Bgiheader";
import { width, height } from "../../Dimension";
import Content from "./Content";
import usePortfolioData from "./Useportfoliodata";
import Loader from "../Components/Loader";
import formatNumberWithCommas from "../Components/Inrconverter";
import renderPaginationDots from "../Components/Pagination";
import { useFonts } from "expo-font";
const Portfolio = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const { completePortfolioData, allPortfolioData } = usePortfolioData();
  const totalDots = Object.entries(completePortfolioData).length;
  const [objKey, setObjKey] = useState("");

  const handleScroll = (event) => {
    const newPage = Math.floor(
      event.nativeEvent.contentOffset.x / (width * 0.9)
    );
    setCurrentPage(newPage);

    // Get the keys from completePortfolioData
    const keys = Object.keys(completePortfolioData);

    // Ensure that the newPage is within the bounds of the keys array
    if (keys.length > 0 && newPage >= 0 && newPage < keys.length) {
      // Update objKey with the key corresponding to the current page
      setObjKey(keys[newPage]);
    }
  };

  const [fontsLoaded] = useFonts({
    "Inter-Black": require("../../../assets/fonts/metropolis-latin-500-normal.ttf"),
  });

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="always"
    >
      <Bgiheader
        title="Portfolio"
        showPlusSign={false}
        Headerheight={0.29}
        showBackArrow={false}
      />
      <View style={styles.cart}>
        {/* {console.log("keys", Object.keys(completePortfolioData))} */}
        <ScrollView
          horizontal
          //   onMomentumScrollEnd={(event) => {
          //     const newPage = Math.floor(
          //       event.nativeEvent.contentOffset.x / (width * 0.9)
          //     );
          //     setCurrentPage(newPage);
          //   }}
          onMomentumScrollEnd={handleScroll}
        >
          {allPortfolioData == "showLoader" ||
          allPortfolioData == "showZeroValue" ? (
            <>
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
                  <Loader />
                </ImageBackground>
              </View>
            </>
          ) : (
            <>
              {Object.entries(completePortfolioData).map(([key, obj]) => (
                <View style={styles.individualCarts} key={key}>
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
                        <Text style={styles.header}>{key} Portfolio Value</Text>
                        <Text style={styles.desc}>
                          ₹{" "}
                          {formatNumberWithCommas(
                            Math.round(obj.all.all.all.currValue)
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
                              Math.round(obj.all.all.all.cost)
                            )}
                          </Text>
                          <Text style={styles.descValue}>
                            ₹{" "}
                            {formatNumberWithCommas(
                              Math.round(obj.all.all.all.currValue) -
                                Math.round(obj.all.all.all.cost)
                            )}
                          </Text>
                          <Text style={styles.descValue}>
                            {parseFloat(obj.all.all.all.xirr).toFixed(2)}
                            {"%"}
                          </Text>
                        </View>
                        <View style={styles.valueContainer}>
                          <View style={styles.flexRow}>
                            <Text style={styles.descHeader}>Return</Text>
                            <Text style={styles.descHeader}>
                              One Day Change
                            </Text>
                            <Text style={styles.descHeader}>Rating</Text>
                          </View>
                          <View style={styles.flexRow}>
                            <Text style={styles.descValue}>
                              {" "}
                              {parseFloat(obj.all.all.all.absRet).toFixed(2)}
                              {"%"}
                            </Text>
                            <Text style={styles.descValue}>
                              {" "}
                              {Math.round(obj.all.all.all.oneDayChange)}
                            </Text>
                            <Text style={styles.descValue}>
                              {parseFloat(obj.all.all.all.rating).toFixed(1)}
                            </Text>
                          </View>
                        </View>
                      </View>
                    </View>
                  </ImageBackground>
                </View>
              ))}
            </>
          )}
          {/* {allPortfolioData != "allPortfolioData" ? (
           
          ) : (
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
                <Loader />
              </ImageBackground>
            </View>
          )} */}
        </ScrollView>
        {renderPaginationDots(currentPage, totalDots)}
      </View>
      <Content currentPage={currentPage} objKey={objKey} />
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
    fontFamily: "Inter-Black",
    fontWeight: "600",
    opacity: 0.3,
    textTransform: "capitalize",
  },
  desc: {
    color: "rgba(33, 0, 93, 1)",
    fontSize: width * 0.07,
    fontFamily: "Inter-Black",
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
    fontFamily: "Inter-Black",
    fontWeight: "500",
    opacity: 0.3,
    flex: 1,
  },
  descValue: {
    color: "rgba(73, 69, 79, 1)",
    lineHeight: height * 0.025,
    fontSize: width * 0.035,
    fontFamily: "Inter-Black",
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
    fontFamily: "Inter-Black",
    fontWeight: "600",
    color: "rgba(255, 255, 255, 1)",
  },
  valueContainer: {
    marginTop: height * 0.025,
  },
  paginationContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: height * 0.01,
  },
  paginationDot: {
    width: width * 0.022,
    height: width * 0.022,
    borderRadius: width * 0.012,
    marginHorizontal: width * 0.012,
  },
});

export default Portfolio;
