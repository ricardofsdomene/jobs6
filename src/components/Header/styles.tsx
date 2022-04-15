import styled from "styled-components/native";

export const Container = styled.View`
  height: ${(props) => props.isIOS ? 120 : 90};

  z-index: 1;

  background-color: ${({ theme }) => theme.colors.background_primary};

  padding-top: ${(props) =>
    props.route === "SignIn" || props.route === "SignUp"
      ? "10px"
      : props.isIOS
      ? "65px"
      : "40px"};
  padding-bottom: ${(props) =>
    props.route === "SignIn" || props.route === "SignUp" ? "0px" : "20px"};
  padding-left: 20px;
  padding-right: 20px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const GoBackBox = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 12px;

  height: 50px;
  width: 50px;

  padding: 10px;

  background-color: ${(props) =>
    props.transparent ? "transparent" : "#FFF"};
`;

export const RightButton = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 12px;

  height: 50px;

  padding: 10px;
`;
