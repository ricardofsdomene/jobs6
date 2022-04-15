import React, { useContext, useEffect } from "react";
import { AuthContext } from "../hooks/auth";

import UserRoutes from "./user.routes";
import StaffRoutes from "./staff.routes";
import CompanyRoutes from "./company.routes";

import AuthRoutes from "./auth.routes";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Routes() {
  const { user } = useContext(AuthContext);

  return user ? <UserRoutes /> : <AuthRoutes />;
}
