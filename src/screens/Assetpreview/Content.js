import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { height, width } from "../../Dimension";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { Button } from "react-native-paper";
import Holdings from "./Holdings";
import Overview from "./Overview";
import Portfolio from "./Portfolio";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const Tab = createMaterialTopTabNavigator();

export default Content = (props) => {
  const Data = props.mfData;
  return (
    <View style={styles.tabContainer}>
      <Tab.Navigator
        screenOptions={{
          tabBarIndicatorStyle: {
            backgroundColor: "rgba(13, 32, 0, 1)",
            height: width * 0.009,
            borderRadius: width * 0.01,
          },
        }}
      >
        <Tab.Screen
          name="Overview"
          component={Overview}
          initialParams={{ mfData: Data }}
        />
        <Tab.Screen name="Portfolio" component={Portfolio} />
        <Tab.Screen name="Holdings" component={Holdings} />
      </Tab.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    flex: 1,
    padding: width * 0.06,
    marginTop: -height * 0.02,
  },
});
