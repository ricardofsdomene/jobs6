import React, { useContext, useEffect, useLayoutEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Pressable,
  Image,
  ScrollView,
  RefreshControl,
} from "react-native";
import { Carousel } from "../Filter/styles";

import { Container } from "./styles";

import TC1LOGO from "../../../assets/TC1LOGO.png";
import TC2LOGO from "../../../assets/TC2LOGO.png";
import TC3LOGO from "../../../assets/TC3LOGO.png";
import { AuthContext } from "../../../hooks/auth";
import { api } from "../../../services/api";

export default function Social({ navigation, route }) {
  const { user, signOut } = useContext(AuthContext);

  const [refreshing, setRefreshing] = useState(false);

  const [seguindo, setSeguindo] = useState([]);
  const [seguindoData, setSeguindoData] = useState([]);
  const [seguidores, setSeguidores] = useState([]);
  const [seguidoresData, setSeguidoresData] = useState([]);

  useLayoutEffect(() => {
    handleFollowing();
    navigation.addListener("focus", () => {
      handleFollowing();
    });
  }, []);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    handleFollowing();
    setTimeout(() => {
      setRefreshing(false);
    }, 500);
  }, []);


  async function handleFollowing() {
    await api
      .post("/auth/following/fetch", {
        followingId: user._id,
      })
      .then((response) => {
        const following = response.data.filter(
          (followed) => followed.status === "Followed"
        );
        setSeguindo(following);
        let followers = [];
        following.map((f, i) => {
          api.get(`/auth/user/${f.followingId}`).then((response) => {
            followers.push(response.data);
          });
        });
        setSeguindoData(followers);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function Users() {
    function Profile({ id, avatar, username }) {
      return (
        <View>
          <Pressable
            onPress={() => {
              navigation.navigate("User", {
                _id: id,
              });
            }}
            style={{
              height: "auto",
              marginRight: 10,
            }}
          >
            <Image
              source={{ uri: avatar }}
              style={{
                height: 60,
                width: 60,
                borderRadius: 100,
              }}
            />
          </Pressable>
        </View>
      );
    }
    return (
      <View style={{ height: 100 }}>
        <Carousel>
          <Profile
            id="62550a91bd63cc6ca34eb205"
            avatar="https://github.com/gucoelho.png"
            username="user1"
          />
          <Profile
            id="62550aa7bd63cc6ca34eb211"
            avatar="https://github.com/bredda.png"
            username="user2"
          />
          <Profile
            id="62550ab6bd63cc6ca34eb214"
            avatar="https://github.com/0xrfsd.png"
            username="user3"
          />
          <Profile
            id="62550aeabd63cc6ca34eb217"
            avatar="https://github.com/useer.png"
            username="user4"
          />
        </Carousel>
      </View>
    );
  }

  function UsersVertical() {
    function Profile({ avatar, name, username }) {
      return (
        <View>
          <Pressable
            style={{
              paddingVertical: 10,
              borderBottomColor: "#e0e0e0",
              borderBottomWidth: 0.3,
              height: "auto",
              marginRight: 10,
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
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
              <Image
                source={{ uri: avatar }}
                style={{
                  height: 50,
                  width: 50,
                  borderRadius: 50,
                }}
              />
              <View style={{ marginLeft: 10 }}>
                <Text style={{ fontSize: 18 }}>{name}</Text>
                <Text style={{ fontSize: 14, fontWeight: "bold" }}>
                  @{username}
                </Text>
              </View>
            </View>
            <Pressable
              style={{
                height: 40,
                width: 100,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 50,
                borderWidth: 1,
                borderColor: "#aaa",
              }}
            >
              <Text>Seguir</Text>
            </Pressable>
          </Pressable>
        </View>
      );
    }
    return (
      <View style={{ height: 100, paddingHorizontal: 20 }}>
        <Profile
          name="Gui Coelho"
          avatar="https://github.com/gucoelho.png"
          username="ricardofsdomene"
        />
        <Profile
          name="Lucas Jales"
          avatar="https://github.com/bredda.png"
          username="ricardofsdomene"
        />
        <Profile
          name="Henrique Cardoso"
          avatar="https://github.com/0xrfsd.png"
          username="ricardofsdomene"
        />
      </View>
    );
  }

  function Empresas() {
    function Profile({ avatar, name }) {
      return (
        <View>
          <Pressable
            style={{
              height: "auto",
              marginRight: 10,
            }}
          >
            <Image
              source={avatar}
              style={{
                height: 60,
                width: 60,
                borderRadius: 100,
              }}
            />
          </Pressable>
        </View>
      );
    }
    return (
      <View style={{ height: 100 }}>
        <Carousel>
          <Profile avatar={TC1LOGO} name="BTG Pactual" />
          <Profile avatar={TC2LOGO} name="XP Investimentos" />
          <Profile avatar={TC3LOGO} name="Financial Co." />
        </Carousel>
      </View>
    );
  }

  return (
    <Container>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        style={{ paddingTop: 60 }}
      >
        <Text
          style={{
            fontSize: 16,
            marginLeft: 20,
            fontWeight: "bold",
          }}
        >
          Meu ID: {user._id}
        </Text>
        <Text
          style={{
            fontSize: 16,
            marginLeft: 20,
            fontWeight: "bold",
          }}
        >
          Meu Nome: {user.name}
        </Text>
        <Text
          style={{
            fontSize: 16,
            marginLeft: 20,
            marginBottom: 20,
            fontWeight: "bold",
          }}
        >
          Meu Email: {user.email}
        </Text>
        <Text
          style={{
            fontSize: 16,
            marginLeft: 20,
            fontWeight: "bold",
          }}
        >
          Seguido por: {seguidores.length}
        </Text>
        <Text
          style={{
            fontSize: 16,
            marginLeft: 20,
            marginBottom: 20,
            fontWeight: "bold",
          }}
        >
          Seguindo: {seguindo.length}
        </Text>
        <Text
          style={{
            fontSize: 16,
            marginLeft: 20,
            marginBottom: 20,
            fontWeight: "bold",
          }}
        >
          Alertas: 0
        </Text>
        <Text style={{ fontSize: 22, marginLeft: 20, marginBottom: 10 }}>
          Usuários
        </Text>
        <Users />
        <Pressable
          onPress={signOut}
          style={{ height: 20, width: 20, backgroundColor: "#000" }}
        ></Pressable>
      </ScrollView>
    </Container>
  );
}
