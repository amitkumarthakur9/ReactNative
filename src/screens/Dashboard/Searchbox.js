import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  FlatList,
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
import {
  searchFund,
  Nfo,
  Trendingschemes,
} from "../../api/services/endpoints/exploreEndpoints";
import { Foundation, SimpleLineIcons } from "@expo/vector-icons";

export default Searchbox = () => {
  const [search, setSearch] = useState();
  const [searchData, setSearchData] = useState();
  const handleSearch = (text) => {
    setSearch(text);
    console.log(text);
    searchFund(text)
      .then((response) => {
        setSearchData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("search data error:", error);
      });
  };

  const clearText = () => {
    setSearch("");
  };

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
              <Avatar.Image
                size={width * 0.07}
                source={{
                  uri: item.fundHouse.logoUrl,
                }}
              />
            </View>
            <View style={styles.flexItem}>
              <Text style={styles.trendingFundName}>{item.name}</Text>
            </View>
          </View>
        </ImageBackground>
        <View style={styles.trendCardContainer}>
          <View style={[styles.flexRow]}>
            <View style={styles.cagrContainer}>
              <Text style={styles.cagr}>
                CAGR (
                {item.fiveYearReturns
                  ? "5yr"
                  : item.threeYearReturns
                  ? "3yr"
                  : item.oneYearReturns
                  ? "1yr"
                  : "N/A"}
                )
              </Text>
              <Text style={styles.Cagrpercentage}>
                {item.fiveYearReturns
                  ? item.fiveYearReturns
                  : item.threeYearReturns
                  ? item.threeYearReturns
                  : item.oneYearReturns
                  ? item.oneYearReturns
                  : "N/A"}
              </Text>
            </View>
            <View style={styles.benchmarkContainer}>
              <Text style={styles.benchmarkReturn}>
                Benchmark Returns (5yr)
              </Text>
              <Text style={styles.benchmarkPercentage}> 20.2% </Text>
            </View>
          </View>
          <View
            style={[
              styles.flexRow,
              { alignSelf: "center", alignItems: "center" },
            ]}
          >
            <SimpleLineIcons name="speedometer" style={styles.speedIcon} />
            <Text style={styles.riskText}>Very High Risk</Text>
          </View>
          <View style={styles.flexRow}>
            <TouchableOpacity style={styles.Button}>
              <Text style={styles.AddToCart}>Add To Cart</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.Button,
                { backgroundColor: "rgba(33, 158, 188, 1)" },
              ]}
            >
              <Text style={styles.invest}>Invest</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Bgiheader title="" showPlusSign={false} Headerheight={0.25} />
      <View style={styles.contentContainer}>
        <TextInput
          value={search}
          mode="outlined"
          style={styles.searchInput}
          placeholder="Search"
          outlineStyle={{ borderRadius: width * 0.06, borderColor: "white" }}
          right={
            search ? (
              <TextInput.Icon icon="close-circle" onPress={clearText} />
            ) : (
              ""
            )
          }
          contentStyle={styles.contentStyle}
          onChangeText={handleSearch}
        />
        <Text style={{ marginTop: height * 0.05 }}></Text>
        <FlatList
          data={searchData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  searchInput: {
    height: height * 0.05,
    marginTop: -height * 0.1,
  },
  contentContainer: {
    padding: width * 0.02,
  },
  contentStyle: {
    marginLeft: width * 0.02,
  },
  trendingSchemesContainer: {
    marginBottom: width * 0.05,
    // marginTop: height * 0.07,
  },
  topImage: {
    // width: width * 0.9,
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
  },
  cagr: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: width * 0.035,
    lineHeight: height * 0.025,
    fontWeight: "500",
    opacity: 0.3,
  },
  Cagrpercentage: {
    fontSize: width * 0.04,
    color: "rgba(61, 193, 84, 1)",
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
    alignItems: "flex-start",
  },
  benchmarkReturn: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: width * 0.035,
    lineHeight: height * 0.025,
    fontWeight: "500",
    opacity: 0.3,
    marginLeft: width * 0.03,
  },
  benchmarkPercentage: {
    color: "rgba(73, 69, 79, 1)",
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
  },
  AddToCart: {
    color: "rgba(33, 158, 188, 1)",
    fontSize: width * 0.035,
    fontWeight: "500",
  },
  invest: {
    color: "white",
    fontSize: width * 0.037,
    fontWeight: "700",
  },
});
