import React, { useState } from "react";
import { View, Button, Alert } from "react-native";
import RNFS from "react-native-fs";

const handleDownload = async (url, category, year, type) => {
  const downloadDirectory = RNFS.ExternalDirectoryPath;
  var destination = "";
  if (year === undefined) {
    destination = `${downloadDirectory}/${category}.pdf`;
  } else {
    destination = `${downloadDirectory}/${category}_${year}.pdf`;
  }
  if (!(await RNFS.exists(downloadDirectory))) {
    await RNFS.mkdir(downloadDirectory);
  }
  try {
    const response = await RNFS.downloadFile({
      fromUrl: url,
      toFile: destination,
    });

    if (response.promise) {
      const result = await response.promise;

      if (result.statusCode === 200) {
        if (type != "share") {
          Alert.alert("Download Complete", `File saved to: ${destination}`);
        }
        return `file://${destination}`;
      } else {
        console.error(
          "Error downloading file. Status code:",
          result.statusCode
        );
        Alert.alert("Download Failed", "Unable to download the file.");
      }
    } else {
      console.error("Error downloading file. Promise not available.");
      Alert.alert("Download Failed", "Unable to download the file.");
    }
  } catch (error) {
    console.error("Error downloading file:", error);
    Alert.alert("Download Failed", "Unable to download the file.");
  }
};

export default handleDownload;
