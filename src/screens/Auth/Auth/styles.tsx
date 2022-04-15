import styled from "styled-components/native";

export const Container = styled.ImageBackground`
  flex: 1;

  background-color: #000;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  padding-top: 40px !important;
  padding: 20px;
`;

export const AuthLogo = styled.Image`
  margin-top: 90px;
  height: 45px;
  width: 73px;
`;

export const AuthTitle = styled.Text`
  color: #fff;
  font-family: ${({ theme }) => theme.fonts.secondary_600};
  font-size: 33px;
  font-weight: bold;

  margin-top: 20px;

  text-align: center;
`;

export const AuthTop = styled.View`
  display: flex;
  align-items: center;
`;

export const AuthBottom = styled.View`
  padding-bottom: 30px;
`;

export const AuthText = styled.Text`
  color: #f0f0f0;
  font-family: ${({ theme }) => theme.fonts.secondary_400};
  font-size: 14px;

  text-align: center;
`;

export const AuthButton = styled.TouchableOpacity`
  height: auto;
  padding: 15px 20px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;

  border-radius: 12px;
  background-color: rgba(0, 0, 0, 0.6);

  margin-bottom: 10px;
`;

export const AuthButtonLabel = styled.Text`
  margin-left: 5px;

  color: #fff;
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  font-size: 16px;
`;

export const AuthSignInButtonLabel = styled.Text`
  color: #fff;
  font-family: ${({ theme }) => theme.fonts.secondary_600};
  font-size: 18px;
`;

export const AuthSignInButton = styled.TouchableOpacity`
  padding: 10px 0px;

  margin: 10px 0px;
  margin-bottom: 20px !important;

  display: flex;
  justify-content: center;
  align-items: center;
`;
