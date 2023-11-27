import { useState, useEffect } from "react";
import {
  TrendingNfo,
  Trendingschemes,
} from "../../api/services/endpoints/exploreEndpoints";
import {
  Basket,
  Checksession,
  Logout,
} from "../../api/services/endpoints/userEndpoints";

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

export const Session = () => {
  const [session, setSession] = useState(false);
  useEffect(() => {
    Checksession()
      .then((response) => {
        setSession(response.data.success);
      })
      .catch((error) => {
        console.warn("session:", error);
      });
  }, []);

  return { session };
};

export const SessionEnd = () => {
  Logout();
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
