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
import { useSelector } from "react-redux";
import { Badge } from "react-native-paper";

const Imagecontainer = (props) => {
  const Cartcount = useSelector((state) => state.cart.count);
  const { url, tabHome, show } = props;

  return (
    <View style={styles.imageview}>
      {show && Cartcount > 0 && (
        <Badge
          style={{
            position: "absolute",
            top: -height * 0.02,
            backgroundColor: "rgba(33, 158, 188, 1)",
            fontFamily: "Inter-Black",
            fontWeight: "600",
          }}
        >
          {Cartcount}
        </Badge>
      )}

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
              show={false}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.flexBox}
            onPress={() => navigation.push("Dashboard", "Goal")}
          >
            <Imagecontainer
              url={require("../../../assets/menu/Shape.png")}
              tabHome="Goal"
              show={false}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.flexBox}
            onPress={() => navigation.push("Dashboard", "Explore")}
          >
            <Imagecontainer
              url={require("../../../assets/menu/Explore.png")}
              tabHome="Explore"
              show={false}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.flexBox}
            onPress={() => navigation.push("Dashboard", "AddToCart")}
          >
            <Imagecontainer
              url={require("../../../assets/menu/cart.png")}
              tabHome="Cart"
              show={true}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.flexBox}
            onPress={() => navigation.push("Dashboard", "Account")}
          >
            <Imagecontainer
              url={require("../../../assets/menu/Person.png")}
              tabHome="Account"
              show={false}
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
    marginTop: height * 0.015,
  },
  imageview: {
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: width * 0.07,
    height: width * 0.07,
    tintColor: "rgba(202, 196, 208, 1)",
    resizeMode: "contain",
  },
  flexContainer: {
    width: width,
    height: height * 0.12,
    borderWidth: width * 0.002,
    borderColor: "rgb(217, 217, 217)",
    backgroundColor: "white",
    borderTopLeftRadius: width * 0.05,
    borderTopRightRadius: width * 0.05,
    padding: width * 0.02,
    elevation: width * 0.05,
  },
});

export default Index;
