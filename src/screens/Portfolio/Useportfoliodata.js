import { useState, useEffect } from "react";
import { allPortfolio } from "../../api/services/endpoints/portfolioEndpoints";
import { useDispatch } from "react-redux";
import { userDetails } from "../../redux/slices/user/Index";

const usePortfolioData = (refresh) => {
  const [allPortfolioData, setAllPortfolioData] = useState("showLoader");
  const [internalPortfolioData, setInternalPortfolioData] = useState(
    "internalPortfolioData"
  );
  const [externalPortfolioData, setExternalPortfolioData] = useState(
    "externalPortfolioData"
  );
  const [holdingData, setholdingData] = useState("holdingData");
  const [completePortfolioData, setCompletePortfolioData] = useState(0);
  const dispatch = useDispatch();
  useEffect(() => {
    allPortfolio()
      .then((response) => {
        // console.log("showZeroValue", response.data);
        response.data.success == false
          ? (setAllPortfolioData("showZeroValue"),
            dispatch(userDetails({ portfolio: "showZeroValue" })))
          : Object.keys(response.data.portfolioObj).length == 0
          ? (setAllPortfolioData("showZeroValue"),
            dispatch(userDetails({ portfolio: "showZeroValue" })))
          : Object.keys(response.data.portfolioObj).length > 0
          ? setAllPortfolioData(response.data.portfolioObj.all.all.all.all)
          : setAllPortfolioData("showLoader");

        setCompletePortfolioData(response.data.portfolioObj);
        if (response.data.portfolioObj.hasOwnProperty("internal")) {
          setInternalPortfolioData(
            response.data.portfolioObj.internal.all.all.all
          );
        }
        setholdingData(response.data.holdingsObj);
        if (response.data.portfolioObj.hasOwnProperty("external")) {
          setExternalPortfolioData(
            response.data.portfolioObj.external.all.all.all
          );
        }
      })
      .catch((error) => {
        console.log("failed:", error);
      });
    return () => {
      setAllPortfolioData("showLoader");
      setInternalPortfolioData("internalPortfolioData");
      setExternalPortfolioData("externalPortfolioData");
      setholdingData("holdingData");
      setCompletePortfolioData(0);
    };
  }, [refresh]);
  return {
    completePortfolioData,
    allPortfolioData,
    internalPortfolioData,
    externalPortfolioData,
    holdingData,
  };
};

export default usePortfolioData;
