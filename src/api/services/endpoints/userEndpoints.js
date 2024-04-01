import apiClient from "../apiClient";
import queryString from "./queryString";
import axios from "axios";

const addedBy = 969057;

export const Mfuuserdata = (data) => {
  //   const urlEncodedData = Object.keys(data)
  //     .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
  //     .join("&");
  const urlEncodedData = queryString(data);
  return apiClient.post("/app/mfuUser?" + urlEncodedData);
};

export const Banksdata = () => {
  return apiClient.get("/app/mfuUser?action=getAllBanksAndCountries");
};

export const Userlogin = () => {
  apiClient
    .post(
      `/app/user?action=login&email=638274&password=Test@1234&addedBy=${addedBy}`
    )
    .then((response) => {
      //   console.log("user login manually", response.data);
    })
    .catch((e) => {
      console.warn(e);
    });
};

export const Userpassword = () => {
  return apiClient.get("/app/user?action=getPassword");
};

export const Fetchuserdetails = () => {
  return apiClient.get("/app/user?action=fetchUserDetails");
};

export const Googlelogin = (googleToken, panNumber = "", clientIdtype3) => {
  return apiClient.post(
    `/app/user?action=googleLogin&token=${googleToken}&fromApp=1@&addedBy=${addedBy}&panNumber=${panNumber}&clientId=${clientIdtype3}`
  );
};

export const Phonelogin = (mobileNumber, panNumber = "") => {
  return apiClient.post(
    `/app/user?action=sendOTP&mobile=${mobileNumber}&addedBy=${addedBy}&firstUserLogin=true&panNumber=${panNumber}`
  );
};

export const Otpverify = (data) => {
  const { mobileNumber, otp } = data;
  return apiClient.post(
    `/app/user?action=confirmOtpForLogin&mobile=${mobileNumber}&addedBy=${addedBy}&firstUserLogin=true&otp=${otp}`
  );
};

export const Basket = () => {
  return apiClient.get(`/app/user?action=getThematicBaskets`);
};

export const Checksession = () => {
  return apiClient.get(`/app/user?action=checkSession`);
};

export const Logout = () => {
  return apiClient.get(`/app/user?action=logout&ajax=1`);
};

export const uploadDoc = (data) => {
  const { uri, imageObj, fileName, documentType, filesize } = data;

  let formData = new FormData();

  formData.append("file", {
    uri: uri,
    documentType: "PAN",
    filesize: filesize,
    type: "image/*",
  });

  return axios.post(
    `https://www.fundexpert.in/app/mfuDocument?action=fileUpload&fileName=${fileName}&documentType=${documentType}&filesize=${filesize}`,
    formData,
    {
      headers: {
        "Content-type": "multipart/form-data",
      },
    }
  );
};
