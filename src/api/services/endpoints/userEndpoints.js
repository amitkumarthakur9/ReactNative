import apiClient from "../apiClient"; // Verify the correct import path

// export const getUser = (userId) => {
//   // Define an endpoint to fetch a single user by their ID
//   return apiClient.get(`/app/user?action=fetchUserDetails/${userId}`);
// };

// export const getUsers = () => {
//   // Define an endpoint to fetch a list of users
//   return apiClient.get("/users");
// };

export const createUser = (userData) => {
  // Define an endpoint to create a new user
  //   console.log(userData);
  return apiClient.post(
    "/app/user?action=login&email=513356&password=Amit123@&addedBy=186100",
    userData
  );
};

// export const updateUser = (userId, userData) => {
//   // Define an endpoint to update an existing user by their ID
//   return apiClient.put(`/users/${userId}`, userData);
// };

// export const deleteUser = (userId) => {
//   // Define an endpoint to delete a user by their ID
//   return apiClient.delete(`/users/${userId}`);
// };

// You can add more endpoints as needed for your application
