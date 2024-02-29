import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { height, width } from "../../Dimension";
import Header from "../Components/Header";
import { Fontisto } from "@expo/vector-icons";
import CircularProgress from "react-native-circular-progress-indicator";
import { Card, Avatar, Button } from "react-native-paper";
import { useFonts } from "expo-font";
import { useRoute } from "@react-navigation/native";
import { Goalassets } from "../../api/services/endpoints/goalEndpoints";
import { allPortfolio } from "../../api/services/endpoints/portfolioEndpoints";
import { useSelector } from "react-redux";
import Formatfundname from "../Components/Formatfundname";
import formatNumberWithCommas from "../Components/Inrconverter";
import Loader from "../Components/Loader";
export default Index = () => {
  const route = useRoute();
  const { wishId, title } = route.params;
  const userId = useSelector((state) => state.user.id);
  const [goaldata, setGoaldata] = useState(null);
  const [holding, setHolding] = useState(null);
  const [fontsLoaded] = useFonts({
    "Inter-Black": require("../../../assets/fonts/metropolis-latin-500-normal.ttf"),
  });

  useEffect(() => {
    const data = {
      wishId: wishId,
      userId: userId,
    };
    Goalassets(data)
      .then((response) => {
        if (response.data.success) {
          console.log("console.warn(e);", response.data.data);
          setGoaldata(response.data.data);
          allPortfolio()
            .then((res) => {
              if (res.data.hasOwnProperty("holdingsObj")) {
                setHolding(res.data.holdingsObj);
              }
            })
            .catch((e) => {
              console.log(e);
            });
        }
      })
      .catch((e) => {
        console.warn(e);
      });
  }, []);

  const radius = width * 0.15;
  const additionalRadius = width * 0.08;
  const duration = 2000;
  const storkWidth = width * 0.04;

  const inActiveStrokeColor = [
    "#98b9eb",
    "#edc2ed",
    "#edc2c2",
    "#f0ecd1",
    "#d2f0d1",
    "",
  ];
  const activeStrokeColor = [
    "#1857b5",
    "#d431d4",
    "#d63636",
    "#f5d820",
    "#32b02e",
  ];

  return (
    <View style={styles.container}>
      <Header title={title} showPlusSign={true} />
      {goaldata ? (
        <ScrollView>
          <View style={styles.contentContainer}>
            <View style={styles.chartItem}>
              <View style={styles.profileImageContainer}>
                {goaldata.map((value, index) =>
                  value.map((item) => (
                    <View style={[styles.circleContainer]} key={index}>
                      <CircularProgress
                        value={(item.currentAmount * item.gp) / 100}
                        radius={radius + index * additionalRadius}
                        duration={duration}
                        maxValue={(item.targetAmount * item.gtp) / 100}
                        clockwise={true}
                        progressValueColor={"transparent"}
                        activeStrokeColor={activeStrokeColor[index]}
                        inActiveStrokeColor={inActiveStrokeColor[index]}
                        inActiveStrokeWidth={storkWidth}
                        activeStrokeWidth={storkWidth}
                      />
                    </View>
                  ))
                )}
                <Image
                  source={require("../../../assets/Goal/profile.png")}
                  style={styles.profileImage}
                />
              </View>
            </View>
            {/* <View style={styles.content}>
              <View style={{ left: -width * 0.05 }}>
                <View style={styles.Achieved}>
                  <Text style={styles.AchievedItem}>Achieved</Text>
                  <Text style={styles.AchievedPercentage}>15%</Text>
                  <Fontisto name="angle-up" style={styles.AchievedPercentage} />
                </View>
                <Text style={styles.amount}> ₹ 80.4k</Text>
                <Text style={styles.percentOf}> 20% of 2L </Text>
              </View>
              <View
                style={[
                  styles.fundDetails,
                  { borderLeftColor: "rgba(220, 110, 216, 1)" },
                ]}
              >
                <Text style={styles.fundName}>Axis Multi Cap...</Text>
                <Text style={styles.fundAmount}> ₹ 20.4k</Text>
                <View style={{ flexDirection: "row" }}>
                  <Text style={styles.fundpercentOf}> 20% of 2L </Text>
                  <Text style={[styles.fundPercentage]}>
                    15% <Fontisto name="angle-up" />
                  </Text>
                </View>
              </View>
              <View
                style={[
                  styles.fundDetails,
                  { borderLeftColor: "rgba(232, 193, 135, 1)" },
                ]}
              >
                <Text style={styles.fundName}>Axis Multi Cap...</Text>
                <Text style={styles.fundAmount}> ₹ 20.4k</Text>
                <View style={{ flexDirection: "row" }}>
                  <Text style={styles.fundpercentOf}> 20% of 2L </Text>
                  <Text style={[styles.fundPercentage]}>
                    15% <Fontisto name="angle-up" />
                  </Text>
                </View>
              </View>
              <View
                style={[
                  styles.fundDetails,
                  {
                    borderLeftColor: "rgba(169, 190, 244, 1)",
                  },
                ]}
              >
                <Text style={styles.fundName}>Axis Multi Cap...</Text>
                <Text style={styles.fundAmount}> ₹ 20.4k</Text>
                <View style={{ flexDirection: "row" }}>
                  <Text style={styles.fundpercentOf}> 20% of 2L </Text>
                  <Text style={[styles.fundPercentage]}>
                    15% <Fontisto name="angle-up" />
                  </Text>
                </View>
              </View>
            </View> */}
          </View>
          <View style={styles.your}>
            <Text style={styles.yourHeader}> Linked Investment</Text>
            <View style={styles.cart}>
              {goaldata && holding ? (
                goaldata.map((value, index) =>
                  value.map((innerValues) => (
                    <View
                      style={[
                        styles.individualCarts,
                        { backgroundColor: activeStrokeColor[index] },
                      ]}
                      key={index}
                    >
                      <ImageBackground
                        source={require("../../../assets/Goal/rectengal.png")}
                        style={{
                          width: width * 0.96,
                          height: height * 0.2,
                        }}
                        resizeMode="stretch"
                      >
                        <View style={styles.investmentContainer}>
                          <View style={styles.flexRow}>
                            <Text style={styles.investmentHeader}>
                              {Formatfundname(
                                holding[innerValues.hid].mutualFund.name
                              )}
                            </Text>
                          </View>
                          <View style={[styles.flexRow]}>
                            <Text style={styles.descHeader}>Holding Value</Text>
                            <Text style={styles.descHeader}>Contribution</Text>
                            <Text style={styles.descHeader}>Amount</Text>
                          </View>
                          <View style={[styles.flexRow]}>
                            <Text style={styles.descValue}>
                              ₹{" "}
                              {formatNumberWithCommas(
                                Math.round(innerValues.currentAmount)
                              )}
                            </Text>
                            <Text style={styles.descValue}>
                              ₹{" "}
                              {formatNumberWithCommas(
                                Math.round(
                                  (innerValues.currentAmount * innerValues.gp) /
                                    100
                                )
                              )}
                            </Text>
                            <Text style={styles.descValue}>3.8%</Text>
                          </View>
                        </View>
                      </ImageBackground>
                    </View>
                  ))
                )
              ) : (
                <Loader />
              )}
            </View>
          </View>
        </ScrollView>
      ) : (
        <View style={styles.Noholdings}>
          <Text style={styles.text}>
            There is no holding attached with this goal . Please attach holding
            first....
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  contentContainer: {
    flexDirection: "row",
    height: height * 0.5,
  },
  chartItem: {
    width: width,
  },
  profileImageContainer: {
    flex: 1,
    justifyContent: "center",
    // left: -width * 0.28,
    // top: height * 0.05,
  },
  content: {
    left: -width * 0.01,
  },
  profileImage: {
    position: "absolute",
    width: width * 0.21,
    height: width * 0.21,
    justifyContent: "center",
    alignSelf: "center",
    // left: width * 0.26,
    // top: 140,
  },
  Achieved: {
    flexDirection: "row",
  },
  AchievedItem: {
    color: "rgba(2, 48, 71, 1)",
    fontSize: width * 0.045,
    lineHeight: height * 0.03,
    fontFamily: "Inter-Black",
    fontWeight: "600",
    margin: width * 0.01,
    opacity: 0.85,
  },
  AchievedPercentage: {
    color: "rgba(61, 193, 84, 1)",
    fontSize: width * 0.04,
    lineHeight: height * 0.025,
    fontFamily: "Inter-Black",
    fontWeight: "600",
    margin: width * 0.01,
  },
  amount: {
    color: "rgba(2, 48, 71, 1)",
    fontSize: width * 0.09,
    lineHeight: height * 0.055,
    fontFamily: "Inter-Black",
    fontWeight: "400",
  },
  percentOf: {
    color: "rgba(2, 48, 71, 1)",
    fontSize: width * 0.035,
    lineHeight: height * 0.025,
    fontFamily: "Inter-Black",
    fontWeight: "500",
    opacity: 0.5,
    marginBottom: height * 0.025,
  },
  circleContainer: {
    position: "absolute",
    alignSelf: "center",
  },
  circleMainContainer: {},
  fundName: {
    color: "rgba(2, 48, 71, 1)",
    fontFamily: "Inter-Black",
    fontWeight: "600",
    fontSize: width * 0.04,
    lineHeight: height * 0.03,
    opacity: 0.85,
  },
  fundAmount: {
    color: "rgba(2, 48, 71, 1)",
    fontFamily: "Inter-Black",
    fontWeight: "500",
    fontSize: width * 0.045,
    lineHeight: height * 0.035,
  },
  fundDetails: {
    marginTop: height * 0.02,
    borderLeftWidth: width * 0.01,
    padding: width * 0.02,
  },
  fundpercentOf: {
    fontFamily: "Inter-Black",
    fontWeight: "500",
    fontSize: width * 0.03,
    lineHeight: height * 0.02,
    color: "rgba(2, 48, 71, 1)",
    flex: 1,
  },
  fundPercentage: {
    color: "rgba(61, 193, 84, 1)",
    fontSize: width * 0.025,
    lineHeight: height * 0.02,
    fontFamily: "Inter-Black",
    fontWeight: "500",
  },
  your: {
    // marginTop: height * 0.03,
  },
  yourHeader: {
    color: "rgba(2, 48, 71, 1)",
    fontSize: width * 0.045,
    lineHeight: height * 0.035,
    fontFamily: "Inter-Black",
    fontWeight: "600",
    textAlign: "center",
  },
  cart: {
    flexDirection: "column",
  },
  individualCarts: {
    margin: height * 0.01,
    borderRadius: width * 0.05,
  },
  cardTitle: {
    marginTop: height * 0.02,
    color: "rgba(2, 48, 71, 1)",
    fontSize: width * 0.045,
    lineHeight: height * 0.035,
    fontFamily: "Inter-Black",
    fontWeight: "600",
    textAlign: "center",
  },
  cardDesc: {
    marginTop: height * 0.015,
    color: "rgba(2, 48, 71, 1)",
    fontSize: width * 0.03,
    fontFamily: "Inter-Black",
    fontWeight: "500",
    textAlign: "center",
    lineHeight: height * 0.02,
    opacity: 0.6,
    marginBottom: height * 0.02,
  },
  moreDetails: {
    color: "rgba(33, 158, 188, 1)",
    fontSize: width * 0.03,
    fontFamily: "Inter-Black",
    fontWeight: "600",
    textAlign: "center",
    lineHeight: height * 0.02,
  },
  cardDetailsContainer: {
    flexDirection: "row",
  },
  cardDetails: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: width * 0.035,
    lineHeight: height * 0.025,
    fontFamily: "Inter-Black",
    fontWeight: "500",
    opacity: 0.3,
    flex: 1,
  },
  cardDetailsValue: {
    color: "rgba(73, 69, 79, 1)",
    fontSize: width * 0.03,
    lineHeight: height * 0.03,
    fontFamily: "Inter-Black",
    fontWeight: "500",
    flex: 1,
  },
  investmentContainer: {
    position: "absolute",
    marginLeft: width * 0.05,
  },
  investmentHeader: {
    color: "rgba(2, 48, 71, 1)",
    fontFamily: "Inter-Black",
    fontWeight: "600",
    fontSize: width * 0.045,
    lineHeight: height * 0.03,
    margin: width * 0.05,
    marginLeft: 0,
    width: width * 0.8,
  },
  flexRow: {
    flexDirection: "row",
    width: width * 0.9,
  },
  descHeader: {
    marginLeft: width * 0.01,
    color: "rgba(0, 0, 0, 1)",
    lineHeight: height * 0.025,
    fontSize: width * 0.035,
    fontFamily: "Inter-Black",
    fontWeight: "500",
    opacity: 0.3,
    flex: 1,
  },
  descValue: {
    marginLeft: width * 0.01,
    color: "rgba(73, 69, 79, 1)",
    lineHeight: height * 0.025,
    fontSize: width * 0.035,
    fontFamily: "Inter-Black",
    fontWeight: "600",
    flex: 1,
  },
  text: {
    color: "rgba(0, 0, 0, 1)",
    lineHeight: height * 0.03,
    fontSize: width * 0.04,
    fontFamily: "Inter-Black",
    fontWeight: "500",
    textAlign: "center",
  },
  Noholdings: {
    alignContent: "center",
    justifyContent: "center",
    flex: 1,
    padding: width * 0.05,
  },
});
