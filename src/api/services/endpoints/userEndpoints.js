import apiClient from "../apiClient";

export const Userlogin = (userData) => {
  return apiClient.post(
    "/app/user?action=login&email=513356&password=Amit123@&addedBy=186100",
    userData
  );
};
