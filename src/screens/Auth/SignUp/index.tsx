import { AntDesign, Ionicons } from "@expo/vector-icons";
import React, { useContext, useEffect, useState } from "react";
import {
  Platform,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Header from "../../../components/Header";

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import {
  Container,
  SignUpButton,
  SignUpButtonLabel,
  SignUpSocialButton,
  SignUpSocialLabel,
  SignUpText,
  SignUpTitle,
} from "./styles";
import Input from "../../../components/Input";
import { AuthContext } from "../../../hooks/auth";

export default function SignUp() {
  const { signUp, error } = useContext(AuthContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function SignUpSocialComponent() {
    return (
      <React.Fragment>
        <SignUpSocialButton>
          <Ionicons name="logo-google" size={22} color="#000" />
          <SignUpSocialLabel>Continuar com Google</SignUpSocialLabel>
        </SignUpSocialButton>
        <SignUpSocialButton>
          <Ionicons name="md-logo-apple" size={22} color="#000" />
          <SignUpSocialLabel>Continuar com Apple</SignUpSocialLabel>
        </SignUpSocialButton>
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

  function handleSignUp() {}

  return (
    <React.Fragment>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#F4F6FA"
        translucent
      />
      <Header title="SignUp" />
      <ScrollView style={{ backgroundColor: "#F4F6FA" }}>
        <Container>
          <KeyboardAwareScrollView>
            <SignUpTitle>Ola, seja muito bem-vindo(a) ao Jobs</SignUpTitle>
            <SignUpText>{`Ao continuar, você concorda com nosso\nContrato de Usuário e Políticade Privacidade.`}</SignUpText>

            <SignUpSocialComponent />
            <Divider />

            <Input
              name="Nome completo"
              type="mail"
              value={name}
              onChangeText={setName}
            />
            <Input
              name="E-mail"
              type="mail"
              value={email}
              onChangeText={setEmail}
            />
            <Input
              name="Senha"
              type="mail"
              secureTextEntry={true}
              value={password}
              onChangeText={setPassword}
            />

            <TouchableOpacity
              onPress={() => {
                signUp({ name, email, password });
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
          </KeyboardAwareScrollView>
        </Container>
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
