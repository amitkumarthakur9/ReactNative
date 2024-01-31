import React, { useEffect } from "react";
import { Alert, Button, View } from "react-native";
import * as Sharing from "expo-sharing";
import RNFS from "react-native-fs";

export default function App() {
  useEffect(() => {
    if (Sharing.isAvailableAsync()) {
      console.log("heheheheh");
    }
    // async function askForPermissions() {
    //   try {
    //     const { status } = await Permissions.askAsync(
    //       Permissions.MEDIA_LIBRARY_READ_WRITE
    //     );
    //     if (status !== "granted") {
    //       throw new Error("Permission not granted");
    //     }
    //   } catch (error) {
    //     console.error("Error asking for permissions:", error);
    //     Alert.alert(
    //       "Permission Error",
    //       "Failed to obtain necessary permissions."
    //     );
    //   }
    // }

    // askForPermissions();
  }, []);

  const shareFile = () => {
    const downloadDirectory = RNFS.DownloadDirectoryPath;
    //  `${downloadDirectory}/${category}.pdf`;
    Sharing.shareAsync(`file://${downloadDirectory}/1.pdf}`, {
      dialogTitle: "Hello",
    });
    // try {
    //   //   const fileUri = `file:///storage/emulated/0/Download/2.pdf`; // Adjust the path accordingly

    //   // Check if the file exists
    //   //const fileInfo = await FileSystem.getInfoAsync(fileUri);
    //   //   if (!fileInfo.exists) {
    //   //     throw new Error("File not found");
    //   //   }

    //   Sharing.shareAsync("file:///storage/emulated/0/Download/2.pdf");

    //   //Sharing.shareAsync(fileUri);
    // } catch (error) {
    //   console.error("Error sharing:", error);
    //   Alert.alert("Sharing Error", "Failed to share the file.");
    // }
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button title="Share File" onPress={shareFile} />
    </View>
  );
}
