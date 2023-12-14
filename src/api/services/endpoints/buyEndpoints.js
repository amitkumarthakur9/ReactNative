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
  console.log(urlEncodedData);
  return apiClient.post("/app/mutualfund?" + urlEncodedData);
};
