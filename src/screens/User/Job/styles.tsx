import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background_primary};

  padding: 0px 20px;
`;

export const JobName = styled.Text`
  margin-top: 10px;

  font-family: ${({ theme }) => theme.fonts.secondary_400};
  font-size: 33px;
`;

export const JobTitle = styled.Text`
  margin-top: 20px;

  text-decoration: underline;
  text-decoration-color: yellow;

  font-family: ${({ theme }) => theme.fonts.secondary_500};
  font-size: 22px;
`;

export const JobDescription = styled.Text`
  margin-top: 20px;
  margin-bottom: 10px;

  color: #333;

  font-family: ${({ theme }) => theme.fonts.secondary_400};
  font-size: 14px;
`;

export const JobThumbnail = styled.Image`
  width: 400px;
  height: auto;
`;

export const JobAnalyticsBox = styled.View`

  margin-right: 10px;

  padding: 20px;

  border-radius: 12px;
  background-color: #eee;

`;

export const JobAnalyticsTitle = styled.Text`

font-size: 16px;

`;

export const JobAnalyticsData = styled.Text`

  margin-top: 10px;

  font-size: 33px;
  font-family: ${({ theme }) => theme.fonts.secondary_600};

`;

export const JobListing = styled.View`
  margin-top: 10px;
`;

export const JobListingHead = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-top: 10px;

  padding: 10px 20px;
`;

export const JobListingTitle = styled.Text`
  font-size: 22px;

  width: 60%;

  line-height: 25px;
  font-family: ${({ theme }) => theme.fonts.secondary_600};
  color: ${({ theme }) => theme.colors.title};
`;

export const JobListingButton = styled.TouchableOpacity``;

export const JobListingText = styled.Text`
  font-size: 16px;

  line-height: 25px;
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  color: ${({ theme }) => theme.colors.title_primary};
`;

export const JobListContainer = styled.View`
  
  padding: 20px;

`;

export const JobListBox = styled.Pressable`
  padding: 20px;
  background-color: #eee;

  border-radius: 12px;

  margin-bottom: 20px;

  width: 100%;
`;

export const JobListTitle = styled.Text`
  font-size: 18px;
  
  line-height: 25px;
  font-family: ${({ theme }) => theme.fonts.secondary_600};
  color: #000;
`;

export const JobListCompanyName = styled.Text`
  font-size: 16px;

  line-height: 25px;
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  color: ${({ theme }) => theme.colors.title_primary};
`;

export const JobListLocation = styled.Text`
  font-size: 16px;

  line-height: 25px;
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  color: ${({ theme }) => theme.colors.title_primary};
`;

export const JobAnalytics = styled.ScrollView.attrs(() => ({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    marginTop: 10,
    paddingLeft: 20,
    paddingTop: 20,
    paddingRight: 10,
  },
}))`
`;

