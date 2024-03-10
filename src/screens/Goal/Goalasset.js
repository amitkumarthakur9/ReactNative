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
  Alert,
} from "react-native";
import { height, width } from "../../Dimension";
import Header from "../Components/Header";
import { Fontisto } from "@expo/vector-icons";
import CircularProgress from "react-native-circular-progress-indicator";
import { Card, Avatar, Button } from "react-native-paper";
import { useFonts } from "expo-font";
import {
  useRoute,
  useNavigation,
  useFocusEffect,
} from "@react-navigation/native";
import {
  Goalassets,
  Deletelink,
  Deletegoal,
} from "../../api/services/endpoints/goalEndpoints";
import { allPortfolio } from "../../api/services/endpoints/portfolioEndpoints";
import { useSelector } from "react-redux";
import Formatfundname from "../Components/Formatfundname";
import formatNumberWithCommas from "../Components/Inrconverter";
import Loader from "../Components/Loader";
import {
  Feather,
  Ionicons,
  MaterialIcons,
  FontAwesome,
  FontAwesome5,
} from "@expo/vector-icons";
import Mbottommenu from "../Components/Mbottommenu";
export default Index = () => {
  const route = useRoute();
  const { wishId, title, apiduration, targetAmount, imageUrl } = route.params;
  const userId = useSelector((state) => state.user.id);
  const [goaldata, setGoaldata] = useState(null);
  const [holding, setHolding] = useState(null);
  const [totalachieved, setTotalachieved] = useState(null);
  const [totalremaining, setTotalremaining] = useState(null);
  const [refresh, setRefresh] = useState(0);
  const navigation = useNavigation();
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
          setGoaldata(response.data.data);
          const data = response.data.data;
          let totalAmountAcheived = 0;
          let totalAmountRemaining = 0;
          data.forEach((subArray) => {
            subArray.forEach((item) => {
              totalAmountAcheived += Math.round(
                (item.currentAmount * item.gp) / 100
              );

              totalAmountRemaining +=
                Math.round((item.targetAmount * item.gtp) / 100) -
                Math.round((item.currentAmount * item.gp) / 100);
            });
          });
          setTotalachieved(totalAmountAcheived);
          setTotalremaining(totalAmountRemaining);
          allPortfolio()
            .then((res) => {
              if (res.data.hasOwnProperty("holdingsObj")) {
                setHolding(res.data.holdingsObj);
              }
            })
            .catch((e) => {
              console.log(e);
            });
        } else {
          setGoaldata(null);
        }
      })
      .catch((e) => {
        console.warn(e);
      });
  }, [refresh]);

  const Deleteholdinglink = async (hid) => {
    const data = {
      action: "deletelink",
      wishId: wishId,
      holdingId: hid,
      assetType: 1,
      userId: userId,
    };
    Alert.alert(
      "Confirmation",
      "Are you sure you want to delete this holding link?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "OK",
          onPress: async () => {
            try {
              const response = await Deletelink(data);
              if (response.data.success) {
                const randomNumber = Math.random();
                setRefresh(randomNumber);
                Alert.alert("Holding has been unlinked successfully");
              } else {
                Alert.alert("Failed , try later");
              }
            } catch (e) {
              console.log(e);
            }
          },
        },
      ]
    );
  };

  const Deletegoallink = async () => {
    const data = {
      action: "deleteGoal",
      wishId: wishId,
    };
    Alert.alert("Confirmation", "Are you sure you want to delete this Goal ?", [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "OK",
        onPress: async () => {
          try {
            const response = await Deletegoal(data);
            if (response.data.success) {
              Alert.alert("Goal has been deleted successfully");
              navigation.push("Dashboard", "Goal");
            } else {
              Alert.alert("Failed", "try later");
              navigation.push("Dashboard", "Goal");
            }
          } catch (e) {
            console.log(e);
          }
        },
      },
    ]);
  };

  useFocusEffect(
    React.useCallback(() => {
      const randomNumber = Math.random();
      setRefresh(randomNumber);
    }, [])
  );

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
    <>
      <View style={styles.container}>
        <Header
          title={title}
          showPlusSign={false}
          showDeleteSign={true}
          fncall={Deletegoallink}
        />
        {goaldata ? (
          <ScrollView>
            <View style={styles.tableView}>
              <View style={styles.flexRow}>
                <View style={[styles.celll, styles.flexRow]}>
                  <Feather name="target" size={width * 0.05} color="red" />
                  <Text style={[styles.text, { marginLeft: width * 0.02 }]}>
                    Target Amount
                  </Text>
                </View>

                <Text style={[styles.celll, { flex: 1 }]}>
                  ₹ {formatNumberWithCommas(Math.round(targetAmount))}
                </Text>
              </View>
              <View style={styles.flexRow}>
                <View style={[styles.celll, styles.flexRow]}>
                  <Ionicons
                    name="cash-outline"
                    size={width * 0.05}
                    color="deeppink"
                  />
                  <Text style={[styles.text, { marginLeft: width * 0.02 }]}>
                    Amount Achieved
                  </Text>
                </View>

                <Text style={[styles.celll, { flex: 1 }]}>
                  ₹ {formatNumberWithCommas(Math.round(totalachieved))}
                </Text>
              </View>
              <View style={styles.flexRow}>
                <View style={[styles.celll, styles.flexRow]}>
                  <MaterialIcons
                    name="timer"
                    size={width * 0.05}
                    color="blue"
                  />
                  <Text style={[styles.text, { marginLeft: width * 0.02 }]}>
                    Time Remaining
                  </Text>
                </View>

                <Text
                  style={[styles.celll, { flex: 1 }]}
                >{`${apiduration}  Months`}</Text>
              </View>
              <View style={styles.flexRow}>
                <View style={[styles.celll, styles.flexRow]}>
                  <FontAwesome5 name="coins" size={width * 0.05} color="peru" />
                  <Text style={[styles.text, { marginLeft: width * 0.02 }]}>
                    Amount Remaining
                  </Text>
                </View>

                <Text style={[styles.celll, { flex: 1 }]}>
                  ₹ {formatNumberWithCommas(Math.round(totalremaining))}
                </Text>
              </View>
            </View>

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
                    // source={require("../../../assets/Goal/profile.png")}
                    source={
                      imageUrl != undefined
                        ? { uri: imageUrl }
                        : require("../../../assets/Goal/mobile.png")
                    }
                    style={styles.profileImage}
                  />
                </View>
              </View>
            </View>
            <TouchableOpacity
              onPress={() =>
                navigation.push("Holdings", { Goalassets: "Goalassets" })
              }
              style={{
                marginBottom: height * 0.05,
                width: width * 0.5,
                alignSelf: "center",
              }}
            >
              <Button mode="contained" style={styles.Button}>
                Attach Holding
              </Button>
            </TouchableOpacity>
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
                            height: height * 0.25,
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
                              <Text style={styles.descHeader}>Target</Text>
                              <Text style={styles.descHeader}>Achieved</Text>
                              <Text style={styles.descHeader}>Remaining</Text>
                            </View>
                            <View style={[styles.flexRow]}>
                              <Text style={styles.descValue}>
                                ₹{" "}
                                {formatNumberWithCommas(
                                  Math.round(
                                    (innerValues.targetAmount *
                                      innerValues.gtp) /
                                      100
                                  )
                                )}
                              </Text>
                              <Text style={styles.descValue}>
                                ₹{" "}
                                {formatNumberWithCommas(
                                  Math.round(
                                    (innerValues.currentAmount *
                                      innerValues.gp) /
                                      100
                                  )
                                )}
                              </Text>
                              <Text style={styles.descValue}>
                                ₹{" "}
                                {formatNumberWithCommas(
                                  Math.round(
                                    (innerValues.targetAmount *
                                      innerValues.gtp) /
                                      100
                                  ) -
                                    Math.round(
                                      (innerValues.currentAmount *
                                        innerValues.gp) /
                                        100
                                    )
                                )}
                              </Text>
                            </View>
                            <TouchableOpacity
                              onPress={() => Deleteholdinglink(innerValues.hid)}
                              style={{
                                marginTop: height * 0.02,
                                //   width: width * 0.5,
                                alignSelf: "flex-end",
                              }}
                            >
                              <Button mode="text">Unlink Holding</Button>
                            </TouchableOpacity>
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
              There is no holding attached with this goal . Please attach
              holding first
            </Text>
            <TouchableOpacity
              onPress={() =>
                navigation.push("Holdings", { Goalassets: "Goalassets" })
              }
              style={{ marginTop: height * 0.02 }}
            >
              <Button mode="contained" style={styles.Button}>
                Attach Holding
              </Button>
            </TouchableOpacity>
          </View>
        )}
      </View>
      <Mbottommenu />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    marginBottom: height * 0.12,
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
    borderRadius: width * 0.06,
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
    // width: width,
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
  Button: {
    alignItems: "center",
    borderRadius: width * 0.03,
    borderWidth: 1,
    borderColor: "#023047",
    padding: width * 0.01,
    backgroundColor: "#023047",
  },
  tableView: {
    flex: 1,
    alignItems: "center",
    marginTop: height * 0.02,
    margin: width * 0.03,
    // borderWidth: 1,
    // borderRadius: width * 0.05,
  },
  celll: {
    color: "rgba(0, 0, 0, 1)",
    lineHeight: height * 0.03,
    fontSize: width * 0.04,
    fontFamily: "Inter-Black",
    fontWeight: "500",
    textAlign: "center",
    flex: 1,
    borderWidth: width * 0.001,
    padding: width * 0.02,
  },
});
