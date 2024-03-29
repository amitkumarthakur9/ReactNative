import apiClient from "../apiClient";
import queryString from "./queryString";

export const Cart = (data) => {
  //   const urlEncodedData = Object.keys(data)
  //     .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
  //     .join("&");
  const urlEncodedData = queryString(data);

  return apiClient.post("/app/mutualfund?" + urlEncodedData);
};

export const Fetchcartdata = () => {
  return apiClient.get("/app/mutualfund?action=fetchCart");
};

export const Removecartdata = (data) => {
  const urlEncodedData = Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
  //   console.log(urlEncodedData);
  return apiClient.post("/app/mutualfund?" + urlEncodedData);
};

export const Mfubanksdata = () => {
  return apiClient.get("/app/mfuUser?action=getMfuAdditionalBanks");
};

export const Mandatedata = () => {
  return apiClient.get("/app/user?action=getAllValidMandates");
};

export const Orderdata = (data) => {
  const urlEncodedData = queryString(data);
  //   console.log("passed url", urlEncodedData);
  return apiClient.post("/app/mfu/order?" + urlEncodedData);
};

export const Cleardata = () => {
  //   const urlEncodedData = queryString(data);
  //   console.log("passed url", urlEncodedData);
  return apiClient.post("/app/mutualfund?action=clearCart");
};

export const Mandateregister = (data) => {
  const urlEncodedData = queryString(data);
  console.log("passed url", urlEncodedData);
  return apiClient.post("/app/mandate?" + urlEncodedData);
};

export const Redeemholding = (data) => {
  const urlEncodedData = queryString(data);
  //console.log("passed url", urlEncodedData);
  return apiClient.post("/app/mfu/order?" + urlEncodedData);
};

export const Mandatelistdata = (data) => {
  return apiClient.get("/app/user?action=getAllMandates");
};

export const Orders = () => {
  return apiClient.get("/app/order?action=fetch");
};
