import styled from "styled-components/native";

export const Container = styled.View`
  padding: 0px 20px;
`;

export const SignUpTitle = styled.Text`
  color: #000;
  font-size: 26px;

  font-family: ${({ theme }) => theme.fonts.secondary_600};
`;

export const SignUpText = styled.Text`
  color: #999;
  font-size: 16px;

  margin: 10px 0px;

  font-family: ${({ theme }) => theme.fonts.secondary_400};
`;

export const SignUpSocialButton = styled.TouchableOpacity`
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

export const SignUpSocialLabel = styled.Text`
  color: #000;
  font-size: 18px;

  margin-left: 15px;

  font-family: ${({ theme }) => theme.fonts.secondary_400};
`;

export const SignUpButton = styled.TouchableOpacity`
  height: 50px;
  width: 100%;

  margin: 10px 0px;

  align-items: center;
  justify-content: center;

  border-radius: 12px;

  background-color: #AA88E3;
`;

export const SignUpButtonLabel = styled.Text`
  color: #FFF;
  font-size: 18px;

  margin-left: 15px;

  font-family: ${({ theme }) => theme.fonts.secondary_400};
`;
