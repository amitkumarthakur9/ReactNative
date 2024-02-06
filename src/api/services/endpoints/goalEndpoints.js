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
        // console.log("running");
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
      if (maxcurrentamount < data.currentTermAmount) {
        maxcurrentamount = data.currentTermAmount;
      }
      if (maximumduration < data.duration) {
        maximumduration = data.duration;
      }
    });

    goaldata.map((data, index) => {
      const iconWidth =
        (maxWidth / 2) * (data.currentTermAmount / maxcurrentamount);
      const durationWidth = data.duration * (maxWidth / maximumduration);

      allData[index] = {
        goalName: data.name,
        direction: cordinateArr[0][((index + 1) % 4) + 1],
        directionPixel: fixeddirectionPixel,
        iconWidth: iconWidth + maxWidth / 2,
        duration: durationWidth + iconWidth / 2,
        amount: data.currentTermAmount,
      };
    });
  }

  return allData;
};

export const AddGoal = (data) => {
  const urlEncodedData = queryString(data);
  //   console.log("url passed", urlEncodedData);
  return apiClient.post("/app/wish?" + urlEncodedData);
};

export default Goallist;
