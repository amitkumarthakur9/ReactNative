import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import { height, width } from "../../Dimension";
import { Checkbox, Button } from "react-native-paper";
import ButtonBox from "../Components/Buttonbox";
import Mfubanks, { Orders, Clearcart, Mandate } from "../Payment/Data";
import { Fetchcart } from "../Cart/Data";
import { useNavigation } from "@react-navigation/native";
import Loader from "../Components/Loader";
import { Picker } from "@react-native-picker/picker";

const Paymentoptions = (props) => {
  const [selectedMandate, setSelectedMandate] = useState();
  const [orderData, setOrderData] = useState(props.orderData || {});
  const [showLoader, setShowLoader] = useState(false);
  const mandate = Mandate();

  const navigation = useNavigation();

  //   console.log("sippayment", orderData);

  const handlePicker = (value) => {
    setSelectedMandate(value);

    const updatedOrderData = {
      ...orderData,
      mandateId: value,
    };
    setOrderData(updatedOrderData);
    // console.log("sip order data ", updatedOrderData);
  };

  const handleOrderCall = () => {
    setShowLoader(true);
    Orders(orderData)
      .then((response) => {
        // console.log("order success result", response);
        if (response.success === true) {
          setShowLoader(false);
          Clearcart().then((response) => {
            if (response.success === true) {
              Alert.alert("Order has been Placed Successfully");
              navigation.push("Dashboard");
            }
          });
        }
        if (response.success === false) {
          Alert.alert("Failed", response.error);
          navigation.push("Dashboard");
        }
      })
      .catch((error) => {
        console.warn("order success error", error);
        Alert.alert("Failed", error);
        setShowLoader(false);
      });
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {mandate.length > 0 ? (
          <View style={styles.chartContainer}>
            <Text style={styles.headerText}>Choose a mandate </Text>
            <TouchableOpacity style={[styles.dropdown]}>
              <Picker
                selectedValue={selectedMandate}
                onValueChange={handlePicker}
                mode="dropdown"
                style={styles.Picker}
              >
                {mandate.map((item, index) => (
                  <Picker.Item
                    value={item.id}
                    label={`${item.bankName}-${item.prn}`}
                    key={index}
                  />
                ))}
              </Picker>
            </TouchableOpacity>
          </View>
        ) : (
          <>
            <Text style={styles.headerText}>
              You don't have mandate to make payment for sip...
            </Text>
          </>
        )}

        {!showLoader ? (
          <>
            <TouchableOpacity onPress={handleOrderCall}>
              <Button mode="contained" style={styles.Button}>
                Complete Payments
              </Button>
            </TouchableOpacity>
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
    backgroundColor: "white",
  },
  headerText: {
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
    flex: 1,
    marginBottom: height * 0.03,
  },
  bankingContainer: {
    flexDirection: "row",
    borderBottomWidth: width * 0.001,
    padding: width * 0.035,
  },
  bankImage: {
    backgroundColor: "white",
    borderWidth: width * 0.003,
    borderRadius: width * 0.016,
    borderColor: "rgb(230, 230, 230)",
    marginBottom: height * 0.005,
    height: height * 0.055,
    width: width * 0.12,
    justifyContent: "center",
    flex: 1,
  },
  PaymentOptionsHeader: {
    flex: 5,
  },
  PaymentOptionsLogo: {
    width: width * 0.071,
    height: height * 0.03,
    resizeMode: "contain",
    alignSelf: "center",
  },
  Checkbox: {
    flex: 1,
    alignSelf: "center",
  },
  desc: {
    color: "rgba(2, 48, 71, 1)",
    fontSize: width * 0.04,
    fontWeight: "600",
    marginLeft: width * 0.07,
  },
  Button: {
    alignItems: "center",
    borderRadius: width * 0.03,
    borderWidth: 1,
    borderColor: "#023047",
    padding: width * 0.01,
    backgroundColor: "#023047",
  },
  dropdown: {
    borderWidth: height * 0.0015,
    borderRadius: width * 0.02,
    borderColor: "rgb(191, 191, 191)",
    marginBottom: height * 0.02,
  },
  Picker: {
    color: "rgba(2, 48, 71, 1)",
  },
});

export default Paymentoptions;
