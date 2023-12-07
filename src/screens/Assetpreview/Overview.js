import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Linking,
} from "react-native";
import { height, width } from "../../Dimension";
import { Card, Button, Avatar } from "react-native-paper";
import { useRoute, useNavigation } from "@react-navigation/native";
import Loader from "../Components/Loader";

export default Overview = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const data = route.params.mfData;

  const handleLinkPress = (url) => {
    Linking.openURL(url);
  };

  return (
    <View style={styles.overviewContainer}>
      {Object.keys(data).length > 0 ? (
        <>
          <ScrollView showsVerticalScrollIndicator={false}>
            {/* <View style={styles.headerContainer}>
          <Image
            source={{ uri: data.fundHouse.logoUrl }}
            style={[
              styles.header,
              {
                width: height * 0.09,
                height: height * 0.1,
                resizeMode: "contain",
              },
            ]}
          />
          <View style={styles.titleBox}>
            <Text
              style={[
                styles.header,
                {
                  color: "rgba(2, 48, 71, 1)",
                  fontSize: width * 0.045,
                  fontWeight: "600",
                  lineHeight: height * 0.03,
                  textAlign: "left",
                },
              ]}
            >
              {data.name}
            </Text>
          </View>
        </View> */}
            {/* <Text style={styles.desc}>
          {data.fundHouse.description} description ka key batao
        </Text> */}
            <View style={styles.typeContainer}>
              <View style={styles.view}>
                <Text style={styles.duration}>Fund Type</Text>
                <Text style={styles.percentage}>Open- End</Text>
              </View>
              <View style={styles.view}>
                <Text style={styles.duration}>Plan</Text>
                <Text style={styles.percentage}>Growth</Text>
              </View>
              <View style={[styles.view, { borderColor: "white" }]}>
                <Text style={styles.duration}>As On Date</Text>
                <Text style={styles.percentage}>
                  {data.navUpdatedOn.split(" ")[0]}
                </Text>
              </View>
            </View>

            <View style={styles.detailsContainer}>
              <View style={styles.detailsView}>
                <Text style={styles.detailsName}>Nav</Text>
                <Text style={styles.detailsPercentage}>
                  {data.nav.toFixed(2)} (
                  {data.navChange >= 0 ? (
                    <Text style={{ color: "green" }}>
                      {data.navChange.toFixed(2)}
                    </Text>
                  ) : (
                    <Text style={{ color: "red" }}>
                      {data.navChange.toFixed(2)}
                    </Text>
                  )}
                  )
                </Text>
              </View>
              <View style={styles.detailsView}>
                <Text style={styles.detailsName}>Scheme Asset Size</Text>
                <Text style={styles.detailsPercentage}>
                  ₹{data.schemeSize.toFixed(2)}
                </Text>
              </View>
              <View style={styles.detailsView}>
                <Text style={styles.detailsName}>Expense Ratio</Text>
                <Text style={styles.detailsPercentage}>
                  {data.expenseRatio}%
                </Text>
              </View>
              <View style={styles.detailsView}>
                <Text style={styles.detailsName}>Minimum Purchase Amount</Text>
                <Text style={styles.detailsPercentage}>{data.minPurchase}</Text>
              </View>
              <View style={styles.detailsView}>
                <Text style={styles.detailsName}>Minimum SIP Amount</Text>
                <Text style={styles.detailsPercentage}>
                  {data.minSIPAmount}
                </Text>
              </View>
              <View style={styles.detailsView}>
                <Text style={styles.detailsName}>Morning Star Data</Text>
                <TouchableOpacity onPress={() => handleLinkPress(data.msurl)}>
                  <Text style={styles.detailsPercentage}>Click here</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.detailsView}>
                <Text style={styles.detailsName}>Fundhouse</Text>
                <TouchableOpacity
                  onPress={() => handleLinkPress(data.fundHouse.website)}
                >
                  <Text style={styles.detailsPercentage}>
                    {data.fundHouse.name}
                  </Text>
                </TouchableOpacity>
              </View>
              {/* <View style={styles.detailsView}>
            <Text style={styles.detailsName}>Exit Load </Text>
            <Text style={styles.detailsPercentage}>
              Exit Load of 1 year if redeemed within 1 year
            </Text>
          </View> */}
              <View style={styles.detailsView}>
                <Text style={styles.detailsName}>Scheme Benchmark </Text>
                <Text style={styles.detailsPercentage}>{data.benchMark}</Text>
              </View>
            </View>
            {/* <Text style={styles.fundManagerHeader}>Fund Managers</Text> */}
            {/* <View style={styles.cart}>
          <Card style={styles.individualCarts}>
            <Avatar.Image
              size={width * 0.3}
              source={require("../../../assets/icon.png")}
              style={{ marginTop: height * 0.05, alignSelf: "center" }}
            />
            <Card.Content>
              <Text variant="titleLarge" style={styles.cardTitle}>
                Sarah James
              </Text>
              <Text variant="bodyMedium" style={styles.cardDesc}>
                Managing this fund since 7th Sep 2020.
              </Text>
              <Text variant="bodyMedium" style={styles.moreDetails}>
                See all schemes managed by Sarah James
              </Text>
            </Card.Content>
          </Card>
          <Card style={styles.individualCarts}>
            <Avatar.Image
              size={width * 0.3}
              source={require("../../../assets/icon.png")}
              style={{ marginTop: height * 0.05, alignSelf: "center" }}
            />
            <Card.Content>
              <Text variant="titleLarge" style={styles.cardTitle}>
                Sarah James
              </Text>
              <Text variant="bodyMedium" style={styles.cardDesc}>
                Managing this fund since 7th Sep 2020.
              </Text>

              <Text variant="bodyMedium" style={styles.moreDetails}>
                See all schemes managed by Sarah James
              </Text>
            </Card.Content>
          </Card>
        </View> */}
          </ScrollView>
        </>
      ) : (
        <>
          <Loader />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  overviewContainer: {
    backgroundColor: "white",
    flex: 1,
    // padding: width * 0.02,
  },
  headerContainer: {
    flexDirection: "row",
    marginTop: height * 0.01,
  },
  header: {
    margin: width * 0.01,
  },
  titleBox: {
    flex: 1, // This makes the title take up the available space
    // alignItems: "center", // Center horizontally
    justifyContent: "center", // Center vertically
    marginLeft: width * 0.02,
  },
  desc: {
    fontSize: width * 0.03,
    color: "rgba(2, 48, 71, 1)",
    fontWeight: "500",
    opacity: 0.6,
    lineHeight: height * 0.02,
  },
  view: {
    borderRightWidth: width * 0.003,
    borderColor: "orange",
    paddingRight: width * 0.08,
    margin: width * 0.032,
  },
  duration: {
    fontSize: width * 0.035,
    fontWeight: "500",
    lineHeight: height * 0.025,
    color: "rgba(0, 0, 0, 1)",
    opacity: 0.3,
  },
  percentage: {
    fontSize: width * 0.039,
    color: "rgba(73, 69, 79, 1)",
    fontWeight: "600",
    lineHeight: height * 0.03,
  },
  typeContainer: {
    flexDirection: "row",
    marginTop: height * 0.01,
    borderBottomWidth: width * 0.004,
    borderBottomColor: "rgb(230, 230, 230)",
    paddingBottom: height * 0.01,
  },
  detailsContainer: {
    flexDirection: "columns",
    marginBottom: height * 0.02,
  },
  detailsName: {
    fontSize: width * 0.035,
    fontWeight: "500",
    lineHeight: width * 0.045,
    color: "rgba(2, 48, 71, 1)",
    opacity: 0.6,
  },
  detailsPercentage: {
    fontSize: width * 0.036,
    color: "rgba(2, 48, 71, 1)",
    fontWeight: "500",
    lineHeight: height * 0.025,
  },
  detailsView: {
    borderBottomWidth: width * 0.004,
    borderBottomColor: "rgb(230, 230, 230)",
    margin: width * 0.02,
    paddingBottom: width * 0.02,
  },
  fundManagerHeader: {
    color: "rgba(2, 48, 71, 1)",
    fontSize: width * 0.046,
    fontWeight: "600",
    marginBottom: height * 0.01,
  },
  cart: {
    flexDirection: "row",
  },
  individualCarts: {
    margin: height * 0.01,
    width: width * 0.3,
    flex: 1,
    backgroundColor: "white",
  },
  cardTitle: {
    marginTop: height * 0.02,
    color: "rgba(0, 0, 0, 1)",
    fontSize: width * 0.046,
    lineHeight: height * 0.035,
    fontWeight: "600",
    textAlign: "center",
  },
  cardDesc: {
    marginTop: height * 0.015,
    color: "rgba(2, 48, 71, 1)",
    fontSize: width * 0.03,
    fontWeight: "500",
    textAlign: "center",
    lineHeight: height * 0.02,
    opacity: 0.6,
  },
  moreDetails: {
    color: "rgba(33, 158, 188, 1)",
    fontSize: width * 0.03,
    fontWeight: "600",
    textAlign: "center",
    lineHeight: height * 0.02,
  },
});
