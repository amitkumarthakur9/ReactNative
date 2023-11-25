import { useState, useEffect } from "react";
import { allPortfolio } from "../../api/services/endpoints/portfolioEndpoints";

const usePortfolioData = (currentPage) => {
  const [allPortfolioData, setAllPortfolioData] = useState("allPortfolioData");
  const [internalPortfolioData, setInternalPortfolioData] = useState(
    "internalPortfolioData"
  );
  const [externalPortfolioData, setExternalPortfolioData] = useState(
    "externalPortfolioData"
  );
  const [holdingData, setholdingData] = useState("holdingData");
  const [completePortfolioData, setCompletePortfolioData] = useState(0);
  const [portfolioData, setPortfolioData] = useState(0);
  useEffect(() => {
    allPortfolio()
      .then((response) => {
        setCompletePortfolioData(response.data.portfolioObj);
        setAllPortfolioData(response.data.portfolioObj.all.all.all.all);
        portfolioData == 0
          ? setPortfolioData(response.data.portfolioObj.all.all.all.all)
          : portfolioData == 1
          ? setPortfolioData(response.data.portfolioObj.internal.all.all.all)
          : portfolioData == 1
          ? setPortfolioData(response.data.portfolioObj.external.all.all.all)
          : "";
        setInternalPortfolioData(
          response.data.portfolioObj.internal.all.all.all
        );
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
  }, []);

  return {
    completePortfolioData,
    allPortfolioData,
    internalPortfolioData,
    externalPortfolioData,
    holdingData,
    portfolioData,
  };
};

export default usePortfolioData;
