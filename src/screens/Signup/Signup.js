import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import { Button } from "react-native-paper";
import Footer from "../../Footer";
import {
  GoogleSignin,
  GoogleSigninButton,
} from "@react-native-google-signin/google-signin";
import auth from "@react-native-firebase/auth";
import GlSuccessful from "./GlSuccessful";
import { width, height } from "../../Dimension";
import {
  Googlelogin,
  Phonelogin,
} from "../../api/services/endpoints/userEndpoints";
import Header from "../Components/Header";
import { useFonts } from "expo-font";
import { useRoute } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import { userDetails } from "../../redux/slices/user/Index";

export default Signup = ({ navigation }) => {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  const dispatch = useDispatch();
  const pan = useSelector((state) => state.user.temPan);

  //   const route = useRoute();
  //   const { pan } = route.params || "";

  const [fontsLoaded] = useFonts({
    "Inter-Black": require("../../../assets/fonts/metropolis-latin-500-normal.ttf"),
  });

  GoogleSignin.configure({
    webClientId:
      "310437389372-h134bk1ns6js774ikhhajuj19ifh4bif.apps.googleusercontent.com",
  });

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  const onGoogleButtonPress = async () => {
    // Check if your device supports Google Play
    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
    // Get the users ID token
    const { idToken } = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    Googlelogin(idToken, pan).then((response) => {
      if (response.data.success === false) {
        Alert.alert("Failed", response.data.error);
        signOut();
      }
      if (response.data.success === true) {
        dispatch(userDetails({ tempMail: response.data.user.email }));
        dispatch(userDetails({ logedInVia: "email" }));
        signOut();
        navigation.push("Dashboard");
      }
      //   console.log("shivangi data:", response.data);
    });

    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  };

  signOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await auth().signOut();
    } catch (error) {
      console.error(error);
    }
    // auth().signOut();
    //   .then(() => console.log("User signed out!"));
  };

  if (initializing) return null;

  //   if (!user) {
  return (
    <View style={styles.container}>
      <Header title="Sign Up" />
      <View style={styles.imagecontainer}>
        <Image
          source={require("../../../assets/signup/signup.png")}
          style={styles.image}
        />
      </View>
      <Text style={styles.header}>
        Welcome to{" "}
        <Text style={{ fontWeight: "600", fontFamily: "Inter-Black" }}>
          Growthvine
        </Text>
      </Text>
      <View style={styles.signupContainer}>
        <TouchableOpacity onPress={() => navigation.push("swphone")}>
          <Button
            icon={() => (
              <View>
                <Image
                  source={require("../../../assets/signup/Call.png")}
                  style={styles.icon}
                />
              </View>
            )}
            mode="outlined"
            textColor="rgba(2, 48, 71, 1)"
            style={styles.phoneSignUp}
            labelStyle={styles.buttonLabel}
          >
            Sign up with Phone
          </Button>
        </TouchableOpacity>
        <TouchableOpacity onPress={onGoogleButtonPress}>
          <Button
            icon={() => (
              <View style={styles.iconContainer}>
                <Image
                  source={require("../../../assets/signup/Group.png")} // Replace with your image source
                  style={styles.icon}
                />
              </View>
            )}
            mode="outlined"
            textColor="rgba(2, 48, 71, 1)"
            style={styles.googleSignUp}
            labelStyle={styles.buttonLabel}
          >
            Sign up with Google
          </Button>
        </TouchableOpacity>

        <Text></Text>
      </View>
    </View>
  );
  //   }
  //   return <GlSuccessful user={user} />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  imagecontainer: {
    width: width,
    marginTop: height * 0.05,
  },
  image: {
    width: width,
    height: height * 0.38,
  },
  header: {
    width: width,
    height: height * 0.05,
    fontWeight: "400",
    fontFamily: "Inter-Black",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    color: "rgba(0, 53, 102, 1)",
    fontSize: width * 0.06,
  },
  signupContainer: {
    marginTop: height * 0.02,
    width: width,
    height: height * 0.17,
    justifyContent: "center",
    alignContent: "center",
    textAlign: "center",
  },
  phoneSignUp: {
    left: "50%",
    marginLeft: -width * 0.43, // Adjust the margin based on screen width
    width: width * 0.86, // Adjust the width based on screen width
    height: width * 0.14, // Adjust the height based on screen width
    borderRadius: width * 0.03, // Adjust the border radius based on screen width
    alignItems: "center", // Center the content horizontally
    justifyContent: "center", // Center the content vertically
    backgroundColor: "white",
    borderColor: "rgb(204, 204, 204)",
  },
  googleSignUp: {
    top: width * 0.03,
    left: "50%",
    marginLeft: -width * 0.43, // Adjust the margin based on screen width
    width: width * 0.86, // Adjust the width based on screen width
    height: width * 0.14, // Adjust the height based on screen width
    borderRadius: width * 0.03, // Adjust the border radius based on screen width
    alignItems: "center", // Center the content horizontally
    justifyContent: "center", // Center the content vertically
    backgroundColor: "white",
    borderColor: "rgb(204, 204, 204)",
  },
  buttonLabel: {
    fontSize: width * 0.045, // Adjust the font size based on screen width
    fontWeight: "600",
    fontFamily: "Inter-Black",
  },
  alreayRegistered: {
    top: width * 0.03,
    width: width * 0.6,
    left: width * 0.11,
    fontSize: width * 0.04,
    color: "rgb(166, 166, 166)",
    fontWeight: "600",
    fontFamily: "Inter-Black",
    lineHeight: width * 0.05,
  },
  icon: {
    width: width * 0.06,
    height: width * 0.06,
    left: -width * 0.04,
  },
});
