import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { width, height } from "../../Dimension";
import { Picker } from "@react-native-picker/picker";
import { Entypo } from "@expo/vector-icons";
import { Button, TextInput } from "react-native-paper";
import { AntDesign } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";
import Download from "./Download";
import { useSelector } from "react-redux";
import {
  Capitalgain,
  Transaction,
  Elss,
  Holdingsummary,
  Dividend,
  Portfoliovaluation,
  Portfoliostatement,
} from "./Data";
import { useFonts } from "expo-font";
import Share from "../Components/Sharefile";
import Loader from "../Components/Loader";
const Reports = () => {
  const [holdingtype, setHoldingtype] = useState("0");
  const [detailed, setDetailed] = useState("0");
  const [holdingwithbalance, setHoldingwithbalance] = useState("0");
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [userwise, setUserwise] = useState("0");
  const [allholdingtype, setAllholdingtype] = useState("2");
  const [includeredeem, setIncluderedeem] = useState("1");
  const [capitalgain, setCapitalgain] = useState("2023");
  const [downloadyear, SetDownloadyear] = useState("2023");
  const [transaction, setTransaction] = useState("2023");
  const [elsstransaction, setElsstransaction] = useState("2023");
  const [dividend, setDividend] = useState("2023");
  const [category, setCategory] = useState("");
  const [loader, setLoader] = useState(false);

  const pdfUrl = Capitalgain(capitalgain);
  const tpdfUrl = Transaction(transaction);
  const elsspdfUrl = Elss(elsstransaction);
  const hpdfUrl = Holdingsummary();
  const dpdfUrl = Dividend(dividend);
  const pvpdfUrl = Portfoliovaluation(
    date,
    userwise,
    allholdingtype,
    includeredeem
  );
  const pspdfUrl = Portfoliostatement(
    holdingtype,
    detailed,
    holdingwithbalance
  );

  const handleDatePress = () => {
    setShowDatePicker(true);
  };

  const handleDateChange = (event, selectedDate) => {
    currentDate = selectedDate || date;
    setShowDatePicker(false);
    setDate(currentDate);
  };

  const handleDownload = (value, categories) => {
    if (categories == "capitalgain") {
      setCapitalgain(value);
      setCategory("capitalgain");
      SetDownloadyear(value);
    } else if (categories == "transaction") {
      setTransaction(value);
      setCategory("transaction");
      SetDownloadyear(value);
    } else if (categories == "80C MF") {
      setElsstransaction(value);
      setCategory("80C MF");
      SetDownloadyear(value);
    } else if (categories == "dividend") {
      setDividend(value);
      setCategory("dividend");
      SetDownloadyear(value);
    }
  };

  const DownloadPdfs = (categories) => {
    setLoader(true);
    const type = "download";
    if (categories == "capitalgain") {
      Download(pdfUrl, categories, downloadyear, type).then((response) => {
        setLoader(false);
      });
    } else if (categories == "transaction") {
      Download(tpdfUrl, categories, downloadyear, type).then((response) => {
        setLoader(false);
      });
    } else if (categories == "80C MF") {
      Download(elsspdfUrl, categories, downloadyear, type).then((response) => {
        setLoader(false);
      });
    } else if (categories == "holding summary") {
      Download(hpdfUrl, categories, undefined, type).then((response) => {
        setLoader(false);
      });
    } else if (categories == "dividend") {
      Download(dpdfUrl, categories, downloadyear, type).then((response) => {
        setLoader(false);
      });
    } else if (categories == "portfolio valuation") {
      Download(pvpdfUrl, categories, undefined, type).then((response) => {
        setLoader(false);
      });
    } else if (categories == "portfolio statement") {
      Download(pspdfUrl, categories, undefined, type).then((response) => {
        setLoader(false);
      });
    }
  };

  const sharePdfs = async (categories) => {
    const type = "share";
    let response = "";
    if (categories == "capitalgain") {
      response = Download(pdfUrl, categories, downloadyear, type);
    } else if (categories == "transaction") {
      response = Download(tpdfUrl, categories, downloadyear, type);
    } else if (categories == "80C MF") {
      response = Download(elsspdfUrl, categories, downloadyear, type);
    } else if (categories == "holding summary") {
      response = Download(hpdfUrl, categories, undefined, type);
    } else if (categories == "dividend") {
      response = Download(dpdfUrl, categories, downloadyear, type);
    } else if (categories == "portfolio valuation") {
      response = Download(pvpdfUrl, categories, undefined, type);
    } else if (categories == "portfolio statement") {
      response = Download(pspdfUrl, categories, undefined, type);
    }
    return response;
  };

  const [fontsLoaded] = useFonts({
    "Inter-Black": require("../../../assets/fonts/metropolis-latin-500-normal.ttf"),
  });

  const handleShare = (categories) => {
    setLoader(true);
    sharePdfs(categories)
      .then((response) => {
        setLoader(false);
        Share(response);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps="always"
      style={styles.container}
    >
      {!loader ? (
        <View style={styles.cart}>
          <View style={styles.individualCarts}>
            <ImageBackground
              source={require("../../../assets/topImage.png")}
              resizeMode="stretch"
            >
              <Text style={styles.desc}> Portfolio Statement</Text>
            </ImageBackground>
            <View style={styles.dropdownContainer}>
              <TouchableOpacity
                style={[styles.dropdown, { marginTop: height * 0.005 }]}
              >
                <Picker
                  selectedValue={holdingtype}
                  onValueChange={(itemValue) => setHoldingtype(itemValue)}
                  mode="dropdown"
                  style={styles.Picker}
                >
                  <Picker.Item value="0" label="All Holding Type" />
                  <Picker.Item value="1" label="Internal Holding Type" />
                </Picker>
              </TouchableOpacity>

              <TouchableOpacity style={[styles.dropdown]}>
                <Picker
                  selectedValue={detailed}
                  onValueChange={(itemValue) => setDetailed(itemValue)}
                  mode="dropdown"
                  style={styles.Picker}
                >
                  <Picker.Item value="0" label="Detailed" />
                  <Picker.Item value="1" label="Summary" />
                </Picker>
              </TouchableOpacity>

              <TouchableOpacity style={[styles.dropdown]}>
                <Picker
                  selectedValue={holdingwithbalance}
                  onValueChange={(itemValue) =>
                    setHoldingwithbalance(itemValue)
                  }
                  mode="dropdown"
                  style={styles.Picker}
                >
                  <Picker.Item value="0" label="Holdings With Balance" />
                  <Picker.Item value="1" label="All Holdings" />
                </Picker>
              </TouchableOpacity>
              <View style={styles.shareContainer}>
                <Button
                  mode="contained"
                  onPress={() => DownloadPdfs("portfolio statement")}
                  style={styles.downloadPdf}
                >
                  <Entypo name="download" size={20} color="white" />
                  {"    "}
                  <AntDesign name="pdffile1" size={20} color="white" />
                </Button>
                <Button
                  mode="contained"
                  onPress={() => handleShare("portfolio statement")}
                  style={styles.downloadPdf}
                >
                  <Entypo name="share" size={20} color="white" />
                  {"    "}
                  <AntDesign name="pdffile1" size={20} color="white" />
                </Button>
              </View>
            </View>
          </View>

          <View style={styles.individualCarts}>
            <ImageBackground
              source={require("../../../assets/topImage.png")}
              resizeMode="stretch"
            >
              <Text style={styles.desc}> Valuation Report</Text>
            </ImageBackground>
            <View style={styles.dropdownContainer}>
              <TouchableOpacity onPress={handleDatePress}>
                <TextInput
                  mode="outlined"
                  placeholder="Portfolio As On Date"
                  placeholderTextColor="rgb(191, 191, 191)"
                  value={date.toDateString()}
                  editable={false}
                  style={styles.input}
                  outlineStyle={styles.outline}
                  theme={styles.themeStyle}
                  contentStyle={styles.contentStyle}
                />
              </TouchableOpacity>
              {showDatePicker && (
                <DateTimePicker
                  value={date}
                  mode="date"
                  display="default"
                  onChange={(event, selectedDate) =>
                    handleDateChange(event, selectedDate)
                  }
                />
              )}
              <TouchableOpacity
                style={[styles.dropdown, { marginTop: height * 0.005 }]}
              >
                <Picker
                  selectedValue={userwise}
                  onValueChange={(itemValue) => setUserwise(itemValue)}
                  mode="dropdown"
                  style={styles.Picker}
                >
                  <Picker.Item value="0" label="User Wise" />
                  <Picker.Item value="1" label="Family Wise" />
                </Picker>
              </TouchableOpacity>

              <TouchableOpacity style={[styles.dropdown]}>
                <Picker
                  selectedValue={allholdingtype}
                  onValueChange={(itemValue) => setAllholdingtype(itemValue)}
                  mode="dropdown"
                  style={styles.Picker}
                >
                  <Picker.Item value="2" label="All Holding Type" />
                  <Picker.Item value="0" label="Internal Holding Type" />
                  <Picker.Item value="1" label="External Holding Type" />
                </Picker>
              </TouchableOpacity>

              <TouchableOpacity style={[styles.dropdown]}>
                <Picker
                  selectedValue={includeredeem}
                  onValueChange={(itemValue) => setIncluderedeem(itemValue)}
                  mode="dropdown"
                  style={styles.Picker}
                >
                  <Picker.Item value="1" label="Include Redeemed Units" />
                  <Picker.Item value="0" label="Exclude Redeemed Units" />
                </Picker>
              </TouchableOpacity>
              <View style={styles.shareContainer}>
                <Button
                  mode="contained"
                  onPress={() => DownloadPdfs("portfolio valuation")}
                  style={styles.downloadPdf}
                >
                  <Entypo name="download" size={20} color="white" />
                  {"    "}
                  <AntDesign name="pdffile1" size={20} color="white" />
                </Button>
                <Button
                  mode="contained"
                  onPress={() => handleShare("portfolio valuation")}
                  style={styles.downloadPdf}
                >
                  <Entypo name="share" size={20} color="white" />
                  {"    "}
                  <AntDesign name="pdffile1" size={20} color="white" />
                </Button>
              </View>
            </View>
          </View>

          <View style={styles.individualCarts}>
            <ImageBackground
              source={require("../../../assets/topImage.png")}
              resizeMode="stretch"
            >
              <Text style={styles.desc}> Capital Gain Report</Text>
            </ImageBackground>
            <View style={styles.dropdownContainer}>
              <TouchableOpacity
                style={[styles.dropdown, { marginTop: height * 0.005 }]}
              >
                <Picker
                  selectedValue={capitalgain}
                  onValueChange={(itemValue) =>
                    handleDownload(itemValue, "capitalgain")
                  }
                  mode="dropdown"
                  style={styles.Picker}
                >
                  <Picker.Item value="2023" label="2023-2024" />
                  <Picker.Item value="2022" label="2022-2023" />
                  <Picker.Item value="2021" label="2021-2022" />
                  <Picker.Item value="2020" label="2020-2021" />
                  <Picker.Item value="2019" label="2019-2020" />
                  <Picker.Item value="2018" label="2018-2019" />
                </Picker>
              </TouchableOpacity>

              <View style={styles.shareContainer}>
                <Button
                  mode="contained"
                  onPress={() => DownloadPdfs("capitalgain")}
                  style={styles.downloadPdf}
                >
                  <Entypo name="download" size={20} color="white" />
                  {"    "}
                  <AntDesign name="pdffile1" size={20} color="white" />
                </Button>

                <Button
                  mode="contained"
                  onPress={() => handleShare("capitalgain")}
                  style={styles.downloadPdf}
                >
                  <Entypo name="share" size={20} color="white" />
                  {"    "}
                  <AntDesign name="pdffile1" size={20} color="white" />
                </Button>
              </View>
            </View>
          </View>

          <View style={styles.individualCarts}>
            <ImageBackground
              source={require("../../../assets/topImage.png")}
              resizeMode="stretch"
            >
              <Text style={styles.desc}> Transaction Report</Text>
            </ImageBackground>
            <View style={styles.dropdownContainer}>
              <TouchableOpacity
                style={[styles.dropdown, { marginTop: height * 0.005 }]}
              >
                <Picker
                  selectedValue={transaction}
                  onValueChange={(itemValue) =>
                    handleDownload(itemValue, "transaction")
                  }
                  mode="dropdown"
                  style={styles.Picker}
                >
                  <Picker.Item value="2023" label="2023-2024" />
                  <Picker.Item value="2022" label="2022-2023" />
                  <Picker.Item value="2021" label="2021-2022" />
                  <Picker.Item value="2020" label="2020-2021" />
                  <Picker.Item value="2019" label="2019-2020" />
                  <Picker.Item value="2018" label="2018-2019" />
                </Picker>
              </TouchableOpacity>
              <View style={styles.shareContainer}>
                <Button
                  mode="contained"
                  onPress={() => DownloadPdfs("transaction")}
                  style={styles.downloadPdf}
                >
                  <Entypo name="download" size={20} color="white" />
                  {"    "}
                  <AntDesign name="pdffile1" size={20} color="white" />
                </Button>
                <Button
                  mode="contained"
                  onPress={() => handleShare("transaction")}
                  style={styles.downloadPdf}
                >
                  <Entypo name="share" size={20} color="white" />
                  {"    "}
                  <AntDesign name="pdffile1" size={20} color="white" />
                </Button>
              </View>
            </View>
          </View>

          <View style={styles.individualCarts}>
            <ImageBackground
              source={require("../../../assets/topImage.png")}
              resizeMode="stretch"
            >
              <Text style={styles.desc}> 80C MF Transaction Report</Text>
            </ImageBackground>
            <View style={styles.dropdownContainer}>
              <TouchableOpacity
                style={[styles.dropdown, { marginTop: height * 0.005 }]}
              >
                <Picker
                  selectedValue={elsstransaction}
                  onValueChange={(itemValue) =>
                    handleDownload(itemValue, "80C MF")
                  }
                  mode="dropdown"
                  style={styles.Picker}
                >
                  <Picker.Item value="2023" label="2023-2024" />
                  <Picker.Item value="2022" label="2022-2023" />
                  <Picker.Item value="2021" label="2021-2022" />
                  <Picker.Item value="2020" label="2020-2021" />
                  <Picker.Item value="2019" label="2019-2020" />
                  <Picker.Item value="2018" label="2018-2019" />
                </Picker>
              </TouchableOpacity>
              <View style={styles.shareContainer}>
                <Button
                  mode="contained"
                  onPress={() => DownloadPdfs("80C MF")}
                  style={styles.downloadPdf}
                >
                  <Entypo name="download" size={20} color="white" />
                  {"    "}
                  <AntDesign name="pdffile1" size={20} color="white" />
                </Button>
                <Button
                  mode="contained"
                  onPress={() => handleShare("80C MF")}
                  style={styles.downloadPdf}
                >
                  <Entypo name="share" size={20} color="white" />
                  {"    "}
                  <AntDesign name="pdffile1" size={20} color="white" />
                </Button>
              </View>
            </View>
          </View>

          <View style={styles.individualCarts}>
            <ImageBackground
              source={require("../../../assets/topImage.png")}
              resizeMode="stretch"
            >
              <Text style={styles.desc}> Holding Summary Report</Text>
            </ImageBackground>
            <View style={styles.dropdownContainer}>
              <View style={styles.shareContainer}>
                <Button
                  mode="contained"
                  onPress={() => DownloadPdfs("holding summary")}
                  style={styles.downloadPdf}
                >
                  <Entypo name="download" size={20} color="white" />
                  {"    "}
                  <AntDesign name="pdffile1" size={20} color="white" />
                </Button>
                <Button
                  mode="contained"
                  onPress={() => handleShare("holding summary")}
                  style={styles.downloadPdf}
                >
                  <Entypo name="share" size={20} color="white" />
                  {"    "}
                  <AntDesign name="pdffile1" size={20} color="white" />
                </Button>
              </View>
            </View>
          </View>

          <View style={styles.individualCarts}>
            <ImageBackground
              source={require("../../../assets/topImage.png")}
              resizeMode="stretch"
            >
              <Text style={styles.desc}> Dividend Report</Text>
            </ImageBackground>
            <View style={styles.dropdownContainer}>
              <TouchableOpacity
                style={[styles.dropdown, { marginTop: height * 0.005 }]}
              >
                <Picker
                  selectedValue={dividend}
                  onValueChange={(itemValue) =>
                    handleDownload(itemValue, "dividend")
                  }
                  mode="dropdown"
                  style={styles.Picker}
                >
                  <Picker.Item value="2023" label="2023-2024" />
                  <Picker.Item value="2022" label="2022-2023" />
                  <Picker.Item value="2021" label="2021-2022" />
                  <Picker.Item value="2020" label="2020-2021" />
                  <Picker.Item value="2019" label="2019-2020" />
                  <Picker.Item value="2018" label="2018-2019" />
                </Picker>
              </TouchableOpacity>
              <View style={styles.shareContainer}>
                <Button
                  mode="contained"
                  onPress={() => DownloadPdfs("dividend")}
                  style={styles.downloadPdf}
                >
                  <Entypo name="download" size={20} color="white" />
                  {"    "}
                  <AntDesign name="pdffile1" size={20} color="white" />
                </Button>
                <Button
                  mode="contained"
                  onPress={() => handleShare("dividend")}
                  style={styles.downloadPdf}
                >
                  <Entypo name="share" size={20} color="white" />
                  {"    "}
                  <AntDesign name="pdffile1" size={20} color="white" />
                </Button>
              </View>
            </View>
          </View>
        </View>
      ) : (
        <Loader />
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
  individualCarts: {
    marginTop: height * 0.02,
    marginBottom: height * 0.02,
  },
  desc: {
    color: "white",
    fontSize: width * 0.05,
    fontFamily: "Inter-Black",
    fontWeight: "700",
    textAlign: "center",
    padding: width * 0.05,
  },
  dropdown: {
    borderWidth: height * 0.0015,
    borderRadius: width * 0.02,
    borderColor: "rgb(191, 191, 191)",
    marginBottom: height * 0.02,
  },
  Picker: {
    color: "rgb(115, 115, 115)",
  },
  dropdownContainer: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "rgb(230, 230, 230)",
    padding: height * 0.02,
  },
  shareContainer: {
    display: "flex",
    flexDirection: "row",
    marginTop: height * 0.015,
  },
  downloadPdf: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 53, 102, 1)",
    margin: width * 0.01,
  },
  cart: {
    marginTop: height * 0.02,
  },
  rec1: {
    height: height * 0.6,
  },
  headerBox: {
    top: height * 0.02,
  },
  header: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: width * 0.035,
    fontFamily: "Inter-Black",
    fontWeight: "600",
    opacity: 0.3,
  },

  boxBottomContainer: {
    marginTop: height * 0.05,
  },
  investmentContainer: {
    position: "absolute",
    width: width,
    marginLeft: width * 0.1,
    marginTop: height * 0.015,
  },
  flexRow: {
    flexDirection: "row",
  },
  rectengal2: {
    position: "absolute",
    height: height * 0.18,
    resizeMode: "contain",
    right: -width * 0.11,
    top: -height * 0.016,
    zIndex: -1,
  },
  descHeader: {
    color: "rgba(0, 0, 0, 1)",
    lineHeight: height * 0.03,
    fontSize: width * 0.035,
    fontFamily: "Inter-Black",
    fontWeight: "500",
    opacity: 0.3,
    flex: 1,
  },
  descValue: {
    color: "rgba(73, 69, 79, 1)",
    lineHeight: height * 0.025,
    fontSize: width * 0.035,
    fontFamily: "Inter-Black",
    fontWeight: "600",
    flex: 1,
  },
  valueContainer: {
    marginTop: height * 0.025,
  },
  downloadReportsContainer: {
    alignItems: "center",
    padding: width * 0.035,
    borderWidth: width * 0.002,
    borderRadius: width * 0.03,
    borderColor: "rgba(207, 208, 205, 1)",
    marginTop: height * 0.04,
    width: width * 0.7,
  },
  downloadReportsText: {
    color: "rgb(0, 56, 116 )",
    fontFamily: "Inter-Black",
    fontWeight: "600",
    fontSize: width * 0.04,
  },
  input: {
    borderRadius: width * 0.05,
    fontSize: width * 0.043,
    marginBottom: height * 0.015,
    color: "red",
    backgroundColor: "white",
  },
});

export default Reports;
