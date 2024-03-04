import React, { useState, useEffect } from "react";
import {
  Text,
  Image,
  View,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Keyboard,
} from "react-native";
import { height, width } from "../../Dimension";
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/native";

const Imagecontainer = (props) => {
  const { url, tabHome } = props;

  return (
    <View style={styles.imageview}>
      <Image source={url} style={styles.image} />
      <Text style={styles.text}>{tabHome}</Text>
    </View>
  );
};

const Index = () => {
  const navigation = useNavigation();
  const [viewportHeight, setViewportHeight] = useState(
    Dimensions.get("window").height
  );
  const [fontsLoaded] = useFonts({
    "Inter-Black": require("../../../assets/fonts/metropolis-latin-500-normal.ttf"),
  });

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      (event) => {
        // Update viewport height when the keyboard is opened
        setViewportHeight(
          Dimensions.get("window").height - event.endCoordinates.height
        );
      }
    );

    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        // Reset viewport height when the keyboard is closed
        setViewportHeight(Dimensions.get("window").height);
      }
    );

    // Cleanup listeners
    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  return (
    <View style={styles.container}>
      {viewportHeight == height ? (
        <View style={[styles.flexContainer, styles.flex]}>
          <TouchableOpacity
            style={styles.flexBox}
            onPress={() => navigation.push("Dashboard")}
          >
            <Imagecontainer
              url={require("../../../assets/menu/Home.png")}
              tabHome="Home"
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.flexBox}
            onPress={() => navigation.push("Goalmenu")}
          >
            <Imagecontainer
              url={require("../../../assets/menu/Shape.png")}
              tabHome="Goal"
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.flexBox}
            onPress={() => navigation.push("Exploremenu")}
          >
            <Imagecontainer
              url={require("../../../assets/menu/Explore.png")}
              tabHome="Explore"
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.flexBox}
            onPress={() => navigation.push("Ordermenu")}
          >
            <Imagecontainer
              url={require("../../../assets/menu/cart.png")}
              tabHome="Cart"
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.flexBox}
            onPress={() => navigation.push("Accountmenu")}
          >
            <Imagecontainer
              url={require("../../../assets/menu/Person.png")}
              tabHome="Account"
            />
          </TouchableOpacity>
        </View>
      ) : (
        ""
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "white",
  },
  text: {
    fontSize: width * 0.035,
    lineHeight: height * 0.05,
    fontFamily: "Inter-Black",
    fontWeight: "500",
  },
  flex: {
    flexDirection: "row",
  },
  flexBox: {
    flex: 1,
    alignItems: "center",
  },
  imageview: {
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: width * 0.067,
    height: width * 0.067,
    tintColor: "rgba(202, 196, 208, 1)",
    resizeMode: "contain",
  },
  flexContainer: {
    width: width,
    height: height * 0.1,
    borderWidth: width * 0.002,
    borderColor: "rgb(230, 230, 230)",
    backgroundColor: "white",
    borderTopLeftRadius: width * 0.05,
    borderTopRightRadius: width * 0.05,
    padding: width * 0.02,
    elevation: width * 0.05,
  },
});

export default Index;
