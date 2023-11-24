import React from "react";
import { View, Text } from "react-native";
import Exploredrawermenu from "../Components/Exploredrawermenu";
import Dashboardexplore from "./Dashboardexplore";
import Dashboardinvest from "./Dashboardinvest";

const Explore = () => {
  const drawerData = {
    initialRouteName: "Explore",
    component: Dashboardexplore,
    component1: Dashboardinvest,
    component1name: "Invest",
  };
  return <Exploredrawermenu data={drawerData} />;
};

export default Explore;
