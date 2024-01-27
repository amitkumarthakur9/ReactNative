import React, { useState } from "react";
import { View, Button, Alert } from "react-native";
import RNFS from "react-native-fs";

const handleDownload = async (url, category, year) => {
  const downloadDirectory = RNFS.DownloadDirectoryPath;
  var destination = "";
  if (year === undefined) {
    destination = `${downloadDirectory}/${category}.pdf`;
  } else {
    destination = `${downloadDirectory}/${category}_${year}.pdf`;
  }

  // Check if the directory exists, create it if not
  if (!(await RNFS.exists(downloadDirectory))) {
    await RNFS.mkdir(downloadDirectory);
  }

  try {
    // Download the file
    const response = await RNFS.downloadFile({
      fromUrl: url,
      toFile: destination,
    });

    // Check if the promise exists and wait for it to resolve
    if (response.promise) {
      const result = await response.promise;

      if (result.statusCode === 200) {
        // File has been downloaded successfully
        Alert.alert("Download Complete", `File saved to: ${destination}`);

        // Set the path in state for rendering
        // setPath(destination);
      } else {
        // Handle other status codes
        console.error(
          "Error downloading file. Status code:",
          result.statusCode
        );
        Alert.alert("Download Failed", "Unable to download the file.");
      }
    } else {
      // Handle the case where the promise is not available
      console.error("Error downloading file. Promise not available.");
      Alert.alert("Download Failed", "Unable to download the file.");
    }
  } catch (error) {
    console.error("Error downloading file:", error);
    Alert.alert("Download Failed", "Unable to download the file.");
  }
};

export default handleDownload;
