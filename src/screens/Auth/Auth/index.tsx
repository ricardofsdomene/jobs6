import React, { useContext, useEffect, useState } from "react";
import {
  ActivityIndicator,
  Platform,
  StatusBar,
  Text,
  View,
} from "react-native";

import { Asset } from "expo-asset";

import {
  AuthBottom,
  AuthButton,
  AuthButtonLabel,
  AuthLogo,
  AuthSignInButton,
  AuthSignInButtonLabel,
  AuthText,
  AuthTitle,
  AuthTop,
  Container,
} from "./styles";

import Gif from "../../../assets/office.gif";
import Logo from "../../../assets/logo.png";
import { FontAwesome, Ionicons } from "@expo/vector-icons";

import { useNavigation } from "@react-navigation/native";
import { api } from "../../../services/api";
import { AuthContext } from "../../../hooks/auth";

export default function Auth() {
  const { signInApple, signInGoogle } = useContext(AuthContext);

  type Navigator = {
    navigate: (route: string) => void;
  };

  function SignInGoogleComponent() {
    return (
      <AuthButton onPress={signInGoogle}>
        <FontAwesome name="google" size={22} color="#FFF" />
        <AuthButtonLabel>Continuar com Google</AuthButtonLabel>
      </AuthButton>
    );
  }

  function SignInAppleComponent() {
    return (
      <AuthButton onPress={signInApple}>
        <Ionicons name="md-logo-apple" size={22} color="#FFF" />
        <AuthButtonLabel>Continuar com Apple</AuthButtonLabel>
      </AuthButton>
    );
  }

  const navigation = useNavigation<Navigator>();

  useEffect(() => {
    async function loadResourcesAsync() {
      await Promise.all([
        Asset.loadAsync([require("../../../assets/office.gif")]),
      ]);
    }

    loadResourcesAsync();
  }, []);

  return (
    <Container
      source={require("../../../assets/office.gif")}
      imageStyle={{ opacity: 0.4 }}
    >
      <StatusBar
        backgroundColor="transparent"
        translucent
        barStyle="light-content"
      />
      <AuthTop>
        <AuthLogo source={Logo} />
        <AuthTitle>{`Explore um mundo\nde oportunidades`}</AuthTitle>
      </AuthTop>
      <AuthBottom>
        <SignInGoogleComponent />
        {Platform.OS === "ios" && <SignInAppleComponent />}

        <AuthButton onPress={() => navigation.navigate("SignUp")}>
          <Ionicons name="ios-mail" size={22} color="#FFF" />
          <AuthButtonLabel>Continuar com E-mail</AuthButtonLabel>
        </AuthButton>
        <AuthSignInButton onPress={() => navigation.navigate("SignIn")}>
          <AuthSignInButtonLabel>
            Ja possui conta no Jobs?
          </AuthSignInButtonLabel>
        </AuthSignInButton>
        <AuthText>
          Ao continuar, você concorda com nosso Contrato de Usuário e Política
          de Privacidade.
        </AuthText>
      </AuthBottom>
    </Container>
  );
}
