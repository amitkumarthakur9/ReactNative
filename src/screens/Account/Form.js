import React, { useState, useEffect } from "react";
import { ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { Button } from "react-native-paper";
import { height, width } from "../../Dimension";
import Bankdetails from "./Bankdetails";
import Fatca from "./Fatca";
import Nominee from "./Nominee";
import Basicdetails from "./Basicdetails";
import {
  Userlogin,
  Fetchuserdetails,
} from "../../api/services/endpoints/userEndpoints";
const Form = ({ data }) => {
  const [accountData, setAccountData] = useState([]);
  const { currentForm, setCurrentForm } = data;

  useEffect(() => {
    const fetchData = async () => {
      await Userlogin();
      const result = await Fetchuserdetails();
      setAccountData(result.data.user || []);
    };

    fetchData();
    return () => {
      setAccountData([]);
    };
  }, []);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.formContainer}
    >
      {currentForm === 0 ? (
        <Basicdetails
          data={{
            accountData: accountData,
            setAccountData: setAccountData,
            currentForm: currentForm,
            setCurrentForm: setCurrentForm,
          }}
        />
      ) : currentForm === 1 ? (
        <Bankdetails
          data={{
            accountData: accountData,
            setAccountData: setAccountData,
            currentForm: currentForm,
            setCurrentForm: setCurrentForm,
          }}
        />
      ) : currentForm === 2 ? (
        <Fatca />
      ) : (
        <Nominee />
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    // marginTop: height * 0.01,
  },
});
export default Form;
