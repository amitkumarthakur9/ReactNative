import { useSelector } from "react-redux";
import { Yearmonthday } from "../Components/Formatdate";

export const Todaydate = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");

  const date = `${year}-${month}-${day}`;

  return date;
};
export const UserAuthData = () => {
  const { id, token } = useSelector((state) => state.user);
  return { id, token };
};

const baseUrl = "https://docgenerator.mailuser.in/administrators/login";

export const Capitalgain = (finalyear) => {
  const { id, token } = UserAuthData();
  const financialYear = finalyear;
  url = `${baseUrl}?user=${id}&year=${financialYear}&password=${token}&report=capitalgains`;
  return url;
};

export const Transaction = (year) => {
  const { id, token } = UserAuthData();
  const sd = Todaydate();
  const ed = sd;
  const ed1 = sd;
  const fy = 1;
  url = `${baseUrl}?sd=${sd}&ed=${ed}&ed1=${ed1}&user=${id}&fy=${fy}&year=${year}&password=${token}&report=transaction`;
  return url;
};

export const Elss = (year) => {
  const { id, token } = UserAuthData();
  const sd = Todaydate();
  const ed = sd;
  const ed1 = sd;
  const fy = 1;
  url = `${baseUrl}?sd=${sd}&ed=${ed}&ed1=${ed1}&user=${id}&fy=${fy}&year=${year}&password=${token}&report=elsstransaction`;
  return url;
};

export const Holdingsummary = () => {
  const { id, token } = UserAuthData();
  url = `${baseUrl}?user=${id}&password=${token}&report=familyreport`;
  return url;
};

export const Dividend = (year) => {
  const { id, token } = UserAuthData();
  const sd = Todaydate();
  const ed = sd;
  const ed1 = sd;
  const fy = 1;
  url = `${baseUrl}?sd=${sd}&ed=${ed}&ed1=${ed1}&user=${id}&fy=${fy}&year=${year}&password=${token}&report=divident`;
  return url;
};

export const Portfoliovaluation = (
  ed,
  portfolioType,
  holdingType,
  includeRedeemedUnits
) => {
  const formatEd = Yearmonthday(ed);
  const { id, token } = UserAuthData();
  url = `${baseUrl}?ed=${formatEd}&user=${id}&portfolioType=${portfolioType}&holdingType=${holdingType}&includeRedeemedUnits=${includeRedeemedUnits}&password=${token}&report=portfoliovaluationpdf`;
  return url;
};
