import styled from "styled-components/native";

export const PostBox = styled.View`
  height: auto;
  width: 100%;

  padding: 20px; 

  border-radius: 12px;
`;

export const PostHeader = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;

  justify-content: space-between;
`;

export const PostMetadata = styled.View`
  display: flex;
  flex-direction: row;
`;

export const PostCreatorAvatar = styled.Image`
  height: 30px;
  width: 30px;

  margin-right: 10px;

  border-radius: 30px;
`;

export const PostCreatorUsername = styled.Text`
  color: #333;
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  font-size: 18px;
`;

export const PostCategorie = styled.Text`
  color: #999;
  font-family: ${({ theme }) => theme.fonts.secondary_400};
  font-size: 12px;
`;

export const PostPlus = styled.Pressable`
  height: 30px;
  width: 30px;

  background-color: #eee;

  border-radius: 30px;

  justify-content: center;
  align-items: center;
`;

export const PostContent = styled.Image`
  height: 170px;
  width: 100%;

  margin-top: 10px;

  border-radius: 12px;
`;

export const PostBottom = styled.View`
  display: flex;
  flex-direction: row;
`;

export const PostBottomBox = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;

  padding: 10px 0px;

  margin-right: 10px;
`;

export const PostBottomBoxValue = styled.Text`
  color: #000;

  margin-left: 5px;
`;