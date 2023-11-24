import apiClient from "../apiClient";

export const Userlogin = (userData) => {
  return apiClient.post(
    "/app/user?action=login&email=513356&password=Amit123@&addedBy=186100",
    userData
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
