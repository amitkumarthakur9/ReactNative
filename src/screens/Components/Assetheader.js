import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { height, width } from "../../Dimension";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { Foundation } from "@expo/vector-icons";
import Formatfundname from "../Components/Formatfundname";
import Loader from "../Components/Loader";

export default Assetheader = (props) => {
  const Data = props.mfData;
  const navigation = useNavigation();

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Foundation
          key={i}
          name="star"
          size={width * 0.04}
          style={[
            styles.star,
            { color: i <= rating ? "rgba(255, 195, 0, 1)" : "gray" },
          ]}
        />
      );
    }
    return stars;
  };
  return (
    <ImageBackground
      source={require("../../../assets/icons/header.png")}
      resizeMode="stretch"
    >
      {Object.keys(Data).length > 0 ? (
        <>
          <View style={styles.container}>
            <View style={styles.headerContainer}>
              <Ionicons
                name="arrow-back"
                size={width * 0.08}
                color="white"
                onPress={() => navigation.goBack()}
              />
              <Text style={styles.header}>{Formatfundname(Data.name)}</Text>
              <View style={styles.flexContainer}>
                <Text style={styles.mfTypeButtons}>{Data.schemeType}</Text>
                <Text style={styles.mfTypeButtons}>{Data.type}</Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                {renderStars(Data.rating)}
              </View>
              <View
                style={[styles.flexContainer, { marginBottom: height * 0.02 }]}
              >
                <View style={styles.view}>
                  <Text style={styles.duration}>1 yr</Text>
                  <Text style={styles.percentage}>
                    {Data.oneYearReturn
                      ? parseFloat(Data.oneYearReturn).toFixed(2) + "%"
                      : "N/A"}
                  </Text>
                </View>
                <View style={styles.view}>
                  <Text style={styles.duration}>3 yr</Text>
                  <Text style={styles.percentage}>
                    {Data.threeYearReturns
                      ? parseFloat(Data.threeYearReturns).toFixed(2) + "%"
                      : "N/A"}
                  </Text>
                </View>
                <View style={styles.view}>
                  <Text style={styles.duration}>5 yr</Text>
                  <Text style={styles.percentage}>
                    {Data.fiveYearReturns
                      ? parseFloat(Data.fiveYearReturns).toFixed(2) + "%"
                      : "N/A"}
                  </Text>
                </View>
                <View style={[styles.view, { borderRightWidth: 0 }]}>
                  <Text style={styles.duration}>Risk </Text>
                  <Text style={styles.percentage}>{Data.schemeRisk}</Text>
                </View>
              </View>
              <StatusBar hidden={false} />
            </View>
          </View>
        </>
      ) : (
        <>
          <Loader />
        </>
      )}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: width * 0.04,
  },
  headerContainer: {
    marginTop: height * 0.07,
  },
  header: {
    marginTop: height * 0.02,
    fontWeight: "600",
    fontSize: width * 0.056,
    color: "rgba(255, 255, 255, 1)",
    lineHeight: height * 0.04,
    marginLeft: width * 0.01,
  },
  flexContainer: {
    flexDirection: "row",
  },
  mfTypeButtons: {
    margin: width * 0.01,
    borderWidth: width * 0.002,
    borderColor: "white",
    borderRadius: width * 0.03,
    opacity: 0.7,
    color: "white",
    padding: width * 0.02,
    fontSize: width * 0.036,
  },
  labelStyle: {
    color: "white",
    fontSize: width * 0.04,
  },
  view: {
    borderRightWidth: width * 0.002,
    borderColor: "white",
    paddingRight: width * 0.05,
    margin: width * 0.02,
  },
  duration: {
    fontSize: width * 0.035,
    color: "rgba(255, 255, 255, 1)",
    opacity: 0.6,
    fontWeight: "500",
    lineHeight: height * 0.025,
  },
  percentage: {
    fontSize: width * 0.035,
    color: "rgba(255, 255, 255, 1)",
    fontWeight: "600",
  },
  star: {
    marginTop: height * 0.02,
    color: "rgba(255, 195, 0, 1)",
    margin: width * 0.01,
  },
});
