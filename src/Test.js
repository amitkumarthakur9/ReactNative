import React, { useState, useEffect } from "react";
import { View, Text, Button } from "react-native";
import {
  GoogleSignin,
  GoogleSigninButton,
} from "@react-native-google-signin/google-signin";
import auth from "@react-native-firebase/auth";
import { width, height } from "../../Dimension";

export default Test = () => {
  GoogleSignin.configure({
    webClientId:
      "707482261977-29se785gg5o3l51r7vnr6cp0pslvgh1f.apps.googleusercontent.com",
  });

  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

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
  };

  if (initializing) return null;

  if (!user) {
    return (
      <View
        style={{ top: 300, justifyContent: "center", alignItems: "center" }}
      >
        <Text style={{ color: "red", fontWeight: "bold", textAlign: "center" }}>
          this is sign in with google page
        </Text>
        <GoogleSigninButton onPress={onGoogleButtonPress} />
      </View>
    );
  }

  return (
    <View style={{ top: 300, justifyContent: "center", alignItems: "center" }}>
      <Text>Welcome {user.email}</Text>
      <Button title="Sign Out" onPress={signOut} />
    </View>
  );
};
