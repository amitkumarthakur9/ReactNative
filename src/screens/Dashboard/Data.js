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
import { Cart } from "../../api/services/endpoints/buyEndpoints";

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

export const addToCart = async (data) => {
  try {
    const response = await Cart(data);
    console.log("add to cart", response.data);
    return response.data.success;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default DashboardData;
