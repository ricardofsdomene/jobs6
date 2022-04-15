import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { Platform, Text, View } from "react-native";
import { Container, GoBackBox, RightButton } from "./styles";

import { useNavigation } from "@react-navigation/native";

export default function Header({ title }) {
  type Navigator = {
    goBack: () => void;
    navigate: (route: string) => void;
  };

  const navigation = useNavigation<Navigator>();

  return (
    <Container isIOS={Platform.OS === "ios"} route={title}>
      <GoBackBox onPress={() => navigation.goBack()}>
        <AntDesign name="arrowleft" size={25} color="#000" />
      </GoBackBox>
      <Text style={{ color: "#000", fontSize: 18 }}></Text>
      <RightButton onPress={() => {
        title === "SignIn" ? navigation.navigate("SignUp") : title === "SignUp" ? navigation.navigate("SignIn") : null
      }}>
        <Text style={{ color: "#AA88E3", fontSize: 18 }}>
          {title === "SignIn" ? "Cadastrar-se" : title === "SignUp" ? "Entrar" : ""}
        </Text>
      </RightButton>
    </Container>
  );
}
