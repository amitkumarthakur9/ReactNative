import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import { height, width } from "../../Dimension";
import { Button, TextInput } from "react-native-paper";
import { Picker } from "@react-native-picker/picker";
import { Slider } from "@miblanchard/react-native-slider";
import Header from "../Components/Header";
import Loader from "../Components/Loader";
import {
  useRoute,
  useNavigation,
  useFocusEffect,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import {
  Goalfetch,
  Attachgoal,
  Availableholding,
} from "../../api/services/endpoints/goalEndpoints";
import { useSelector } from "react-redux";
export default Index = () => {
  const [goal, setGoal] = useState("");
  const [goalid, setGoalid] = useState("");
  const [holdingtimeperiod, setHoldingtimeperiod] = useState(100);
  const [goaltimeperiod, setGoaltimeperiod] = useState(100);
  const [goalAmount, setGoalAmount] = useState("");
  const [loader, setLoader] = useState(false);
  const [holdingyear, setHoldingyear] = useState("5");
  const [goalyear, setGoalyear] = useState("5");
  const [goallist, setGoallist] = useState(null);
  const [availablegtp, setAvailablegtp] = useState(100);
  const [ha, setHa] = useState(100);
  const [refresh, setRefresh] = useState(0);

  const userId = useSelector((state) => state.user.id);
  const route = useRoute();
  const { holdingId } = route.params;

  const navigation = useNavigation();

  const [fontsLoaded] = useFonts({
    "Inter-Black": require("../../../assets/fonts/metropolis-latin-500-normal.ttf"),
  });

  const handleSlider = (yearValue, type) => {
    if (type == "holding") {
      setHoldingyear(yearValue);
      setHoldingtimeperiod(Math.floor(yearValue));
    } else if ((type = "goal")) {
      setGoalyear(yearValue);
      setGoaltimeperiod(Math.floor(yearValue));
    }
  };

  useEffect(() => {
    const data = {
      userId: userId,
      holdingId: holdingId,
    };
    Goalfetch(userId)
      .then((response) => {
        if (response.data.success) {
          //console.log("goal lists", response.data.goals);
          setGoallist(response.data.goals);
          Availableholding(data)
            .then((av) => {
              if (av.data.success) {
                setHa(av.data.ha);
                setHoldingtimeperiod(av.data.ha);
                if (av.data.ha == 0) {
                  Alert.alert(
                    "Failed",
                    "Selected Holding percentage has been exceed , pls select another holding ."
                  );
                  navigation.push("Holdings", { Goalassets: "Goalassets" });
                }
              }
            })
            .catch((e) => {
              console.log("error in holding available", e);
            });
        }
      })
      .catch((e) => {
        console.warn(e);
      });
  }, [refresh]);

  const handleGoal = (itemValue) => {
    const splitvalue = itemValue.split("-");
    if (splitvalue[2] == 0) {
      Alert.alert(
        "Note",
        "Goal percentage has been exceed for selected goal , please select another goal ."
      );
      return;
    } else {
      setGoal(itemValue);
      setGoalid(splitvalue[0]);
      setGoalAmount(splitvalue[1]);
      setGoaltimeperiod(splitvalue[2]);
      setAvailablegtp(splitvalue[2]);
    }
  };

  const handleSubmit = () => {
    setLoader(true);
    if (goal == "") {
      Alert.alert("Please select goal");
      setLoader(false);
      return;
    }
    const data = {
      action: "attachGoal",
      wishId: goalid,
      holdingId: holdingId,
      assetType: "1",
      percentage: holdingtimeperiod,
      goalTargetPercent: goaltimeperiod,
      userId: userId,
    };

    Attachgoal(data)
      .then((response) => {
        if (response.data.success) {
          Alert.alert(
            "Holding has been attached successfully .",
            "In your selected goal"
          );
          setLoader(false);
          navigation.push("Dashboard", "Goal");
        } else {
          Alert.alert("Failed", "please try later .");
          setLoader(false);
        }
      })
      .catch((e) => {
        console.warn(e);
      });
  };

  useFocusEffect(
    React.useCallback(() => {
      const randomNumber = Math.random();
      setRefresh(randomNumber);
    }, [])
  );

  return (
    <View style={styles.container}>
      <Header title="Attach Goal" showPlusSign={false} />
      <ScrollView
        style={styles.contentContainer}
        keyboardShouldPersistTaps="always"
      >
        <TouchableOpacity style={styles.dropdown}>
          <Picker
            selectedValue={goal}
            onValueChange={(itemValue, itemIndex) => handleGoal(itemValue)}
            mode="dropdown"
            style={styles.Picker}
          >
            <Picker.Item label="Select Goal" value="" />
            {goallist &&
              goallist.map((value, index) => (
                <Picker.Item
                  label={value.name}
                  value={`${value.id}-${value.currentTermAmount}-${value.availablegtp}`}
                  key={index}
                />
              ))}
          </Picker>
        </TouchableOpacity>
        <TextInput
          mode="outlined"
          label="Goal Amount"
          value={goalAmount}
          onChangeText={(e) => setGoalAmount(e)}
          style={styles.input}
          outlineStyle={[
            styles.outline,
            { backgroundColor: "rgb(242, 242, 242)" },
          ]}
          theme={styles.themeStyle}
          contentStyle={styles.contentStyle}
          keyboardType="phone-pad"
          disabled
        />
        <Text style={[styles.header, { marginTop: height * 0.02 }]}>
          Holding Percentage
        </Text>
        <View style={[{ flexDirection: "row" }]}>
          <Slider
            animateTransitions
            maximumTrackTintColor={"rgba(26, 28, 23, 0.12)"}
            minimumTrackTintColor={"#023047"}
            maximumValue={ha}
            minimumValue={0}
            onValueChange={(yearValue) => handleSlider(yearValue, "holding")}
            value={holdingtimeperiod}
            thumbTintColor={"rgb(0, 56, 116 )"}
            trackStyle={{
              width: width * 0.704,
              height: height * 0.008,
              borderRadius: width * 0.03,
              paddingRight: width * 0.05,
            }}
          />
          <Text style={styles.rangeTextPercentage}>{holdingtimeperiod} %</Text>
        </View>

        <Text style={[styles.header, { marginTop: height * 0.02 }]}>
          Goal Percentage
        </Text>
        <View style={[{ flexDirection: "row" }]}>
          <Slider
            animateTransitions
            maximumTrackTintColor={"rgba(26, 28, 23, 0.12)"}
            minimumTrackTintColor={"#023047"}
            maximumValue={availablegtp}
            minimumValue={0}
            onValueChange={(yearValue) => handleSlider(yearValue, "goal")}
            value={goaltimeperiod}
            thumbTintColor={"rgb(0, 56, 116 )"}
            trackStyle={{
              width: width * 0.704,
              height: height * 0.008,
              borderRadius: width * 0.03,
              paddingRight: width * 0.05,
            }}
          />
          <Text style={styles.rangeTextPercentage}>{goaltimeperiod} %</Text>
        </View>

        <Text style={[styles.header, { marginTop: height * 0.02 }]}>
          <Text style={[styles.header, { color: "red" }]}>Note :</Text>{" "}
          {holdingtimeperiod}% of this holding will contribute to{" "}
          {goaltimeperiod}% of this goal .
        </Text>

        <View style={styles.footerButton}>
          {loader ? (
            <Loader />
          ) : (
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => handleSubmit()}
            >
              <Button
                mode="contained"
                style={styles.button}
                labelStyle={{
                  fontSize: width * 0.05,
                  color: "rgba(255, 255, 255, 1)",
                  textAlign: "center",
                  fontFamily: "Inter-Black",
                  fontWeight: "600",
                }}
              >
                Submit
              </Button>
            </TouchableOpacity>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    backgroundColor: "white",
  },
  contentContainer: {
    margin: width * 0.05,
    marginTop: height * 0.07,
  },
  header: {
    fontSize: width * 0.037,
    color: "#023047",
    fontFamily: "Inter-Black",
    fontWeight: "500",
    marginBottom: height * 0.015,
    opacity: 0.6,
    lineHeight: height * 0.028,
  },
  input: {
    borderRadius: width * 0.05,
    marginBottom: height * 0.02,
    fontSize: width * 0.043,
  },
  outline: {
    borderRadius: width * 0.02,
    backgroundColor: "white",
    borderColor: "rgb(191, 191, 191)",
  },
  themeStyle: {
    colors: {
      primary: "rgba(2, 48, 71, 1)",
    },
  },
  contentStyle: {
    color: "rgba(2, 48, 71, 1)",
    fontFamily: "Inter-Black",
    fontWeight: "600",
  },
  dropdown: {
    borderWidth: height * 0.0015,
    borderRadius: width * 0.02,
    marginBottom: height * 0.03,
    borderColor: "rgb(191, 191, 191)",
  },
  flexContainer: {
    flexDirection: "row",
    marginTop: height * 0.03,
  },
  rangeText: {
    flex: 1,
    textAlign: "right",
    color: "#023047",
    lineHeight: height * 0.025,
    fontSize: width * 0.035,
    fontFamily: "Inter-Black",
    fontWeight: "500",
    opacity: 0.8,
  },
  rangeTextPercentage: {
    flex: 1,
    textAlign: "right",
    color: "rgba(73, 69, 79, 1)",
    lineHeight: height * 0.03,
    fontSize: width * 0.04,
    fontFamily: "Inter-Black",
    fontWeight: "600",
    marginRight: width * 0.08,
    marginTop: height * 0.01,
  },

  button: {
    marginBottom: height * 0.02,
    marginTop: height * 0.02,
    height: height * 0.07,
    borderRadius: width * 0.03,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 53, 102, 1)",
    borderColor: "rgb(230, 230, 230)",
  },
  footerButton: {
    backgroundColor: "white",
    borderColor: "rgb(230, 230, 230)",
    marginTop: height * 0.02,
  },
});
