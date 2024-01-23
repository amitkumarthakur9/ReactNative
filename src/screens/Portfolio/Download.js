import React from "react";
import { View, Button, Alert } from "react-native";
import RNFS from "react-native-fs";

const FileDownloadComponent = () => {
  const handleDownload = async () => {
    const url = "https://www.africau.edu/images/default/sample.pdf";
    const destination = RNFS.DownloadDirectoryPath + "/your-file-name.pdf";

    try {
      const response = await RNFS.downloadFile({
        fromUrl: url,
        toFile: destination,
      });

      if (response.statusCode === 200) {
        // File has been downloaded successfully
        Alert.alert("Download Complete", `File saved to: ${destination}`);
      } else {
        // Handle other status codes
        console.error(
          "Error downloading file. Status code:",
          response.statusCode
        );
        Alert.alert("Download Failed", "Unable to download the file.");
      }
    } catch (error) {
      console.error("Error downloading file:", error);
      Alert.alert("Download Failed", "Unable to download the file.");
    }
  };

  return (
    <View>
      <Button title="Download File" onPress={handleDownload} />
    </View>
  );
};

export default FileDownloadComponent;
