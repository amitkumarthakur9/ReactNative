import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Getstarted from "./src/screens/Welcomescreens/Getstarted";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Signup from "./src/screens/Signup/Signup";
import Signupwithphone from "./src/screens/Signup/Signupwithphone";
import Otp from "./src/screens/Signup/Otp";
import Splash from "./src/Splash";
import Optionscreen from "./src/screens/Optionscreen";
import Riskcalculator from "./src/screens/Riskcalculator/Index";
import Rpscreens from "./src/screens/Riskcalculator/Rpscreens";
import Result from "./src/screens/Riskcalculator/Result";
import Account from "./src/screens/Account/Index";
import Assetpreview from "./src/screens/Assetpreview/Index";
import Navigatescreens from "./src/screens/Navigatescreens/Index";
import Education from "./src/screens/Goal/Education";
import Upload from "./src/screens/Uploadscreens/Index";
import Corpus from "./src/screens/Corpusscreens/Index";
import Goalform from "./src/screens/Goalsscreens/Index";
import Goal from "./src/screens/Goal/Index";
import Dashboard from "./src/screens/Dashboard/Index";
import Portfolio from "./src/screens/Portfolio/Index";
import Searchbox from "./src/screens/Dashboard/Searchbox";
import Test from "./src/Test";
import Sip from "./src/screens/Startsip/Sip";
import Onetimesip from "./src/screens/Startsip/Onetimesip";
import Payment from "./src/screens/Payment/Paymentoptions";
import { Provider } from "react-redux";
import { store } from "./src/redux/Store";
import AddToCart from "./src/screens/Cart/Addtocart";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Dashboard"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Getstarted" component={Getstarted} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="swphone" component={Signupwithphone} />
          <Stack.Screen name="Otp" component={Otp} />
          <Stack.Screen name="Splash" component={Splash} />
          <Stack.Screen name="Optionscreen" component={Optionscreen} />
          <Stack.Screen name="Riskcalculator" component={Riskcalculator} />
          <Stack.Screen name="Rpscreens" component={Rpscreens} />
          <Stack.Screen name="Result" component={Result} />
          <Stack.Screen name="Account" component={Account} />
          <Stack.Screen name="Assetpreview" component={Assetpreview} />
          <Stack.Screen name="Navigatescreens" component={Navigatescreens} />
          <Stack.Screen name="Education" component={Education} />
          <Stack.Screen name="Upload" component={Upload} />
          <Stack.Screen name="Corpus" component={Corpus} />
          <Stack.Screen name="Goalform" component={Goalform} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen name="Goal" component={Goal} />
          <Stack.Screen name="Portfolio" component={Portfolio} />
          <Stack.Screen name="Searchbox" component={Searchbox} />
          <Stack.Screen name="Test" component={Test} />
          <Stack.Screen name="Sip" component={Sip} />
          <Stack.Screen name="Onetimesip" component={Onetimesip} />
          <Stack.Screen name="Payment" component={Payment} />
          <Stack.Screen name="AddToCart" component={AddToCart} />
        </Stack.Navigator>
        <StatusBar />
      </NavigationContainer>
    </Provider>
  );
}
