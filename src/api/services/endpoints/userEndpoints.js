import apiClient from "../apiClient";

export const Userlogin = () => {
  return apiClient.post(
    "/app/user?action=login&email=1282701&password=test@1234&addedBy=237106"
  );
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
