import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Button } from "react-native-paper";
import Header from "../Components/Header";
import { width, height } from "../../Dimension";
import { Mandatelistdata } from "../../api/services/endpoints/buyEndpoints";
import Loader from "../Components/Loader";
import { useFonts } from "expo-font";
import formatNumberWithCommas from "../Components/Inrconverter";
import { useNavigation } from "@react-navigation/native";
import { Picker } from "@react-native-picker/picker";
import Mbottommenu from "../Components/Mbottommenu";

export default Mandatelist = () => {
  const [mandateData, setMandataData] = useState(null);
  const [type, setType] = useState("Approved");
  useEffect(() => {
    Mandatelistdata().then((response) => {
      setMandataData(response.data.mandateDetails);
    });
  }, []);

  const navigation = useNavigation("");
  const [fontsLoaded] = useFonts({
    "Inter-Black": require("../../../assets/fonts/metropolis-latin-500-normal.ttf"),
  });

  if (mandateData) {
    var filteredMandateData = mandateData.filter((value) => {
      if (type === "Approved") {
        return value.feStatus === 4;
      } else if (type === "Pending") {
        return value.feStatus < 3;
      } else if (type === "Rejected") {
        return value.feStatus === 3;
      }
    });
  }

  const getStatusTextStyle = (feStatus) => {
    if (feStatus === 4) {
      return { color: "green" };
    } else if (feStatus < 3) {
      return { color: "orange" };
    } else {
      return { color: "red" };
    }
  };

  return (
    <View style={styles.container}>
      <Header title="Mandate list" />
      <TouchableOpacity onPress={() => navigation.push("Registermandate")}>
        <Button mode="contained" style={styles.Button}>
          Register Mandate
        </Button>
      </TouchableOpacity>
      <ScrollView>
        <TouchableOpacity style={styles.dropdown}>
          <Picker
            selectedValue={type}
            onValueChange={(itemValue) => setType(itemValue)}
            mode="dropdown"
          >
            <Picker.Item label={"Approved"} value={"Approved"} />
            <Picker.Item label={"Pending"} value={"Pending"} />
            <Picker.Item label={"Rejected"} value={"Rejected"} />
          </Picker>
        </TouchableOpacity>
        {filteredMandateData ? (
          filteredMandateData.map((value, index) => (
            <View style={styles.box} key={index}>
              <View style={styles.flexContainer}>
                <Text style={[styles.text, { flex: 2 }]}>Bank </Text>
                <Text style={[styles.text, { flex: 3 }]}>{value.bankName}</Text>
              </View>
              <View style={styles.flexContainer}>
                <Text style={[styles.text, { flex: 2 }]}>Acc No</Text>
                <Text style={[styles.text, { flex: 3 }]}>
                  {value.bankAccountNumber}
                </Text>
              </View>

              <View style={styles.flexContainer}>
                <Text style={[styles.text, { flex: 2 }]}>Status</Text>
                <Text
                  style={[
                    styles.text,
                    { flex: 3 },
                    getStatusTextStyle(value.feStatus),
                  ]}
                >
                  {value.feStatus == 4
                    ? "Approved"
                    : value.feStatus < 3
                    ? "Pending"
                    : "Rejected"}
                </Text>
              </View>
              <View style={styles.flexContainer}>
                <Text style={[styles.text, { flex: 2 }]}>Amount</Text>
                <Text style={[styles.text, { flex: 3 }]}>
                  {formatNumberWithCommas(value.amount)}
                </Text>
              </View>
            </View>
          ))
        ) : (
          <Loader />
        )}
      </ScrollView>
      <Mbottommenu />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  box: {
    borderColor: "rgb(230, 230, 230)",
    borderWidth: width * 0.005,
    padding: width * 0.06,
    borderRadius: width * 0.02,
    marginLeft: width * 0.04,
    marginRight: width * 0.04,
    marginBottom: width * 0.025,
  },
  flexContainer: {
    flexDirection: "row",
  },
  text: {
    fontSize: width * 0.045,
    fontFamily: "Inter-Black",
    fontWeight: "600",
    margin: width * 0.01,
    lineHeight: height * 0.035,
  },
  Button: {
    alignItems: "center",
    borderWidth: 1,
    borderColor: "rgba(33, 158, 188, 1)",
    borderRadius: width * 0.03,
    padding: width * 0.01,
    backgroundColor: "rgba(33, 158, 188, 1)",
    marginTop: height * 0.02,
    width: width * 0.5,
    alignSelf: "center",
    marginBottom: height * 0.02,
  },
  dropdown: {
    borderWidth: height * 0.0015,
    borderRadius: width * 0.02,
    borderColor: "rgb(191, 191, 191)",
    margin: height * 0.02,
  },
});
