import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
  Image,
} from "react-native";
import { Button, TextInput, Checkbox } from "react-native-paper";
import { Picker } from "@react-native-picker/picker";
import { height, width } from "../../Dimension";
import { Mfuuserdata } from "../../api/services/endpoints/userEndpoints";
import DateTimePicker from "@react-native-community/datetimepicker";
import Loader from "../Components/Loader";
import Isovereeighteen from "../Components/Datediff";
import * as ImagePicker from "expo-image-picker";
import { FontAwesome5 } from "@expo/vector-icons";
import { Uploadsignature } from "./Data";
import * as FileSystem from "expo-file-system";
import { useNavigation } from "@react-navigation/native";
import { useFonts } from "expo-font";

const Upload = ({ data }) => {
  const [loader, setLoader] = useState();
  const [image, setImage] = useState(null);
  const [imageAllData, setImageAllData] = useState(null);
  const [imageName, setImageName] = useState(null);

  const [fontsLoaded] = useFonts({
    "Inter-Black": require("../../../assets/fonts/metropolis-latin-500-normal.ttf"),
  });

  const navigation = useNavigation();

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      setImageAllData(result.assets[0]);
      setImageName(result.assets[0].uri.split("ImagePicker/")[1]);
    }
  };

  const handlemfu = async () => {
    let fileInfo = await FileSystem.getInfoAsync(image);
    let fileSizeInBytes = fileInfo.size;
    let fileSizeInKB = fileSizeInBytes / 1024;
    const filesizeInstr = Math.floor(fileSizeInKB.toString());
    const data = {
      uri: image,
      imageObj: imageAllData,
      action: "fileUpload",
      fileName: imageName,
      documentType: "PAN",
      filesize: filesizeInstr,
    };
    setLoader(true);
    Uploadsignature(data)
      .then((response) => {
        if (response.success) {
          setLoader(false);
          Alert.alert("Success . File has been uploaded successfully");
          navigation.push("Dashboard");
        } else {
          Alert.alert("Failed", response.mfuResponse.responseMsg);
          setLoader(false);
        }
      })
      .catch((error) => {
        Alert.alert("Failed", error);
      });
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps="always"
    >
      <Text style={styles.desc}>
        Upload image of signature on white paper to complete the onboarding
      </Text>

      <Text style={styles.header}>Signature Image</Text>

      <Button
        title="Pick an image from camera roll"
        onPress={pickImage}
        mode="contained-tonal"
        style={styles.imageButton}
      >
        <FontAwesome5 name="file-signature" size={24} color="black" /> Upload
        Signature Image
      </Button>
      {image && (
        <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
      )}
      {loader ? (
        <Loader />
      ) : (
        <>
          <TouchableOpacity activeOpacity={0.7} onPress={handlemfu}>
            <Button
              mode="contained"
              style={styles.button}
              labelStyle={{
                fontSize: width * 0.05,
                color: "rgba(255, 255, 255, 1)",
                textAlign: "center",
                fontFamily: "Inter-Black",
                fontWeight: "600",
              }}
            >
              Done
            </Button>
          </TouchableOpacity>
        </>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  desc: {
    color: "rgba(2, 48, 71, 1)",
    fontSize: width * 0.04,
    fontFamily: "Inter-Black",
    fontWeight: "400",
    lineHeight: height * 0.03,
    marginTop: height * 0.01,
    marginBottom: height * 0.05,
  },
  header: {
    fontSize: width * 0.045,
    color: "rgba(2, 48, 71, 1)",
    fontFamily: "Inter-Black",
    fontWeight: "500",
    marginBottom: height * 0.015,
    opacity: 0.6,
  },
  button: {
    marginBottom: height * 0.04,
    marginTop: height * 0.03,
    height: height * 0.07,
    borderRadius: width * 0.03,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 53, 102, 1)",
  },
  imageButton: {
    backgroundColor: "rgba(33, 158, 188, 1)",
    borderWidth: 1,
    borderRadius: 50,
    width: "70%",
    alignSelf: "center",
    marginTop: height * 0.02,
    marginBottom: height * 0.02,
  },
});

export default Upload;
