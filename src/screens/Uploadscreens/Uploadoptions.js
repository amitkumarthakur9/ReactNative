import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  StatusBar,
  Linking,
  TouchableOpacity,
} from "react-native";
import React, { useState, useCallback } from "react";
import { Button } from "react-native-paper";
import { height, width } from "../../Dimension";
import DocumentPicker from "@react-native-picker/picker";
import { useFonts } from "expo-font";
export default Uploadoptions = () => {
  const [fileResponse, setFileResponse] = useState([]);

  const handleDocumentSelection = useCallback(async () => {
    try {
      const response = await DocumentPicker.pick({
        presentationStyle: "fullScreen",
        type: [types.pdf],
        allowMultiSelection: true,
      });
      setFileResponse(response);
    } catch (err) {
      // console.warn(err);
    }
  }, []);

  const [fontsLoaded] = useFonts({
    "Inter-Black": require("../../../assets/fonts/metropolis-latin-500-normal.ttf"),
  });

  return (
    <View style={styles.optionsContainer}>
      <View style={styles.buttonContainer}>
        <Image
          source={require("../../../assets/uploadIcon/Shape.png")}
          style={styles.optionImage}
        />
        <Text style={styles.optionText}>
          You will receive an Email from {"\n"}Fintech with your CAS
        </Text>
      </View>
      <View style={styles.buttonContainer2}>
        <Image
          source={require("../../../assets/uploadIcon/Shape2.png")}
          style={styles.optionImage2}
        />
        <Text style={styles.optionText}>
          Forward the email containing {"\n"}CAS to{" "}
          <Text
            style={{ color: "blue" }}
            onPress={() => Linking.openURL("http://google.com")}
          >
            x@mail.com
          </Text>
        </Text>
      </View>
      <View>
        <Text style={styles.orText}>OR</Text>
      </View>

      <View style={styles.buttonContainer2}>
        <Image
          source={require("../../../assets/uploadIcon/Shape3.png")}
          style={styles.optionImage3}
        />
        <Text style={styles.optionText}>
          Upload CAS.pdf here and begin {"\n"}monitoring all your funds in
          {"\n"}one place
        </Text>
      </View>

      <SafeAreaView style={styles.container}>
        <StatusBar barStyle={"dark-content"} />
        {fileResponse.map((file, index) => (
          <Text
            key={index.toString()}
            style={styles.uri}
            numberOfLines={1}
            ellipsizeMode={"middle"}
          >
            {file?.uri}
          </Text>
        ))}

        <Button
          mode="contained"
          style={[
            styles.uploadButton,
            {
              backgroundColor: "#219EBC",
              borderColor: "#219EBC",
            },
          ]}
          icon={require("../../../assets/uploadIcon/Shape4.png")}
          onPress={handleDocumentSelection}
        >
          <Text
            style={{
              fontFamily: "Metropolis",
              fontFamily: "Inter-Black",
              fontWeight: "500",
              fontSize: width * 0.034,
            }}
          >
            Upload
          </Text>
        </Button>
      </SafeAreaView>

      <View style={styles.footerButton}>
        <View style={styles.flexContainer}>
          <TouchableOpacity
            style={[
              styles.footerButtons,
              { backgroundColor: "#023047", marginTop: height * -0.02 },
            ]}
          >
            <Text style={styles.submitText}>Done</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  optionsContainer: {
    marginTop: height * 0.0468,
    paddingLeft: width * 0.107,
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer2: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: height * 0.032,
  },
  buttonContainer3: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: height * 0.032,
  },
  optionImage: {
    width: width * 0.086,
    height: height * 0.037,
    marginLeft: width * -0.23,
    opacity: 0.6,
  },

  optionImage2: {
    width: width * 0.086,
    height: height * 0.037,
    marginLeft: width * -0.23,
    opacity: 0.6,
    paddingTop: height * 0.0405,
  },
  optionImage3: {
    width: width * 0.086,
    height: height * 0.037,
    marginLeft: width * -0.19,
    opacity: 0.6,
    paddingTop: height * 0.04,
  },
  optionText: {
    color: "#023047",
    fontFamily: "Inter-Black",
    fontWeight: "500",
    fontSize: width * 0.037,
    fontFamily: "Metropolis",
    marginLeft: width * 0.05,
    lineHeight: height * 0.028,
  },
  orText: {
    color: "#023047",
    fontSize: width * 0.033,
    fontFamily: "Inter-Black",
    fontWeight: "600",
    textAlign: "center",
    fontFamily: "Metropolis",
    marginTop: height * 0.02,
    opacity: 0.5,
  },
  uploadButton: {
    marginTop: height * 0.041,
    borderRadius: width * 0.03,
    borderWidth: width * 0.002,
    borderColor: "rgb(191, 191, 191)",
    height: height * 0.05,
    width: width * 0.26,
    marginLeft: width * 0.29,
  },

  footerButton: {
    padding: width * 0.04,
    // marginTop: height * 0.03,
    backgroundColor: "white",
    borderWidth: width * 0.002,
    borderColor: "rgb(230, 230, 230)",
    elevation: width * 0.02,
    marginLeft: width * -0.11,
    marginTop: height * 0.045,
    height: height * 1,
  },

  flexContainer: {
    flexDirection: "row",
    marginTop: height * 0.03,
  },

  footerButtons: {
    flex: 1,
    // marginTop: height* 0.106,
    alignItems: "center",
    borderRadius: width * 0.03,
    borderWidth: 1,
    borderColor: "#023047",
    padding: width * 0.02,
  },

  submitText: {
    padding: width * 0.01,
    color: "#fff",
    fontSize: width * 0.047,
  },
});
