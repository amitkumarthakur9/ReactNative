import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { PieChart } from "react-native-gifted-charts";
import { height, width } from "../../Dimension";
import { Picker } from "@react-native-picker/picker";
import * as progress from "react-native-progress";
import { Portfolio } from "../Assetpreview/Data";
import Loader from "../Components/Loader";
import Inrconvertor from "../Components/Inrconverter";
import { useFonts } from "expo-font";

const Holdings = () => {
  const [wise, setWise] = useState("categoryWise");
  const [pieData, setPieData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [showLoader, setShowLoader] = useState(false);
  const colors = [
    "#1a521d",
    "#ba3de6",
    "#74bb57",
    "#f73a0d",
    "#4eb386",
    "#501a05",
    "#872540",
    "#ccea6b",
    "#b0efbf",
    "#4fa616",
    "#1da891",
    "#7ddce7",
    "#53c53a",
    "#90165e",
    "#4264d2",
    "#5ec6a6",
    "#1f37ab",
    "#5841b1",
    "#4488e1",
    "#186d13",
    "#826a71",
    "#e6da60",
    "#8d2c87",
    "#77c991",
    "#52dd0f",
    "#9c2d95",
    "#2e43c3",
    "#f2682f",
    "#be2690",
    "#fbd8b4",
    "#ee0b74",
    "#eeb45f",
    "#ae49f6",
    "#c6c440",
    "#838357",
    "#374ed4",
    "#d6c05f",
    "#4fece5",
    "#e3ca4a",
    "#a192f1",
  ];
  const [fontsLoaded] = useFonts({
    "Inter-Black": require("../../../assets/fonts/metropolis-latin-500-normal.ttf"),
  });

  useEffect(() => {
    Portfolio().then((response) => {
      const obj = response;
      const wholeObj = [];
      const categoryArr = [];
      const subCategoryArr = [];
      const pieSub = [];
      const pieChart = [];
      for (let key in obj) {
        if (key != "total") {
          wholeObj.push(obj[key]);
          categoryArr.push({ [key]: obj[key]["total"] });
          pieChart.push({ value: Math.floor(obj[key]["total"]) });
        }
      }

      for (let key in wholeObj) {
        const totalObj = wholeObj[key];
        for (let totalkey in totalObj) {
          if (totalkey != "total") {
            subCategoryArr.push({ [totalkey]: totalObj[totalkey] });
            pieSub.push({ value: totalObj[totalkey] });
          }
        }
      }

      for (let i = 0; i < pieSub.length; i++) {
        pieSub[i]["color"] = colors[i];
        subCategoryArr[i]["color"] = colors[i];
      }

      for (let i = 0; i < pieChart.length; i++) {
        pieChart[i]["color"] = colors[i];
        categoryArr[i]["color"] = colors[i];
      }

      if (wise == "categoryWise") {
        setPieData(pieChart);
        setCategories(categoryArr);
        setShowLoader(false);
      } else {
        setPieData(pieSub);
        setCategories(subCategoryArr);
        setShowLoader(false);
      }
    });
  }, [wise]);

  const handleWise = (value) => {
    setWise(value);
    setShowLoader(true);
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={styles.donutContainer}>
          <TouchableOpacity>
            <Picker
              selectedValue={wise}
              onValueChange={(value) => handleWise(value)}
              mode="dropdown"
              style={styles.sectorHeading}
            >
              <Picker.Item
                label="Category Wise"
                value="categoryWise"
                style={styles.pickerLabelStyle}
              />
              <Picker.Item
                label="Sub-Category Wise"
                value="subCategoryWise"
                style={styles.pickerLabelStyle}
              />
            </Picker>
          </TouchableOpacity>
          {pieData.length > 0 && !showLoader ? (
            <View style={styles.chartContainer}>
              <PieChart
                donut
                radius={width * 0.32}
                data={pieData}
                innerRadius={width * 0.22}
              />
            </View>
          ) : (
            <Loader />
          )}

          <View
            style={[
              styles.sectorContainer,
              {
                borderBottomWidth: width * 0.005,
                borderColor: "rgb(230, 230, 230)",
              },
            ]}
          >
            <Text style={[styles.sectorHeader, { marginLeft: width * 0.09 }]}>
              Categories
            </Text>
            <Text style={[styles.sectorHeader, { textAlign: "right" }]}>
              Amount
            </Text>
          </View>
          {categories.map((categoryItem, index) => {
            const [categoryKey, categoryValue] =
              Object.entries(categoryItem)[0];
            const [colorName, colorValue] = Object.entries(categoryItem)[1];
            if (Math.floor(categoryValue)) {
              return (
                <View style={styles.sectorContainer} key={index}>
                  <Text
                    style={[
                      styles.bullet,
                      { backgroundColor: `${colorValue}` },
                    ]}
                  />
                  <Text style={styles.sectorItem}>
                    {categoryKey.toUpperCase()}
                  </Text>
                  <Text style={[styles.sectorPercentage]}>
                    {Inrconvertor(Math.floor(categoryValue))}
                  </Text>
                </View>
              );
            }
          })}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  donutContainer: {
    padding: width * 0.06,
    marginTop: height * 0.03,
    borderWidth: width * 0.003,
    borderRadius: width * 0.035,
    borderColor: "rgb(230, 230, 230)",
    backgroundColor: "white",
    elevation: width * 0.01,
  },
  bullet: {
    width: width * 0.035,
    height: width * 0.035,
    marginTop: width * 0.04,
    backgroundColor: "red",
    borderRadius: (width * 0.035) / 2,
  },
  chartContainer: {
    alignSelf: "center",
    left: width * 0.03,
  },
  sectorHeading: {
    color: "rgba(2, 48, 71, 1)",
    marginBottom: height * 0.04,
    fontFamily: "Inter-Black",
    fontWeight: "bold",
  },
  sectorContainer: {
    flexDirection: "row",
  },
  sectorHeader: {
    flex: 1,
    margin: width * 0.025,
    fontFamily: "Inter-Black",
    fontWeight: "600",
    fontSize: width * 0.04,
    lineHeight: height * 0.027,
    color: "rgba(115, 115, 115, 1)",
  },
  sectorItem: {
    flex: 1,
    margin: width * 0.03,
    fontFamily: "Inter-Black",
    fontWeight: "500",
    fontSize: width * 0.035,
    lineHeight: height * 0.027,
    color: "rgba(64, 64, 64, 1)",
    opacity: 0.85,
    marginLeft: width * 0.05,
  },
  sectorPercentage: {
    flex: 1,
    margin: width * 0.03,
    fontFamily: "Inter-Black",
    fontWeight: "500",
    fontSize: width * 0.038,
    lineHeight: height * 0.028,
    color: "rgba(2, 48, 71, 1)",
    opacity: 0.95,
    textAlign: "right",
  },
  companyHolding: {
    marginTop: height * 0.05,
    fontFamily: "Inter-Black",
    fontWeight: "600",
    fontSize: width * 0.045,
    lineHeight: height * 0.035,
    color: "rgba(2, 48, 71, 1)",
    marginBottom: height * 0.03,
  },
  progressBarContainer: {
    flexDirection: "row",
  },
  progressBarItem: {
    marginBottom: height * 0.02,
    flex: 1,
  },
  progressBarPercentage: {
    marginTop: height * 0.035,
    color: "rgba(33, 158, 188, 0.6)",
    fontSize: width * 0.035,
    lineHeight: height * 0.02,
    fontFamily: "Inter-Black",
    fontWeight: "600",
  },
  progressHeader: {
    color: "rgba(0, 0, 0, 1)",
    lineHeight: height * 0.04,
    fontSize: width * 0.035,
    fontFamily: "Inter-Black",
    fontWeight: "500",
  },
  pickerLabelStyle: {
    fontSize: width * 0.04,
    fontFamily: "Inter-Black",
    fontWeight: "bold",
  },
});

export default Holdings;
