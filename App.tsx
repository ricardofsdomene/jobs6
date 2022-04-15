import 'react-native-gesture-handler';
import React from "react";
import AppLoading from "expo-app-loading";
import { ThemeProvider } from "styled-components";

import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
} from "@expo-google-fonts/inter";
import {
  Archivo_400Regular,
  Archivo_500Medium,
  Archivo_600SemiBold,
} from "@expo-google-fonts/archivo";
import {
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold   
} from "@expo-google-fonts/roboto";

import theme from "./src/styles/theme";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthProvider } from "./src/hooks/auth";
import Routes from "./src/routes";

// DEVELOPMENT 
// * Expo auth session redirect to anonymous i must sign in and change for my expo repository

import { LogBox } from 'react-native';
LogBox.ignoreAllLogs();



type RootStackParamList = {
  Home: undefined;
  Company: undefined;
  Job: undefined;
  Search: undefined;
};

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Archivo_400Regular,
    Archivo_500Medium,
    Archivo_600SemiBold,
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </ThemeProvider>
    </NavigationContainer>
  );
}
