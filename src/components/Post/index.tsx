import { AntDesign, Ionicons, MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { Text, View } from "react-native";
import {
  PostBottom,
  PostBottomBox,
  PostBottomBoxValue,
  PostBox,
  PostCategorie,
  PostContent,
  PostCreatorAvatar,
  PostCreatorUsername,
  PostHeader,
  PostMetadata,
  PostPlus,
} from "./styles";

export default function Post({
  avatar,
  username,
  categorie,
  contentType,
  content,
  likes,
  comments,
}) {
  return (
    <PostBox>
      <PostHeader>
        <PostMetadata>
          <PostCreatorAvatar source={{ uri: avatar }} />
          <View>
            <PostCreatorUsername>{username}</PostCreatorUsername>
            <PostCategorie>{categorie}</PostCategorie>
          </View>
        </PostMetadata>
        <PostPlus>
          <Text>...</Text>
        </PostPlus>
      </PostHeader>
      <PostContent source={{ uri: content }} />
      <PostBottom>
        <PostBottomBox>
        <Ionicons name="ios-heart-circle-sharp" size={28} color="#000" />
          <PostBottomBoxValue>1</PostBottomBoxValue>
        </PostBottomBox>
        <PostBottomBox>
        <Ionicons name="chatbox" size={25} color="#000" />
          <PostBottomBoxValue>1</PostBottomBoxValue>
        </PostBottomBox>
      </PostBottom>
    </PostBox>
  );
}
