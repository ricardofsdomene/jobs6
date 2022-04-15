import React, { useContext } from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import {
  DrawerContent,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";

import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
import { AuthContext } from "../../hooks/auth";

const CustomDrawer = (props) => {
  const { user, signOut } = useContext(AuthContext);

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{ backgroundColor: "#eee" }}
      >
        <View
          style={{
            padding: 20,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View>
            <Text
              style={{
                color: "#000",
                maxWidth: 180,
                fontSize: 22,
                fontFamily: "Roboto_500Medium",
                marginBottom: 5,
              }}
            >
              {user.name}
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                padding: 5,
                width: 135,
                borderRadius: 50,
                backgroundColor: "#FFF",
                paddingHorizontal: 20,
              }}
            >
              <Text
                style={{
                  color: "#333",
                  fontFamily: "Roboto_400Regular",
                  marginRight: 10,
                }}
              >
                Academico
              </Text>
              <FontAwesome5 name="user-graduate" size={10} color="#333" />
            </View>
          </View>
          {user.avatar ? (
              <Image
                source={{ uri: user.avatar }}
                style={{
                  height: 60,
                  width: 60,
                  marginLeft: 10,
                  borderRadius: 12,
                }}
              />
          ) : (
            <View
            style={{
              marginLeft: 10,
              backgroundColor: "#fff",
              height: 60,
              width: 60,
              borderRadius: 12,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 18 }}>{user.name.split(" ")[0][0] + user.name.split(" ")[1][0]}</Text>
          </View>
          )}
        </View>
        <View style={{ flex: 1, backgroundColor: "#fff", paddingTop: 10 }}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={{ padding: 20, borderTopWidth: 1, borderTopColor: "#eee" }}>
        <TouchableOpacity onPress={() => {}} style={{ paddingVertical: 15 }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons name="share-social-outline" size={22} />
            <Text
              style={{
                fontSize: 15,
                fontFamily: "Roboto_500Medium",
                marginLeft: 5,
              }}
            >
              Convidar para a beta
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => signOut()}
          style={{ paddingVertical: 15 }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons name="exit-outline" size={22} />
            <Text
              style={{
                fontSize: 15,
                fontFamily: "Roboto_500Medium",
                marginLeft: 5,
              }}
            >
              Sair da sua conta
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawer;
