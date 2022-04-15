import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../screens/Company/Home";
import Company from "../screens/Company/Company";

const CompanyStack = createNativeStackNavigator();

export default function UserRoutes() {
  return (
    <CompanyStack.Navigator>
      <CompanyStack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <CompanyStack.Screen
        name="Company"
        component={Company}
        options={{ headerShown: false }}
      />
    </CompanyStack.Navigator>
  );
}
