import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { signOut } from "firebase/auth";
import React, { useContext, useEffect, useLayoutEffect, useState } from "react";
import {
  Image,
  Text,
  Platform,
  Pressable,
  ScrollView,
  View,
  ActivityIndicator,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Post from "../../../components/Post";
import { AuthContext } from "../../../hooks/auth";
import { api } from "../../../services/api";
import {
  Container,
  Header,
  HeaderActions,
  HeaderBox,
  HeaderText,
  HeaderTitle,
  HeaderTitles,
  SocialConnection,
  SocialConnectionFollow,
  SocialConnectionFollowLabel,
  SocialConnectionMessage,
  SocialConnectionMessageLabel,
  SocialCount,
  SocialCountBox,
  SocialCountFollowers,
  SocialCountLabel,
  SocialCountPosts,
  SocialFollowing,
} from "./styles";

export default function Profile({ navigation, route }) {
  const { _id, name, email, avatar } = route.params;
  const { user, signOut } = useContext(AuthContext);

  type Navigator = {
    navigate: (route: string, params: {}) => void;
    openDrawer: () => void;
    goBack: () => void;
  };

  const [loading, setLoading] = useState(true);

  const [nameSet, setNameSet] = useState("");
  const [description, setDescription] = useState("");
  const [avatarSet, setAvatarSet] = useState("");

  const [feed, setFeed] = useState([]);

  const [curStatus, setCurStatus] = useState("");

  const [seguindo, setSeguindo] = useState([]);
  const [seguindoData, setSeguindoData] = useState([]);

  const [showSeguidores, setShowSeguidores] = useState(false);
  const [seguidores, setSeguidores] = useState([]);
  const [seguidoresData, setSeguidoresData] = useState([]);

  useLayoutEffect(() => {
    handleUser();
  }, []);

  useEffect(() => {
    handleFollowers();
  }, []);

  useEffect(() => {
    handleFollowing();
    handleFollowers();
  }, [_id, curStatus]);

  async function handleFollowing() {
    await api
      .post("/auth/following/fetch", {
        followedId: _id,
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

  async function handleUser() {
    if (_id) {
      await api
        .get(`/auth/user/${_id}`)
        .then((response) => {
          setNameSet(response.data.name);
          if (response.data.avatar) {
            setAvatarSet(response.data.avatar);
          }
          setLoading(false);
        })
        .catch((error) => {
          console.log("error:", error);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }

  async function handleFollowers() {
    await api
      .post("/auth/followers/fetch", {
        followedId: _id,
      })
      .then((response) => {
        const followed = response.data.filter(
          (followed) => followed.status === "Followed"
        );
        setSeguidores(followed);
        let followers = [];
        followed.map((f, i) => {
          api.get(`/auth/user/${f.followerId}`).then((response) => {
            followers.push(response.data);
          });
        });
        setSeguidoresData(followers);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  async function handleFollow({ followedId, followerId, status }) {
    if (curStatus === "Followed") {
      await api
        .post("/auth/follow", {
          followedId,
          followerId,
          status: "Unfollowed",
        })
        .then((response) => {
          setCurStatus(response.data.status);
          handleFollowers();
          setLoading(false);
        })
        .catch((error) => [console.log(error)]);
    } else if (curStatus === "Unfollowed") {
      await api
        .post("/auth/follow", {
          followedId,
          followerId,
          status: "Followed",
        })
        .then((response) => {
          setCurStatus(response.data.status);
          handleFollowers();
          setLoading(false);
        })
        .catch((error) => [console.log(error)]);
    } else {
      await api
        .post("/auth/follow", {
          followedId,
          followerId,
          status: "Followed",
        })
        .then((response) => {
          setCurStatus(response.data.status);
          handleFollowers();
          setLoading(false);
        })
        .catch((error) => [console.log(error)]);
    }
  }

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#333" />
      </View>
    );
  }

  function HeaderAlt() {
    return (
      <View
        style={{
          height: "auto",
          paddingTop: Platform.OS === "ios" ? 50 : 20,
          paddingBottom: 10,
          paddingHorizontal: 20,
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Pressable
          onPress={() => {
            if (showSeguidores) {
              setShowSeguidores(false);
            } else {
              navigation.goBack();
            }
          }}
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

  function HeaderComponent({ isIOS }) {
    return (
      <Header isIOS={isIOS}>
        <HeaderBox>
          <HeaderTitles>
            <HeaderTitle>{nameSet ? nameSet : name}</HeaderTitle>
            <HeaderText>Usuário</HeaderText>
          </HeaderTitles>
          <HeaderActions>
            {avatarSet ? (
              <TouchableOpacity onPress={() => navigation.openDrawer()}>
                <Image
                  source={{ uri: avatarSet }}
                  style={{
                    height: 60,
                    width: 60,
                    marginLeft: 10,
                    borderRadius: 12,
                  }}
                />
              </TouchableOpacity>
            ) : avatar ? (
              <TouchableOpacity onPress={() => navigation.openDrawer()}>
                <Image
                  source={{ uri: avatar }}
                  style={{
                    height: 60,
                    width: 60,
                    marginLeft: 10,
                    borderRadius: 12,
                  }}
                />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={() => navigation.openDrawer()}
                style={{
                  marginLeft: 10,
                  backgroundColor: "#E0E0E0",
                  height: 60,
                  width: 60,
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
    );
  }

  function SocialCountComponent() {
    return (
      <SocialCount>
        <SocialCountBox>
          <SocialCountPosts>1</SocialCountPosts>
          <SocialCountLabel>Post</SocialCountLabel>
        </SocialCountBox>
        <SocialCountBox
          onPress={() => {
            setShowSeguidores(true);
          }}
        >
          <SocialCountFollowers>{seguidores.length}</SocialCountFollowers>
          <SocialCountLabel>Seguidores</SocialCountLabel>
        </SocialCountBox>
        <SocialCountBox>
          <SocialFollowing>0</SocialFollowing>
          <SocialCountLabel>Seguindo</SocialCountLabel>
        </SocialCountBox>
      </SocialCount>
    );
  }

  function SocialConnectionComponent() {
    return (
      <SocialConnection>
        <SocialConnectionFollow
          onPress={() => {
            handleFollow({
              followedId: _id,
              followerId: user._id,
              status: "Followed",
            });
          }}
        >
          <SocialConnectionFollowLabel>
            {curStatus === "Followed" ? "Seguindo" : "Seguir"}
          </SocialConnectionFollowLabel>
        </SocialConnectionFollow>
        {/* <SocialConnectionMessage>
          <SocialConnectionMessageLabel>Mensagem</SocialConnectionMessageLabel>
        </SocialConnectionMessage> */}
      </SocialConnection>
    );
  }

  // socialconnectioncomponent inside headercomponent not visible if the profile page is equals to the user object id (if the requested profile page is the own user profile page)

  // seguidores screen presentation modal flatlist
  // seguindo screen presentation modal flatlist

  // posts flatlist in screen

  const posts = [
    {
      id: 0,
      categorie: "Mercado Financeiro",
      creator: {
        creatorId: "1",
        creatorAvatar: "https://github.com/0xrfsd.png",
        creatorName: "Ricardo Fonseca",
      },
      postContentType: "Image",
      postContentValue:
        "https://images.pexels.com/photos/889839/pexels-photo-889839.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      postStatus: {
        likes: [
          {
            id: "0",
            timestamp: "...",
          },
          {
            id: "1",
            timestamp: "...",
          },
        ],
        comments: [
          {
            id: "0",
            timestamp: "...",
            value: "Muito legal esse post",
          },
          {
            id: "0",
            timestamp: "...",
            value: "Genial e criativo",
          },
        ],
      },
    },
    {
      id: 1,
      categorie: "Analise de Investimentos",
      creator: {
        creatorId: "1",
        creatorAvatar: "https://github.com/ricardofsdomene.png",
        creatorName: "Ricardo Domene",
      },
      postContentType: "Image",
      postContentValue:
        "https://images.pexels.com/photos/20967/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      postStatus: {
        likes: [
          {
            id: "0",
            timestamp: "...",
          },
          {
            id: "1",
            timestamp: "...",
          },
        ],
        comments: [
          {
            id: "0",
            timestamp: "...",
            value: "Caramba!",
          },
          {
            id: "0",
            timestamp: "...",
            value: "Boa irmao",
          },
        ],
      },
    },
    {
      id: 2,
      categorie: "Mercado Financeiro",
      creator: {
        creatorId: "1",
        creatorAvatar: "https://github.com/lucasferreira.png",
        creatorName: "Lucas Ferreira",
      },
      postContentType: "Image",
      postContentValue:
        "https://images.pexels.com/photos/159862/art-school-of-athens-raphael-italian-painter-fresco-159862.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      postStatus: {
        likes: [
          {
            id: "0",
            timestamp: "...",
          },
          {
            id: "1",
            timestamp: "...",
          },
        ],
        comments: [
          {
            id: "0",
            timestamp: "...",
            value: "Parabens pelo post",
          },
          {
            id: "0",
            timestamp: "...",
            value: "Voce e o cara",
          },
        ],
      },
    },
  ];

  return (
    <Container>
      <HeaderAlt />
      <HeaderComponent isIOS={Platform.OS === "ios"} />
      <ScrollView>
        {showSeguidores ? (
          <View>
            {seguidoresData.map((s, i) => {
              return (
                <Pressable
                  onPress={() => {
                    setNameSet("");
                    setDescription("");
                    setAvatarSet("");
                    setCurStatus("");
                    setShowSeguidores(false);
                    setSeguidores([]);
                    setSeguidoresData([]);
                    navigation.navigate("User", {
                      _id: s._id,
                      name: s.name,
                      email: s.email,
                      avatar: s.avatar,
                    });
                  }}
                  key={i}
                  style={{
                    height: "auto",
                    padding: 10,
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    borderBottomColor: "#eee",
                    borderBottomWidth: 0.5,
                  }}
                >
                  <Text>{s.name}</Text>
                  <Text>{s.email}</Text>
                </Pressable>
              );
            })}
          </View>
        ) : (
          <>
            <SocialConnectionComponent />
            <SocialCountComponent />
          </>
        )}
      </ScrollView>
      <View style={{ height: 20 }} />
    </Container>
  );
}
