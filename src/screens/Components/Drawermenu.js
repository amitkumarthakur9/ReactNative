import React from "react";
import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons, EvilIcons } from "@expo/vector-icons";
import { height, width } from "../../Dimension";

const Drawer = createDrawerNavigator();

const Drawermenu = (props) => {
  const { initialRouteName, component, component1, component1name } =
    props.data;
  return (
    <Drawer.Navigator
      initialRouteName={initialRouteName}
      screenOptions={{
        headerTitle: "Hello, Sumesh!",
        headerBackground: () => (
          <ImageBackground
            source={require("../../../assets/icons/header.png")}
            style={{ width: width, height: height * 0.29 }}
            resizeMode="stretch"
          >
            <View
              style={{
                flexDirection: "row",
                alignSelf: "flex-end",
                marginTop: height * 0.1,
                marginRight: width * 0.06,
              }}
            >
              <TouchableOpacity style={{ marginLeft: width * 0.03 }}>
                <EvilIcons name="search" size={width * 0.07} color="white" />
              </TouchableOpacity>
              {/* <TouchableOpacity style={{ marginLeft: width * 0.03 }}>
                <Ionicons
                  name="notifications-outline"
                  size={width * 0.06}
                  color="white"
                />
              </TouchableOpacity> */}
            </View>
          </ImageBackground>
        ),
        headerStyle: {
          height: height * 0.17,
        },
        headerTitleStyle: {
          color: "rgba(255, 255, 255, 1)",
          lineHeight: height * 0.03,
          fontSize: width * 0.06,
          fontWeight: "700",
        },
      }}
    >
      <Drawer.Screen name={initialRouteName} component={component} />
      <Drawer.Screen name={component1name} component={component1} />
    </Drawer.Navigator>
  );
};

export default Drawermenu;
