import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, Image, View } from "react-native";
import { height, width } from "../../Dimension";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../Dashboard/Home";
import Explore from "../Dashboard/Explore";
import Account from "../Account/Index";
import Goal from "../Goal/Index";
import { useFonts } from "expo-font";
import AddToCart from "../Cart/Addtocart";
import { useSelector } from "react-redux";
import { Badge } from "react-native-paper";

const Tab = createBottomTabNavigator();

const Menu = (props) => {
  const Cartcount = useSelector((state) => state.cart.count);
  const defaultTab = props.defaultTab || "TabHome";
  const [fontsLoaded] = useFonts({
    "Inter-Black": require("../../../assets/fonts/metropolis-latin-500-normal.ttf"),
  });
  return (
    <Tab.Navigator
      initialRouteName={defaultTab}
      screenOptions={{
        tabBarActiveTintColor: "rgba(2, 48, 71, 1)",
        tabBarInactiveTintColor: "rgba(202, 196, 208, 1)",
        headerShown: false,
        tabBarStyle: {
          height: height * 0.1,
          backgroundColor: "rgba(255, 255, 255, 1)",
          borderTopLeftRadius: width * 0.05,
          borderTopRightRadius: width * 0.05,
          borderColor: "rgba(0, 0, 0, 0.1)",
          padding: width * 0.02,
          elevation: width * 0.02,
        },
        tabBarLabelStyle: {
          fontSize: width * 0.035,
          lineHeight: height * 0.025,
          fontFamily: "Inter-Black",
          fontWeight: "500",
          marginBottom: height * 0.015,
        },
      }}
    >
      <Tab.Screen
        name="TabHome"
        component={Home}
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
        name="Goal"
        component={Goal}
        options={{
          tabBarLabel: "Goal",
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
        name="Explore"
        component={Explore}
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
        name="AddToCart"
        component={AddToCart}
        options={{
          tabBarLabel: "Cart",
          tabBarIcon: ({ color, size }) => (
            <View
              style={{
                width: width * 0.1,
                height: width * 0.1,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {Cartcount > 0 && (
                <Badge
                  style={{
                    position: "absolute",
                    top: -height * 0.015,
                    backgroundColor: "rgb(0, 56, 116 )",
                    fontFamily: "Inter-Black",
                    fontWeight: "600",
                  }}
                >
                  {Cartcount}
                </Badge>
              )}

              <Image
                source={require("../../../assets/menu/cart.png")}
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
        name="Account"
        component={Account}
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
