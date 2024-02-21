import React, { useEffect } from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import * as FileSystem from "expo-file-system";
import * as Sharing from "expo-sharing";

export default Index = (url) => {
  if (!url) {
    Alert.alert("please download first");
  } else {
    FileSystem.getInfoAsync(url).then((res) => {
      if (res.exists) {
        Sharing.isAvailableAsync().then((response) => {
          if (response) {
            Sharing.shareAsync(url)
              .then((childresponse) => {})
              .catch((e) => {
                console.warn(e);
              });
          }
        });
      } else {
        Alert.alert("File Does not exists . please download first");
      }
    });
  }
};
