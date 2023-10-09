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

export default Content = () => {
  return (
    <View style={styles.tabContainer}>
      <Tab.Navigator>
        <Tab.Screen name="Overview" component={Overview} />
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
  },
});
