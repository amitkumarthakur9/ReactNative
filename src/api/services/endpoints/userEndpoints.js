import apiClient from "../apiClient";
import queryString from "./queryString";

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
  return apiClient.post(
    "/app/user?action=login&email=513356&password=Amit123@&addedBy=186100"
  );
};

export const Userpassword = () => {
  return apiClient.get("/app/user?action=getPassword");
};

export const Fetchuserdetails = () => {
  return apiClient.get("/app/user?action=fetchUserDetails");
};

export const Googlelogin = (googleToken) => {
  return apiClient.post(
    `/app/user?action=googleLogin&token=${googleToken}&fromApp=1@&addedBy=186100`
  );
};

export const Phonelogin = (mobileNumber) => {
  return apiClient.post(
    `/app/user?action=sendOTP&mobile=${mobileNumber}&addedBy=186100&firstUserLogin=true`
  );
};

export const Otpverify = (data) => {
  const { mobileNumber, otp } = data;
  return apiClient.post(
    `/app/user?action=confirmOtpForLogin&mobile=${mobileNumber}&addedBy=186100&firstUserLogin=true&otp=${otp}`
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
