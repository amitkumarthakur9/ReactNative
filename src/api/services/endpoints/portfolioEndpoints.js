import apiClient from "../apiClient";

export const allPortfolio = () => {
  return apiClient.get("/app/holdings?action=getPortfolio");
};
