import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { height, width } from "../../Dimension";
import { Checkbox } from "react-native-paper";
import Header from "../Components/Header";
import Footerbutton from "./Footerbutton";

const Paymentoptions = () => {
  const [checkedNetBanking, setCheckedNetBanking] = React.useState(false);
  const [checkedUpiPayment, setCheckedUpiPayment] = React.useState(false);
  const [checkedOtherOptions, setCheckedOtherOptions] = React.useState(false);
  const [checkedOtherOptionsPay, setCheckedOtherOptionsPay] =
    React.useState(false);

  return (
    <View style={styles.portfolioContainer}>
      <Header title="Payment Options" />
      <View style={styles.bodyContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.axisBox}>
            <Text style={styles.headerText2}>Net Banking</Text>

            <View style={[styles.chartContainer]}>
              <View style={styles.bankingContainer}>
                <View style={styles.bankImage}>
                  <Image
                    source={require("../../../assets/paymentIcon/Clip-Path.png")}
                    style={{
                      width: width * 0.071,
                      height: height * 0.03,
                      resizeMode: "contain",
                      marginLeft: width * 0.023,
                      marginTop: height * 0.012,
                    }}
                  />
                </View>
                <Text
                  style={{
                    color: "rgba(2, 48, 71, 1)",
                    fontSize: width * 0.04,
                    fontWeight: "600",
                    lineHeight: height * 0.028,
                    textAlign: "left",
                    marginLeft: width * 0.06,
                  }}
                >
                  Axis Bank
                </Text>
                <View style={styles.Checkbox}>
                  <Checkbox
                    status={checkedNetBanking ? "checked" : "unchecked"}
                    onPress={() => {
                      setCheckedNetBanking(!checkedNetBanking);
                    }}
                  />
                </View>
              </View>
              <Text
                style={{
                  color: "rgba(2, 48, 71, 1)",
                  fontSize: width * 0.033,
                  fontWeight: "500",
                  lineHeight: height * 0.024,
                  textAlign: "left",
                  marginLeft: width * 0.18,
                  marginTop: height * -0.023,
                }}
              >
                A/C No: 439222222
              </Text>
              <View
                style={{
                  marginTop: width * 0.081,
                  borderBottomWidth: width * 0.001,
                  borderBottomColor: "rgba(2, 48, 71, 1)",
                }}
              ></View>
              <View style={{ marginTop: height * 0.035 }}>
                <View style={styles.bankingContainer}>
                  <View style={styles.bankImage}>
                    <Image
                      source={require("../../../assets/paymentIcon/Clip-Path.png")}
                      style={{
                        width: width * 0.071,
                        height: height * 0.03,
                        resizeMode: "contain",
                        marginLeft: width * 0.023,
                        marginTop: height * 0.012,
                      }}
                    />
                  </View>
                  <Text
                    style={{
                      color: "rgba(2, 48, 71, 1)",
                      fontSize: width * 0.04,
                      fontWeight: "600",
                      lineHeight: height * 0.028,
                      textAlign: "left",
                      marginLeft: width * 0.06,
                    }}
                  >
                    Axis Bank
                  </Text>
                  <View style={styles.Checkbox}>
                    <Checkbox
                      status={checkedNetBanking ? "checked" : "unchecked"}
                      onPress={() => {
                        setCheckedNetBanking(!checkedNetBanking);
                      }}
                    />
                  </View>
                </View>
                <Text
                  style={{
                    color: "rgba(2, 48, 71, 1)",
                    fontSize: width * 0.033,
                    fontWeight: "500",
                    lineHeight: height * 0.024,
                    textAlign: "left",
                    marginLeft: width * 0.18,
                    marginTop: height * -0.02,
                  }}
                >
                  A/C No: 439222222
                </Text>
              </View>
              <View
                style={{
                  marginTop: width * 0.081,
                  borderBottomWidth: width * 0.001,
                  borderBottomColor: "rgba(2, 48, 71, 1)",
                }}
              ></View>
              <View style={{ marginTop: height * 0.035 }}>
                <TouchableOpacity>
                  <View style={styles.bankingContainer}>
                    <View style={styles.bankImage}>
                      <Image
                        source={require("../../../assets/paymentIcon/Iconbutton.png")}
                        style={{
                          width: width * 0.071,
                          height: height * 0.03,
                          resizeMode: "contain",
                          marginLeft: width * 0.023,
                          marginTop: height * 0.012,
                        }}
                      />
                    </View>
                    <Text
                      style={{
                        color: "#219EBC",
                        fontSize: width * 0.04,
                        fontWeight: "600",
                        lineHeight: height * 0.028,
                        textAlign: "left",
                        marginLeft: width * 0.06,
                      }}
                    >
                      Add New Bank Account
                    </Text>
                  </View>
                  <Text
                    style={{
                      color: "rgba(2, 48, 71, 1)",
                      fontSize: width * 0.027,
                      fontWeight: "500",
                      lineHeight: height * 0.02,
                      textAlign: "left",
                      marginLeft: width * 0.18,
                      marginTop: height * -0.02,
                    }}
                  >
                    You need to have a registered Bank Account
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            <Text style={styles.headerText2}>UPI Payment</Text>

            <View
              style={[
                styles.chartContainer,
                { padding: width * 0.08, marginBottom: height * 0.01 },
              ]}
            >
              <View style={styles.bankingContainer}>
                <View style={styles.bankImage}>
                  <Image
                    source={require("../../../assets/paymentIcon/Frame.png")}
                    style={{
                      width: width * 0.071,
                      height: height * 0.03,
                      resizeMode: "contain",
                      marginLeft: width * 0.023,
                      marginTop: height * 0.012,
                    }}
                  />
                </View>
                <Text
                  style={{
                    color: "rgba(2, 48, 71, 1)",
                    fontSize: width * 0.04,
                    fontWeight: "600",
                    lineHeight: height * 0.028,
                    textAlign: "left",
                    marginLeft: width * 0.06,
                  }}
                >
                  xwerwer@okaxis
                </Text>
                <View style={styles.Checkbox2}>
                  <Checkbox
                    status={checkedUpiPayment ? "checked" : "unchecked"}
                    onPress={() => {
                      setCheckedUpiPayment(!checkedUpiPayment);
                    }}
                  />
                </View>
              </View>
              <View
                style={{
                  marginTop: width * 0.081,
                  borderBottomWidth: width * 0.001,
                  borderBottomColor: "rgba(2, 48, 71, 1)",
                }}
              ></View>
              <View style={{ marginTop: 27 }}>
                <View style={styles.bankingContainer}>
                  <View style={styles.bankImage}>
                    <Image
                      source={require("../../../assets/paymentIcon/Frame.png")}
                      style={[
                        styles.bankImage1,
                        {
                          width: width * 0.071,
                          height: height * 0.03,
                          resizeMode: "contain",
                          marginLeft: width * 0.023,
                          marginTop: height * 0.012,
                        },
                      ]}
                    />
                  </View>
                  <Text
                    style={{
                      color: "rgba(2, 48, 71, 1)",
                      fontSize: width * 0.04,
                      fontWeight: "600",
                      lineHeight: height * 0.028,
                      textAlign: "left",
                      marginLeft: width * 0.06,
                    }}
                  >
                    xwerwer@okaxis
                  </Text>
                  <View style={styles.Checkbox2}>
                    <Checkbox
                      status={checkedUpiPayment ? "checked" : "unchecked"}
                      onPress={() => {
                        setCheckedUpiPayment(!checkedUpiPayment);
                      }}
                    />
                  </View>
                </View>
              </View>
              <View
                style={{
                  marginTop: width * 0.081,
                  borderBottomWidth: width * 0.001,
                  borderBottomColor: "rgba(2, 48, 71, 1)",
                }}
              ></View>
              <View style={{ marginTop: 27 }}>
                <TouchableOpacity>
                  <View style={styles.bankingContainer}>
                    <View style={styles.bankImage}>
                      <Image
                        source={require("../../../assets/paymentIcon/Iconbutton.png")}
                        style={{
                          width: width * 0.071,
                          height: height * 0.03,
                          resizeMode: "contain",
                          marginLeft: width * 0.023,
                          marginTop: height * 0.012,
                        }}
                      />
                    </View>

                    <Text
                      style={{
                        color: "#219EBC",
                        fontSize: width * 0.04,
                        fontWeight: "600",
                        lineHeight: height * 0.028,
                        textAlign: "left",
                        marginLeft: width * 0.06,
                      }}
                    >
                      Add New UPI ID
                    </Text>
                  </View>
                  <Text
                    style={{
                      color: "rgba(2, 48, 71, 1)",
                      fontSize: width * 0.027,
                      fontWeight: "500",
                      lineHeight: height * 0.02,
                      textAlign: "left",
                      marginLeft: width * 0.18,
                      marginTop: height * -0.02,
                    }}
                  >
                    You need to have a registered UPI Id
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            <Text style={styles.headerText2}>Other options</Text>

            <View
              style={[
                styles.chartContainer,
                { padding: width * 0.08, marginBottom: height * 0.03 },
              ]}
            >
              <View style={styles.bankingContainer}>
                <View style={styles.bankImage}>
                  <Image
                    source={require("../../../assets/paymentIcon/Building-Bank.png")}
                    style={{
                      width: width * 0.071,
                      height: height * 0.03,
                      resizeMode: "contain",
                      marginLeft: width * 0.023,
                      marginTop: height * 0.012,
                    }}
                  />
                </View>
                <Text
                  style={{
                    color: "rgba(2, 48, 71, 1)",
                    fontSize: width * 0.04,
                    fontWeight: "600",
                    lineHeight: height * 0.028,
                    textAlign: "left",
                    marginLeft: width * 0.06,
                  }}
                >
                  NEFT / RTGS
                </Text>
                <View style={styles.Checkbox3}>
                  <Checkbox
                    status={checkedOtherOptions ? "checked" : "unchecked"}
                    onPress={() => {
                      setCheckedOtherOptions(!checkedOtherOptions);
                    }}
                  />
                </View>
              </View>
              <Text
                style={{
                  color: "rgba(2, 48, 71, 1)",
                  fontSize: width * 0.033,
                  fontWeight: "500",
                  lineHeight: height * 0.024,
                  textAlign: "left",
                  marginLeft: width * 0.17,
                  marginTop: height * -0.023,
                }}
              >
                Lorem ipsum
              </Text>
              <View
                style={{
                  marginTop: width * 0.081,
                  borderBottomWidth: width * 0.001,
                  borderBottomColor: "rgba(2, 48, 71, 1)",
                }}
              ></View>
              <View style={{ marginTop: 27 }}>
                <View style={styles.bankingContainer}>
                  <View style={styles.bankImage}>
                    <Image
                      source={require("../../../assets/paymentIcon/Shape2.png")}
                      style={[
                        styles.bankImage1,
                        {
                          width: width * 0.071,
                          height: height * 0.03,
                          resizeMode: "contain",
                          marginLeft: width * 0.023,
                          marginTop: height * 0.012,
                        },
                      ]}
                    />
                  </View>
                  <Text
                    style={{
                      color: "rgba(2, 48, 71, 1)",
                      fontSize: width * 0.04,
                      fontWeight: "600",
                      lineHeight: height * 0.028,
                      textAlign: "left",
                      marginLeft: width * 0.06,
                    }}
                  >
                    Pay Through Mandate
                  </Text>
                  <View style={styles.Checkbox4}>
                    <Checkbox
                      status={checkedOtherOptionsPay ? "checked" : "unchecked"}
                      onPress={() => {
                        setCheckedOtherOptionsPay(!checkedOtherOptionsPay);
                      }}
                    />
                  </View>
                </View>
                <Text
                  style={{
                    color: "rgba(2, 48, 71, 1)",
                    fontSize: width * 0.033,
                    fontWeight: "500",
                    lineHeight: height * 0.024,
                    textAlign: "left",
                    marginLeft: width * 0.17,
                    marginTop: height * -0.02,
                  }}
                >
                  Lorem ipsum
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
        <Footerbutton />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  portfolioContainer: {
    flex: 1,
    backgroundColor: "white",
  },

  bodyContainer: {
    justifyContent: "center",
    margin: width * 0.053,
  },

  headerText2: {
    color: "#023047",
    fontWeight: "600",
    fontSize: width * 0.037,
    marginTop: height * 0.032,
    marginBottom: height * 0.032,
  },
  chartContainer: {
    padding: width * 0.04,
    backgroundColor: "white",
    borderWidth: width * 0.002,
    borderRadius: width * 0.045,
    borderColor: "rgb(230, 230, 230)",
    elevation: width * 0.005,
  },
  bankingContainer: {
    flexDirection: "row",
  },
  bankImage: {
    backgroundColor: "white",
    borderWidth: width * 0.003,
    borderRadius: width * 0.016,
    borderColor: "rgb(230, 230, 230)",
    marginBottom: height * 0.005,
    height: height * 0.055,
    width: width * 0.12,
  },
  Checkbox: {
    marginLeft: width * 0.31,
  },
  Checkbox2: {
    marginLeft: width * 0.18,
  },
  Checkbox3: {
    marginLeft: width * 0.26,
  },
  Checkbox4: {
    marginLeft: width * 0.09,
  },
});

export default Paymentoptions;
