import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import { height, width } from "../../Dimension";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { TextInput, Button, Checkbox } from "react-native-paper";
import { Picker } from "@react-native-picker/picker";
import { useRoute, useNavigation } from "@react-navigation/native";
import Loader from "../Components/Loader";
import Formatfundname from "../Components/Formatfundname";
import { useFonts } from "expo-font";
import {
  Mfubanksdata,
  Redeemholding,
} from "../../api/services/endpoints/buyEndpoints";
import { Switchfund } from "../../api/services/endpoints/exploreEndpoints";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Yearmonthday } from "../Components/Formatdate";

export default Switch = () => {
  const [check, setCheck] = useState(true);
  const [redeemOption, setRedeemOption] = useState("Amount");
  const route = useRoute();
  const { mfData, holdingDatas } = route.params;
  const navigation = useNavigation();
  const [amountInput, setAmountInput] = useState("0");
  const [unitsInput, setUnitsInput] = useState("0");
  const [loader, setLoader] = useState(false);
  const [frequency, setFrequency] = useState("one-time");
  const [noOfInstallments, setNoOfInstallments] = useState("6");
  const [startdate, setStartdate] = useState("");
  const [enddate, setEnddate] = useState("");
  const [date, setDate] = useState(new Date());
  const [date2, setDate2] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showStartDatePicker, setShowStartDatePicker] = useState(false);

  const [fontsLoaded] = useFonts({
    "Inter-Black": require("../../../assets/fonts/metropolis-latin-500-normal.ttf"),
  });

  //   useEffect(() => {
  //     const data = {
  //       action: "checkHoldingForMf",
  //       id: mfId,
  //     };
  //     checkHoldingForMf(data)
  //       .then((response) => {
  //         // if (response.data.success) {
  //         //   setBanks(response.data.additionlBankArray);
  //         // }
  //         console.log("ssssssss", response.data);
  //       })
  //       .catch((e) => {
  //         console.log(e);
  //       });
  //   }, []);

  const handleOption = (itemValue) => {
    setRedeemOption(itemValue);
    if (itemValue == "Units") {
      setAmountInput("0");
      setEnddate("");
      setStartdate("");
      setFrequency("one-time");
    } else {
      setUnitsInput("0");
    }
  };

  const handleSubmit = () => {
    setLoader(true);
    const data = {
      action: "stpRegister",
      additional: false,
      holdingId: holdingDatas.id,
      mutualfundId: holdingDatas.mutualFund.id,
      toMutualfundId: mfData.id,
      startDate: startdate,
      frequencyType: frequency,
      amount: amountInput,
      noOfInstallments: noOfInstallments,
      switchAll: check,
      quantity: unitsInput,
      stpAmc: 1,
      endDate: enddate,
    };
    Switchfund(data)
      .then((response) => {
        // console.log("switch data", response.data);
        if (response.data.success) {
          Alert.alert("Success");
          setLoader(false);
        } else {
          Alert.alert("Failed", response.data.error);
          setLoader(false);
        }
      })
      .catch((e) => {
        Alert.alert("Failed", e);
        setLoader(false);
      });
  };

  const handleCheck = () => {
    setCheck(!check);
    setAmountInput("0");
    setUnitsInput("0");
    setEnddate("");
    setStartdate("");
    setFrequency("one-time");
  };

  const handleDatePress = (type) => {
    if (type == "endDate") {
      setShowDatePicker(true);
    } else {
      setShowStartDatePicker(true);
    }
  };

  const handleChange = (value, type) => {
    if (type == "endDate") {
      setShowDatePicker(false);
      setEnddate(Yearmonthday(value));
    } else {
      setShowStartDatePicker(false);
      setStartdate(Yearmonthday(value));
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <View style={styles.contentContainer}>
          <Ionicons
            name="arrow-back"
            size={width * 0.08}
            color="white"
            onPress={() => navigation.goBack()}
            style={styles.item}
          />
          <Text style={[styles.item, styles.goal]}>Switch / STP </Text>
        </View>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="always"
      >
        {Object.keys(mfData).length > 0 ? (
          <>
            <View style={styles.axisBox}>
              <View>
                <View style={styles.headerContainer}>
                  <Image
                    source={{ uri: holdingDatas.mutualFund.fundHouse.logoUrl }}
                    style={{
                      width: width * 0.13,
                      height: height * 0.055,
                      resizeMode: "contain",
                      justifyContent: "center",
                      alignSelf: "center",
                    }}
                  />
                  <View style={styles.titleBox}>
                    <Text
                      style={{
                        color: "rgba(2, 48, 71, 1)",
                        fontSize: width * 0.045,
                        fontFamily: "Inter-Black",
                        fontWeight: "600",
                        lineHeight: height * 0.035,
                        textAlign: "left",
                      }}
                    >
                      {Formatfundname(holdingDatas.mutualFund.name)}
                    </Text>
                  </View>
                </View>
                <View style={styles.table}>
                  <View style={styles.row}>
                    <Text style={styles.cell}>Folio Number</Text>
                    <Text style={styles.cell}>
                      {holdingDatas.folioNumberString}
                    </Text>
                  </View>
                  <View style={styles.row}>
                    <Text style={styles.cell}>Current Value</Text>
                    <Text style={styles.cell}>
                      {holdingDatas.currValue &&
                        holdingDatas.currValue.toFixed(2)}
                    </Text>
                  </View>
                  <View style={styles.row}>
                    <Text style={styles.cell}>Current Nav</Text>
                    <Text style={styles.cell}>
                      {holdingDatas.mutualFund.nav &&
                        holdingDatas.mutualFund.nav.toFixed(2)}
                    </Text>
                  </View>
                  <View style={styles.row}>
                    <Text style={styles.cell}>Units</Text>

                    <Text style={styles.cell}>{holdingDatas.units}</Text>
                  </View>

                  <View style={[styles.row, { borderBottomWidth: 0 }]}>
                    <Text style={styles.cell}>
                      {holdingDatas.mutualFund.schemeType == "ELSS" ||
                      holdingDatas.mutualFund.type == "ELSS" ||
                      holdingDatas.mutualFund.schemeType == "DEBT" ||
                      holdingDatas.mutualFund.type == "DEBT"
                        ? holdingDatas.actionOnUnitsTextThree
                        : holdingDatas.actionOnUnitsTextOne}
                    </Text>
                    <Text style={styles.cell}>
                      {holdingDatas.mutualFund.schemeType == "ELSS" ||
                      holdingDatas.mutualFund.type == "ELSS" ||
                      holdingDatas.mutualFund.schemeType == "DEBT" ||
                      holdingDatas.mutualFund.type == "DEBT"
                        ? holdingDatas.actionontotalunitsThree
                        : holdingDatas.actionontotalunitsOne}
                    </Text>
                  </View>
                </View>
                <MaterialCommunityIcons
                  name="chevron-double-down"
                  style={styles.dowArrow}
                />
                <View style={styles.toheaderContainer}>
                  <Image
                    source={{ uri: mfData.fundHouse.logoUrl }}
                    style={{
                      width: width * 0.13,
                      height: height * 0.055,
                      resizeMode: "contain",
                      justifyContent: "center",
                      alignSelf: "center",
                    }}
                  />
                  <View style={styles.titleBox}>
                    <Text
                      style={{
                        color: "rgba(2, 48, 71, 1)",
                        fontSize: width * 0.045,
                        fontFamily: "Inter-Black",
                        fontWeight: "600",
                        lineHeight: height * 0.035,
                        textAlign: "left",
                      }}
                    >
                      {Formatfundname(mfData.name)}
                    </Text>
                  </View>
                </View>
                <View style={styles.bottomContainer}>
                  <View style={styles.typeContainer}>
                    <Checkbox
                      status={check ? "checked" : "unchecked"}
                      onPress={handleCheck}
                    />
                    <Text style={styles.percentage}>Switch All</Text>
                  </View>

                  {!check && (
                    <View style={{ marginTop: height * 0.02 }}>
                      <Text style={styles.header}>Choose Option</Text>
                      <TouchableOpacity style={styles.dropdown}>
                        <Picker
                          selectedValue={redeemOption}
                          onValueChange={(itemValue, itemIndex) =>
                            handleOption(itemValue)
                          }
                          mode="dropdown"
                        >
                          <Picker.Item label="Amount" value="Amount" />
                          <Picker.Item label="Units" value="Units" />
                        </Picker>
                      </TouchableOpacity>
                      {redeemOption == "Amount" ? (
                        <>
                          <Text
                            style={[
                              styles.header,
                              { marginTop: height * 0.01 },
                            ]}
                          >
                            Select Frequency
                          </Text>
                          <TouchableOpacity style={styles.dropdown}>
                            <Picker
                              selectedValue={frequency}
                              onValueChange={(itemValue, itemIndex) =>
                                setFrequency(itemValue)
                              }
                              mode="dropdown"
                            >
                              <Picker.Item label="One Time" value="one-time" />
                              <Picker.Item label="Daily" value="D" />
                              <Picker.Item label="Monthly" value="M" />
                              <Picker.Item label="Quarterly" value="Q" />
                            </Picker>
                          </TouchableOpacity>
                          <TextInput
                            mode="outlined"
                            value={amountInput}
                            placeholder="Enter Amount"
                            outlineStyle={styles.outline}
                            theme={styles.themeStyle}
                            style={styles.input}
                            keyboardType="number-pad"
                            onChangeText={(e) => setAmountInput(e)}
                          />
                          {frequency != "one-time" && (
                            <TouchableOpacity
                              onPress={() => handleDatePress("endDate")}
                            >
                              <TextInput
                                label="End Date"
                                mode="outlined"
                                placeholder="End Date"
                                placeholderTextColor="rgb(191, 191, 191)"
                                value={enddate}
                                editable={false}
                                style={styles.input}
                                outlineStyle={styles.outline}
                                theme={styles.themeStyle}
                                contentStyle={styles.contentStyle}
                              />
                            </TouchableOpacity>
                          )}

                          {showDatePicker && (
                            <DateTimePicker
                              value={date}
                              mode="date"
                              display="default"
                              onChange={(e, value) =>
                                handleChange(value, "endDate")
                              }
                            />
                          )}

                          {frequency != "one-time" && frequency != "D" && (
                            <TouchableOpacity
                              onPress={() => handleDatePress("startDate")}
                            >
                              <TextInput
                                label="Start Date"
                                mode="outlined"
                                placeholder="Start Date"
                                placeholderTextColor="rgb(191, 191, 191)"
                                value={startdate}
                                editable={false}
                                style={styles.input}
                                outlineStyle={styles.outline}
                                theme={styles.themeStyle}
                                contentStyle={styles.contentStyle}
                              />
                            </TouchableOpacity>
                          )}

                          {showStartDatePicker && (
                            <DateTimePicker
                              value={date2}
                              mode="date"
                              display="default"
                              onChange={(e, value) =>
                                handleChange(value, "startDate")
                              }
                            />
                          )}
                        </>
                      ) : (
                        <TextInput
                          mode="outlined"
                          value={unitsInput}
                          placeholder="Enter Units"
                          outlineStyle={styles.outline}
                          theme={styles.themeStyle}
                          style={styles.input}
                          keyboardType="number-pad"
                          onChangeText={(e) => setUnitsInput(e)}
                        />
                      )}
                    </View>
                  )}

                  <View
                    style={{
                      marginTop: height * 0.02,
                      marginBottom: height * 0.05,
                    }}
                  >
                    {loader ? (
                      <Loader />
                    ) : (
                      <TouchableOpacity onPress={() => handleSubmit(mfData.id)}>
                        <Button mode="contained" style={styles.Button}>
                          {frequency != "one-time" ? "Start STP" : "Switch"}
                        </Button>
                      </TouchableOpacity>
                    )}
                  </View>
                </View>
              </View>
            </View>
          </>
        ) : (
          <>
            <Loader />
          </>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    backgroundColor: "white",
  },
  container1: {
    backgroundColor: "rgba(2, 48, 71, 1)",
    width: width,
    height: height * 0.17,
    borderColor: "rgba(0, 0, 0, 0.3)",
    borderRadius: width * 0.06,
  },
  contentContainer: {
    flexDirection: "row",
    padding: width * 0.02,
    marginTop: height * 0.025,
  },

  item: {
    marginTop: height * 0.06,
    margin: width * 0.03,
    flex: 1,
  },
  goal: {
    marginLeft: -width * 0.55,
    color: "rgba(255, 255, 255, 1)",
    fontFamily: "Inter-Black",
    fontWeight: "600",
    fontSize: width * 0.045,
    lineHeight: height * 0.04,
  },

  axisBox: {
    borderWidth: width * 0.003,
    borderColor: "#D9D9D9",
    borderRadius: width * 0.042,
    margin: width * 0.04,
  },

  header: {
    fontSize: width * 0.045,
    color: "rgba(2, 48, 71, 1)",
    fontFamily: "Inter-Black",
    fontWeight: "500",
    marginBottom: height * 0.015,
    opacity: 0.6,
  },

  inputContainer: {
    marginTop: height * 0.2,
    paddingLeft: width * 0.04,
    position: "absolute",
  },
  headerContainer: {
    flexDirection: "row",
    padding: width * 0.025,
  },

  toheaderContainer: {
    flexDirection: "row",
    padding: width * 0.025,
  },

  titleBox: {
    flex: 1,
    justifyContent: "center",
    marginLeft: width * 0.02,
  },
  desc: {
    fontSize: width * 0.03,
    color: "#023047",
    fontFamily: "Inter-Black",
    fontWeight: "500",
    opacity: 0.6,
    lineHeight: height * 0.02,
    padding: width * 0.04,
  },

  percentage: {
    fontSize: width * 0.037,
    color: "rgba(2, 48, 71, 1)",
    fontFamily: "Inter-Black",
    fontWeight: "600",
    lineHeight: height * 0.03,
    padding: width * 0.01,
  },
  typeContainer: {
    flexDirection: "row",
  },

  detailsView: {
    borderBottomWidth: width * 0.004,
    borderBottomColor: "rgb(230, 230, 230)",
    margin: width * 0.02,
    paddingBottom: width * 0.02,
  },

  input: {
    borderRadius: width * 0.05,
    marginTop: height * 0.02,
    fontSize: width * 0.043,
  },
  outline: {
    backgroundColor: "white",
    borderColor: "rgb(191, 191, 191)",
  },
  themeStyle: {
    colors: {
      primary: "rgba(2, 48, 71, 1)",
    },
  },
  contentStyle: {
    color: "rgba(2, 48, 71, 1)",
    fontFamily: "Inter-Black",
    fontWeight: "600",
  },
  dropdown: {
    borderWidth: height * 0.0015,
    borderRadius: width * 0.02,
    borderColor: "rgb(191, 191, 191)",
  },
  Picker: {
    // color: "rgb(191, 191, 191)",
  },

  flexContainer: {
    flexDirection: "row",
    marginTop: height * 0.026,
  },

  percentage1: {
    color: "rgba(35, 179, 113, 1)",
    fontFamily: "Inter-Black",
    fontWeight: "600",
    fontSize: width * 0.035,
  },

  rangeText: {
    flex: 1,
    textAlign: "right",
    color: "#023047",
    lineHeight: height * 0.025,
    fontSize: width * 0.035,
    fontFamily: "Inter-Black",
    fontWeight: "500",
    opacity: 0.8,
  },
  rangeTextPercentage: {
    flex: 1,
    textAlign: "left",
    color: "rgba(73, 69, 79, 1)",
    lineHeight: height * 0.03,
    fontSize: width * 0.04,
    fontFamily: "Inter-Black",
    fontWeight: "600",
    width: width * 0.373,
    borderWidth: width * 0.001,
    marginLeft: width * 0.2,
    borderColor: "#48484A",
    borderRadius: width * 0.021,
    padding: width * 0.04,
  },
  Button: {
    alignItems: "center",
    borderRadius: width * 0.03,
    borderWidth: 1,
    borderColor: "#023047",
    padding: width * 0.01,
    backgroundColor: "#023047",
    marginTop: height * 0.04,
  },
  table: {
    borderWidth: width * 0.001,
    marginVertical: height * 0.02,
    borderRadius: width * 0.02,
  },
  row: {
    flexDirection: "row",
    borderBottomWidth: width * 0.001,
  },
  cell: {
    flex: 1,
    padding: width * 0.03,
    textAlign: "center",
  },
  dowArrow: {
    textAlign: "center",
    fontSize: width * 0.08,
  },
  bottomContainer: {
    padding: width * 0.025,
  },
});
