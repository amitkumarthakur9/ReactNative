import React, { useState, useEffect } from "react";
import { View, Text, Alert } from "react-native";
import Bottommenu from "../Components/Bottommenu";
import { useSelector } from "react-redux";
import { Mfsendotpoutside } from "../../api/services/endpoints/mfcenteral";
import { useDispatch } from "react-redux";
import { userDetails } from "../../redux/slices/user/Index";
import Loader from "../Components/Loader";
import { useRoute, useNavigation } from "@react-navigation/native";

const Dashboard = () => {
  const [clientRefNo, setclientRefNo] = useState(null);
  const { temPan, tempMail, tempMobile, logedInVia } = useSelector(
    (state) => state.user
  );
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const route = useRoute();
  const defaultTab = route.params || "";

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
            dispatch(userDetails({ temPan: "" }));
            Alert.alert(response.data.error);
            navigation.push("Dashboard");
          }
        })
        .catch((e) => {
          dispatch(userDetails({ temPan: "" }));
          Alert.alert("Failed ", "Something went wrong pls try later");
          navigation.push("Dashboard");
        });
    }
  }, []);

  return (
    <>
      {temPan == "" && clientRefNo == null ? (
        <Bottommenu defaultTab={defaultTab} />
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Dashboard;
