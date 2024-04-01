import apiClient from "../apiClient";
import querystring from "./queryString";
import { addedBy } from "../../../fixed/fixed";
export const searchFund = (fundName) => {
  const encodedFundName = encodeURIComponent(fundName);
  // console.log("passed url", encodedFundName);
  return apiClient.get(
    `/app/mutualfund?action=search&term=${fundName}&optiontype=GROWTH`
  );
};

export const searchFundhouse = (fundName) => {
  const urlEncodedData = querystring(fundName);
  return apiClient.get(`/app/mutualfund?` + urlEncodedData);
};

export const Switchfund = (fundName) => {
  const urlEncodedData = querystring(fundName);
  console.log("passed url", urlEncodedData);
  return apiClient.post(`/app/mfu/order?` + urlEncodedData);
};

export const checkHoldingForMf = (fundName) => {
  const urlEncodedData = querystring(fundName);
  return apiClient.get(`/app/holdings?` + urlEncodedData);
};

export const TrendingNfo = () => {
  return apiClient.get(
    `/app/mutualfund?action=getNFOFundsAddedBy&addedBy=${addedBy}`
  );
};

export const Trendingschemes = () => {
  return apiClient.get(
    "/app/mutualfund?action=getMixedGrowthFundsSmallEquityOrDebt"
  );
};
