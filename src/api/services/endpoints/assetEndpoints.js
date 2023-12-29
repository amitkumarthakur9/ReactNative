import apiClient from "../apiClient";

export const AssetPreview = (mfId) => {
  return apiClient.get(`/app/mutualfund?action=getMutualFund&id=${mfId}`);
};

export const Folio = (mfId) => {
  return apiClient.get(
    `/app/holdings?action=getFolioNumberArray&type=byScheme&id=${mfId}`
  );
};

export const Nav = (mfId, trendDuration) => {
  const currentDate = new Date();

  const Calculatedate = new Date(currentDate);
  Calculatedate.setMonth(currentDate.getMonth() - trendDuration);

  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const monthPlusOne = currentDate.getMonth() + 1;

  const endDate =
    currentDate.getFullYear() +
    "-" +
    monthPlusOne +
    "-" +
    currentDate.getDate();

  const startDate = formatDate(Calculatedate);

  return apiClient.get(
    `/app/nav?action=getNavOfGrowthFundWeb&id=${mfId}&startDate=${startDate}&endDate=${endDate}`
  );
};
