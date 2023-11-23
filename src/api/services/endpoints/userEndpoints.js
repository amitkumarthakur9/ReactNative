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

export const Phonelogin = () => {
  return apiClient.post(
    "/app/user?action=sendOTP&mobile=9024163621&addedBy=186100&firstUserLogin=true"
  );
};
