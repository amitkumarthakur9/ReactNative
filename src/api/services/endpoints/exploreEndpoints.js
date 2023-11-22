import apiClient from "../apiClient";

export const searchFund = (fundName) => {
  const encodedFundName = encodeURIComponent(fundName);
  return apiClient.get(
    `/app/mutualfund?action=search&term=${fundName}&optiontype=GROWTH`
  );
};

export const TrendingNfo = () => {
  return apiClient.get(
    "/app/mutualfund?action=getNFOFundsAddedBy&addedBy=186100"
  );
};

export const Trendingschemes = () => {
  return apiClient.get(
    "/app/mutualfund?action=getMixedGrowthFundsSmallEquityOrDebt"
  );
};
