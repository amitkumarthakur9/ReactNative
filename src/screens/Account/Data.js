import React, { useEffect, useState } from "react";
import { Userlogin } from "../../api/services/endpoints/userEndpoints";
export const Accountdata = () => {
  const [accountData, setAccountData] = useState([]);
  useEffect(() => {
    Userlogin()
      .then((response) => {
        setAccountData(Object.entries(response.data.user) || []);
        // console.log(Object.entries(response.data.user) || []);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return accountData;
};
