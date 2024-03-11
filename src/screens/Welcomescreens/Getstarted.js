import React, { useState, useRef, useEffect } from "react";
import {
  View,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { Text, Button } from "react-native-paper";
// import Footer from "../../Footer";
import { width, height } from "../../Dimension";
import { useFonts } from "expo-font";
import { useFocusEffect } from "@react-navigation/native";

const carouselData = [
  {
    image: require("../../../assets/getStarted/s1.png"),
    text: "Let your money earn for you",
    desc: "Invest in customized portfolios of Mutual Funds, Bonds & Investments based on your risk appetite and watch your earnings grow",
  },
  {
    image: require("../../../assets/getStarted/s2.png"),
    text: "Invest for your Goals",
    desc: "Create your goals, set targets and we’ll help you find the right investments to achieve your goals.",
  },
  {
    image: require("../../../assets/getStarted/s3.png"),
    text: "Understand your Risk Capacity",
    desc: "We provide you with tools to gauge your financial health, risk appetite and help grow your wealth wisely",
  },
  // Add more screens as needed
];

const Carousels = ({ navigation }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const flatListRef = useRef(null);

  const [fontsLoaded] = useFonts({
    "Inter-Black": require("../../../assets/fonts/metropolis-latin-500-normal.ttf"),
  });

  const handleImageChange = (index) => {
    setActiveIndex(index);
  };

  const scrollToNextItem = () => {
    const nextIndex = (activeIndex + 1) % carouselData.length;
    setActiveIndex(nextIndex);
    flatListRef.current.scrollToIndex({ index: nextIndex });
  };

  //   useEffect(() => {
  //     const timer = setInterval(scrollToNextItem, 3000); // Change slide every 3 seconds
  //     return () => clearInterval(timer);
  //   }, [activeIndex]);

  //   useEffect(() => {
  //     console.log("Setting up interval...");
  //     const timer = setInterval(scrollToNextItem, 3000); // Change slide every 3 seconds

  //     return () => {
  //       console.log("Clearing interval...");
  //       clearInterval(timer);
  //     };
  //   }, [activeIndex]);

  useFocusEffect(
    React.useCallback(() => {
      const timer = setInterval(scrollToNextItem, 3000);
      return () => clearInterval(timer);
    }, [activeIndex])
  );

  const renderItem = ({ item, index }) => {
    return (
      <View style={styles.renderContainer}>
        <View style={styles.imageContainer}>
          <Image source={item.image} style={styles.image} />
        </View>
        <View style={styles.contentview}>
          <Text style={styles.imageText}>{item.text}</Text>
          <Text style={styles.textDesc}>{item.desc}</Text>
        </View>
        <View style={styles.flex}>
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

          <Text style={{ flex: 1 }}></Text>

          <Button
            mode="contained"
            style={styles.getStartedButton}
            onPress={() => navigation.push("Navigatescreens")}
            icon="arrow-right"
            contentStyle={{ flexDirection: "row-reverse" }}
          >
            Get Started
          </Button>
        </View>
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

      {/* <Footer /> */}
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
    width: width * 1.5,
    height: height * 0.46,
    marginTop: height * 0.04,
  },
  image: {
    width: width * 0.9,
    height: height * 0.53,
    marginLeft: width * 0.33,
  },

  flex: {
    position: "absolute",
    flexDirection: "row",
    bottom: height * 0.05,
    margin: width * 0.04,
  },
  paginationDot: {
    flex: 1,
    width: width * 0.03,
    height: width * 0.03,
    borderRadius: width * 0.02,
    backgroundColor: "rgba(33, 158, 188, 0.09)",
    marginHorizontal: width * 0.01,
    alignSelf: "center",
  },
  activeDot: {
    backgroundColor: "#FB8500",
  },
  getStartedButton: {
    flex: 3,
    width: width * 0.4,
    height: width * 0.14,
    borderRadius: width * 0.04,
    backgroundColor: "rgba(0, 53, 102, 1)",
    alignItems: "center",
    justifyContent: "center",
  },
  contentview: {
    position: "absolute",
    margin: width * 0.04,
    bottom: height * 0.21,
  },
  imageText: {
    fontSize: width * 0.07,
    textAlign: "center",
    color: "rgba(2, 48, 71, 1)",
    lineHeight: width * 0.09,
    fontFamily: "Inter-Black",
    fontWeight: 600,
  },
  textDesc: {
    fontSize: width * 0.04,
    opacity: 0.7,
    lineHeight: width * 0.06,
    textAlign: "center",
    color: "rgba(0, 8, 20, 1)",
    fontFamily: "Inter-Black",
    fontWeight: 500,
    lineHeight: height * 0.028,
  },
});

export default Carousels;
