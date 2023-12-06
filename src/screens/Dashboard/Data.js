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
  const [basketData, setBasketData] = useState([]);
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
  const [session, setSession] = useState(true);
  useEffect(() => {
    Checksession()
      .then((response) => {
        setSession(response.data.success);
      })
      .catch((error) => {
        console.warn("session:", error);
      });
    return () => {
      setSession(false);
    };
  }, []);

  return { session };
};

export const SessionEnd = () => {
  const [logout, setLogout] = useState(false);
  useEffect(() => {
    Logout()
      .then((response) => {
        setLogout(response.data.success);
      })
      .catch((error) => {
        console.warn(error);
      });
    return () => {
      setLogout(false);
    };
  }, []);

  return { logout };
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
