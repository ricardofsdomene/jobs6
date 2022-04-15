import React from "react";
import { FollowersContainer, FollowersTitle, FollowingContainer, FollowingTitle } from "./styles";

export default function Followers({ route, navigation }) {

    const { id } = route.params; 

    return(
        <FollowersContainer>
            <FollowersTitle>Followers</FollowersTitle>
        </FollowersContainer>
    )
}