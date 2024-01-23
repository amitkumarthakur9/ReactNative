import React, { useEffect, useState } from "react";
import {
  Fetchcartdata,
  Removecartdata,
} from "../../api/services/endpoints/buyEndpoints";

export const Fetchcart = async () => {
  //   const [fetchCart, setFetchCart] = useState(null);
  //   useEffect(() => {
  //     Fetchcartdata()
  //       .then((response) => {
  //         setFetchCart(response.data);
  //       })
  //       .catch((erorr) => {
  //         console.log(erorr);
  //       });
  //   }, []);

  //   return fetchCart;
  try {
    const response = await Fetchcartdata();
    // console.log("response in fetch", response.data);
    return response.data;
  } catch (erorr) {
    console.warn(erorr);
    return null;
  }
};

export const Removecart = async (data) => {
  try {
    const response = await Removecartdata(data);
    // console.log("re", response.data);
    return response.data.success;
  } catch (erorr) {
    console.warn(erorr);
    return null;
  }
};
