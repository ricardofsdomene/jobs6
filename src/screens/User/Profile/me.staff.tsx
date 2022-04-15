import { AntDesign, FontAwesome, FontAwesome5 } from "@expo/vector-icons";
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
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
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
      }, 1250);
    }
  }, [error]);

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
            if (adicionarVaga) {
              setAdicionarVaga(false);
              setBeneficios([]);
              setHabilidades([]);
              setAtividades([]);
              setRequisitos([]);
              setLocalidade("");
              setExperiencia("");
              setCargo("");
              setFormato("");
              setEmpresa("");
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
            <HeaderText>
              {user.description
                ? user.description
                : user.email === "ricardofsdomene@icloud.com" ||
                  "fleurylucas@gmail.com"
                ? "Staff"
                : "Profissional"}
            </HeaderText>
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

  function SocialCountComponent() {
    return (
      <SocialCount>
        <SocialCountBox>
          <SocialCountPosts>1</SocialCountPosts>
          <SocialCountLabel>Post</SocialCountLabel>
        </SocialCountBox>
        <SocialCountBox
          onPress={() =>
            navigation.navigate("Followers", {
              id: user._id,
            })
          }
        >
          <SocialCountFollowers>1</SocialCountFollowers>
          <SocialCountLabel>Seguidor</SocialCountLabel>
        </SocialCountBox>
        <SocialCountBox
          onPress={() =>
            navigation.navigate("Following", {
              id: user._id,
            })
          }
        >
          <SocialFollowing>1</SocialFollowing>
          <SocialCountLabel>Seguindo</SocialCountLabel>
        </SocialCountBox>
      </SocialCount>
    );
  }

  function SocialConnectionComponent() {
    return (
      <SocialConnection>
        <SocialConnectionFollow>
          <SocialConnectionFollowLabel>Seguir</SocialConnectionFollowLabel>
        </SocialConnectionFollow>
        <SocialConnectionMessage>
          <SocialConnectionMessageLabel>Mensagem</SocialConnectionMessageLabel>
        </SocialConnectionMessage>
      </SocialConnection>
    );
  }

  // socialconnectioncomponent inside headercomponent not visible if the profile page is equals to the user object id (if the requested profile page is the own user profile page)

  // seguidores screen presentation modal flatlist
  // seguindo screen presentation modal flatlist

  // posts flatlist in screen

  function StaffProfile() {
    return (
      <>
        {user.email === "fleurylucas@gmail.com" ||
          ("ricardofsdomene@icloud.com" && (
            <View style={{ height: "auto", paddingVertical: 20 }}>
              <Pressable
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
                <Text
                  style={{ color: "#000", fontSize: 16, fontWeight: "bold" }}
                >
                  Meu perfil
                </Text>
              </Pressable>
              <Pressable
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
                <Text
                  style={{ color: "#000", fontSize: 16, fontWeight: "bold" }}
                >
                  Fazer um post
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
                <Text
                  style={{ color: "#000", fontSize: 16, fontWeight: "bold" }}
                >
                  Sair
                </Text>
              </Pressable>
            </View>
          ))}
      </>
    );
  }

  function StaffActions() {
    return (
      <>
        <View style={{ height: "auto", paddingVertical: 20 }}>
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
              Adicionar vaga
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
              Adicionar usuario
            </Text>
          </Pressable>
          <Pressable
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
              Adicionar empresa
            </Text>
          </Pressable>
        </View>
      </>
    );
  }

  function StaffData() {
    return (
      <>
        {user.email === "fleurylucas@gmail.com" ||
          ("ricardofsdomene@icloud.com" && (
            <View style={{ height: "auto", paddingVertical: 20 }}>
              <Pressable
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
                <Text
                  style={{ color: "#000", fontSize: 16, fontWeight: "bold" }}
                >
                  Controle de vagas
                </Text>
              </Pressable>
              <Pressable
                style={{
                  height: 150,
                  width: 150,
                  marginRight: 10,
                  marginBottom: 10,
                  borderRadius: 12,
                  backgroundColor: "#E0E0E0",
                  justifyContent: "flex-end",
                  padding: 20,
                }}
              >
                <Text
                  style={{ color: "#000", fontSize: 16, fontWeight: "bold" }}
                >
                  Controle de usuarios
                </Text>
              </Pressable>
              <Pressable
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
                <Text
                  style={{ color: "#000", fontSize: 16, fontWeight: "bold" }}
                >
                  Controle de empresas
                </Text>
              </Pressable>
            </View>
          ))}
      </>
    );
  }

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

  function Empresa() {
    const empresas = [
      {
        _id: "a",
        name: "BTG Pactual",
        descricao: "Maior banco de investimentos da america latina",
      },
      {
        _id: "b",
        name: "Xp Inc.",
        descricao: "Segundo maior banco de investimentos da america latina",
      },
      {
        _id: "c",
        name: "Financial Co.",
        descricao: "Somos o foguete por tras desse projeto",
      },
    ];
    function EmpresasFlatList() {
      return (
        <View
          style={{
            width: "100%",
            height: empresas.length * 40,
            maxHeight: 230,
          }}
        >
          <FlatList
            numColumns={2}
            showsVerticalScrollIndicator={false}
            data={empresas}
            style={{ paddingHorizontal: 20 }}
            contentContainerStyle={{
              height: "auto",
            }}
            renderItem={(item) => {
              return (
                <View
                  style={{
                    flex: 1,
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <Pressable
                    onPress={() => setEmpresa(item.item.name)}
                    style={{
                      backgroundColor:
                        empresa === item.item.name ? "#000" : "#ffff",
                      height: 60,
                      marginBottom: 10,
                      width: "99%",
                      borderRadius: 12,
                      padding: 20,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 16,
                        color: empresa === item.item.name ? "#FFF" : "#000",
                      }}
                    >
                      {item.item.name}
                    </Text>
                  </Pressable>
                </View>
              );
            }}
          />
        </View>
      );
    }

    return (
      <View style={{ height: "auto" }}>
        <Text
          style={{
            color: "#333",
            marginLeft: 20,
            fontWeight: "bold",
            marginVertical: 10,
            fontSize: 18,
          }}
        >
          Empresa
        </Text>
        <View style={{ paddingVertical: 10, width: "100%" }}>
          <Carousel>
            <View>
              {empresas.map((emp, id) => {
                return (
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                  >
                    <Pressable
                      onPress={() => {
                        setEmpresa(emp.name);
                      }}
                      style={{
                        height: 60,
                        marginBottom: 10,
                        width: 120,
                        marginRight: 10,
                        borderRadius: 12,
                        backgroundColor:
                          empresa === emp.name ? "#000" : "#E0E0E0",
                        padding: 20,
                        justifyContent: "center",
                      }}
                    >
                      <Text
                        style={{
                          color: empresa === emp.name ? "#FFF" : "#000",
                        }}
                      >
                        {emp.name}
                      </Text>
                    </Pressable>
                  </View>
                );
              })}
            </View>
          </Carousel>
        </View>
      </View>
    );
  }

  function Formato() {
    function Option({ title }) {
      return (
        <Pressable
          onPress={() => {
            setFormato(title);
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
            {formato === title && (
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

  function Cargo() {
    function Option({ title }) {
      return (
        <Pressable
          onPress={() => {
            setCargo(title);
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
            {cargo === title && (
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
          Cargo
        </Text>
        <View style={{ paddingHorizontal: 20, paddingBottom: 10 }}>
          <Option title="Estágiario" />
          <Option title="Analista de Investimentos" />
          <Option title="Comercial" />
          <Option title="Marketing" />
          <Option title="Programação" />
        </View>
      </View>
    );
  }

  function Experiencia() {
    function Option({ title }) {
      return (
        <Pressable
          onPress={() => {
            setExperiencia("Todos niveis de experiência");
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
            {experiencia === title && (
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
          Experiência
        </Text>
        <View style={{ paddingHorizontal: 20, paddingBottom: 10 }}>
          <Option title="Todos niveis de experiência" />
          <Option title="1 ano ou mais" />
          <Option title="5 anos ou mais" />
          <Option title="10 anos ou mais" />
        </View>
      </View>
    );
  }

  function Localidade() {
    function Option({ title }) {
      return (
        <Pressable
          onPress={() => {
            setLocalidade(title);
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
            {localidade === title && (
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
          Localidade
        </Text>
        <View style={{ paddingHorizontal: 20, paddingBottom: 10 }}>
          <Option title="Remoto" />
          <Option title="São Paulo" />
          <Option title="Rio de Janeiro" />
          <Option title="Goiânia" />
        </View>
      </View>
    );
  }

  return (
    <Container>
      <HeaderAlt />
      {adicionarVaga ? (
        <View
          style={{
            paddingHorizontal: 20,
            paddingBottom: 20,
            marginTop: 10,
            borderBottomColor: "#EEE",
            borderBottomWidth: 1,
          }}
        >
          <Text style={{ fontSize: 26, fontWeight: "bold" }}>
            Adicionar vaga
          </Text>
        </View>
      ) : (
        <HeaderComponent isIOS={Platform.OS === "ios"} />
      )}
      <ScrollView>
        {user.email === "fleurylucas@gmail.com" ||
          ("ricardofsdomene@icloud.com" && (
            <>
              {adicionarVaga ? (
                <KeyboardAwareScrollView>
                  <View>
                    <Empresa />
                    <Formato />
                    <Cargo />
                    <Experiencia />
                    <Localidade />
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
                        Beneficios
                      </Text>
                      <View style={{ height: "auto" }}>
                        <Carousel>
                          {beneficios.map((item, i) => {
                            return (
                              <Pressable
                                onPress={() =>
                                  setBeneficios(
                                    [...beneficios].filter((b) => b !== item)
                                  )
                                }
                                style={{
                                  marginRight: 5,
                                  height: "auto",
                                  padding: 15,
                                  paddingHorizontal: 20,
                                  width: "auto",
                                  borderRadius: 12,
                                  justifyContent: "center",
                                  display: "flex",
                                  flexDirection: "row",
                                  alignItems: "center",
                                  backgroundColor: "#000",
                                }}
                              >
                                <Text
                                  style={{ color: "#FFF", marginRight: 10 }}
                                >
                                  {item}
                                </Text>
                                <AntDesign
                                  name="close"
                                  size={16}
                                  color="#FFF"
                                />
                              </Pressable>
                            );
                          })}
                        </Carousel>
                      </View>
                      <View
                        style={{
                          marginTop: 10,
                          paddingHorizontal: 20,
                          paddingBottom: 10,
                          display: "flex",
                          alignItems: "center",
                          flexDirection: "row",
                          justifyContent: "space-between",
                        }}
                      >
                        <TextInput
                          autoCapitalize="words"
                          value={beneficioItem}
                          onChangeText={(e) => setBeneficioItem(e)}
                          style={{
                            height: 50,
                            width: "85%",
                            paddingHorizontal: 10,
                            backgroundColor: "#e0e0e0",
                            borderRadius: 12,
                          }}
                          placeholder="Insira um beneficio"
                        />
                        <Pressable
                          onPress={() => {
                            if (beneficios.includes(beneficioItem)) {
                              setError("Você já adicionou esse beneficio");
                            } else if (beneficioItem.length === 0) {
                              setError("Você precisa inserir");
                            } else {
                              setBeneficios([...beneficios, beneficioItem]);
                              setBeneficioItem("");
                            }
                          }}
                          style={{
                            width: 45,
                            backgroundColor: "#e0e0e0",
                            justifyContent: "center",
                            alignItems: "center",
                            borderRadius: 12,
                            height: 50,
                          }}
                        >
                          <AntDesign name="plus" color="#000" size={16} />
                        </Pressable>
                      </View>
                    </View>
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
                        Habilidades
                      </Text>
                      <View style={{ height: "auto" }}>
                        <Carousel>
                          {habilidades.map((item, i) => {
                            return (
                              <Pressable
                                onPress={() =>
                                  setHabilidades(
                                    [...habilidades].filter((b) => b !== item)
                                  )
                                }
                                style={{
                                  marginRight: 5,
                                  height: "auto",
                                  padding: 15,
                                  paddingHorizontal: 20,
                                  width: "auto",
                                  borderRadius: 12,
                                  justifyContent: "center",
                                  display: "flex",
                                  flexDirection: "row",
                                  alignItems: "center",
                                  backgroundColor: "#000",
                                }}
                              >
                                <Text
                                  style={{ color: "#FFF", marginRight: 10 }}
                                >
                                  {item}
                                </Text>
                                <AntDesign
                                  name="close"
                                  size={16}
                                  color="#FFF"
                                />
                              </Pressable>
                            );
                          })}
                        </Carousel>
                      </View>
                      <View
                        style={{
                          marginTop: 10,
                          paddingHorizontal: 20,
                          paddingBottom: 10,
                          display: "flex",
                          alignItems: "center",
                          flexDirection: "row",
                          justifyContent: "space-between",
                        }}
                      >
                        <TextInput
                          autoCapitalize="words"
                          value={habilidadeItem}
                          onChangeText={(e) => setHabilidadeItem(e)}
                          style={{
                            height: 50,
                            width: "85%",
                            paddingHorizontal: 10,
                            backgroundColor: "#e0e0e0",
                            borderRadius: 12,
                          }}
                          placeholder="Insira uma habilidade"
                        />
                        <Pressable
                          onPress={() => {
                            if (habilidades.includes(habilidadeItem)) {
                              setError("Você já adicionou essa habilidade");
                            } else if (habilidadeItem.length === 0) {
                              setError("Você precisa inserir");
                            } else {
                              setHabilidades([...habilidades, habilidadeItem]);
                              setHabilidadeItem("");
                            }
                          }}
                          style={{
                            width: 45,
                            backgroundColor: "#e0e0e0",
                            justifyContent: "center",
                            alignItems: "center",
                            borderRadius: 12,
                            height: 50,
                          }}
                        >
                          <AntDesign name="plus" color="#000" size={16} />
                        </Pressable>
                      </View>
                    </View>
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
                        Atividades
                      </Text>
                      <View style={{ height: "auto" }}>
                        <Carousel>
                          {atividades.map((item, i) => {
                            return (
                              <Pressable
                                onPress={() =>
                                  setAtividades(
                                    [...atividades].filter((b) => b !== item)
                                  )
                                }
                                style={{
                                  marginRight: 5,
                                  height: "auto",
                                  padding: 15,
                                  paddingHorizontal: 20,
                                  width: "auto",
                                  borderRadius: 12,
                                  justifyContent: "center",
                                  display: "flex",
                                  flexDirection: "row",
                                  alignItems: "center",
                                  backgroundColor: "#000",
                                }}
                              >
                                <Text
                                  style={{ color: "#FFF", marginRight: 10 }}
                                >
                                  {item}
                                </Text>
                                <AntDesign
                                  name="close"
                                  size={16}
                                  color="#FFF"
                                />
                              </Pressable>
                            );
                          })}
                        </Carousel>
                      </View>
                      <View
                        style={{
                          marginTop: 10,
                          paddingHorizontal: 20,
                          paddingBottom: 10,
                          display: "flex",
                          alignItems: "center",
                          flexDirection: "row",
                          justifyContent: "space-between",
                        }}
                      >
                        <TextInput
                          autoCapitalize="words"
                          value={atividadeItem}
                          onChangeText={(e) => setAtividadeItem(e)}
                          style={{
                            height: 50,
                            width: "85%",
                            paddingHorizontal: 10,
                            backgroundColor: "#e0e0e0",
                            borderRadius: 12,
                          }}
                          placeholder="Insira uma habilidade"
                        />
                        <Pressable
                          onPress={() => {
                            if (atividades.includes(atividadeItem)) {
                              setError("Você já adicionou essa habilidade");
                            } else if (atividadeItem.length === 0) {
                              setError("Você precisa inserir");
                            } else {
                              setAtividades([...atividades, atividadeItem]);
                              setAtividadeItem("");
                            }
                          }}
                          style={{
                            width: 45,
                            backgroundColor: "#e0e0e0",
                            justifyContent: "center",
                            alignItems: "center",
                            borderRadius: 12,
                            height: 50,
                          }}
                        >
                          <AntDesign name="plus" color="#000" size={16} />
                        </Pressable>
                      </View>
                    </View>
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
                        Requisitos
                      </Text>
                      <View style={{ height: "auto" }}>
                        <Carousel>
                          {requisitos.map((item, i) => {
                            return (
                              <Pressable
                                onPress={() =>
                                  setRequisitos(
                                    [...requisitos].filter((b) => b !== item)
                                  )
                                }
                                style={{
                                  marginRight: 5,
                                  height: "auto",
                                  padding: 15,
                                  paddingHorizontal: 20,
                                  width: "auto",
                                  borderRadius: 12,
                                  justifyContent: "center",
                                  display: "flex",
                                  flexDirection: "row",
                                  alignItems: "center",
                                  backgroundColor: "#000",
                                }}
                              >
                                <Text
                                  style={{ color: "#FFF", marginRight: 10 }}
                                >
                                  {item}
                                </Text>
                                <AntDesign
                                  name="close"
                                  size={16}
                                  color="#FFF"
                                />
                              </Pressable>
                            );
                          })}
                        </Carousel>
                      </View>
                      <View
                        style={{
                          marginTop: 10,
                          paddingHorizontal: 20,
                          paddingBottom: 10,
                          display: "flex",
                          alignItems: "center",
                          flexDirection: "row",
                          justifyContent: "space-between",
                        }}
                      >
                        <TextInput
                          autoCapitalize="words"
                          value={requisitoItem}
                          onChangeText={(e) => setRequisitoItem(e)}
                          style={{
                            height: 50,
                            width: "85%",
                            paddingHorizontal: 10,
                            backgroundColor: "#e0e0e0",
                            borderRadius: 12,
                          }}
                          placeholder="Insira uma habilidade"
                        />
                        <Pressable
                          onPress={() => {
                            if (requisitos.includes(requisitoItem)) {
                              setError("Você já adicionou essa habilidade");
                            } else if (requisitoItem.length === 0) {
                              setError("Você precisa inserir");
                            } else {
                              setRequisitos([...requisitos, requisitoItem]);
                              setRequisitoItem("");
                            }
                          }}
                          style={{
                            width: 45,
                            backgroundColor: "#e0e0e0",
                            justifyContent: "center",
                            alignItems: "center",
                            borderRadius: 12,
                            height: 50,
                          }}
                        >
                          <AntDesign name="plus" color="#000" size={16} />
                        </Pressable>
                      </View>
                    </View>
                  </View>
                  <View
                    style={{
                      padding: 20,
                      backgroundColor: "transparent",
                      paddingBottom: Platform.OS === "ios" ? 30 : 20,
                    }}
                  >
                    <TouchableOpacity
                      style={{
                        height: 50,
                        width: "100%",
                        borderRadius: 12,
                        backgroundColor: error ? "#D83053" : "#000",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Text
                        style={{
                          color: "#FFF",
                          fontWeight: "bold",
                          fontSize: 16,
                        }}
                      >
                        {error ? error : "Adicionar vaga"}
                      </Text>
                    </TouchableOpacity>
                  </View>
                </KeyboardAwareScrollView>
              ) : (
                <View style={{ height: "auto" }}>
                  <Carousel>
                    <StaffProfile />
                    <StaffActions />
                    <StaffData />
                  </Carousel>
                  <View
                    style={{
                      paddingBottom: 30,
                      justifyContent: "center",
                      alignItems: "center",
                      width: "100%",
                    }}
                  >
                    <Text style={{ color: "#777" }}>
                      Versão de Desenvolvimento 0.0.1
                    </Text>
                  </View>
                </View>
              )}
            </>
          ))}

        {/* <SocialCountComponent />
        {posts.map((post, _id) => {
          return (
            <Post
              key={_id}
              avatar={post.creator.creatorAvatar}
              username={post.creator.creatorName}
              categorie={post.categorie}
              contentType={post.postContentType}
              content={post.postContentValue}
              likes={post.postStatus.likes.length}
              comments={post.postStatus.comments.length}
            />
          );
        })} */}
      </ScrollView>
    </Container>
  );
}
