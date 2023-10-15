import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import { height, width } from "../../Dimension";
import Header from "../Components/Header";
import { useNavigation } from "@react-navigation/native";

const Goal = () => {
  const navigation = useNavigation();
  const scrollViewRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);

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

  useEffect(() => {
    // Automatically move to the next slide every 5 seconds
    const interval = setInterval(moveCarousel, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [activeSlide]);

  return (
    <View style={styles.container}>
      <Header title="Goals" />
      <View style={styles.contentContainer}>
        <Image
          source={require("../../../assets/Goal/1.png")}
          style={styles.circleImage}
        />
        <TouchableOpacity style={styles.circleContainer}>
          <Image
            source={require("../../../assets/Goal/profile.png")}
            style={styles.profileImage}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.mobileImagecircleContainer}>
          <Image
            source={require("../../../assets/Goal/mobile.png")}
            style={styles.mobileImage}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.tripImagecircleContainer}>
          <Image
            source={require("../../../assets/Goal/trip.png")}
            style={styles.tripImage}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.homeImagecircleContainer}>
          <Image
            source={require("../../../assets/Goal/Home.png")}
            style={styles.homeImage}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.educationImagecircleContainer}
          onPress={() => navigation.navigate("Education")}
        >
          <Image
            source={require("../../../assets/Goal/education.png")}
            style={styles.educationImage}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.sliderContainer}>
        <ScrollView
          ref={scrollViewRef}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onMomentumScrollEnd={(event) => {
            const slide = Math.floor(event.nativeEvent.contentOffset.x / width);
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  contentContainer: {
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    resizeMode: "contain",
    marginTop: -height * 0.01,
  },
  circleImage: {
    alignSelf: "center",
    width: width,
    height: height * 0.6,
  },
  profileImage: {
    width: width * 0.21,
    height: width * 0.21,
    justifyContent: "center",
    alignItems: "center",
  },
  circleContainer: {
    position: "absolute",
  },
  mobileImage: {
    width: width * 0.25,
    height: width * 0.25,
  },
  mobileImagecircleContainer: {
    position: "absolute",
    top: height * 0.1,
    right: width * 0.1,
  },
  tripImagecircleContainer: {
    position: "absolute",
    bottom: height * 0.1,
  },
  tripImage: {
    width: width * 0.3,
    height: width * 0.3,
  },
  homeImagecircleContainer: {
    position: "absolute",
    left: height * 0.07,
    top: height * 0.18,
  },
  homeImage: {
    width: width * 0.35,
    height: width * 0.35,
  },
  educationImagecircleContainer: {
    position: "absolute",
    right: height * 0.16,
  },
  educationImage: {
    width: width * 0.15,
    height: width * 0.15,
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
    marginTop: -height * 0.08,
  },
});

export default Goal;
