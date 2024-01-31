import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { Badge, Button } from "react-native-paper";

import { height, width } from "../../Dimension";
import Header from "../Components/Header";
import { useNavigation } from "@react-navigation/native";
import Goallist from "../../api/services/endpoints/goalEndpoints";
import Tooltip from "react-native-walkthrough-tooltip";
import { useSelector } from "react-redux";
import inrconvertor from "../Components/Inrconverter";

const Goal = () => {
  const navigation = useNavigation();
  const scrollViewRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const goallistData = Goallist(2);
  const profilePic = useSelector((state) => state.user.profilepic);
  const [activeTooltipIndex, setActiveTooltipIndex] = useState(null);

  const contentItems = [
    {
      title: "Create New Goals",
      desc: "Click on the plus button to add a goal ring to your story or quick add from some of our preset goals.",
    },
    {
      title: "Track your goals",
      desc: "Click on the rings to view the progress on each of your goals. Hover over each to see percentage remaining to achieve goal.",
    },
  ];

  const moveCarousel = () => {
    const newIndex = (activeSlide + 1) % contentItems.length;
    setActiveSlide(newIndex);
    scrollViewRef.current.scrollTo({ x: newIndex * width, animated: true });
  };

  return (
    <View style={styles.container}>
      <Header title="Goals" showPlusSign={true} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.mainContentContainer}>
          <ImageBackground
            source={require("../../../assets/Goal/1.png")}
            style={styles.circleImage}
          >
            <TouchableOpacity style={styles.circleContainer}>
              <Image
                source={
                  profilePic != undefined
                    ? { uri: profilePic }
                    : require("../../../assets/Goal/profile.png")
                }
                style={styles.profileImage}
              />
            </TouchableOpacity>

            {goallistData.length > 0 &&
              goallistData.map((data, index) => (
                <TouchableOpacity
                  key={index}
                  style={{
                    ...styles.imageContainer,
                    [data.direction]: data.directionPixel - data.duration,
                  }}
                  onPress={() => setActiveTooltipIndex(index)}
                >
                  {activeTooltipIndex === index && (
                    <Tooltip
                      isVisible={true}
                      content={
                        <>
                          <View style={styles.table}>
                            <View style={styles.row}>
                              <Text style={styles.cell}>Name</Text>
                              <Text style={styles.cell}>{data.goalName}</Text>
                            </View>
                            <View
                              style={[styles.row, { borderBottomWidth: 0 }]}
                            >
                              <Text style={styles.cell}>Amount</Text>
                              <Text style={styles.cell}>
                                {inrconvertor(data.amount)}
                              </Text>
                            </View>
                          </View>
                          <Button
                            mode="contained"
                            onPress={() => navigation.navigate("Education")}
                            style={{
                              backgroundColor: "rgba(0, 53, 102, 1)",
                            }}
                          >
                            View
                          </Button>
                        </>
                      }
                      placement="top"
                      onClose={() => setActiveTooltipIndex(null)}
                    >
                      <Badge
                        style={{
                          position: "absolute",
                          bottom: -height * 0.005,
                          backgroundColor: "rgba(33, 158, 188, 1)",
                          fontWeight: "600",
                        }}
                      >
                        40 %
                      </Badge>
                      <Image
                        source={require("../../../assets/Goal/mobile.png")}
                        style={{
                          width: data.iconWidth,
                          height: data.iconWidth,
                        }}
                      />
                    </Tooltip>
                  )}
                  {activeTooltipIndex !== index && (
                    <View>
                      <Badge
                        style={{
                          position: "absolute",
                          bottom: -height * 0.005,
                          backgroundColor: "rgba(33, 158, 188, 1)",
                          fontWeight: "600",
                        }}
                      >
                        40 %
                      </Badge>
                      <Image
                        source={require("../../../assets/Goal/mobile.png")}
                        style={{
                          width: data.iconWidth,
                          height: data.iconWidth,
                        }}
                      />
                    </View>
                  )}
                </TouchableOpacity>
              ))}
          </ImageBackground>
        </View>
        <View style={styles.sliderContainer}>
          <ScrollView
            ref={scrollViewRef}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onMomentumScrollEnd={(event) => {
              const slide = Math.floor(
                event.nativeEvent.contentOffset.x / width
              );
              setActiveSlide(slide);
            }}
          >
            {contentItems.map((item, index) => (
              <View key={index} style={styles.slider}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.desc}>{item.desc}</Text>
              </View>
            ))}
          </ScrollView>
          <View style={styles.pagination}>
            {contentItems.map((_, index) => (
              <View
                key={index}
                style={[
                  styles.dot,
                  {
                    backgroundColor:
                      index === activeSlide
                        ? "rgba(0, 53, 102, 1)"
                        : "rgba(33, 158, 188, 0.09)",
                  },
                ]}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  mainContentContainer: {
    position: "relative",
  },
  circleImage: {
    marginTop: height * 0.05,
    width: width,
    height: width,
    justifyContent: "center",
    alignItems: "center",
  },
  circleContainer: {
    position: "absolute",
  },
  profileImage: {
    width: width * 0.21,
    height: width * 0.21,
    borderRadius: width * 0.2,
  },
  imageContainer: {
    position: "absolute",
  },
  imageWidthHeight: {
    width: width * 0.21,
    height: width * 0.21,
  },

  slider: {
    width: width,
    padding: width * 0.06,
  },
  pagination: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  dot: {
    width: width * 0.03,
    height: width * 0.03,
    borderRadius: width * 0.02,
    margin: width * 0.015,
  },
  title: {
    textAlign: "center",
    fontWeight: "600",
    color: "rgba(2, 48, 71, 1)",
    fontSize: width * 0.045,
    lineHeight: height * 0.05,
  },
  desc: {
    textAlign: "center",
    fontWeight: "400",
    color: "rgba(0, 8, 20, 1)",
    fontSize: width * 0.04,
    lineHeight: height * 0.03,
  },
  sliderContainer: {
    //top: ,
  },
  //   tooltipContainer: {
  //     width: width * 0.3,
  //     alignItems: "center",
  //     justifyContent: "center",
  //   },
  toolpitContainer: {
    borderWidth: 1,
    borderColor: "red",
  },

  table: {
    width: width * 0.4,
    borderWidth: 1,
    borderColor: "#000",
    marginBottom: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#000",
    paddingVertical: 5,
  },
  cell: {
    flex: 1,
    textAlign: "center",
  },
});

export default Goal;
