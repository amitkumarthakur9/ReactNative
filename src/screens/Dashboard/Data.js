import { useState, useEffect } from "react";
import {
  TrendingNfo,
  Trendingschemes,
} from "../../api/services/endpoints/exploreEndpoints";
import { Basket } from "../../api/services/endpoints/userEndpoints";

export const Thematicbasket = () => {
  const [basketData, setBasketData] = useState("basket");
  useEffect(() => {
    Basket()
      .then((response) => {
        setBasketData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return { basketData };
};

const DashboardData = () => {
  const [trendingschemes, setTrendingschemes] = useState();
  const [trendingNfo, setTrendingNfo] = useState();

  useEffect(() => {
    Trendingschemes()
      .then((response) => {
        setTrendingschemes(response.data.funds);
      })
      .catch((error) => {
        console.error("schemes failed:", error);
      });

    TrendingNfo()
      .then((response) => {
        setTrendingNfo(response.data);
      })
      .catch((error) => {
        console.error("nfo failed:", error);
      });
  }, []);

  return { trendingschemes, trendingNfo };
};

export default DashboardData;
