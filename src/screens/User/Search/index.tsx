import { AntDesign, Entypo, Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  FlatList,
  Image,
  ImageBackground,
  Platform,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Header from "../../../components/Header";
import { Carousel } from "../Filter/styles";

import {
  Container,
  SearchForm,
  SearchHead,
  SearchIcon,
  SearchInput,
} from "./styles";

export default function Search({ route, navigation }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchOn, setSearchOn] = useState(false);
  const [tab, setTab] = useState("Tudo");

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
          <AntDesign name="arrowleft" size={18} color="#000" />
        </Pressable>
      </View>
    );
  }

  function History() {
    return (
      <View style={{ width: "100%" }}>
        <Text>Estagio no BTG Pactual</Text>
      </View>
    );
  }

  function Tabs() {
    function Tab({ title }) {
      return (
        <Pressable
          onPress={() => {
            setTab(title);
          }}
          style={{
            height: 60,
            marginRight: 20,
            paddingBottom: Platform.OS === "android" ? 10 : 0,
            borderBottomColor: tab === title ? "#333" : null,
            borderBottomWidth: tab === title ? 2 : null,
            width: "auto",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "#000" }}>{title}</Text>
        </Pressable>
      );
    }

    return (
      <View style={{ height: 60, backgroundColor: "transparent" }}>
        <Carousel>
          <Tab title="Tudo" />
          <Tab title="Usuarios" />
          <Tab title="Empresas" />
          <Tab title="Vagas" />
        </Carousel>
      </View>
    );
  }

  function Tudo() {
    function Cargos() {
      const trending_jobs = [
        {
          id: 1,
          name: "Estagio",
          abertos: 23,
          companies: ["XP Inc", "BTG Pactual", "e Etc."],
        },
        {
          id: 2,
          name: "Analista de Investimentos",
          title:
            "O Analista de Investimentos é o profissional responsável por fornecer informações que auxiliam investidores, gestores de fundos e corretores de valores em suas decisões sobre investimentos.",
          description:
            "O Analista de Investimentos é um profissional bastante citado e valorizado dentro do mercado financeiro. Ele é um ponto central dentro da lógica dos investimentos, sobretudo em âmbito financeiro.",
          abertos: 12,
          companies: ["XP Inc", "BTG Pactual", "e Etc."],
        },
        {
          id: 3,
          name: "Analista de Risco",
          abertos: 6,
          companies: ["XP Inc", "Evcred", "e Etc."],
        },
      ];

      function Cargo() {
        return (
          <Pressable
            style={{
              marginBottom: 10,
              marginRight: 10,

              padding: 20,
              backgroundColor: "#000",

              height: 130,
              width: 260,

              borderRadius: 12,

              borderBottomWidth: 1,
              borderBottomColor: "#eee",

              paddingBottom: 10,

              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <View>
              <Text style={{ color: "#FFF", fontSize: 18, fontWeight: "bold" }}>
                Analista de Investimentos
              </Text>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Text style={{ color: "#FFF", fontSize: 33, fontWeight: "bold" }}>
                22{" "}
                <Text
                  style={{
                    color: "#FFF",
                    fontSize: 14,
                    marginLeft: 10,
                  }}
                >
                  vagas abertas
                </Text>
              </Text>
            </View>
          </Pressable>
        );
      }

      return (
        <View style={{ marginBottom: 10 }}>
          <Text
            style={{
              fontWeight: "bold",
              marginLeft: 20,
              marginBottom: 10,
              fontSize: 18,
            }}
          >
            Cargos mais buscados
          </Text>
          <Carousel>
            <Cargo />
            <Cargo />
            <Cargo />
          </Carousel>
        </View>
      );
    }

    function Ajuda() {
      const trending_jobs = [
        {
          id: 1,
          name: "Estagio",
          abertos: 23,
          companies: ["XP Inc", "BTG Pactual", "e Etc."],
        },
        {
          id: 2,
          name: "Analista de Investimentos",
          title:
            "O Analista de Investimentos é o profissional responsável por fornecer informações que auxiliam investidores, gestores de fundos e corretores de valores em suas decisões sobre investimentos.",
          description:
            "O Analista de Investimentos é um profissional bastante citado e valorizado dentro do mercado financeiro. Ele é um ponto central dentro da lógica dos investimentos, sobretudo em âmbito financeiro.",
          abertos: 12,
          companies: ["XP Inc", "BTG Pactual", "e Etc."],
        },
        {
          id: 3,
          name: "Analista de Risco",
          abertos: 6,
          companies: ["XP Inc", "Evcred", "e Etc."],
        },
      ];

      function Item({ title }) {
        return (
          <Pressable
            style={{
              marginBottom: 10,
              marginRight: 10,

              padding: 10,
              backgroundColor: "#000",

              height: 120,
              width: 170,

              borderRadius: 12,

              borderBottomWidth: 1,
              borderBottomColor: "#eee",

              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-end",
              }}
            >
              <Entypo name="help-with-circle" color="#eee" size={16} />
            </View>
            <Text
              style={{
                color: "#FFF",
                fontSize: 14,
                width: "80%",
                fontWeight: "bold",
              }}
            >
              {title}
            </Text>
          </Pressable>
        );
      }

      return (
        <View style={{ marginBottom: 10 }}>
          <Text
            style={{
              fontWeight: "bold",
              marginLeft: 20,
              marginBottom: 10,
              fontSize: 18,
            }}
          >
            Perguntas frequentes
          </Text>
          <Carousel>
            <Item title="Como me aplicar para uma vaga?" />
            <Item title="Como aumentar minhas chances?" />
            <Item title="O que e esse aplicativo?" />
          </Carousel>
        </View>
      );
    }

    function Localidade() {
      const trending_jobs = [
        {
          id: 1,
          name: "Estagio",
          abertos: 23,
          companies: ["XP Inc", "BTG Pactual", "e Etc."],
        },
        {
          id: 2,
          name: "Analista de Investimentos",
          title:
            "O Analista de Investimentos é o profissional responsável por fornecer informações que auxiliam investidores, gestores de fundos e corretores de valores em suas decisões sobre investimentos.",
          description:
            "O Analista de Investimentos é um profissional bastante citado e valorizado dentro do mercado financeiro. Ele é um ponto central dentro da lógica dos investimentos, sobretudo em âmbito financeiro.",
          abertos: 12,
          companies: ["XP Inc", "BTG Pactual", "e Etc."],
        },
        {
          id: 3,
          name: "Analista de Risco",
          abertos: 6,
          companies: ["XP Inc", "Evcred", "e Etc."],
        },
      ];

      function Item({ title }) {
        return (
          <Pressable
            style={{
              marginBottom: 10,
              marginRight: 10,

              padding: 10,
              backgroundColor: "#000",

              height: 120,
              width: 170,

              borderRadius: 12,

              borderBottomWidth: 1,
              borderBottomColor: "#eee",

              paddingBottom: 10,

              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-end",
              }}
            >
              <Ionicons name="location-sharp" color="#eee" size={16} />
            </View>
            <Text style={{ color: "#FFF", fontSize: 18, fontWeight: "bold" }}>
              {title}
            </Text>
          </Pressable>
        );
      }

      return (
        <View style={{ marginBottom: 10 }}>
          <Text
            style={{
              fontWeight: "bold",
              marginLeft: 20,
              marginBottom: 10,
              fontSize: 18,
            }}
          >
            Buscar vaga pela localidade
          </Text>
          <Carousel>
            <Item title="Remoto" />
            <Item title="São Paulo" />
            <Item title="Rio de Janeiro" />
            <Item title="Goiânia" />
          </Carousel>
        </View>
      );
    }

    function Users() {
      function User({ id, name, avatar }) {
        return (
          <Pressable
            style={{
              height: 40,
              width: "100%",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 10,
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Image
                source={{ uri: avatar }}
                style={{ height: 40, width: 40, borderRadius: 12 }}
              />
              <View>
                <Text style={{ color: "#000", marginLeft: 10, fontSize: 18 }}>
                  {name}
                </Text>
                <Text
                  style={{
                    color: "#000",
                    marginLeft: 10,
                    fontWeight: "bold",
                    fontSize: 14,
                  }}
                >
                  @ricardofsdomene
                </Text>
              </View>
            </View>
            <Pressable
              style={{
                justifyContent: "center",
                alignItems: "center",
                height: 30,
                width: 100,
                borderRadius: 50,
                borderWidth: 1,
                borderColor: "#aaa",
              }}
            >
              <Text style={{ color: "#333" }}>Seguir</Text>
            </Pressable>
          </Pressable>
        );
      }

      return (
        <View style={{ paddingHorizontal: 20, paddingBottom: 20 }}>
          <Text
            style={{
              fontWeight: "bold",
              marginBottom: 10,
              fontSize: 18,
            }}
          >
            Cargos mais buscados
          </Text>
          <User
            id="0"
            name="Ricardo Domene"
            avatar="https://github.com/0xrfsd.png"
          />
          <User
            id="0"
            name="Ricardo Domene"
            avatar="https://github.com/0xrfsd.png"
          />
          <User
            id="0"
            name="Ricardo Domene"
            avatar="https://github.com/0xrfsd.png"
          />
        </View>
      );
    }

    return <View></View>;

    return (
      <View style={{ paddingVertical: 20, marginTop: 5 }}>
        <Cargos />
        <Ajuda />
        <Localidade />
      </View>
    );
  }

  function Empresas() {
    function EmpresasList() {
      const empresas = [
        {
          _id: "0xe1",
          username: "btgpactual",
          name: "BTG Pactual",
          email: "financialco@btg.com",
          avatar:
            "https://pbs.twimg.com/profile_images/1305880681650753537/4Jm9f3HC_400x400.png",
        },
        {
          _id: "0xe2",
          username: "xpinvestimentos",
          name: "XP Investimentos",
          email: "financialco@bxp.com",
          avatar:
            "https://play-lh.googleusercontent.com/3jkMM7xg78eD-xihlABmqpGt0H1s5cG5eyr3WGR_XM4rSGtBlNyRA69TVewMQ3_Jjmg",
        },
        {
          _id: "0xe0",
          username: "finacialco",
          name: "Financial Co.",
          email: "careers@financialco.com",
          avatar:
            "https://play-lh.googleusercontent.com/kHTEM3XMFHq3oSOtcWGneOdM7hwJJeX9EHDd_wH3uOxHmbzojCv3jrQp6LB7HjFpIraX",
        },
      ];

      return (
        <FlatList
          style={{ marginTop: -30 }}
          data={empresas}
          renderItem={(item) => {
            return (
              <TouchableOpacity
                style={{
                  height: "auto",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  borderBottomColor: "#e0e0e0",
                  borderBottomWidth: 0.3,
                  width: "100%",
                  paddingHorizontal: 20,
                  paddingVertical: 10,
                }}
              >
                <Image
                  style={{
                    height: 50,
                    width: 50,
                    marginRight: 10,
                    borderRadius: 12,
                  }}
                  source={{ uri: item.item.avatar }}
                />
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <View>
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                    >
                      <Text style={{ fontSize: 16 }}>{item.item.name}</Text>
                      <Image
                        style={{ marginLeft: 5, height: 15, width: 15 }}
                        source={{
                          uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Twitter_Verified_Badge.svg/512px-Twitter_Verified_Badge.svg.png",
                        }}
                      />
                    </View>
                    <Text style={{ fontWeight: "bold" }}>
                      @{item.item.username}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      );
    }

    return (
      <View>
        <View style={{ padding: 20 }}>
          <Text
            style={{
              fontWeight: "bold",
              marginBottom: 20,
              fontSize: 18,
            }}
          >
            Empresas verificadas
          </Text>
        </View>
        <EmpresasList />
      </View>
    );
  }

  function Usuarios() {
    function UsuariosList() {
      const users = [
        {
          _id: "0323sdf",
          username: "masterplan",
          name: "Ricardo Fonseca",
          email: "ricardo@icloud.com",
          avatar: "https://github.com/0xrfsd.png",
        },
        {
          _id: "32rsdf",
          username: "ricardomene",
          name: "Ricardo Domene",
          email: "ricardo@gmail.com",
          avatar: "https://github.com/ricardofsdomene.png",
        },
      ];

      return (
        <FlatList
          style={{ marginTop: -30 }}
          data={users}
          renderItem={(item) => {
            return (
              <TouchableOpacity
                style={{
                  height: "auto",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  borderBottomColor: "#e0e0e0",
                  borderBottomWidth: 0.3,
                  width: "100%",
                  paddingHorizontal: 20,
                  paddingVertical: 10,
                }}
              >
                <Image
                  style={{
                    height: 50,
                    width: 50,
                    marginRight: 10,
                    borderRadius: 12,
                  }}
                  source={{ uri: item.item.avatar }}
                />
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <View>
                      <View
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                        }}
                      >
                        <Text style={{ fontSize: 16 }}>{item.item.name}</Text>
                        <Image
                          style={{ marginLeft: 5, height: 15, width: 15 }}
                          source={{
                            uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Twitter_Verified_Badge.svg/512px-Twitter_Verified_Badge.svg.png",
                          }}
                        />
                      </View>
                      <Text style={{ fontWeight: "bold" }}>
                        @{item.item.username}
                      </Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      );
    }

    return (
      <View>
        <View style={{ padding: 20 }}>
          <Text
            style={{
              fontWeight: "bold",
              marginBottom: 20,
              fontSize: 18,
            }}
          >
            Usuarios verificados
          </Text>
        </View>
        <UsuariosList />
      </View>
    );
  }

  function Vagas() {
    return <Text>Vagas</Text>;
  }

  return (
    <Container>
      <View
        style={{
          height: "auto",
          width: "100%",
          backgroundColor: "#e0e0e0",
          justifyContent: "space-between",
          paddingBottom: 20,
        }}
      >
        <View style={{ paddingHorizontal: 20 }}>
          <View
            style={{
              marginTop: 20,
              backgroundColor: "#fff",
              borderRadius: 12,
            }}
          >
            <Header />
            <View
              style={{
                paddingHorizontal: 20,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                height: 50,
                width: "auto",
                borderRadius: 50,
              }}
            >
              <AntDesign name="search1" color="#000" size={18} />
              <TextInput
                onFocus={() => {
                  setSearchOn(true);
                }}
                onBlur={() => {
                  setSearchOn(false);
                }}
                placeholderTextColor="#555"
                style={{
                  marginLeft: 15,
                  color: "#333",
                }}
                placeholder="Empresas, Usuarios, Vagas, etc"
              />
            </View>
          </View>
        </View>
      </View>
      {searchOn ? <History /> : <Tabs />}
      {searchOn ? (
        <View></View>
      ) : (
        <View>
          {tab === "Tudo" ? (
            <Tudo />
          ) : tab === "Usuarios" ? (
            <Usuarios />
          ) : tab === "Empresas" ? (
            <Empresas />
          ) : tab === "Vagas" ? (
            <Vagas />
          ) : null}
          <View style={{ height: 250 }} />
        </View>
      )}
    </Container>
  );
}
