import React, { useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import * as FileSystem from "expo-file-system";
import * as Sharing from "expo-sharing";

export default Test = () => {
  const url =
    "file:///storage/emulated/0/Android/data/com.growthvinecapitalapp.app/files/capitalgain_2020.pdf";
  const share = async () => {
    const canShare = await Sharing.isAvailableAsync();

    if (canShare) {
      try {
        const shared = await Sharing.shareAsync(url);
        console.log(shared);
      } catch (e) {
        console.warn("error hai", e);
      }
    }
  };

  return (
    <View>
      <TouchableOpacity onPress={() => share()}>
        <Text>Test this</Text>
      </TouchableOpacity>
    </View>
  );
};
