import {
  AntDesign,
  Entypo,
  FontAwesome5,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import {
  Button,
  Image,
  Platform,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { UploadBoxShadow, UploadBoxTitle } from "../Home/styles";

import FileSystem from "expo-file-system";

import { Container } from "./styles";

import * as ImagePicker from "expo-image-picker";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { manipulateAsync, FlipType, SaveFormat } from "expo-image-manipulator";

export default function Upload({ route, navigation }) {
  function Header() {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
        style={{
          backgroundColor: "#fff",
          display: "flex",
          height: 60,
          flexDirection: "row",
          borderBottomColor: "#aaa",
          borderBottomWidth: 0.2,
          alignItems: "center",
          padding: 20,
          justifyContent: "space-between",
        }}
      >
        <View />
        <Text
          style={{
            fontSize: 18,
            fontWeight: "bold",
            width: "100%",
            textAlign: "center",
            color: "#333",
          }}
        >
          Fechar
        </Text>
      </TouchableOpacity>
    );
  }

  function Divider() {
    return (
      <View
        style={{
          marginVertical: 20,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View style={{ height: 1, backgroundColor: "#aaa", width: "43%" }} />
        <MaterialIcons name="category" color="#eee" size={12} />
        <View style={{ height: 1, backgroundColor: "#aaa", width: "43%" }} />
      </View>
    );
  }

  const { name } = route.params;

  type ImageResult = {
    cancelled: boolean;
    height: number;
    type: string;
    uri: string;
    width: number;
  };

  const [image, setImage] = useState(null);
  const [encodedBase64, setEncodedBase64] = useState("");
  const [imageAvatar, setImageAvatar] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.5,
    });

    if (!result.cancelled) {
    }
  };

  return (
    <React.Fragment>
      <Header />
      <Container>
        <View style={{ paddingHorizontal: 20 }}>
          <Text
            style={{
              color: "#333",
              fontSize: 33,
              fontWeight: "bold",
              marginTop: 20,
            }}
          >
            {name === "Avatar"
              ? "Adicionar sua foto"
              : name === "Resume"
              ? "Adicionar seu resumo"
              : null}
          </Text>

          <Pressable
            onPress={pickImage}
            style={{
              marginTop: 20,
              borderRadius: 12,
              padding: 20,
              backgroundColor: "#eee",
              height: "auto",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            }}
          >
            {image ? (
              <Image
                source={{ uri: imageAvatar }}
                style={{ height: 50, width: 50, borderRadius: 50 }}
              />
            ) : (
              <UploadBoxShadow
                bg={
                  name === "Avatar"
                    ? "#DFE6F1"
                    : name === "Resume"
                    ? "#FBE3E0"
                    : name === "Verification"
                    ? "#DFD1F5"
                    : null
                }
              >
                {name === "Avatar" ? (
                  <FontAwesome5 name={"user-alt"} color="#333" size={22} />
                ) : name === "Resume" ? (
                  <Ionicons
                    name="md-document"
                    style={{ marginLeft: 3 }}
                    color="#333"
                    size={22}
                  />
                ) : name === "Verification" ? (
                  <MaterialIcons name="verified-user" color="#333" size={22} />
                ) : null}
              </UploadBoxShadow>
            )}
            <UploadBoxTitle>
              {name === "Avatar"
                ? image
                  ? `\nClique no box para alterar sua foto`
                  : `\nClique no box para adicionar sua foto`
                : name === "Resume"
                ? "\nClique no box para adicionar seu resumo\n[.pdf]"
                : name === "Verification"
                ? `Verificar seus dados`
                : null}
            </UploadBoxTitle>
          </Pressable>
          {name === "Resume" && (
            <Pressable
              onPress={pickImage}
              style={{
                marginTop: 20,
                borderRadius: 12,
                padding: 20,
                backgroundColor: "#eee",
                height: "auto",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
              }}
            >
              {image ? (
                <Image
                  source={{ uri: image.uri }}
                  style={{ height: 60, width: 60, borderRadius: 50 }}
                />
              ) : (
                <UploadBoxShadow
                  bg={
                    name === "Avatar"
                      ? "#DFE6F1"
                      : name === "Resume"
                      ? "#FBE3E0"
                      : null
                  }
                >
                  {name === "Avatar" ? (
                    <FontAwesome5 name={"user-alt"} color="#333" size={22} />
                  ) : name === "Resume" ? (
                    <Ionicons
                      name="md-document-text"
                      style={{ marginLeft: 3 }}
                      color="#333"
                      size={22}
                    />
                  ) : null}
                </UploadBoxShadow>
              )}
              <UploadBoxTitle>{`\nOu se preferir voce pode colar em texto`}</UploadBoxTitle>
            </Pressable>
          )}
          {name === "Verification" && (
            <View>
              <Pressable
                style={{
                  marginTop: 20,
                  borderRadius: 12,
                  backgroundColor: "#eee",
                  height: 50,
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  paddingHorizontal: 20,
                  width: "100%",
                }}
              >
                <FontAwesome5
                  name="mobile-alt"
                  style={{ marginLeft: 3 }}
                  color="#333"
                  size={20}
                />
                <Text style={{ marginLeft: 15 }}>
                  Verificar seu numero de celular
                </Text>
              </Pressable>
              <Pressable
                style={{
                  marginTop: 20,
                  borderRadius: 12,
                  backgroundColor: "#eee",
                  height: 50,
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  paddingHorizontal: 20,
                  width: "100%",
                }}
              >
                <Entypo
                  name="mail"
                  style={{ marginLeft: 3 }}
                  color="#333"
                  size={20}
                />
                <Text style={{ marginLeft: 10 }}>
                  Verificar seu endereco de e-mail
                </Text>
              </Pressable>
            </View>
          )}
        </View>
        <View style={{ padding: 20, paddingBottom: 30 }}>
          <Text
            style={{
              color: "#777",
              fontSize: 12,
              textAlign: "left",
              width: "100%",
            }}
          >
            Ao clicar no botão abaixo para adicionar sua foto de perfil você
            concorda com nossos{" "}
            <Text style={{ textDecorationLine: "underline" }}>
              Termos de Serviços.
            </Text>
          </Text>
          <TouchableOpacity
            style={{
              marginTop: 10,
              height: 50,
              width: "100%",
              borderRadius: 12,
              backgroundColor: "#333",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "#FFF", fontWeight: "bold", fontSize: 18 }}>
              Adicionar
            </Text>
          </TouchableOpacity>
        </View>
      </Container>
    </React.Fragment>
  );
}
