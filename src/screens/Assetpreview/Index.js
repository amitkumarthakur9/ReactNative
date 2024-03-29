import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { height, width } from "../../Dimension";
import Assetheader from "../Components/Assetheader";
import Content from "./Content";
import Assetfooter from "../Components/Assetfooter";
import { useRoute } from "@react-navigation/native";
import { AssetPreview } from "../../api/services/endpoints/assetEndpoints";
import Loader from "../Components/Loader";

const Assetpreview = ({ navigation }) => {
  const [loading, setLoading] = useState(true);
  const [mfData, setMfData] = useState({});
  const route = useRoute();
  const { mfId, trendType } = route.params;

  useEffect(() => {
    AssetPreview(mfId)
      .then((response) => {
        setMfData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("failed:", error);
      });
    return () => {
      setMfData({});
    };
  }, [mfId]);

  return (
    <View style={styles.mainContainer}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Assetheader mfData={mfData} />
          <Content mfData={mfData} trendType={trendType} />
          <Assetfooter mfData={mfData} />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "white",
    flex: 1,
  },
});

export default Assetpreview;
