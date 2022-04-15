import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { Container } from "./styles";

export default function Subscribe({ route, navigation }) {
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
            Assinar o Jobs
          </Text>

          <View
            style={{
              marginTop: 10,
              borderRadius: 12,
              padding: 20,
              backgroundColor: "#eee",
              height: "auto",
              width: "100%",
            }}
          >
            <View style={{ display: "flex", flexDirection: "row" }}>
              <AntDesign name="checkcircle" size={18} color="#333" />
              <Text style={{ color: "#333", marginLeft: 15, fontSize: 16 }}>
                Acesso ao feed
              </Text>
            </View>
            <View
              style={{ display: "flex", marginTop: 20, flexDirection: "row" }}
            >
              <AntDesign name="checkcircle" size={18} color="#333" />
              <Text style={{ color: "#333", marginLeft: 15, fontSize: 16 }}>
                Acesso a todas as vagas do app
              </Text>
            </View>
            <View
              style={{ display: "flex", marginTop: 20, flexDirection: "row" }}
            >
              <AntDesign name="checkcircle" size={18} color="#333" />
              <Text style={{ color: "#333", marginLeft: 15, fontSize: 16 }}>
                Tag exclusiva de assinante
              </Text>
            </View>
            <View
              style={{ display: "flex", marginTop: 20, flexDirection: "row" }}
            >
              <AntDesign name="checkcircle" size={18} color="#333" />
              <Text style={{ color: "#333", marginLeft: 15, fontSize: 16 }}>
                Acesso a{" "}
                <Text
                  style={{
                    fontWeight: "bold",
                  }}
                >
                  Rede Jobs
                </Text>
              </Text>
            </View>
            <View
              style={{ display: "flex", marginTop: 20, flexDirection: "row" }}
            >
              <AntDesign name="checkcircle" size={18} color="#333" />
              <Text style={{ color: "#333", marginLeft: 15, fontSize: 16 }}>
                Fazer publicações
              </Text>
            </View>
            <View
              style={{ display: "flex", marginTop: 20, flexDirection: "row" }}
            >
              <AntDesign name="checkcircle" size={18} color="#333" />
              <Text style={{ color: "#333", marginLeft: 15, fontSize: 16 }}>
                Aplicar em vagas pelo app
              </Text>
            </View>
            <View
              style={{ display: "flex", marginTop: 20, flexDirection: "row" }}
            >
              <AntDesign name="checkcircle" size={18} color="#333" />
              <Text style={{ color: "#333", marginLeft: 15, fontSize: 16 }}>
                Enviar mensagens em tempo real
              </Text>
            </View>
            <View
              style={{ display: "flex", marginTop: 20, flexDirection: "row" }}
            >
              <AntDesign name="checkcircle" size={18} color="#333" />
              <Text style={{ color: "#333", marginLeft: 15, fontSize: 16 }}>
                Criar e administrar sua rede de relacionamentos
              </Text>
            </View>
            <View
              style={{ display: "flex", marginTop: 20, flexDirection: "row" }}
            >
              <AntDesign name="sharealt" size={18} color="#333" />
              <Text style={{ color: "#333", marginLeft: 15, fontSize: 16 }}>
                Convidar usuarios para a beta
              </Text>
            </View>
          </View>
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
            Ao clicar no botão acima para se inscrever você concorda com nossos{" "}
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
              Assinar
            </Text>
          </TouchableOpacity>
        </View>
      </Container>
    </React.Fragment>
  );
}
