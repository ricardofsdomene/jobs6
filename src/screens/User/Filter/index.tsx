import { AntDesign, FontAwesome5 } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  Platform,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import Header from "../../../components/Header";

import {
  Carousel,
  Container,
  SearchForm,
  SearchHead,
  SearchIcon,
  SearchInput,
} from "./styles";

export default function Filter({ route, navigation }) {
  const [sort, setSort] = useState("Picked for you");
  const [option, setOption] = useState("");

  function Header() {
    return (
      <View
        style={{
          height: "auto",
          padding: 20,
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Pressable
          onPress={() => navigation.goBack()}
          style={{
            height: 50,
            width: 50,
            backgroundColor: "#e0e0e0",
            borderRadius: 12,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <AntDesign name="arrowleft" size={22} color="#000" />
        </Pressable>
      </View>
    );
  }

  function Formato() {
    function Option({ title }) {
      return (
        <Pressable
          onPress={() => {
            setSort(title);
          }}
          style={{
            display: "flex",
            flexDirection: "row",
            height: 40,
            alignItems: "center",
          }}
        >
          <View
            style={{
              height: 20,
              width: 20,
              borderRadius: 20,
              justifyContent: "center",
              alignItems: "center",
              borderWidth: 2,
              borderColor: "#000",
            }}
          >
            {sort === title && (
              <View
                style={{
                  height: 7,
                  width: 7,
                  borderRadius: 7,
                  backgroundColor: "#000",
                }}
              />
            )}
          </View>
          <Text style={{ color: "#000", marginLeft: 10 }}>{title}</Text>
        </Pressable>
      );
    }
    return (
      <View>
        <Text
          style={{
            color: "#333",
            marginLeft: 20,
            marginTop: 10,
            fontWeight: "bold",
            marginBottom: 10,
            fontSize: 18,
          }}
        >
          Formato
        </Text>
        <View style={{ paddingHorizontal: 20, paddingBottom: 10 }}>
          <Option title="Presencial" />
          <Option title="Remoto" />
          <Option title="Híbrido" />
          <Option title="Summer Job" />
          <Option title="Estágio de Férias" />
        </View>
      </View>
    );
  }

  function Experiencias() {
    function Option({ title }) {
      return (
        <Pressable
          onPress={() => {
            setSort(title);
          }}
          style={{
            display: "flex",
            flexDirection: "row",
            height: 40,
            alignItems: "center",
          }}
        >
          <View
            style={{
              height: 20,
              width: 20,
              borderRadius: 20,
              justifyContent: "center",
              alignItems: "center",
              borderWidth: 2,
              borderColor: "#000",
            }}
          >
            {sort === title && (
              <View
                style={{
                  height: 7,
                  width: 7,
                  borderRadius: 7,
                  backgroundColor: "#000",
                }}
              />
            )}
          </View>
          <Text style={{ color: "#000", marginLeft: 10 }}>{title}</Text>
        </Pressable>
      );
    }
    return (
      <View>
        <Text
          style={{
            color: "#333",
            marginLeft: 20,
            marginTop: 20,
            fontWeight: "bold",
            marginBottom: 10,
            fontSize: 18,
          }}
        >
          Nīvel de experiência
        </Text>
        <View style={{ paddingHorizontal: 20, paddingBottom: 10 }}>
          <Option title="A qualquer momento" />
          <Option title="Últimas 24 horas" />
          <Option title="Última semana" />
          <Option title="Último mês" />
        </View>
      </View>
    );
  }

  function Options() {
    function Option({ title, icon, fontawesome }) {
      return (
        <Pressable
          style={{
            backgroundColor: "#000",
            display: "flex",
            flexDirection: "row",
            borderRadius: 50,
            height: 40,
            width: "auto",
            marginRight: 10,
            paddingHorizontal: 20,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {fontawesome ? (
            <FontAwesome5 name={icon} size={15} color="#FFF" />
          ) : (
            <AntDesign name={icon} size={15} color="#FFF" />
          )}
          <Text style={{ color: "#FFF", fontWeight: "bold", marginLeft: 5 }}>
            {title}
          </Text>
        </Pressable>
      );
    }

    return (
      <View>
        <Text
          style={{
            color: "#333",
            marginLeft: 20,
            fontWeight: "bold",
            marginBottom: 10,
            fontSize: 18,
          }}
        >
          Tipo de vaga
        </Text>
        <Carousel>
          <Option title="Tempo integral" icon="suitcase" fontawesome />
          <Option title="Meio período" icon="suitcase" fontawesome />
          <Option title="Temporário" icon="suitcase" fontawesome />
          <Option title="Voluntário" icon="suitcase" fontawesome />
          <Option title="Outros" icon="suitcase" fontawesome />
        </Carousel>
      </View>
    );
  }

  function Options2() {
    function Option({ title, icon }) {
      return (
        <Pressable
          style={{
            backgroundColor: "#000",
            display: "flex",
            flexDirection: "row",
            borderRadius: 50,
            height: 40,
            width: "auto",
            marginRight: 10,
            paddingHorizontal: 20,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <AntDesign name={icon} size={15} color="#FFF" />
          <Text style={{ color: "#FFF", fontWeight: "bold", marginLeft: 5 }}>
            {title}
          </Text>
        </Pressable>
      );
    }

    return (
      <View style={{ marginTop: 20 }}>
        <Text
          style={{
            color: "#333",
            marginLeft: 20,
            fontWeight: "bold",
            marginBottom: 10,
            fontSize: 18,
          }}
        >
          Filtro de Players
        </Text>
        <Carousel>
          <Option title="Securitizadora" icon="search1" />
          <Option title="Banco de Investimento" icon="search1" />
          <Option title="Escritorio de Investimento" icon="search1" />
          <Option title="Family Office" icon="search1" />
        </Carousel>
      </View>
    );
  }

  function Sort2() {
    function Option({ title }) {
      return (
        <Pressable
          onPress={() => {
            setSort(title);
          }}
          style={{
            display: "flex",
            flexDirection: "row",
            height: 40,
            alignItems: "center",
          }}
        >
          <View
            style={{
              height: 20,
              width: 20,
              borderRadius: 20,
              justifyContent: "center",
              alignItems: "center",
              borderWidth: 2,
              borderColor: "#000",
            }}
          >
            {sort === title && (
              <View
                style={{
                  height: 7,
                  width: 7,
                  borderRadius: 7,
                  backgroundColor: "#000",
                }}
              />
            )}
          </View>
          <Text style={{ color: "#000", marginLeft: 10 }}>{title}</Text>
        </Pressable>
      );
    }

    return (
      <View style={{ paddingHorizontal: 20, paddingBottom: 20 }}>
        <Text
          style={{
            color: "#333",
            fontWeight: "bold",
            fontSize: 18,
            marginBottom: 10,
          }}
        >
          Localidade
        </Text>
        <Option title="Remoto" />
        <Option title="São Paulo" />
        <Option title="Rio de Janeiro" />
        <Option title="Belo Horizonte" />
        <Option title="Goiânia" />
      </View>
    );
  }

  return (
    <Container>
      <Header />
      <ScrollView>
        <Options />
        <Options2 />
        <Experiencias />
        <Formato />
        <Sort2 />
      </ScrollView>
      <View
        style={{ padding: 20, paddingBottom: Platform.OS === "ios" ? 30 : 20 }}
      >
        <Pressable
          style={{
            height: 50,
            width: "100%",
            backgroundColor: "#000",
            borderRadius: 12,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "#FFF", fontWeight: "bold", fontSize: 18 }}>
            Aplicar filtros
          </Text>
        </Pressable>
      </View>
    </Container>
  );
}
