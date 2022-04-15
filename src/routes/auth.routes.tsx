import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Auth from "../screens/Auth/Auth";
import SignIn from "../screens/Auth/SignIn";
import SignUp from "../screens/Auth/SignUp";

const AuthStack = createNativeStackNavigator();

export default function AuthRoutes() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="Auth"
        component={Auth}
        options={{ headerShown: false }}
      />
      <AuthStack.Group screenOptions={{ presentation: "modal" }}>
        <AuthStack.Screen
          name="SignIn"
          component={SignIn}
          options={{ headerShown: false }}
        />
        <AuthStack.Screen
          name="SignUp"
          component={SignUp}
          options={{ headerShown: false }}
        />
      </AuthStack.Group>
    </AuthStack.Navigator>
  );
}
