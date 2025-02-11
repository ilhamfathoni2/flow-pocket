import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native";
import { View } from "tamagui";
import { RootStackParamList } from "./types";

// Import Screen
import HomeScreen from "../screens/Home/HomeScreen";
import TrxHistory from "../screens/TrxHistory/TrxHistory";
import Menu from "../screens/Menu/Menu";
import CardSetting from "../screens/CardSetting/CardSetting";

// Import Aset Ikon
import HomeIcon from "../assets/images/home.png";
import HomeIconActive from "../assets/images/home-active.png";
import IconTrxHistory from "../assets/images/chart.png";
import IconTrxHistoryActive from "../assets/images/chart-active.png";
import MenuIcon from "../assets/images/menu.png";
import MenuIconActive from "../assets/images/menu-active.png";
import CardIcon from "../assets/images/card.png";
import CardIconActive from "../assets/images/card-active.png";


const Tab = createBottomTabNavigator<RootStackParamList>();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: {
          backgroundColor: "#3B3F3E", // Warna background tab bar
          borderTopWidth: 0,
          height: 86,
          paddingTop: 25,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          position: "absolute",
          bottom: 0,
        },
        headerShown: false,
        tabBarShowLabel: false, // Sembunyikan teks label
        tabBarIcon: ({ focused }) => {
          let iconSource;

          if (route.name === "Home") {
            iconSource = focused ? HomeIconActive : HomeIcon;
          } else if (route.name === "TrxHistory") {
            iconSource = focused ? IconTrxHistoryActive : IconTrxHistory;
          } else if (route.name === "Menu") {
            iconSource = focused ? MenuIconActive : MenuIcon;
          } else if (route.name === "CardSetting") {
            iconSource = focused ? CardIconActive : CardIcon;
          }

          return (
            <View>
              <Image source={iconSource} style={{ width: 24, height: 24, objectFit: "contain" }} />
            </View>
          );
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="TrxHistory" component={TrxHistory} />
      <Tab.Screen name="CardSetting" component={CardSetting} />
      <Tab.Screen name="Menu" component={Menu} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
