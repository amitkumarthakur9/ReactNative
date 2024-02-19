import React from "react";
import Header from "../Components/Header";
import {
  View,
  StyleSheet,
  ScrollView,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { height, width } from "../../Dimension";
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/native";

export default Setting = () => {
  const [fontsLoaded] = useFonts({
    "Inter-Black": require("../../../assets/fonts/metropolis-latin-500-normal.ttf"),
  });
  const navigation = useNavigation("");
  return (
    <View style={styles.container}>
      <Header title="Setting" />
      <ScrollView style={styles.scrollviewContainer}>
        <TouchableOpacity onPress={() => navigation.push("Myprofile")}>
          <View style={styles.flexContainer}>
            <View style={styles.firstflex}>
              <Image
                source={require("../../../assets/setting/account.png")}
                resizeMode="contain"
                style={styles.imageStyle}
              />
            </View>
            <Text style={[styles.secondflex, styles.text]}>My Profile</Text>
            <FontAwesome
              name="angle-right"
              size={width * 0.07}
              style={[styles.thirdflex, styles.arrow]}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.flexContainer}>
            <View style={styles.firstflex}>
              <Image
                source={require("../../../assets/setting/payment.png")}
                resizeMode="contain"
                style={styles.imageStyle}
              />
            </View>
            <Text style={[styles.secondflex, styles.text]}>
              My Payment Methods
            </Text>
            <FontAwesome
              name="angle-right"
              size={width * 0.07}
              style={[styles.thirdflex, styles.arrow]}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.push("Mandatelist")}>
          <View style={styles.flexContainer}>
            <View style={styles.firstflex}>
              <Image
                source={require("../../../assets/setting/track.png")}
                resizeMode="contain"
                style={styles.imageStyle}
              />
            </View>
            <Text style={[styles.secondflex, styles.text]}>My Mandates</Text>
            <FontAwesome
              name="angle-right"
              size={width * 0.07}
              style={[styles.thirdflex, styles.arrow]}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.push("Riskcalculator")}>
          <View style={styles.flexContainer}>
            <View style={styles.firstflex}>
              <Image
                source={require("../../../assets/setting/risk.png")}
                resizeMode="contain"
                style={styles.imageStyle}
              />
            </View>
            <Text style={[styles.secondflex, styles.text]}>
              Risk Calculator
            </Text>
            <FontAwesome
              name="angle-right"
              size={width * 0.07}
              style={[styles.thirdflex, styles.arrow]}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.flexContainer}>
            <View style={styles.firstflex}>
              <Image
                source={require("../../../assets/setting/invite.png")}
                resizeMode="contain"
                style={styles.imageStyle}
              />
            </View>
            <Text style={[styles.secondflex, styles.text]}>Invite Friends</Text>
            <FontAwesome
              name="angle-right"
              size={width * 0.07}
              style={[styles.thirdflex, styles.arrow]}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.flexContainer}>
            <View style={styles.firstflex}>
              <Image
                source={require("../../../assets/setting/help.png")}
                resizeMode="contain"
                style={styles.imageStyle}
              />
            </View>
            <Text style={[styles.secondflex, styles.text]}>Help & Support</Text>
            <FontAwesome
              name="angle-right"
              size={width * 0.07}
              style={[styles.thirdflex, styles.arrow]}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.flexContainer}>
            <View style={styles.firstflex}>
              <Image
                source={require("../../../assets/setting/feedback.png")}
                resizeMode="contain"
                style={styles.imageStyle}
              />
            </View>
            <Text style={[styles.secondflex, styles.text]}>
              Feedback & Rating
            </Text>
            <FontAwesome
              name="angle-right"
              size={width * 0.07}
              style={[styles.thirdflex, styles.arrow]}
            />
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  scrollviewContainer: {
    marginTop: height * 0.01,
  },
  flexContainer: {
    flexDirection: "row",
    borderColor: "rgb(230, 230, 230)",
    borderBottomWidth: width * 0.005,
    padding: width * 0.06,
  },
  imageStyle: {
    width: width * 0.07,
    height: width * 0.07,
  },
  firstflex: {
    flex: 1,
  },
  secondflex: {
    flex: 4,
  },
  thirdflex: {
    flex: 1,
  },
  text: {
    fontSize: width * 0.045,
    fontFamily: "Inter-Black",
    fontWeight: "600",
  },
  arrow: {
    color: "black",
  },
});
