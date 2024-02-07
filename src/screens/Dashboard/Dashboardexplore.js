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
} from "react-native-paper";
import { width, height } from "../../Dimension";
import { Foundation, SimpleLineIcons } from "@expo/vector-icons";
import {
  TrendingNfo,
  Trendingschemes,
} from "../../api/services/endpoints/exploreEndpoints";
import Formatfundname from "../Components/Formatfundname";

const Dashboardexplore = ({ navigation }) => {
  const [trendingschemes, setTrendingschemes] = useState();
  const [trendingNfo, setTrendingNfo] = useState();
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    Trendingschemes()
      .then((response) => {
        setTrendingschemes(response.data.funds);
      })
      .catch((error) => {
        console.error("schemes failed:", error);
      });

    TrendingNfo()
      .then((response) => {
        setTrendingNfo(response.data);
      })
      .catch((error) => {
        console.error("nfo failed:", error);
      });
  }, []);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handleInvest = (mfId) => {
    navigation.navigate("Assetpreview", { mfId });
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
              <Text style={styles.trendingFundName}>
                {Formatfundname(item.name)}
              </Text>
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
                  ? parseFloat(item.fiveYearReturns).toFixed(2) + "%"
                  : item.threeYearReturns
                  ? parseFloat(item.threeYearReturns).toFixed(2) + "%"
                  : item.oneYearReturns
                  ? parseFloat(item.oneYearReturns).toFixed(2) + "%"
                  : "N/A"}
              </Text>
            </View>
            <View style={styles.benchmarkContainer}>
              <Text style={styles.benchmarkReturn}>
                Benchmark Returns (
                {item.fiveYearBenchMarkReturns
                  ? "5yr"
                  : item.threeYearBenchMarkReturns
                  ? "3yr"
                  : item.oneYearBenchMarkReturns
                  ? "1yr"
                  : "N/A"}
                )
              </Text>
              <Text style={styles.benchmarkPercentage}>
                {item.fiveYearBenchMarkReturns
                  ? parseFloat(item.fiveYearBenchMarkReturns).toFixed(2)
                  : item.threeYearBenchMarkReturns
                  ? parseFloat(item.threeYearBenchMarkReturns).toFixed(2)
                  : item.oneYearBenchMarkReturns
                  ? parseFloat(item.oneYearBenchMarkReturns).toFixed(2)
                  : "N/A"}
              </Text>
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
              onPress={() => handleInvest(item.id)}
            >
              <Text style={styles.invest}>Invest</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  const NforenderItem = ({ item }) => {
    return (
      <View style={styles.flexRow}>
        <View style={styles.card}>
          <View style={[styles.flexRow]}>
            <View style={styles.trendImage}>
              <Avatar.Image
                size={width * 0.15}
                source={{
                  uri: item.fundHouse.logoUrl,
                }}
              />
            </View>
            <View>
              <Text style={styles.percentage}>
                {item.fiveYearReturns
                  ? parseFloat(item.fiveYearReturns).toFixed(2) + "%"
                  : item.threeYearReturns
                  ? parseFloat(item.threeYearReturns).toFixed(2) + "%"
                  : item.oneYearReturns
                  ? parseFloat(item.oneYearReturns).toFixed(2) + "%"
                  : "N/A"}
              </Text>
              <Text style={styles.desc}>
                {item.fiveYearReturns
                  ? "5yr Return"
                  : item.threeYearReturns
                  ? "3yr Return"
                  : item.oneYearReturns
                  ? "1yr Return"
                  : "N/A"}
              </Text>
            </View>
          </View>
          <Text style={styles.fundName}> {Formatfundname(item.name)}</Text>
          <View
            style={[
              styles.flexRow,
              { marginTop: height * 0.01, marginBottom: height * 0.01 },
            ]}
          >
            <View style={styles.flexContent}>
              <Text style={styles.type}>
                {item.schemeType} {item.type ? "-" + item.type : ""}
              </Text>
            </View>
            <Text style={styles.starNumber}>{item.rating}</Text>
            <Foundation name="star" size={width * 0.04} style={styles.star} />
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.NfoContainer}>
          <View style={styles.flexRow}>
            <Text style={styles.leftContent}>Trending NFO’s</Text>
            {/* <Text style={styles.rightContent}>View all</Text> */}
          </View>
        </View>
        <View>
          <FlatList
            horizontal
            pagingEnabled
            data={trendingNfo}
            renderItem={NforenderItem}
            keyExtractor={(item) => item.id}
            onMomentumScrollEnd={(event) => {
              const newPage = Math.ceil(
                event.nativeEvent.contentOffset.x /
                  event.nativeEvent.layoutMeasurement.width
              );
              handlePageChange(newPage);
            }}
          />
        </View>
        <View style={styles.paginationContainer}>
          {trendingNfo &&
            trendingNfo.map((_, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.paginationDot,
                  {
                    backgroundColor:
                      currentPage === index
                        ? "rgba(251, 133, 0, 1)"
                        : "rgb(255, 206, 153)",
                  },
                ]}
                onPress={() => handlePageChange(index)}
              />
            ))}
        </View>
        <View style={styles.TrendingSchemes}>
          <View style={styles.flexRow}>
            <Text style={styles.leftContent}>Trending Schemes</Text>
            {/* <Text style={styles.rightContent}>View all</Text> */}
          </View>
        </View>
        <View>
          <FlatList
            data={trendingschemes}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: width * 0.05,
    backgroundColor: "white",
    marginTop: height * 0.03,
  },
  searchInput: {
    height: height * 0.05,
    marginTop: -height * 0.025,
  },
  contentStyle: {
    marginLeft: width * 0.02,
  },
  NfoContainer: {
    marginTop: height * 0.07,
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
    fontWeight: "600",
    fontSize: width * 0.045,
    width: "50%",
    flex: 1,
  },
  rightContent: {
    textAlign: "right",
    color: "rgba(0, 0, 0, 1)",
    fontWeight: "500",
    fontSize: width * 0.035,
    opacity: 0.4,
    width: "50%",
    flex: 1,
  },
  trendImage: {
    width: "50%",
    flex: 1,
  },
  percentage: {
    color: "rgba(251, 133, 0, 1)",
    fontWeight: "600",
    fontSize: width * 0.035,
    lineHeight: height * 0.03,
    textAlign: "right",
  },
  desc: {
    color: "rgba(0, 0, 0, 1)",
    fontWeight: "500",
    fontSize: width * 0.03,
    lineHeight: height * 0.02,
    opacity: 0.3,
    textAlign: "right",
  },
  card: {
    width: width * 0.64,
    backgroundColor: "white",
    padding: width * 0.04,
    marginRight: width * 0.04,
    borderWidth: width * 0.002,
    borderColor: "rgb(204, 204, 204)",
    borderRadius: width * 0.05,
    backgroundColor: "white",
    padding: width * 0.03,
  },
  fundName: {
    color: "rgba(2, 48, 71, 1)",
    fontWeight: "600",
    fontSize: width * 0.04,
    lineHeight: height * 0.03,
    marginTop: height * 0.015,
  },
  flexContent: {
    width: "50%",
    flex: 1,
  },
  starNumber: {
    color: "rgba(2, 48, 71, 1)",
    fontSize: width * 0.03,
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
    lineHeight: height * 0.02,
    fontWeight: "500",
    opacity: 0.5,
  },
  topImage: {
    width: width * 0.9,
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
    marginBottom: width * 0.05,
  },
  flexItem: {
    marginLeft: width * 0.04,
  },
  trendingFundName: {
    color: "rgba(255, 255, 255, 1)",
    fontWeight: "600",
    fontSize: width * 0.035,
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
  cagrContainer: {
    width: width * 0.3,
    borderWidth: width * 0.001,
    borderColor: "rgba(255, 195, 0, 1)",
    padding: width * 0.015,
    borderLeftWidth: 0,
    borderTopWidth: 0,
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
  risk: {
    textAlign: "center",
    padding: width * 0.05,
    color: "rgba(0, 0, 0, 1)",
    fontSize: width * 0.035,
    lineHeight: height * 0.025,
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
});

export default Dashboardexplore;
