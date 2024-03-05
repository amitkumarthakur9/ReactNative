import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { width, height } from "../../../Dimension";
import apiClient from "../apiClient";
import queryString from "./queryString";

const Goallist = () => {
  const [goaldata, setGoaldata] = useState([]);
  const [duration, setDuration] = useState(0);
  const userId = useSelector((state) => state.user.id);

  useEffect(() => {
    $baseUrl = `https://data.fundexpert.in/goal.php?action=fetchGoals&userId=${userId}`;
    axios
      .get($baseUrl)
      .then((response) => {
        setGoaldata(response.data.goals);
        // console.log("api response running", response.data.goals);
      })
      .catch((error) => {
        console.warn("error", error);
      });
  }, []);

  var maxcurrentamount = 0;
  var maximumduration = 0;
  const maxWidth = width * 0.32;
  const fixeddirectionPixel = width * 0.42;
  const allData = [];

  const cordinateArr = [{ 1: "top", 2: "bottom", 3: "left", 4: "right" }];

  if (goaldata != undefined) {
    goaldata.map((data, index) => {
      if (parseInt(maxcurrentamount) < parseInt(data.currentTermAmount)) {
        maxcurrentamount = parseInt(data.currentTermAmount);
      }
      if (parseInt(maximumduration) < parseInt(data.duration)) {
        maximumduration = parseInt(data.duration);
      }
    });

    goaldata.map((data, index) => {
      console.log("maxcurrentamount", maxcurrentamount);
      console.log("currentTermAmount", data.currentTermAmount);
      const iconWidth =
        (maxWidth / 2) * (data.currentTermAmount / maxcurrentamount);

      const durationWidth = data.duration * (maxWidth / maximumduration);
      console.log("iconWidth", iconWidth);
      console.log("maxWidth", maxWidth);

      allData[index] = {
        goalName: data.name,
        direction: cordinateArr[0][((index + 1) % 4) + 1],
        directionPixel: fixeddirectionPixel,
        iconWidth: iconWidth + maxWidth / 2,
        duration: durationWidth + iconWidth / 2,
        amount: data.currentTermAmount,
        id: data.id,
        apiduration: data.duration,
      };
    });
  }

  return allData;
};

export const AddGoal = (data) => {
  const urlEncodedData = queryString(data);
  console.log("url passed", urlEncodedData);
  return apiClient.post("/app/wish?" + urlEncodedData);
};

export const Goalassets = (data) => {
  const { wishId, userId } = data;
  return axios.get(
    `https://data.fundexpert.in/goal.php?action=fetchGoalHoldingsSelect&wishId=${wishId}&userId=${userId}`
  );
};

export const Goalfetch = (userId) => {
  return axios.get(
    `https://data.fundexpert.in/goal.php?action=fetchGoals&userId=${userId}`
  );
};

export const Attachgoal = (data) => {
  const urlEncodedData = queryString(data);
  return axios.get("https://data.fundexpert.in/goal.php?" + urlEncodedData);
};

export default Goallist;
