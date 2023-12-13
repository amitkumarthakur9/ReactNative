import apiClient from "../apiClient";

export const Cart = (data) => {
  const urlEncodedData = Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
  return apiClient.post("/app/mutualfund?" + urlEncodedData);
};
