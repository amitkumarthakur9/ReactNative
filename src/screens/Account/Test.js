import React from "react";
import { Text, Image, View, TouchableOpacity, StyleSheet } from "react-native";
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

const Menu = () => {
  const navigation = useNavigation();
  const [fontsLoaded] = useFonts({
    "Inter-Black": require("../../../assets/fonts/metropolis-latin-500-normal.ttf"),
  });

  return (
    <View style={styles.container}>
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
        <TouchableOpacity style={styles.flexBox}>
          <Imagecontainer
            url={require("../../../assets/menu/Shape.png")}
            tabHome="Goal"
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.flexBox}>
          <Imagecontainer
            url={require("../../../assets/menu/Explore.png")}
            tabHome="Explore"
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.flexBox}>
          <Imagecontainer
            url={require("../../../assets/menu/cart.png")}
            tabHome="Cart"
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.flexBox}>
          <Imagecontainer
            url={require("../../../assets/menu/Person.png")}
            tabHome="Account"
          />
        </TouchableOpacity>
      </View>
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
  //    screenOptions={{
  //         tabBarActiveTintColor: "rgba(2, 48, 71, 1)",
  //         tabBarInactiveTintColor: "rgba(202, 196, 208, 1)",
  //         headerShown: false,
  //         tabBarStyle: {
  //           height: height * 0.1,
  //           backgroundColor: "rgba(255, 255, 255, 1)",
  //           borderTopLeftRadius: width * 0.05,
  //           borderTopRightRadius: width * 0.05,
  //           borderColor: "rgba(0, 0, 0, 0.1)",
  //           padding: width * 0.02,
  //           elevation: width * 0.02,
  //         },
  //         tabBarLabelStyle: {
  //           fontSize: width * 0.035,
  //           lineHeight: height * 0.025,
  //           fontFamily: "Inter-Black",
  //           fontWeight: "500",
  //           marginBottom: height * 0.015,
  //         },
});

export default Menu;
