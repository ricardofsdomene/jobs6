import axios from "axios";
import React, { useEffect, useState } from "react";
import { Text } from "react-native";
import { FollowingContainer, FollowingTitle } from "./styles";

export default function Following({ route, navigation }) {
  const [following, setFollowing] = useState([]);

  const { id } = route.params;

  useEffect(() => {
    async function getFollowing() {
      await axios
        .get(`http://192.168.0.60:5556/api/v0/user/${id}/following`)
        .then((res) => setFollowing(res.data));
    }

    getFollowing();
  }, []);

  return (
    <FollowingContainer>
      <FollowingTitle>Following</FollowingTitle>
      {following.map((user, _id) => {
        return <Text>{user.id}</Text>;
      })}
    </FollowingContainer>
  );
}
