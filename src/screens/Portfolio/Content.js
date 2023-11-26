import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { height, width } from "../../Dimension";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { Button } from "react-native-paper";
import Holdings from "./Holdings";
import Analysis from "./Analysis";
import Reports from "./Reports";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useNavigation } from "@react-navigation/native";

const Tab = createMaterialTopTabNavigator();

export default Content = (props) => {
  const { currentPage } = props;

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
        <Tab.Screen name="Analysis" component={Analysis} />
        <Tab.Screen
          name="Holdings"
          initialParams={{ currentPage: currentPage }}
          children={() => <Holdings currentPage={currentPage} />}
        />
        <Tab.Screen name="Reports" component={Reports} />
      </Tab.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    flex: 1,
    padding: width * 0.06,
    marginTop: -height * 0.04,
  },
});
