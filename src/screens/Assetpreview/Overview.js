import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { height, width } from "../../Dimension";
import { Card, Button, Avatar } from "react-native-paper";

export default Overview = () => {
  return (
    <View style={styles.overviewContainer}>
      <ScrollView>
        <View style={styles.headerContainer}>
          <Image
            source={require("../../../assets/icon.png")}
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
                  lineHeight: height * 0.035,
                  textAlign: "left",
                },
              ]}
            >
              Axis Multicap Growth Fund
            </Text>
          </View>
        </View>
        <Text style={styles.desc}>
          Lorem impsome delmonto elsondn oklsdoliston amdelo toydj jojsdojf
          osjko.
        </Text>
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
            <Text style={styles.percentage}>31st Aug</Text>
          </View>
        </View>

        <View style={styles.detailsContainer}>
          <View style={styles.detailsView}>
            <Text style={styles.detailsName}>Scheme Asset Size</Text>
            <Text style={styles.detailsPercentage}>₹211.3 Cr</Text>
          </View>
          <View style={styles.detailsView}>
            <Text style={styles.detailsName}>Expense Ratio</Text>
            <Text style={styles.detailsPercentage}>20%</Text>
          </View>
          <View style={styles.detailsView}>
            <Text style={styles.detailsName}>Cash Holdings</Text>
            <Text style={styles.detailsPercentage}>22.8%</Text>
          </View>
          <View style={styles.detailsView}>
            <Text style={styles.detailsName}>Exit Load </Text>
            <Text style={styles.detailsPercentage}>
              Exit Load of 1 year if redeemed within 1 year
            </Text>
          </View>
          <View style={styles.detailsView}>
            <Text style={styles.detailsName}>Scheme Benchmark </Text>
            <Text style={styles.detailsPercentage}>
              Nifty Small Cap 250 total return index
            </Text>
          </View>
        </View>
        <Text style={styles.fundManagerHeader}>Fund Managers</Text>
        <View style={styles.cart}>
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
        </View>
      </ScrollView>
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
    // margin: width * 0.01,
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
    marginTop: height * 0.02,
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
