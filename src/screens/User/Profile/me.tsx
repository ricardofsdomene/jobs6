import {
  AntDesign,
  Feather,
  FontAwesome,
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useContext, useEffect, useState } from "react";
import {
  Image,
  Text,
  Platform,
  ScrollView,
  View,
  Pressable,
} from "react-native";
import {
  FlatList,
  TextInput,
  TouchableOpacity,
} from "react-native-gesture-handler";
import Post from "../../../components/Post";
import { AuthContext } from "../../../hooks/auth";
import { Carousel } from "../Filter/styles";
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

export default function Me({}) {
  type Navigator = {
    navigate: (route: string, params: {}) => void;
    openDrawer: () => void;
    goBack: () => void;
  };

  const [adicionarVaga, setAdicionarVaga] = useState(false);

  const [error, setError] = useState("");

  const [tipo, setTipo] = useState("");
  const [empresa, setEmpresa] = useState("BTG Pactual");
  const [atividades, setAtividades] = useState([]);
  const [requisitos, setRequisitos] = useState([]);
  const [habilidades, setHabilidades] = useState([]);
  const [beneficios, setBeneficios] = useState([]);
  const [cargo, setCargo] = useState("Estágiario");
  const [descricao, setDescricao] = useState("");
  const [formato, setFormato] = useState("Presencial");
  const [experiencia, setExperiencia] = useState("Todos niveis de experiência");
  const [localidade, setLocalidade] = useState("Remoto");

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        setError("");
      }, 1500);
    }
  }, [error]);

  const [profile, setProfile] = useState(false);
  const [profileName, setProfileName] = useState(false);

  const [avatar, setAvatar] = useState(false);
  const [changeAvatar, setChangeAvatar] = useState("");

  const [contato, setContato] = useState(false);
  const [changeContato, setChangeContato] = useState("");

  const [changeName, setChangeName] = useState("");
  const [changeSurname, setChangeSurname] = useState("");

  const [resume, setResume] = useState(false);
  const [changeResume, setChangeResume] = useState("");

  const [beneficioItem, setBeneficioItem] = useState("");
  const [habilidadeItem, setHabilidadeItem] = useState("");
  const [atividadeItem, setAtividadeItem] = useState("");
  const [requisitoItem, setRequisitoItem] = useState("");

  const { user, signOut } = useContext(AuthContext);

  const navigation = useNavigation<Navigator>();

  function HeaderAlt() {
    return (
      <View
        style={{
          height: "auto",
          paddingTop: 20,
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
            if (profile) {
              setProfile(false);
            } else if (profileName) {
              setProfileName(false);
              setProfile(true);
            } else if (avatar) {
              setAvatar(false);
              setProfile(true);
            } else if (contato) {
              setContato(false);
              setProfile(true);
            } else if (resume) {
              setResume(false);
              setProfile(true);
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
            <HeaderTitle>{user.name}</HeaderTitle>
            <HeaderText>{user.email}</HeaderText>
          </HeaderTitles>
          <HeaderActions>
            {user.avatar ? (
              <TouchableOpacity onPress={() => navigation.openDrawer()}>
                <Image
                  source={{ uri: user.avatar }}
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

  function UserActions() {
    return (
      <>
        <View style={{ height: "auto", paddingVertical: 20 }}>
          <Pressable
            onPress={() => {
              setProfile(true);
            }}
            style={{
              height: 150,
              marginBottom: 10,
              width: 150,
              marginRight: 10,
              borderRadius: 12,
              backgroundColor: "#E0E0E0",
              justifyContent: "flex-end",
              padding: 20,
            }}
          >
            <Text style={{ color: "#000", fontSize: 16, fontWeight: "bold" }}>
              {`Meu\nperfil`}
            </Text>
          </Pressable>
          <Pressable
            style={{
              height: 150,
              marginBottom: 10,
              width: 150,
              marginRight: 10,
              borderRadius: 12,
              backgroundColor: "#E0E0E0",
              justifyContent: "flex-end",
              padding: 20,
            }}
          >
            <Text style={{ color: "#000", fontSize: 16, fontWeight: "bold" }}>
              Adicionar graduação
            </Text>
          </Pressable>
          <Pressable
            style={{
              height: 150,
              marginBottom: 10,
              width: 150,
              marginRight: 10,
              borderRadius: 12,
              backgroundColor: "#E0E0E0",
              justifyContent: "flex-end",
              padding: 20,
            }}
          >
            <Text style={{ color: "#000", fontSize: 16, fontWeight: "bold" }}>
              Adicionar experiência
            </Text>
          </Pressable>
          <Pressable
            onPress={signOut}
            style={{
              height: 150,
              width: 150,
              marginRight: 10,
              borderRadius: 12,
              backgroundColor: "#E0E0E0",
              justifyContent: "flex-end",
              padding: 20,
            }}
          >
            <Text style={{ color: "#000", fontSize: 16, fontWeight: "bold" }}>
              Sair da sua conta
            </Text>
          </Pressable>
        </View>
      </>
    );
  }

  function UserApplications() {
    return (
      <>
        <View style={{ height: "auto", paddingVertical: 20 }}>
          <Pressable
            style={{
              height: 150,
              marginBottom: 10,
              width: 150,
              marginRight: 10,
              borderRadius: 12,
              backgroundColor: "#E0E0E0",
              justifyContent: "flex-end",
              padding: 20,
            }}
          >
            <Text style={{ color: "#000", fontSize: 16, fontWeight: "bold" }}>
              Perguntas frequentes
            </Text>
          </Pressable>
          <Pressable
            onPress={() => setAdicionarVaga(true)}
            style={{
              height: 150,
              width: 150,
              marginBottom: 10,
              marginRight: 10,
              borderRadius: 12,
              backgroundColor: "#E0E0E0",
              justifyContent: "flex-end",
              padding: 20,
            }}
          >
            <Text style={{ color: "#000", fontSize: 16, fontWeight: "bold" }}>
              Suas aplicações
            </Text>
          </Pressable>
          <Pressable
            style={{
              height: 150,
              marginBottom: 10,
              width: 150,
              marginRight: 10,
              borderRadius: 12,
              backgroundColor: "#E0E0E0",
              justifyContent: "flex-end",
              padding: 20,
            }}
          >
            <Text style={{ color: "#000", fontSize: 16, fontWeight: "bold" }}>
              Vagas salvas
            </Text>
          </Pressable>
          <Pressable
            onPress={signOut}
            style={{
              height: 150,
              width: 150,
              marginRight: 10,
              borderRadius: 12,
              backgroundColor: "#E0E0E0",
              justifyContent: "flex-end",
              padding: 20,
            }}
          >
            <Text style={{ color: "#000", fontSize: 16, fontWeight: "bold" }}>
              Convidar para a beta
            </Text>
          </Pressable>
        </View>
      </>
    );
  }

  function ProfileComponent() {
    return (
      <View style={{ padding: 20 }}>
        <View
          style={{
            height: "auto",
            borderRadius: 12,
            backgroundColor: "#E0E0E0",
            width: "100%",
          }}
        >
          <Pressable
            onPress={() => {
              setProfile(false);
              setAvatar(true);
            }}
            style={{
              height: 50,
              display: "flex",
              borderBottomColor: "#EEE",
              borderBottomWidth: 1,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              paddingHorizontal: 20,
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Feather name="image" color="#000" size={18} />
              <Text style={{ color: "#000", marginLeft: 10 }}>Editar foto</Text>
            </View>
            <AntDesign name="right" size={16} color="#777" />
          </Pressable>
          <Pressable
            onPress={() => {
              setProfile(false);
              setProfileName(true);
            }}
            style={{
              height: 50,
              display: "flex",
              flexDirection: "row",
              borderBottomColor: "#EEE",
              borderBottomWidth: 1,
              alignItems: "center",
              justifyContent: "space-between",
              paddingHorizontal: 20,
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <MaterialCommunityIcons
                name="face-profile"
                color="#000"
                size={18}
              />
              <Text style={{ color: "#000", marginLeft: 10 }}>{user.name}</Text>
            </View>
            <AntDesign name="right" size={16} color="#777" />
          </Pressable>
          <Pressable
            onPress={() => {
              setProfile(false);
              setContato(true);
            }}
            style={{
              height: 50,
              display: "flex",
              flexDirection: "row",
              borderBottomColor: "#EEE",
              borderBottomWidth: 1,
              alignItems: "center",
              justifyContent: "space-between",
              paddingHorizontal: 20,
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <MaterialCommunityIcons name="phone" color="#000" size={18} />
              <Text style={{ color: "#000", marginLeft: 10 }}>Contato</Text>
            </View>
            <AntDesign name="right" size={16} color="#777" />
          </Pressable>
          <Pressable
            onPress={() => {
              setProfile(false);
              setResume(true);
            }}
            style={{
              height: 50,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              paddingHorizontal: 20,
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Ionicons name="pencil" color="#000" size={18} />
              <Text style={{ color: "#000", marginLeft: 10 }}>Sobre mim</Text>
            </View>
            <AntDesign name="right" size={16} color="#777" />
          </Pressable>
        </View>
      </View>
    );
  }

  function AvatarComponent() {
    return (
      <View
        style={{
          paddingHorizontal: 20,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {user.avatar ? (
          <TouchableOpacity>
            <Image
              source={{ uri: user.avatar }}
              style={{ height: 100, width: 100, borderRadius: 100 }}
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={{
              height: 100,
              backgroundColor: "#E0E0E0",
              width: 100,
              borderRadius: 100,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 33 }}>RF</Text>
          </TouchableOpacity>
        )}

        <Pressable
          style={{
            marginTop: 30,
            height: 50,
            width: "100%",
            borderRadius: 12,
            backgroundColor: "#E0E0E0",
            paddingHorizontal: 20,
            justifyContent: "space-between",
            alignItems: "center",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "#000" }}>Editar foto</Text>
          </View>
          <AntDesign name="right" size={16} color="#777" />
        </Pressable>
      </View>
    );
  }

  return (
    <Container>
      <HeaderAlt />
      {!avatar && <HeaderComponent isIOS={Platform.OS === "ios"} />}
      <ScrollView>
        <View style={{ height: "auto" }}>
          {profile ? (
            <ProfileComponent />
          ) : profileName ? (
            <View style={{ padding: 20 }}>
              <View
                style={{
                  height: "auto",
                  borderRadius: 12,
                  backgroundColor: "#E0E0E0",
                }}
              >
                <TextInput
                  defaultValue={user.name}
                  onChangeText={(e) => setChangeName(e)}
                  style={{
                    height: 50,
                    borderBottomColor: "#eee",
                    borderBottomWidth: 1,
                    paddingHorizontal: 10,
                  }}
                  placeholder="Nome (obrigatório)"
                />
                <TextInput
                  value={changeSurname}
                  onChangeText={(e) => setChangeSurname(e)}
                  style={{
                    height: 50,
                    paddingHorizontal: 10,
                  }}
                  placeholder="Sobrenome (opcional)"
                />
              </View>
              <View
                style={{
                  paddingVertical: 20,
                  paddingBottom: Platform.OS === "ios" ? 25 : 20,
                }}
              >
                <Pressable
                  style={{
                    height: 50,
                    width: "100%",
                    borderRadius: 12,
                    backgroundColor: "#000",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text style={{ color: "#FFF", fontSize: 18 }}>
                    {profileName ? "Alterar" : "null"}
                  </Text>
                </Pressable>
              </View>
            </View>
          ) : contato ? (
            <View style={{ padding: 20 }}>
              <View
                style={{
                  height: "auto",
                  borderRadius: 12,
                  backgroundColor: "#E0E0E0",
                }}
              >
                <TextInput
                  keyboardType="phone-pad"
                  onChangeText={(e) => setChangeContato(e)}
                  style={{
                    height: 50,
                    borderBottomColor: "#eee",
                    borderBottomWidth: 1,
                    paddingHorizontal: 10,
                  }}
                  placeholder="Telefone (opcional)"
                />
              </View>
              <View
                style={{
                  paddingVertical: 20,
                  paddingBottom: Platform.OS === "ios" ? 25 : 20,
                }}
              >
                <Pressable
                  style={{
                    height: 50,
                    width: "100%",
                    borderRadius: 12,
                    backgroundColor: "#000",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text style={{ color: "#FFF", fontSize: 18 }}>
                    {contato ? "Atualizar" : "null"}
                  </Text>
                </Pressable>
              </View>
            </View>
          ) : avatar ? (
            <AvatarComponent />
          ) : resume ? (
            <View style={{ padding: 20 }}>
              <View
                style={{
                  height: "auto",
                  borderRadius: 12,
                  backgroundColor: "#E0E0E0",
                }}
              >
                <TextInput
                  keyboardType="twitter"
                  multiline={true}
                  numberOfLines={5}
                  defaultValue={user.description}
                  onChangeText={(e) => setChangeResume(e)}
                  style={{
                    height: 150,
                    paddingTop: 20,
                    padding: 20,
                    borderBottomColor: "#eee",
                    borderBottomWidth: 1,
                  }}
                  placeholder="Escreva um pouco sobre você"
                />
              </View>
              <View
                style={{
                  paddingVertical: 20,
                  paddingBottom: Platform.OS === "ios" ? 25 : 20,
                }}
              >
                <Pressable
                  style={{
                    height: 50,
                    width: "100%",
                    borderRadius: 12,
                    backgroundColor: "#000",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text style={{ color: "#FFF", fontSize: 18 }}>
                    {resume ? "Atualizar" : "null"}
                  </Text>
                </Pressable>
              </View>
            </View>
          ) : (
            <Carousel>
              <UserActions />
              <UserApplications />
            </Carousel>
          )}
          <View style={{ height: 10 }} />
        </View>
      </ScrollView>
    </Container>
  );
}
