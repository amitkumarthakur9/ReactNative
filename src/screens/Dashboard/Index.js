import React, { useState, useEffect } from "react";
import { View, Text, Alert } from "react-native";
import Bottommenu from "../Components/Bottommenu";
import { useSelector } from "react-redux";
import { Mfsendotpoutside } from "../../api/services/endpoints/mfcenteral";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { userDetails } from "../../redux/slices/user/Index";
import Loader from "../Components/Loader";

const Dashboard = () => {
  const [clientRefNo, setclientRefNo] = useState(null);
  const { temPan, tempMail, tempMobile, logedInVia } = useSelector(
    (state) => state.user
  );
  const dispatch = useDispatch();
  const navigation = useNavigation();
  useEffect(() => {
    var data = "";
    if (temPan) {
      if (logedInVia == "email") {
        data = {
          pan: temPan,
          email: tempMail,
          mobile: "",
        };
      } else if (logedInVia == "mobileNumber") {
        data = {
          pan: temPan,
          email: "",
          mobile: tempMobile,
        };
      }

      Mfsendotpoutside(data)
        .then((response) => {
          if (response.data.success) {
            const clientRefNo = response.data.clientRefNo;
            setclientRefNo(clientRefNo);
            dispatch(userDetails({ temPan: "" }));
            navigation.push("Mfotp", { clientRefNo });
          } else {
            Alert.alert(response.data.error);
          }
        })
        .catch((e) => {
          console.log(e);
        });
    }
  }, []);

  return (
    <>{temPan == "" && clientRefNo == null ? <Bottommenu /> : <Loader />}</>
  );
};

export default Dashboard;
