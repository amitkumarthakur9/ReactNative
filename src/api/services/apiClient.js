import axios from "axios";

const baseURL = "https://www.fundexpert.in"; // Replace with your API's base URL

const apiClient = axios.create({
  baseURL,
  //   timeout: 10000, // Adjust the timeout as needed
});

export default apiClient;
