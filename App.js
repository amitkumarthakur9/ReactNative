import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Test from "./src/screens/Test";
import Getstarted from "./src/screens/Welcomescreens/Getstarted";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Signup from "./src/Signup/Signup";
import Signupwithphone from "./src/Signup/Signupwithphone";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Getstarted"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Getstarted" component={Getstarted} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="swphone" component={Signupwithphone} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
