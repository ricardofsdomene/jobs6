import styled from "styled-components/native";

export const Container = styled.View`
flex: 1;
  height: 100%;

  padding: 0px 20px;
  background-color: #F4F6FA;
`;

export const SignInTitle = styled.Text`
  color: #000;
  font-size: 26px;

  font-family: ${({ theme }) => theme.fonts.secondary_600};
`;

export const SignInText = styled.Text`
  color: #999;
  font-size: 14px;

  margin: 10px 0px;

  font-family: ${({ theme }) => theme.fonts.secondary_400};
`;

export const SignInSocialButton = styled.TouchableOpacity`
  height: auto;
  width: 100%;

  border-radius: 12px;

  margin-top: 10px;

  display: flex;
  flex-direction: row;
  align-items: center;

  background-color: #FFF;

  padding: 15px 20px;
`;

export const SignInSocialLabel = styled.Text`
  color: #000;
  font-size: 18px;


  margin-left: 15px;

  font-family: ${({ theme }) => theme.fonts.secondary_400};
`;

export const SignInButton = styled.TouchableOpacity`
  height: 50px;
  width: 100%;

  margin: 10px 0px;

  align-items: center;
  justify-content: center;

  border-radius: 12px;

  background-color: #AA88E3;
`;

export const SignInButtonLabel = styled.Text`
  color: #FFF;
  font-size: 18px;

  margin-left: 15px;

  font-family: ${({ theme }) => theme.fonts.secondary_400};
`;