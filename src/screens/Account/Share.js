import React from "react";
import { Alert, Share } from "react-native";

const onShare = async () => {
  try {
    const result = await Share.share({
      message:
        "Downlaod App from below Url https://play.google.com/store/apps/details?id=com.fundexpert.app",
    });
  } catch (error) {
    Alert.alert(error.message);
  }
};

export default onShare;
