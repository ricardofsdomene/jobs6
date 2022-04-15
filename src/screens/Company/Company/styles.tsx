import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background_primary};

  padding: 0px 20px;
`;

export const CompanyHeader = styled.View``;

export const CompanyProfile = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const CompanyProfileColumn = styled.View`
  display: flex;
  flex-direction: column;
`;

export const CompanyName = styled.Text`
  
  width: 100%;
  max-width: 240px;

  font-family: ${({ theme }) => theme.fonts.secondary_500};
  font-size: 25px;
  color: #000;
`;

export const CompanyLogo = styled.Image`
  height: 90px;
  width: 90px;

  border-radius: 12px;
`;

export const CompanyDescription = styled.Text`
  width: 100%;
  max-width: 220px;

  font-family: ${({ theme }) => theme.fonts.secondary_400};
  font-size: 16px;
  color: #555;
`;
