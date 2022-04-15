import {
  AntDesign,
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import React from "react";
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
} from "react-native";

import {
  Container,
  SearchBox,
  Search,
  SearchTitle,
  SearchForm,
  SearchFilter,
  SearchActions,
  SearchText,
  SearchTitles,
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
} from "./styles";

// Assets

import Jobs from "../../assets/jobs.png";

import TC1LOGO from "../../assets/TC1LOGO.png";
import TC2LOGO from "../../assets/TC2LOGO.png";
import TC3LOGO from "../../assets/TC3LOGO.png";

import { useNavigation } from "@react-navigation/native";

export default function SignIn() {
  type Navigator = {
    navigate: (route: string, params: {}) => void;
  };

  const navigation = useNavigation<Navigator>();

  function SearchComponent({ isIOS }) {
    return (
      <Search isIOS={isIOS}>
        <SearchBox>
          <SearchTitles>
            <SearchTitle>Jobs</SearchTitle>
            <SearchText>As vagas do mercado</SearchText>
          </SearchTitles>
          <SearchActions>
            <SearchForm onPress={() => navigation.navigate("Search", {})}>
              <AntDesign name="search1" color="#000" size={25} />
            </SearchForm>
            <SearchFilter>
              <Ionicons name="ios-filter-outline" color="#000" size={25} />
            </SearchFilter>
          </SearchActions>
        </SearchBox>
      </Search>
    );
  }

  function SubscribeComponent() {
    return (
      <Subscribe>
        <SubscribeBox>
          <SubscribeTitle>Assine para ver todas as vagas</SubscribeTitle>
          <SubscribeImage source={Jobs} />
        </SubscribeBox>
      </Subscribe>
    );
  }

  function TrendingCompaniesComponent() {
    function TrendingCompaniesHeader() {
      return (
        <TrendingCompaniesHead>
          <TrendingCompaniesTitle>Trending Companies</TrendingCompaniesTitle>
          <TrendingCompaniesButton>
            <TrendingCompaniesText>See all</TrendingCompaniesText>
          </TrendingCompaniesButton>
        </TrendingCompaniesHead>
      );
    }

    function TrendingCompaniesListing() {
      const trending_companies = [
        {
          id: 1,
          logo: TC1LOGO,
          name: "BTG Pactual",
        },
        {
          id: 2,
          logo: TC2LOGO,
          name: "XP Inc.",
        },
        {
          id: 3,
          logo: TC3LOGO,
          name: "The New York Time",
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
          <TrendingJobsTitle>Trending Jobs</TrendingJobsTitle>
          <TrendingJobsButton>
            <TrendingJobsText>See all</TrendingJobsText>
          </TrendingJobsButton>
        </TrendingJobsHead>
      );
    }

    function TrendingCompaniesListing() {
      const trending_jobs = [
        {
          id: 1,
          name: "Estagio",
        },
        {
          id: 2,
          name: "Analista de Investimentos",
          title: "O Analista de Investimentos é o profissional responsável por fornecer informações que auxiliam investidores, gestores de fundos e corretores de valores em suas decisões sobre investimentos.",
          description: "O Analista de Investimentos é um profissional bastante citado e valorizado dentro do mercado financeiro. Ele é um ponto central dentro da lógica dos investimentos, sobretudo em âmbito financeiro."
        },
        {
          id: 3,
          name: "Analista de Risco",
        },
      ];

      return (
        <TrendingJobsList>
          {trending_jobs.map((tc, _id) => {
            return (
              <TrendingJob key={_id} onPress={() => navigation.navigate("Job", {
                id: tc.id,
                name: tc.name,
                title: tc.title,
                description: tc.description
              })}>
                <TrendingJobsName>{tc.name}</TrendingJobsName>
              </TrendingJob>
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

  function UploadResumeComponent() {
    return (
      <UploadResume>
        <UploadResumeBox>
          <UploadResumeTitle>Adicione seu curriculum</UploadResumeTitle>
          <MaterialCommunityIcons
            name="book-plus-multiple"
            size={25}
            color="#FFF"
          />
        </UploadResumeBox>
      </UploadResume>
    );
  }

  function UploadPhoneComponent() {
    return (
      <UploadPhone>
        <UploadPhoneBox>
          <UploadPhoneTitle>Adicione seu telefone</UploadPhoneTitle>
          <MaterialCommunityIcons name="phone" size={25} color="#FFF" />
        </UploadPhoneBox>
      </UploadPhone>
    );
  }

  function UploadAvatarComponent() {
    return (
      <UploadAvatar>
        <UploadAvatarBox>
          <UploadAvatarTitle>Adicione uma foto de perfil</UploadAvatarTitle>
          <MaterialCommunityIcons name="account-box" size={25} color="#FFF" />
        </UploadAvatarBox>
      </UploadAvatar>
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
      <SearchComponent isIOS={Platform.OS === "ios"} />
      <ScrollView style={{ backgroundColor: "#F4F6FA" }}>
        <Container>
          {/* <UploadPhoneComponent /> */}
          {/* <UploadResumeComponent /> */}
          {/* <UploadAvatarComponent /> */}
          <SubscribeComponent />
          <TrendingCompaniesComponent />
          <TrendingJobsComponent />
        </Container>
      </ScrollView>
    </React.Fragment>
  );
}
