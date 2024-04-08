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
import { searchFund } from "../../api/services/endpoints/exploreEndpoints";
import { Foundation, SimpleLineIcons } from "@expo/vector-icons";
import Formatfundname from "../Components/Formatfundname";
import { useFonts } from "expo-font";

export default Searchbox = ({ navigation }) => {
  const [search, setSearch] = useState();
  const [searchData, setSearchData] = useState();
  const handleSearch = (text) => {
    setSearch(text);
    searchFund(text)
      .then((response) => {
        setSearchData(response.data);
      })
      .catch((error) => {
        console.error("search data error:", error);
      });
  };

  const clearText = () => {
    setSearch("");
  };

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

  const handleInvest = (mfId) => {
    navigation.navigate("Assetpreview", { mfId });
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
              <Avatar.Image
                size={width * 0.07}
                source={{
                  uri: item.fundHouse.logoUrl,
                }}
              />
            </View>
            <View style={styles.flexItem}>
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
                {item.oneYearReturns
                  ? item.oneYearReturns.toFixed(2) + "%"
                  : "N/A"}
              </Text>
            </View>
            <View style={styles.cagrContainer}>
              <Text style={styles.cagr}>3Y Return</Text>
              <Text style={styles.Cagrpercentage}>
                {item.threeYearReturns
                  ? item.threeYearReturns.toFixed(2) + "%"
                  : "N/A"}
              </Text>
            </View>
            <View style={styles.benchmarkContainer}>
              <Text style={styles.cagr}>3Y Return</Text>
              <Text style={styles.Cagrpercentage}>
                {item.fiveYearReturns
                  ? item.fiveYearReturns.toFixed(2) + "%"
                  : "N/A"}
              </Text>
            </View>
            {/* <View style={styles.benchmarkContainer}>
              <Text style={styles.benchmarkReturn}>
                Benchmark Returns (5yr)
              </Text>
              <Text style={styles.benchmarkPercentage}> 20.2% </Text>
            </View> */}
          </View>
          <View style={[styles.flexRow, { alignSelf: "center" }]}>
            {/* <SimpleLineIcons name="speedometer" style={styles.speedIcon} /> */}
            {/* <Text style={styles.riskText}>Very High Risk</Text> */}
            {renderStars(item.rating)}
          </View>
          <View style={styles.flexRow}>
            {/* <TouchableOpacity style={styles.Button}>
              <Text style={styles.AddToCart}>Add To Cart</Text>
            </TouchableOpacity> */}
            <TouchableOpacity
              style={[styles.Button, { backgroundColor: "rgb(0, 56, 116 )" }]}
              onPress={() => handleInvest(item.id)}
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
  container: {
    backgroundColor: "white",
    flex: 1,
  },
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
    color: "rgb(0, 56, 116)",
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
    // alignItems: "flex-start",
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
  },
  AddToCart: {
    color: "rgb(0, 56, 116 )",
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
});
