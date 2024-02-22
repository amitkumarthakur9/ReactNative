import apiClient from "../apiClient";

export default Sendotp = (data) => {
  return apiClient.post("/app/rest/mfCentral/sendOtp", data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const Valideotp = (data) => {
  return apiClient.post("/app/rest/mfCentral/validateOtp", data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const Casdetails = (clientRefNo) => {
  return apiClient.get("/app/rest/mfCentral/casDetails", {
    params: {
      clientRefNo: clientRefNo,
    },
    headers: {
      "Content-Type": "application/json",
    },
  });
};
