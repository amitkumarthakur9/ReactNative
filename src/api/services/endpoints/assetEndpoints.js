import apiClient from "../apiClient";

export const AssetPreview = (mfId) => {
  return apiClient.get(`/app/mutualfund?action=getMutualFund&id=${mfId}`);
};

export const Folio = (mfId) => {
  return apiClient.get(
    `/app/holdings?action=getFolioNumberArray&type=byScheme&id=${mfId}`
  );
};
