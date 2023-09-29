import React, { useState, useRef, useEffect } from "react";
import {
  View,
  FlatList,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { Text, Button } from "react-native-paper";
import Footer from "../../Footer";
import { width, height } from "../../Dimension";

const carouselData = [
  {
    image: require("../../../assets/getStarted/1.gif"),
    text: "Let your money earn for you",
    desc: "Invest in customized portfolios of Mutual Funds, Bonds & Investments based on your risk appetite and watch your earnings grow",
  },
  {
    image: require("../../../assets/getStarted/2.gif"),
    text: "Invest for your Goals",
    desc: "Create your goals, set targets and we’ll help you find the right investments to achieve your goals.",
  },
  {
    image: require("../../../assets/getStarted/3.gif"),
    text: "Risk Calculation",
    desc: "We provide you with tools to gauge your financial health, risk appetite and help grow your wealth wisely",
  },
  // Add more screens as needed
];

const Carousels = ({ navigation }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const flatListRef = useRef(null);

  const handleImageChange = (index) => {
    setActiveIndex(index);
  };

  const scrollToNextItem = () => {
    const nextIndex = (activeIndex + 1) % carouselData.length;
    setActiveIndex(nextIndex);
    flatListRef.current.scrollToIndex({ index: nextIndex });
  };

  useEffect(() => {
    const timer = setInterval(scrollToNextItem, 5000); // Change slide every 3 seconds
    return () => clearInterval(timer);
  }, [activeIndex]);

  const renderItem = ({ item, index }) => {
    return (
      <View style={styles.renderContainer}>
        <View style={styles.imageContainer}>
          <Image source={item.image} style={styles.image} />
        </View>
        <View style={styles.pagination}>
          {carouselData.map((_, i) => (
            <TouchableOpacity
              key={i}
              style={[
                styles.paginationDot,
                i === activeIndex && styles.activeDot,
              ]}
              onPress={() => handleImageChange(i)}
            />
          ))}
        </View>
        <Text style={styles.imageText}>{item.text}</Text>
        <Text style={styles.textDesc}>{item.desc}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={carouselData}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={(event) => {
          const newIndex = Math.round(
            event.nativeEvent.contentOffset.x / width
          );
          setActiveIndex(newIndex);
        }}
      />
      <Button
        mode="contained"
        style={styles.getStartedButton}
        onPress={() => navigation.push("Optionscreen")}
        icon="arrow-right-bold"
        contentStyle={{ flexDirection: "row-reverse" }}
      >
        Get Started
      </Button>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  renderContainer: {
    width: width,
    alignItems: "center",
    marginTop: height * 0.05,
  },
  imageContainer: {
    width: width,
    height: height * 0.46, // Adjust the height as needed (e.g., half the screen height)
  },
  image: {
    width: width,
    height: height * 0.42,
  },
  imageText: {
    width: width * 0.8, // Adjust the width as needed (e.g., 80% of the screen width)
    fontSize: width * 0.06, // Adjust the font size based on screen width
    textAlign: "center",
    color: "rgba(2, 48, 71, 1)",
    lineHeight: width * 0.08, // Adjust the line height based on screen width
    fontWeight: 600,
  },
  textDesc: {
    width: width * 0.8, // Adjust the width as needed (e.g., 80% of the screen width)
    fontSize: width * 0.04, // Adjust the font size based on screen width
    opacity: 0.7,
    lineHeight: width * 0.06, // Adjust the line height based on screen width
    textAlign: "center",
    color: "rgba(0, 8, 20, 1)",
    fontWeight: 500,
  },
  pagination: {
    flexDirection: "row",
  },
  paginationDot: {
    width: width * 0.03, // Adjust the size based on screen width
    height: width * 0.03, // Adjust the size based on screen width
    borderRadius: width * 0.02, // Adjust the size based on screen width
    backgroundColor: "rgba(33, 158, 188, 0.09)",
    marginHorizontal: width * 0.01, // Adjust the margin based on screen width
    bottom: height * 0.02,
  },
  activeDot: {
    backgroundColor: "rgba(0, 53, 102, 1)",
  },
  getStartedButton: {
    position: "absolute",
    bottom: height * 0.2, // Adjust the position based on screen height
    left: "50%",
    marginLeft: -width * 0.2, // Adjust the margin based on screen width
    width: width * 0.4, // Adjust the width based on screen width
    height: width * 0.14, // Adjust the height based on screen width
    borderRadius: width * 0.04, // Adjust the border radius based on screen width
    backgroundColor: "rgba(0, 53, 102, 1)",
    alignItems: "center", // Center the content horizontally
    justifyContent: "center", // Center the content vertically
    zIndex: 100,
  },
});

export default Carousels;
