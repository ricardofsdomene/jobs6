import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  ScrollView,
  StatusBar,
  View,
} from "react-native";
import Header from "../../components/Header";
import {
  CompanyDescription,
  CompanyHeader,
  CompanyLogo,
  CompanyName,
  CompanyProfile,
  CompanyProfileColumn,
  Container,
} from "./styles";

import Logo from "../../assets/TC1LOGO.png";
import { api } from "../../services/api";
import AppLoading from "expo-app-loading";
import Loading from "../../components/Loading";

export default function Company({ route, navigation }) {
  const [dataLoaded, setLoadedData] = useState(true);

  const { id, name } = route.params;

  // useEffect(() => {
  //   async function getCompany() {
  //     api.get(`/company/${id}`)
  //       .then((data) => {
  //         console.log(data);
  //       })
  //       .catch((error) => {
  //         console.log(error)
  //       })
  //       .finally(() => {
  //         setLoadedData(true);
  //       })
  //   }
  // }, [])

  function CompanyHeaderComponent() {
    return (
      <CompanyHeader>
        <CompanyProfile>
          <CompanyProfileColumn>
            <CompanyName>{name}</CompanyName>
            <CompanyDescription>
              lorem ipsum let lor erei isnat ezz money
            </CompanyDescription>
          </CompanyProfileColumn>
          <CompanyLogo source={Logo} />
        </CompanyProfile>
      </CompanyHeader>
    );
  }

  if (!dataLoaded) {
    return (
      <Loading />
    );
  }

  return (
    <React.Fragment>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#F4F6FA"
        translucent
      />
      <Header title={name} />
      <ScrollView style={{ backgroundColor: "#F4F6FA" }}>
        <Container>
          <CompanyHeaderComponent />
        </Container>
      </ScrollView>
    </React.Fragment>
  );
}
