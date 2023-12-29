import React, { useEffect, useState } from "react";
import {
  AssetPreview,
  Folio,
  Nav,
} from "../../api/services/endpoints/assetEndpoints";

const Assetoverviewdata = async (mfId) => {
  //   try {
  //     const response = await AssetPreview(mfId);
  //     return response;
  //   } catch (erorr) {
  //     console.warn("error", erorr);
  //     return erorr;
  //   }
  //   .then((response) => {
  //     setMfData(response.data);
  //     setLoading(false);
  //   })
  //   .catch((error) => {
  //     console.error("failed:", error);
  //   });
  // return () => {
  //   setMfData({});
  // };
};

export const Foliodata = (mfId) => {
  const [folio, setFolio] = useState([]);
  useEffect(() => {
    Folio(mfId)
      .then((response) => {
        setFolio(response.data.folioArray);
        console.log("folio fetched", response.data);
      })
      .catch((error) => {
        console.warn("folio error", error);
      });
  }, []);

  return folio;
};

export const Navdata = (mfId, trendDuration) => {
  const [nav, setNav] = useState([]);
  useEffect(() => {
    Nav(mfId, trendDuration)
      .then((response) => {
        setNav(response.data);
      })
      .catch((error) => {
        console.warn("nav error", error);
      });
  }, [mfId, trendDuration]);

  return nav;
};

export default Assetoverviewdata;
