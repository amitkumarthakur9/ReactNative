import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState, useCallback } from "react";
import { height, width } from "../../Dimension";
import DocumentPicker from "@react-native-picker/picker";

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

  return (
    <View>
      <View
        style={[
          styles.footerContainer,
          {
            width: width,
            padding: width * 0.04,
            marginBottom: height * 0.39,
            marginLeft: width * -0.053,
            height: height * 0.118,
          },
        ]}
      >
        <View style={styles.flexContainer}>
          <TouchableOpacity
            style={[styles.footerButtons, { backgroundColor: "#023047" }]}
          >
            <Text style={styles.submitText}>Complete Payment</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    backgroundColor: "white",
    borderWidth: width * 0.003,
    borderColor: "rgb(230, 230, 230)",
    elevation: width * 0.005,
  },
  flexContainer: {
    flexDirection: "row",
  },

  footerButtons: {
    flex: 1,
    marginTop: height * 0.002,
    alignItems: "center",
    borderRadius: width * 0.03,
    borderWidth: 1,
    borderColor: "#023047",
    padding: width * 0.024,
  },
  submitText: {
    padding: width * 0.01,
    color: "#fff",
    fontSize: width * 0.047,
  },
});
