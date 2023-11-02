import React from "react";
import { View, Text } from "react-native";
import Drawermenu from "../Components/Drawermenu";
import Dashboardhome from "./Dashboardhome";
import Dashboardinvest from "./Dashboardinvest";

const Home = () => {
  const drawerData = {
    initialRouteName: "Home",
    component: Dashboardhome,
    component1: Dashboardinvest,
    component1name: "Invest",
  };
  return <Drawermenu data={drawerData} />;
};

export default Home;
