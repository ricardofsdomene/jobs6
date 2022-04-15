import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.colors.background_primary};
`;

export const Header = styled.View`
  padding: 0px 20px;
  padding-bottom: 20px;
`;

export const HeaderBox = styled.View`
  display: flex;

  align-items: center;

  flex-direction: row;
  justify-content: space-between;

  padding: 0px 10px;

  border-radius: 12px;
`;

export const HeaderTitles = styled.View`
  display: flex;
  flex-direction: column;
`;

export const HeaderTitle = styled.Text`
  font-size: 22px;
  max-width: 250px;
  font-family: ${({ theme }) => theme.fonts.secondary_600};
  color: ${({ theme }) => theme.colors.title};
`;

export const HeaderText = styled.Text`
  font-size: 18px;

  font-family: ${({ theme }) => theme.fonts.secondary_400};
  color: ${({ theme }) => theme.colors.text};
`;

export const HeaderActions = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  align-items: center;
  justify-content: center;
`;

export const HeaderForm = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;

  border-radius: 12px;

  padding: 15px;
  background-color: #fafafa;
`;

export const HeaderFilter = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-left: 10px;

  border-radius: 12px;

  padding: 15px;
  background-color: #fafafa;
  border-radius: 12px;
`;

export const SocialCount = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  padding: 20px 50px;
`;

export const SocialCountBox = styled.Pressable`
  align-items: center;
`;

export const SocialCountLabel = styled.Text`
  font-size: 14px;
  color: #555;
`;

export const SocialCountFollowers = styled.Text`
  color: #000;
  font-size: 18px;

  font-family: ${({ theme }) => theme.fonts.secondary_600};
`;

export const SocialCountPosts = styled.Text`
  color: #000;
  font-size: 18px;

  font-family: ${({ theme }) => theme.fonts.secondary_600};
`;

export const SocialFollowing = styled.Text`
  color: #000;
  font-size: 18px;

  font-family: ${({ theme }) => theme.fonts.secondary_600};
`;

export const SocialConnection = styled.View`
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  padding: 0px 30px;
`;

export const SocialConnectionFollow = styled.Pressable`
  height: 50px;
  width: 160;

  align-items: center;
  justify-content: center;

  border-radius: 12px;

  background-color: #e0e0e0;

  padding: 10px 20px;
`;

export const SocialConnectionFollowLabel = styled.Text`
  color: #333;
  font-family: ${({ theme }) => theme.fonts.secondary_600};
`;

export const SocialConnectionMessage = styled.Pressable`
  height: 50px;
  width: 160;

  align-items: center;
  justify-content: center;

  border-radius: 12px;

  border-width: 1px;
  border-color: #eee;
  background-color: #fff;

  padding: 10px 20px;
`;

export const SocialConnectionMessageLabel = styled.Text`
  color: #333;
  font-family: ${({ theme }) => theme.fonts.secondary_600};
`;

export const FollowingContainer = styled.View`
  flex: 1;
  background-color: #aaa;
`;

export const FollowingTitle = styled.Text`
  color: #fff;
`;

export const FollowersContainer = styled.View`
  flex: 1;
  background-color: #aaa;
`;

export const FollowersTitle = styled.Text`
  color: #fff;
`;
