import { useState, useEffect } from "react";
import { allPortfolio } from "../../api/services/endpoints/portfolioEndpoints";

const usePortfolioData = () => {
  const [allPortfolioData, setAllPortfolioData] = useState("allPortfolioData");
  const [internalPortfolioData, setInternalPortfolioData] = useState();
  const [externalPortfolioData, setExternalPortfolioData] = useState();
  const [holdingData, setholdingData] = useState("holdingData");
  useEffect(() => {
    allPortfolio()
      .then((response) => {
        setAllPortfolioData(response.data.portfolioObj.all.all.all.all);
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
    allPortfolioData,
    internalPortfolioData,
    externalPortfolioData,
    holdingData,
  };
};

export default usePortfolioData;
