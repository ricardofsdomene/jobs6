import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Image,
  ScrollView,
  StatusBar,
  Text,
  View,
} from "react-native";
import Header from "../../../components/Header";
import {
  Container,
  JobAnalytics,
  JobAnalyticsBox,
  JobAnalyticsData,
  JobAnalyticsTitle,
  JobDescription,
  JobListBox,
  JobListCompanyName,
  JobListContainer,
  JobListing,
  JobListingButton,
  JobListingHead,
  JobListingText,
  JobListingTitle,
  JobListLocation,
  JobListTitle,
  JobName,
  JobThumbnail,
  JobTitle,
} from "./styles";

import { api } from "../../../services/api";
import Loading from "../../../components/Loading";

import JobImg from "../../assets/job.jpg";

export default function Job({ route, navigation }) {
  const [dataLoaded, setLoadedData] = useState(true);

  const { id, name, title, description } = route.params;

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

  if (!dataLoaded) {
    return <Loading />;
  }

  function JobHeaderComponent() {
    return (
      <Container>
        <JobName>{name}</JobName>
        <JobTitle>{title}</JobTitle>
        <JobDescription>{description}</JobDescription>
        <Image
          style={{
            width: "100%",
            height: 200,
            marginTop: 20,
            borderRadius: 12,
          }}
          source={{
            uri: "https://images.pexels.com/photos/1015568/pexels-photo-1015568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          }}
        />
      </Container>
    );
  }

  function JobAnalyticsComponent() {
    const job_data = [
      {
        title: "Deficit do mercado",
        value: 150000,
      },
      {
        title: "Vagas no Jobs",
        value: 53,
      },
      {
        title: "Salario minimo",
        value: 10000,
      },
    ];

    return (
      <JobAnalytics>
        {job_data.map((job, _id) => {
          return (
            <JobAnalyticsBox key={_id}>
              <JobAnalyticsTitle>{job.title}</JobAnalyticsTitle>
              <JobAnalyticsData>{job.value}</JobAnalyticsData>
            </JobAnalyticsBox>
          );
        })}
      </JobAnalytics>
    );
  }

  function JobListingComponent() {
    function JobListingHeader() {
      return (
        <JobListingHead>
          <JobListingTitle>Vagas de {name}</JobListingTitle>
          <JobListingButton>
            <JobListingText>See all</JobListingText>
          </JobListingButton>
        </JobListingHead>
      );
    }

    const jobs = [
      {
        id: 0,
        company: {
          id: 1,
          name: "Financial Co.",
          logo: "https://github.com/0xrfsd.png",
        },
        title: "Analista de Investimento",
        requisitos: ["Excel", "React", "Python e/ou JavaScript"],
        remoto: true,
        location: {
          city: "Goiania",
          state: "Goias",
          country: "Brazil",
        },
        salario: undefined,
      },
      {
        id: 0,
        company: {
          id: 1,
          name: "Itau Personalite",
          logo: "https://github.com/0xrfsd.png",
        },
        title: "Analista de Investimento",
        requisitos: ["Excel", "React", "Python e/ou JavaScript"],
        remoto: true,
        location: {
          city: "Goiania",
          state: "Goias",
          country: "Brazil",
        },
        salario: undefined,
      },
      {
        id: 2,
        company: {
          id: 1,
          name: "XP Inc.",
          logo: "https://github.com/0xrfsd.png",
        },
        title: "Analista de Investimento",
        requisitos: ["Excel", "React", "Python e/ou JavaScript"],
        remoto: true,
        location: {
          city: "Sao Paulo",
          state: "Goias",
          country: "Brazil",
        },
        salario: undefined,
      },
    ];

    function JobList() {
      return (
        <JobListContainer>
          {jobs.map((job, _id) => {
            return (
            <JobListBox key={_id}>
              <JobListTitle>{job.title}</JobListTitle>
              <JobListCompanyName>{job.company.name}</JobListCompanyName>
              <JobListLocation>{job.location.city}</JobListLocation>
            </JobListBox>
            );
          })}
        </JobListContainer>
      );
    }

    return (
      <JobListing>
        <JobListingHeader />
        <JobList />
      </JobListing>
    );
  }

  return (
    <React.Fragment>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#F4F6FA"
        translucent
      />
      <Header title={null} />
      <ScrollView style={{ backgroundColor: "#F4F6FA" }}>
        <JobHeaderComponent />
        <JobAnalyticsComponent />
        <JobListingComponent />
      </ScrollView>
    </React.Fragment>
  );
}
