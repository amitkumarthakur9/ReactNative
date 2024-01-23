import React, { useState } from "react";
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

const Reports = () => {
  const [holdingtype, setHoldingtype] = useState("");
  const [detailed, setDetailed] = useState("");
  const [holdingwithbalance, setHoldingwithbalance] = useState("");

  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [userwise, setUserwise] = useState("");
  const [allholdingtype, setAllholdingtype] = useState("");
  const [includeredeem, setIncluderedeem] = useState("");

  const [capitalgain, setCapitalgain] = useState("");

  const [transaction, setTransaction] = useState("");

  const [elsstransaction, setElsstransaction] = useState("");

  const [dividend, setDividend] = useState("");

  const reduxData = useSelector((state) => state.user.userId);

  console.log("userId", reduxData);

  const handleDatePress = () => {
    setShowDatePicker(true);
  };

  const handleDateChange = (event, selectedDate) => {
    currentDate = selectedDate || date;
    setShowDatePicker(false);
    setDate(currentDate);
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
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
                onValueChange={(itemValue) => setHoldingwithbalance(itemValue)}
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
                onPress={() => console.log("Pressed")}
                style={styles.downloadPdf}
              >
                <Entypo name="download" size={20} color="white" />
                {"    "}
                <AntDesign name="pdffile1" size={20} color="white" />
              </Button>
              <Button
                mode="contained"
                onPress={() => console.log("Pressed")}
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
                onPress={() => console.log("Pressed")}
                style={styles.downloadPdf}
              >
                <Entypo name="download" size={20} color="white" />
                {"    "}
                <AntDesign name="pdffile1" size={20} color="white" />
              </Button>
              <Button
                mode="contained"
                onPress={() => console.log("Pressed")}
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
                onValueChange={(itemValue) => setCapitalgain(itemValue)}
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
                onPress={() => console.log("Pressed")}
                style={styles.downloadPdf}
              >
                <Entypo name="download" size={20} color="white" />
                {"    "}
                <AntDesign name="pdffile1" size={20} color="white" />
              </Button>
              <Button
                mode="contained"
                onPress={() => console.log("Pressed")}
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
                onValueChange={(itemValue) => setTransaction(itemValue)}
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
                onPress={() => console.log("Pressed")}
                style={styles.downloadPdf}
              >
                <Entypo name="download" size={20} color="white" />
                {"    "}
                <AntDesign name="pdffile1" size={20} color="white" />
              </Button>
              <Button
                mode="contained"
                onPress={() => console.log("Pressed")}
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
                onValueChange={(itemValue) => setElsstransaction(itemValue)}
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
                onPress={() => console.log("Pressed")}
                style={styles.downloadPdf}
              >
                <Entypo name="download" size={20} color="white" />
                {"    "}
                <AntDesign name="pdffile1" size={20} color="white" />
              </Button>
              <Button
                mode="contained"
                onPress={() => console.log("Pressed")}
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
                onPress={() => console.log("Pressed")}
                style={styles.downloadPdf}
              >
                <Entypo name="download" size={20} color="white" />
                {"    "}
                <AntDesign name="pdffile1" size={20} color="white" />
              </Button>
              <Button
                mode="contained"
                onPress={() => console.log("Pressed")}
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
                onValueChange={(itemValue) => setDividend(itemValue)}
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
                onPress={() => console.log("Pressed")}
                style={styles.downloadPdf}
              >
                <Entypo name="download" size={20} color="white" />
                {"    "}
                <AntDesign name="pdffile1" size={20} color="white" />
              </Button>
              <Button
                mode="contained"
                onPress={() => console.log("Pressed")}
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
    fontWeight: "500",
    opacity: 0.3,
    flex: 1,
  },
  descValue: {
    color: "rgba(73, 69, 79, 1)",
    lineHeight: height * 0.025,
    fontSize: width * 0.035,
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
    color: "rgba(33, 158, 188, 1)",
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
