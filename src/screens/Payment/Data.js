import React, { useEffect, useState } from "react";
import {
  Mfubanksdata,
  Orderdata,
  Cleardata,
} from "../../api/services/endpoints/buyEndpoints";

const Mfubanks = () => {
  const [mfubanks, setMfubanks] = useState([]);
  useEffect(() => {
    Mfubanksdata().then((response) => {
      setMfubanks(response.data.additionlBankArray);
    });
  }, []);

  return mfubanks;
};

export const Orders = async (orderData) => {
  try {
    const response = await Orderdata(orderData);
    console.log("order response", response.data);
    return response.data;
  } catch (error) {
    console.warn(error);
  }
};

export const Clearcart = async () => {
  try {
    const response = await Cleardata();
    console.log("clear cart response", response.data);
    return response.data;
  } catch (error) {
    console.warn(error);
  }
};

export default Mfubanks;
