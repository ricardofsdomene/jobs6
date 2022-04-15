import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../screens/User/Home";
import Job from "../screens/User/Job";
import Search from "../screens/User/Search";
import Company from "../screens/User/Company";
import Profile from "../screens/User/Profile/me";
import User from "../screens/User/Profile";
import Subscribe from "../screens/User/Subscribe";

import { FontAwesome, Ionicons } from "@expo/vector-icons";
import CustomDrawer from "../components/Drawer";
import Upload from "../screens/User/Upload";
import Filter from "../screens/User/Filter";
import Social from "../screens/User/Social";

const UserStack = createNativeStackNavigator();

function Stack() {
  return (
    <UserStack.Navigator>
      <UserStack.Screen
        name="HomeScreen"
        component={Home}
        options={{ headerShown: false }}
      />
      <UserStack.Screen
        name="Company"
        component={Company}
        options={{ headerShown: false }}
      />
      <UserStack.Screen
        name="Job"
        component={Job}
        options={{ headerShown: false }}
      />
      <UserStack.Screen
        name="User"
        component={User}
        options={{ headerShown: false }}
      />
      <UserStack.Group screenOptions={{ presentation: "modal" }}>
        <UserStack.Screen
          name="Subscribe"
          component={Subscribe}
          options={{ headerShown: false }}
        />
        <UserStack.Screen
          name="Search"
          component={Search}
          options={{ headerShown: false }}
        />
        <UserStack.Screen
          name="Profile"
          component={Profile}
          options={{ headerShown: false }}
        />
        <UserStack.Screen
          name="Upload"
          component={Upload}
          options={{ headerShown: false }}
        />
        <UserStack.Screen
          name="Filter"
          component={Filter}
          options={{ headerShown: false }}
        />
      </UserStack.Group>
    </UserStack.Navigator>
  );
}

export default Stack;
