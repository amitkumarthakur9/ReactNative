import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  Text,
  Image,
  View,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { height, width } from "../../Dimension";
import Goal from "../Goal/Index";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons, EvilIcons } from "@expo/vector-icons";
import Menunavigator from "../Dashboard/Menunavigator";

const Tab = createBottomTabNavigator();

// function Feed() {
//   return (
//     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//       <Text>Feed Screen</Text>
//     </View>
//   );
// }

// function Article() {
//   return (
//     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//       <Text>Article Screen</Text>
//     </View>
//   );
// }

const Drawer = createDrawerNavigator();

// function Home() {
//   return (
//     <Drawer.Navigator
//       initialRouteName="Feed"
//       screenOptions={{
//         headerTitle: "Hello, Sumesh!",
//         headerBackground: () => (
//           <ImageBackground
//             source={require("../../../assets/icons/header.png")}
//             style={{ width: width, height: height * 0.29 }}
//             resizeMode="stretch"
//           >
//             <View
//               style={{
//                 flexDirection: "row",
//                 alignSelf: "flex-end",
//                 marginTop: height * 0.1,
//                 marginRight: 20,
//               }}
//             >
//               <TouchableOpacity style={{ marginLeft: 10 }}>
//                 <EvilIcons name="search" size={24} color="white" />
//               </TouchableOpacity>
//               <TouchableOpacity style={{ marginLeft: 10 }}>
//                 <Ionicons
//                   name="notifications-outline"
//                   size={24}
//                   color="white"
//                 />
//               </TouchableOpacity>
//             </View>
//           </ImageBackground>
//         ),
//         headerStyle: {
//           height: height * 0.17,
//         },
//         headerTitleStyle: {
//           color: "yellow",
//         },
//       }}
//     >
//       <Drawer.Screen name="Feed" component={Feed} />
//       <Drawer.Screen name="Article" component={Article} />
//     </Drawer.Navigator>
//   );
// }

// function Notifications() {
//   return (
//     <Drawer.Navigator
//       screenOptions={{
//         headerTitle: "Hello, Sumesh!",
//         headerBackground: () => (
//           <ImageBackground
//             source={require("../../../assets/icons/header.png")}
//             style={{ width: width, height: height * 0.29 }}
//             resizeMode="stretch"
//           >
//             <View
//               style={{
//                 flexDirection: "row",
//                 alignSelf: "flex-end",
//                 marginTop: height * 0.1,
//               }}
//             >
//               <TouchableOpacity style={{ marginLeft: 10 }}>
//                 <EvilIcons name="search" size={24} color="white" />
//               </TouchableOpacity>
//               <TouchableOpacity style={{ marginLeft: 10 }}>
//                 <Ionicons
//                   name="notifications-outline"
//                   size={24}
//                   color="white"
//                 />
//               </TouchableOpacity>
//             </View>
//           </ImageBackground>
//         ),
//         headerStyle: {
//           height: height * 0.17,
//         },
//         headerTitleStyle: {
//           color: "yellow",
//         },
//       }}
//     >
//       <Drawer.Screen name="Feed" component={Feed} />
//       <Drawer.Screen name="Article" component={Article} />
//     </Drawer.Navigator>
//   );
// }

const Home1 = () => <Text style={{ marginTop: 100 }}>amit</Text>;
const Notifications = () => <Text>amit</Text>;
const Profile = () => <Text>amit</Text>;
const Profiles = () => <Text>amit</Text>;
const Profiless = () => <Text>amit</Text>;

const Menu = () => {
  return (
    <Tab.Navigator
      initialRouteName="TabHome"
      screenOptions={{
        tabBarActiveTintColor: "rgba(2, 48, 71, 1)",
        tabBarInactiveTintColor: "rgba(202, 196, 208, 1)",
        headerShown: false,
        tabBarStyle: {
          height: height * 0.1,
          backgroundColor: "rgba(255, 255, 255, 1)",
          borderRadius: width * 0.05,
          borderColor: "rgba(0, 0, 0, 0.1)",
          padding: width * 0.02,
          elevation: width * 0.02,
        },
        tabBarLabelStyle: {
          fontSize: width * 0.035,
          lineHeight: height * 0.025,
          fontWeight: "500",
          marginBottom: height * 0.015,
        },
      }}
    >
      <Tab.Screen
        name="TabHome"
        component={Menunavigator}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <View
                style={{
                  width: width * 0.1,
                  height: width * 0.1,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  source={require("../../../assets/menu/Home.png")}
                  style={{
                    width: width * 0.067,
                    height: width * 0.067,
                    tintColor: color,
                    resizeMode: "contain",
                  }}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarLabel: "Invest",
          tabBarIcon: ({ color, size }) => (
            <View
              style={{
                width: width * 0.1,
                height: width * 0.1,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                source={require("../../../assets/menu/Shape.png")}
                style={{
                  width: width * 0.067,
                  height: width * 0.067,
                  tintColor: color,
                  resizeMode: "contain",
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="explore"
        component={Profile}
        options={{
          tabBarLabel: "Explore",
          tabBarIcon: ({ color, size }) => (
            <View
              style={{
                width: width * 0.1,
                height: width * 0.1,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                source={require("../../../assets/menu/Explore.png")}
                style={{
                  width: width * 0.067,
                  height: width * 0.067,
                  tintColor: color,
                  resizeMode: "contain",
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="product"
        component={Profiles}
        options={{
          tabBarLabel: "Products",
          tabBarIcon: ({ color, size }) => (
            <View
              style={{
                width: width * 0.1,
                height: width * 0.1,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                source={require("../../../assets/menu/Product.png")}
                style={{
                  width: width * 0.067,
                  height: width * 0.067,
                  tintColor: color,
                  resizeMode: "contain",
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="account"
        component={Profiless}
        options={{
          tabBarLabel: "Account",
          tabBarIcon: ({ color, size }) => (
            <View
              style={{
                width: width * 0.1,
                height: width * 0.1,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                source={require("../../../assets/menu/Person.png")}
                style={{
                  width: width * 0.067,
                  height: width * 0.067,
                  tintColor: color,
                  resizeMode: "contain",
                }}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Menu;
