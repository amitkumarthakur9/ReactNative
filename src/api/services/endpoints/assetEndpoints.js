import apiClient from "../apiClient";

export const AssetPreview = (mfId) => {
  return apiClient.get(`/app/mutualfund?action=getMutualFund&id=${mfId}`);
};
