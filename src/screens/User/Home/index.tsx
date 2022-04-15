import {
  AntDesign,
  Feather,
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  Octicons,
} from "@expo/vector-icons";
import React, { useContext, useEffect, useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import {
  Container,
  HeaderBox,
  Header,
  HeaderTitle,
  HeaderForm,
  HeaderFilter,
  HeaderActions,
  HeaderText,
  HeaderTitles,
  SubscribeBox,
  SubscribeTitle,
  Subscribe,
  TrendingCompaniesHead,
  TrendingCompanies,
  TrendingCompaniesTitle,
  TrendingCompaniesText,
  TrendingCompaniesButton,
  TrendingCompaniesList,
  TrendingCompany,
  TrendingCompanyLogo,
  TrendingCompanyName,
  TrendingJobs,
  TrendingJobsList,
  TrendingJobsHead,
  TrendingJobsTitle,
  TrendingJobsButton,
  TrendingJobsText,
  TrendingJob,
  TrendingJobsName,
  SubscribeImage,
  UploadResume,
  UploadResumeBox,
  UploadResumeTitle,
  UploadAvatar,
  UploadAvatarBox,
  UploadAvatarTitle,
  UploadPhone,
  UploadPhoneBox,
  UploadPhoneTitle,
  Categories,
  CategoriesBox,
  TrendingJobsOpen,
  TrendingJobsOpenQty,
  TrendingJobsOpenLabel,
  TrendingJobsCompanies,
  TrendingJobsCompany,
  Upload,
  UploadBox,
  UploadBoxTitle,
  UploadTitle,
  UploadBoxShadow,
  Search,
  SearchForm,
  SearchLabel,
  TrendingVaga,
} from "./styles";

// Assets

import Jobs from "../../../assets/jobs.png";

import TC1LOGO from "../../../assets/TC1LOGO.png";
import TC2LOGO from "../../../assets/TC2LOGO.png";
import TC3LOGO from "../../../assets/TC3LOGO.png";

import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../../../hooks/auth";
import axios from "axios";
import { api } from "../../../services/api";

export default function Home() {
  const { user } = useContext(AuthContext);

  type Navigator = {
    navigate: (route: string, params: {}) => void;
    openDrawer: () => void;
  };

  const navigation = useNavigation<Navigator>();

  function HeaderComponent({ isIOS }) {
    return (
      <View style={{ backgroundColor: "#F4F6FA" }}>
        <Header isIOS={isIOS}>
          <HeaderBox>
            <HeaderTitles>
              <HeaderTitle>Jobs</HeaderTitle>
              <HeaderText>As vagas do mercado</HeaderText>
            </HeaderTitles>
            <HeaderActions>
              {user.avatar ? (
                <TouchableOpacity
                  onPress={() => navigation.navigate("Profile", {})}
                >
                  <Image
                    source={{ uri: user.avatar }}
                    style={{
                      height: 50,
                      width: 50,
                      marginLeft: 10,
                      borderRadius: 12,
                    }}
                  />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  onPress={() => navigation.navigate("Profile", {})}
                  style={{
                    marginLeft: 10,
                    backgroundColor: "#FAFAFA",
                    height: 55,
                    width: 55,
                    borderRadius: 12,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text style={{ fontSize: 18 }}>
                    {user.name.split(" ")[0][0] + user.name.split(" ")[1][0]}
                  </Text>
                </TouchableOpacity>
              )}
            </HeaderActions>
          </HeaderBox>
        </Header>
        <SearchComponent />
      </View>
    );
  }

  function SearchComponent() {
    return (
      <Search>
        <SearchForm>
          <Pressable
            onPress={() => {
              navigation.navigate("Search", {});
            }}
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <AntDesign
              name="search1"
              style={{ marginRight: 15 }}
              color="#000"
              size={20}
            />
            <SearchLabel>Cargos, Empresas, Usuarios, etc</SearchLabel>
          </Pressable>
          <Pressable
            onPress={() => {
              navigation.navigate("Filter", {});
            }}
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <View
              style={{
                height: 40,
                width: 1,
                backgroundColor: "#eee",
                marginRight: 15,
              }}
            />
            <Octicons name="settings" color="#000" size={20} />
          </Pressable>
        </SearchForm>
      </Search>
    );
  }

  function SubscribeComponent() {
    return (
      <Subscribe>
        <SubscribeBox onPress={() => navigation.navigate("Subscribe", {})}>
          <SubscribeTitle>
            Assinando para ter total cobertura no Jobs
          </SubscribeTitle>
          <SubscribeImage source={Jobs} />
        </SubscribeBox>
      </Subscribe>
    );
  }

  function TrendingCompaniesComponent() {
    function TrendingCompaniesHeader() {
      return (
        <TrendingCompaniesHead>
          <TrendingCompaniesTitle>Empresas</TrendingCompaniesTitle>
          {/* <TrendingCompaniesButton>
            <TrendingCompaniesText>Ver mais</TrendingCompaniesText>
          </TrendingCompaniesButton> */}
        </TrendingCompaniesHead>
      );
    }

    function TrendingCompaniesListing() {
      const trending_companies = [
        {
          id: "6248a7f299380565c3db486c",
          logo: TC1LOGO,
          name: "BTG Pactual",
        },
        {
          id: "6248af00fe47fac457bc8dcf",
          logo: TC2LOGO,
          name: "XP Inc.",
        },
        {
          id: "6248b05dc9966bab3398a42e",
          logo: TC3LOGO,
          name: "Financial Co.",
        },
      ];

      return (
        <TrendingCompaniesList>
          {trending_companies.map((tc, _id) => {
            return (
              <TrendingCompany
                key={_id}
                onPress={() =>
                  navigation.navigate("Company", {
                    id: tc.id,
                    name: tc.name,
                  })
                }
              >
                <TrendingCompanyLogo source={tc.logo} />
                <TrendingCompanyName>{tc.name}</TrendingCompanyName>
                <Pressable
                  style={{
                    height: 40,
                    width: 100,
                    borderWidth: 0.4,
                    borderColor: "#aaa",
                    borderRadius: 50,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text style={{ color: "#333" }}>Seguir</Text>
                </Pressable>
              </TrendingCompany>
            );
          })}
        </TrendingCompaniesList>
      );
    }

    return (
      <TrendingCompanies>
        <TrendingCompaniesHeader />
        <TrendingCompaniesListing />
      </TrendingCompanies>
    );
  }

  function TrendingJobsComponent() {
    function TrendingJobsHeader() {
      return (
        <TrendingJobsHead>
          <TrendingJobsTitle>Cargos</TrendingJobsTitle>
        </TrendingJobsHead>
      );
    }

    function TrendingCompaniesListing() {
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

      return (
        <Categories style={{ marginBottom: 20 }}>
          {trending_jobs.map((tc, _id) => {
            return (
              <TrendingJob
                key={_id}
                onPress={() =>
                  navigation.navigate("Job", {
                    id: tc.id,
                    name: tc.name,
                    title: tc.title,
                    description: tc.description,
                  })
                }
              >
                <View>
                  <TrendingJobsName>{tc.name}</TrendingJobsName>
                  <TrendingJobsCompanies>
                    {tc.companies.map((companie, _id) => {
                      return (
                        <TrendingJobsCompany key={_id}>
                          {_id === tc.companies.length - 1
                            ? companie
                            : companie + ", "}
                        </TrendingJobsCompany>
                      );
                    })}
                  </TrendingJobsCompanies>
                </View>
                <TrendingJobsOpen>
                  <TrendingJobsOpenQty>{tc.abertos}</TrendingJobsOpenQty>
                  <TrendingJobsOpenLabel>
                    vagas disponiveis
                  </TrendingJobsOpenLabel>
                </TrendingJobsOpen>
              </TrendingJob>
            );
          })}
        </Categories>
      );
    }

    return (
      <TrendingJobs>
        <TrendingJobsHeader />
        <TrendingCompaniesListing />
      </TrendingJobs>
    );
  }

  function TrendingVagasComponent() {
    function TrendingJobsHeader() {
      return (
        <TrendingJobsHead>
          <TrendingJobsTitle>Vagas</TrendingJobsTitle>
          {/* <TrendingJobsButton>
            <TrendingJobsText>Ver mais</TrendingJobsText>
          </TrendingJobsButton> */}
        </TrendingJobsHead>
      );
    }

    function TrendingCompaniesListing() {
      type Vaga = {
        _id: string;
        createdAt: string;
        company: {
          _id: string;
          name: string;
          avatar: string;
          description: string;
        };
        tipo: string;
        localidade: string;
        descricao: string;
        cargo: string;
      };

      const [trending_jobs, setTrending_jobs] = useState<Vaga[]>([]);

      useEffect(() => {
        api
          .get("http://161.35.102.170:5556/core/vagas")
          .then((response) => {
            setTrending_jobs(response.data);
          })
          .catch((error) => console.log(error));
      }, []);

      return (
        <TrendingJobsList style={{ paddingTop: 20 }}>
          {trending_jobs.map((tc, _id) => {
            return (
              <TrendingVaga
                key={_id}
                onPress={() =>
                  navigation.navigate("Vaga", {
                    _id: tc._id,
                    tipo: tc.tipo,
                    descricao: tc.descricao,
                    cargo: tc.cargo,
                  })
                }
              >
                {/* <Image
                  source={{ uri: tc.company.avatar }}
                  style={{
                    height: 200,
                    width: "100%",
                    borderTopLeftRadius: 12,
                    borderTopRightRadius: 12,
                  }}
                /> */}
                <View style={{ padding: 20 }}>
                  {/* <Text
                    style={{
                      width: "90%",
                      color: "#999",
                      fontSize: 16,
                    }}
                  >
                    {tc.company.name}
                  </Text> */}
                  <Text
                    style={{
                      width: "90%",
                      color: "#555",
                      fontSize: 22,
                      fontWeight: "bold",
                    }}
                  >
                    {tc.cargo}
                  </Text>
                  <View
                    style={{
                      width: "90%",
                      display: "flex",
                      flexDirection: "row",
                    }}
                  >
                    <Text style={{ color: "#555", fontSize: 14 }}>
                      {tc.tipo}
                    </Text>
                    <Text> </Text>
                    <Text style={{ color: "#555", fontSize: 14 }}>
                      {tc.localidade}
                    </Text>
                  </View>
                  <Text style={{ color: "#333", marginTop: 10, fontSize: 12 }}>
                    {tc.descricao}
                  </Text>
                </View>
              </TrendingVaga>
            );
          })}
        </TrendingJobsList>
      );
    }

    return (
      <TrendingJobs>
        <TrendingJobsHeader />
        <TrendingCompaniesListing />
      </TrendingJobs>
    );
  }

  function UploadComponent() {
    function UploadAvatar() {
      return (
        <UploadBox
          onPress={() =>
            navigation.navigate("Upload", {
              name: "Avatar",
            })
          }
        >
          <UploadBoxShadow bg="#DFE6F1">
            <FontAwesome5 name="user-alt" color="#333" size={22} />
          </UploadBoxShadow>
          <UploadBoxTitle>Adicionando sua foto</UploadBoxTitle>
        </UploadBox>
      );
    }

    function UploadResume() {
      return (
        <UploadBox
          onPress={() =>
            navigation.navigate("Upload", {
              name: "Resume",
            })
          }
        >
          <UploadBoxShadow bg="#FBE3E0">
            <Ionicons
              name="md-document"
              style={{ marginLeft: 3 }}
              color="#333"
              size={22}
            />
          </UploadBoxShadow>
          <UploadBoxTitle>Adicionando seu resumo</UploadBoxTitle>
        </UploadBox>
      );
    }

    function UploadVerified() {
      return (
        <UploadBox
          onPress={() =>
            navigation.navigate("Upload", {
              name: "Verification",
            })
          }
        >
          <UploadBoxShadow bg="#DFD1F5">
            <MaterialIcons name="verified-user" color="#333" size={22} />
          </UploadBoxShadow>
          <UploadBoxTitle>Verificando seus dados</UploadBoxTitle>
        </UploadBox>
      );
    }

    return (
      <React.Fragment>
        <UploadTitle>Aumente suas chances</UploadTitle>
        <Upload>
          <UploadAvatar />
          <UploadResume />
          <UploadVerified />
        </Upload>
      </React.Fragment>
    );
  }

  // ?add vaga so pela aplicacao web
  // aplicacao web em especie de intranet/rh para as empresas

  // fluxo de application
  // user aplica para vaga
  // ** disparo de email para o recruiter
  // ** company.applications[].push(application)
  // ** push notification para company (can be disabled at configs)

  // se usuario ja tiver curriculum nao mostrar UploadResumeComponent
  // se usuario ja tiver celular nao mostrar UploadPhoneComponent
  // se usuario ja tiver foto nao mostrar UploadAvatarComponent

  // criar componente de ultimas vagas adicionadas com length 3
  // criar componente das vagas mais visitadas com length 3

  // ao navegar para uma empresa listar perfil como instagram ou linkedin e no lugar dos posts seriam as vagas abertas e posts da empresa (mas de inicio so vagas e as informacoes publicas da empresa) + filtros na secao de vagas
  // ao navegar para um tipo de emprego listar uma descricao sobre o que aquela vaga faz e embaixo listar todas as vagas daquele tipo + filtros

  // ao clicar em search abrir SearchModal
  // *TextInput
  // *Filters
  // listando em uma FlatList na mesma pagina ou abrindo outra pagina

  // ao clicar no menu lateral abrir MenuModal
  // *perfil { avatar, nome, email, phone }
  // *resume { ... }
  // *salvos [ ... ]
  // *applications [ ... ]
  // *plano
  // *sair

  // modalPhone
  // modalResume
  // modalAvatar

  // modalSearch
  // modalMenu
  0;
  // recarregar ao arrastar pra cima igual na versao antiga
  // depois de phone, resume, avatar addded show UploadAddress(city, state)

  // user.positions[]
  // e.g. Ricardo.positions["Desenvolvedor Back-end", "Desenvolvedor Front-End"]

  // fazer um puta sistema de email
  // fazer um puta sistema de sms
  // fazer um puta sistema intranet web ou electron pau tora

  // ranking de vagas (server-side)
  // vagas patrocinadas

  // planos para empresas
  // tipo1     tipo2     tipo3      tipo4
  // 1n vagas  3n vagas  15n vagas  x vagas

  return (
    <React.Fragment>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <HeaderComponent isIOS={Platform.OS === "ios"} />
      <ScrollView style={{ backgroundColor: "#F4F6FA" }}>
        <Container>
          <UploadComponent />
          <SubscribeComponent />
          <TrendingVagasComponent />
          <TrendingJobsComponent />
          <TrendingCompaniesComponent />
          <View style={{ height: 20 }} />
        </Container>
      </ScrollView>
    </React.Fragment>
  );
}
