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
  const [nominee, setNominee] = useState([]);
  const [fatca, setFatca] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      //   const login = await Userlogin();
      //   console.log("login details", login.data);
      Fetchuserdetails()
        .then((response) => {
          console.log("fetch user details data", response.data);
          setAccountData(response.data.user || []);
        })
        .catch((error) => {
          console.warn(error);
        });
      //   setAccountData(result.data.user || []);
      //   setNominee(result.data.user.nominee || []);
      //   setFatca(result.data.user.fatcaDetails[0] || []);
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
        <Fatca
          data={{
            accountData: accountData,
            setAccountData: setAccountData,
            currentForm: currentForm,
            setCurrentForm: setCurrentForm,
          }}
        />
      ) : (
        <Nominee
          data={{
            accountData: accountData,
            setAccountData: setAccountData,
          }}
        />
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
