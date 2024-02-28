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
import Mfubanks, { Orders, Clearcart } from "../Payment/Data";
import { Fetchcart } from "../Cart/Data";
import { useNavigation } from "@react-navigation/native";
import Loader from "../Components/Loader";
import { useFonts } from "expo-font";
const Paymentoptions = (props) => {
  const [upicheck, setUpicheck] = useState(false);
  const [netbankingcheck, setNetbankingcheck] = useState(false);
  const [neftcheck, setNeftcheck] = useState(false);
  const [rtgscheck, setRtgscheck] = useState(false);
  const [mandatecheck, setMandatecheck] = useState(false);
  const [bankcheck, setBankcheck] = useState(false);
  const [selectedBank, setSelectedBank] = useState(null);
  const [orderData, setOrderData] = useState(props.orderData || {});
  const [siporderData, setSiporderData] = useState(props.siporderData || {});
  const [showLoader, setShowLoader] = useState(false);
  const mfubanks = Mfubanks();

  const navigation = useNavigation();
  const [fontsLoaded] = useFonts({
    "Inter-Black": require("../../../assets/fonts/metropolis-latin-500-normal.ttf"),
  });

  //   console.log("order sip data in paymentoptions", siporderData);

  const handleCheckboxChange = (checkboxType, paymentMode) => {
    const checkboxMap = {
      UPI: setUpicheck,
      NetBanking: setNetbankingcheck,
      NEFT: setNeftcheck,
      RTGS: setRtgscheck,
      Mandate: setMandatecheck,
      bank: setBankcheck,
    };

    Object.keys(checkboxMap).forEach((type) => {
      checkboxMap[type](type === checkboxType);
    });

    const updatedOrderData = {
      ...orderData,
      paymentMode: paymentMode,
    };

    setOrderData(updatedOrderData);
  };

  const handleBankCheckboxChange = (bank) => {
    setBankcheck(true);
    setSelectedBank(bank);
    const updatedOrderData = {
      ...orderData,
      selectBankAccount: bank,
    };
    setOrderData(updatedOrderData);
  };

  const handleOrderCall = () => {
    if (selectedBank == null) {
      Alert.alert("Please select bank account");
      return;
    }
    if (upicheck == false && netbankingcheck == false) {
      Alert.alert("Please select mode of payment");
      return;
    }

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
        <Text style={styles.headerText}>Choose Bank Account </Text>
        {mfubanks.length > 0 && (
          <View style={styles.chartContainer}>
            {mfubanks.map((item, key) => (
              <Banklist
                key={key}
                label={item.bankName}
                desc={item.accountNo}
                isChecked={selectedBank === item.id}
                handleCheckboxChange={() => handleBankCheckboxChange(item.id)}
                imageUrl={require("../../../assets/paymentIcon/Building-Bank.png")}
              />
            ))}
          </View>
        )}

        <Text style={styles.headerText}>Mode Of Payments</Text>

        <View style={styles.chartContainer}>
          <CheckboxItem
            type="UPI"
            label="UPI"
            isChecked={upicheck}
            handleCheckboxChange={() => handleCheckboxChange("UPI", "UP")}
            imageUrl={require("../../../assets/paymentIcon/Frame.png")}
          />
          <CheckboxItem
            type="NetBanking"
            label="NET BANKING"
            isChecked={netbankingcheck}
            handleCheckboxChange={() =>
              handleCheckboxChange("NetBanking", "OT")
            }
            imageUrl={require("../../../assets/paymentIcon/Building-Bank.png")}
          />
          {/* <CheckboxItem
            type="NEFT"
            label="NEFT"
            isChecked={neftcheck}
            handleCheckboxChange={() => handleCheckboxChange("NEFT", "NE")}
            imageUrl={require("../../../assets/paymentIcon/Building-Bank.png")}
          />
          <CheckboxItem
            type="RTGS"
            label="RTGS"
            isChecked={rtgscheck}
            handleCheckboxChange={() => handleCheckboxChange("RTGS", "RT")}
            imageUrl={require("../../../assets/paymentIcon/Building-Bank.png")}
          />
          <CheckboxItem
            type="Mandate"
            label="Mandate"
            isChecked={mandatecheck}
            handleCheckboxChange={() => handleCheckboxChange("Mandate")}
            imageUrl={require("../../../assets/paymentIcon/Shape2.png")}
          /> */}
        </View>

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

const CheckboxItem = ({
  type,
  label,
  isChecked,
  handleCheckboxChange,
  imageUrl,
}) => {
  return (
    <View style={styles.bankingContainer}>
      <View style={styles.bankImage}>
        <Image source={imageUrl} style={styles.PaymentOptionsLogo} />
      </View>
      <View style={styles.PaymentOptionsHeader}>
        <Text style={styles.desc}>{label}</Text>
      </View>
      <View style={styles.Checkbox}>
        <Checkbox
          status={isChecked ? "checked" : "unchecked"}
          onPress={handleCheckboxChange}
          color="#023047"
        />
      </View>
    </View>
  );
};

const Banklist = ({
  label,
  isChecked,
  handleCheckboxChange,
  imageUrl,
  desc,
}) => {
  return (
    <View style={styles.bankingContainer}>
      <View style={styles.bankImage}>
        <Image source={imageUrl} style={styles.PaymentOptionsLogo} />
      </View>
      <View style={styles.PaymentOptionsHeader}>
        <Text style={styles.desc}>{label}</Text>
        <Text
          style={[
            styles.desc,
            {
              opacity: 0.5,
              fontSize: width * 0.035,
              lineHeight: height * 0.03,
            },
          ]}
        >
          Ac Number : {desc}
        </Text>
      </View>
      <View style={styles.Checkbox}>
        <Checkbox
          status={isChecked ? "checked" : "unchecked"}
          onPress={handleCheckboxChange}
          color="#023047"
        />
      </View>
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
    fontFamily: "Inter-Black",
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
    fontFamily: "Inter-Black",
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
});

export default Paymentoptions;
