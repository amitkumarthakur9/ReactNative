import React, { useEffect, useState } from "react";
import {
  Userlogin,
  Fetchuserdetails,
} from "../../api/services/endpoints/userEndpoints";
import { Banksdata } from "../../api/services/endpoints/userEndpoints";
export const Accountdata = () => {
  const [accountData, setAccountData] = useState([]);
  useEffect(() => {
    Userlogin()
      .then((response) => {
        setAccountData(Object.entries(response.data.user) || []);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return accountData;
};

export const UserDetails = () => {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    Fetchuserdetails()
      .then((response) => {
        setUserData(response.data.user);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return userData;
};

export const Getbank = () => {
  const [banks, setBanks] = useState([]);
  useEffect(() => {
    Banksdata().then((response) => {
      setBanks(response.data.bankArray);
    });
  }, []);

  return banks;
};
