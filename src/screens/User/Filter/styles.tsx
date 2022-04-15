import styled from "styled-components/native";

export const Container = styled.View`  
  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const SearchHead = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  padding: 10px;

`;

export const SearchForm = styled.View`
  width: 100%;

  background-color: #FFF;
  border-radius: 12px;

  padding: 10px;

  display: flex;
  align-items: center;
  flex-direction: row;
`;

export const SearchIcon = styled.View``;

export const SearchInput = styled.TextInput`
  height: 25px;
  width: 100%;

  margin-left: 10px;



`;

export const Carousel = styled.ScrollView.attrs(() => ({
    horizontal: true,
    showsHorizontalScrollIndicator: false,
    contentContainerStyle: {
      paddingLeft: 20,
      paddingRight: 10,
    },
  }))`
  `;