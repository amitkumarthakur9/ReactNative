import React, { useState, useEffect } from "react";
import { View, Text, Button } from "react-native";
import { createUser } from "./api/services/endpoints/userEndpoints";
import {
  searchFund,
  Nfo,
  Trendingschemes,
} from "./api/services/endpoints/exploreEndpoints";

const UserScreen = () => {
  const [user, setUser] = useState(null);

  const handleLogin = () => {
    // Create a new user
    const newUser = {
      //   action: "login",
      //   email: "amitskumar15041995@gmail.com",
      //   password: "Amit123@",
      //   //   ifaLogin: false,
      //   addedBy: 186100,
      //   ref: "App",
    };

    const jsonData = JSON.parse(JSON.stringify(newUser));

    // console.log(jsonData.email);

    createUser(jsonData)
      .then((response) => {
        console.log("User data:", response.data);
      })
      .catch((error) => {
        console.error("Error login:", error);
      });
  };

  const handleSearch = () => {
    const funddata = {
      //   term: "aditya % 20birla",
      //   optiontype: "GROWTH",
    };

    searchFund(funddata)
      .then((response) => {
        console.log("search data:", response.data);
      })
      .catch((error) => {
        console.error("search failed:", error);
      });
  };

  const handleNfo = () => {
    const funddata = {
      //   term: "aditya % 20birla",
      //   optiontype: "GROWTH",
    };

    Nfo(funddata)
      .then((response) => {
        console.log("nfo data:", response.data);
      })
      .catch((error) => {
        console.error("nfo failed:", error);
      });
  };

  const handleTrendingSchemes = () => {
    const funddata = {
      //   term: "aditya % 20birla",
      //   optiontype: "GROWTH",
    };

    Trendingschemes(funddata)
      .then((response) => {
        console.log("schemes data:", response.data);
      })
      .catch((error) => {
        console.error("schemes failed:", error);
      });
  };

  return (
    <View style={{ marginTop: 100 }}>
      <Button title="User Login" onPress={handleLogin} />

      <Button title="search axis" onPress={handleSearch} />
      <Button title="get Nfo" onPress={handleNfo} />
      <Button title="Trending Schemes" onPress={handleTrendingSchemes} />
    </View>
  );
};

export default UserScreen;
