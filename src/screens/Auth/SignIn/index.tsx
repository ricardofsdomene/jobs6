import { AntDesign, Ionicons } from "@expo/vector-icons";
import React, { useContext, useEffect, useState } from "react";
import {
  Platform,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Header from "../../../components/Header";
import Input from "../../../components/Input";

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import {
  Container,
  SignInButton,
  SignInButtonLabel,
  SignInSocialButton,
  SignInSocialLabel,
  SignInText,
  SignInTitle,
} from "./styles";
import { AuthContext } from "../../../hooks/auth";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signInApple, signInGoogle, signIn, error } = useContext(AuthContext);

  useEffect(() => {
    if (error) {
    }
  }, [error]);

  function SignInSocialComponent() {
    return (
      <React.Fragment>
        <SignInSocialButton onPress={signInGoogle}>
          <Ionicons name="logo-google" size={22} color="#000" />
          <SignInSocialLabel>Continuar com Google</SignInSocialLabel>
        </SignInSocialButton>
        <SignInSocialButton onPress={signInApple}>
          <Ionicons name="md-logo-apple" size={22} color="#000" />
          <SignInSocialLabel>Continuar com Apple</SignInSocialLabel>
        </SignInSocialButton>
      </React.Fragment>
    );
  }

  function Divider() {
    return (
      <View
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
          marginVertical: 20,
          alignItems: "center",
        }}
      >
        <View style={{ height: 1, width: "45%", backgroundColor: "#E0E0E0" }} />
        <Text style={{ color: "#777" }}>ou</Text>
        <View style={{ height: 1, width: "45%", backgroundColor: "#E0E0E0" }} />
      </View>
    );
  }

  return (
    <React.Fragment>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#F4F6FA"
        translucent
      />
      <Header title="SignIn" />
      <ScrollView style={{ backgroundColor: "#F4F6FA" }}>
      <KeyboardAwareScrollView>
          <Container>
            <SignInTitle>Entrar</SignInTitle>
            <SignInText>{`Ao continuar, você concorda com nosso\nContrato de Usuário e Políticade Privacidade.`}</SignInText>

            <SignInSocialComponent />
            <Divider />

            <View style={{ height: 10 }} />

            <TextInput
              style={{
                height: 50,
                width: "100%",
                marginBottom: 10,
                borderRadius: 12,
                padding: 10,
                backgroundColor: "#eee",
              }}
              keyboardType="email-address"
              autoCompleteType="email"
              placeholder="E-mail"
              spellCheck={false}
              autoCapitalize="none"
              onChangeText={setEmail}
            />
            <TextInput
              style={{
                height: 50,
                width: "100%",
                marginBottom: 10,
                borderRadius: 12,
                padding: 10,
                backgroundColor: "#eee",
              }}
              placeholder="Senha"
              secureTextEntry
              autoCapitalize="none"
              onChangeText={setPassword}
            />
            <TouchableOpacity
              onPress={() => {
                signIn({ email, password });
              }}
              style={{
                height: 50,
                width: "100%",
                marginTop: 10,
                borderRadius: 12,
                backgroundColor: "#000",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ color: "#FFF" }}>Continuar</Text>
            </TouchableOpacity>
          </Container>
        </KeyboardAwareScrollView>
      </ScrollView>
      {error && (
        <View
          style={{
            padding: 20,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              position: "absolute",
              bottom: Platform.OS === "ios" ? 25 : 20,
              height: 50,
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              flexDirection: "row",
              borderRadius: 12,
              backgroundColor: "#F55556",
            }}
          >
            <AntDesign name="warning" color="#FFF" size={18} />
            <Text style={{ color: "#FFF", marginLeft: 10 }}>{error}</Text>
          </View>
        </View>
      )}
    </React.Fragment>
  );
}
