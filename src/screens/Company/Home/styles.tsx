import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background_primary};
`;

export const BrandBox = styled.View`
  display: flex;
  flex-direction: row;

  justify-content: center;
  align-items: center;

  padding-top: 30px;
`;

export const BrandName = styled.Text`
  margin-left: 10px;

  font-size: 33px;
  font-family: ${({ theme }) => theme.fonts.secondary_600};
  color: #8e74d6;
`;

export const BrandIcon = styled.Image`
  height: 50;
  width: 50;
`;

export const Search = styled.View`
  padding: 20px;
  margin-top: ${(props) => (props.isIOS ? "30px" : "0px")} !important;
  background-color: ${({ theme }) => theme.colors.background_primary};
`;

export const SearchBox = styled.View`
  display: flex;

  align-items: center;

  flex-direction: row;
  justify-content: space-between;

  padding: 10px;

  border-radius: 12px;
`;

export const SearchTitles = styled.View`
  display: flex;
  flex-direction: column;
`;

export const SearchTitle = styled.Text`
  font-size: 33px;
  font-family: ${({ theme }) => theme.fonts.secondary_600};
  color: ${({ theme }) => theme.colors.title};
`;

export const SearchText = styled.Text`
  font-size: 18px;

  font-family: ${({ theme }) => theme.fonts.secondary_600};
  color: ${({ theme }) => theme.colors.text};
`;

export const SearchActions = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  align-items: center;
  justify-content: center;
`;

export const SearchForm = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;

  border-radius: 12px;

  padding: 15px;
  background-color: #FAFAFA;
`;

export const SearchFilter = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-left: 10px;

  border-radius: 12px;

  padding: 15px;
  background-color: #FAFAFA;
  border-radius: 12px;
`;

export const Subscribe = styled.View`
  height: auto;
  width: 100%;

  padding: 0px 20px;
`;

export const SubscribeBox = styled.TouchableOpacity`
  height: 90px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;

  border-radius: 12px;

  padding: 20px;

  background-color: #e6f0fd;
`;

export const SubscribeImage = styled.Image`
  height: 90px;
  width: 50px;
`;

export const SubscribeTitle = styled.Text`
  font-size: 20px;

  width: 50%;

  line-height: 25px;
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  color: ${({ theme }) => theme.colors.title};
`;

export const TrendingCompanies = styled.View`
  height: auto;
`;

export const JobListing = styled.View``;

export const TrendingCompaniesHead = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-top: 20px;

  padding: 10px 20px;
`;

export const TrendingCompaniesTitle = styled.Text`
  font-size: 26px;

  width: 80%;

  line-height: 25px;
  font-family: ${({ theme }) => theme.fonts.secondary_600};
  color: ${({ theme }) => theme.colors.title};
`;

export const TrendingCompaniesButton = styled.Pressable``;

export const TrendingCompaniesText = styled.Text`
  font-size: 16px;

  line-height: 25px;
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  color: ${({ theme }) => theme.colors.title_primary};
`;

export const TrendingCompaniesList = styled.View`
  padding: 20px;
`;

export const TrendingCompany = styled.Pressable`
  margin-bottom: 10px;

  border-radius: 12px;

  border-bottom-width: 1px;
  border-bottom-color: #eee;

  padding-top: 10px;
  padding-bottom: 20px !important;

  display: flex;
  align-items: center;
  flex-direction: row;

  height: 60px;
  width: 100%;

  border-radius: 12px;
`;

export const TrendingCompanyLogo = styled.Image`
  height: 50px;
  width: 50px;
  border-radius: 12px;
`;

export const TrendingCompanyName = styled.Text`
  font-size: 22px;

  margin-left: 10px;

  width: 60%;

  line-height: 25px;
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  color: ${({ theme }) => theme.colors.title};
`;

export const TrendingJobsList = styled.View`
  padding: 20px;
`;

export const TrendingJobs = styled.View`
  height: auto;
`;

export const TrendingJobsHead = styled.View`
  padding: 0px 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const TrendingJobsTitle = styled.Text`
  font-size: 26px;

  width: 60%;

  line-height: 25px;
  font-family: ${({ theme }) => theme.fonts.secondary_600};
  color: ${({ theme }) => theme.colors.title};
`;

export const TrendingJobsButton = styled.Pressable``;

export const TrendingJobsText = styled.Text`
  font-size: 16px;

  line-height: 25px;
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  color: ${({ theme }) => theme.colors.title_primary};
`;

export const TrendingJob = styled.Pressable`
  margin-bottom: 10px;

  border-radius: 12px;

  border-bottom-width: 1px;
  border-bottom-color: #eee;

  padding-bottom: 10px !important;

  display: flex;
  align-items: center;
  flex-direction: row;

  height: 60px;
  width: 100%;

  border-radius: 12px;
`;

export const TrendingJobsLogo = styled.Image`
  height: 50px;
  width: 50px;
  border-radius: 12px;
`;

export const TrendingJobsName = styled.Text`
  font-size: 20px;

  line-height: 25px;
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  color: ${({ theme }) => theme.colors.title};
`;

export const UploadResume = styled.TouchableOpacity`
  width: 100%;
  height: auto;

  padding: 0px 20px;
  padding-bottom: 15px;
`;

export const UploadResumeBox = styled.View`
  height: auto;
  width: 100%;

  padding: 20px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  background-color: #9ec9ff;
  border-radius: 12px;
`;

export const UploadResumeTitle = styled.Text`
  font-size: 18px;
  color: #FFF;
  font-family: ${({ theme }) => theme.fonts.secondary_600};
`;

export const UploadAvatar = styled.TouchableOpacity`
  width: 100%;
  height: auto;

  padding: 0px 20px;
  padding-bottom: 15px;
`;

export const UploadAvatarBox = styled.View`
  height: auto;
  width: 100%;

  padding: 20px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  background-color: #86afe0;
  border-radius: 12px;
`;

export const UploadAvatarTitle = styled.Text`
  font-size: 18px;
  color: #FFF;
  font-family: ${({ theme }) => theme.fonts.secondary_600};
`;

export const UploadPhone = styled.TouchableOpacity`
  width: 100%;
  height: auto;

  padding: 0px 20px;
  padding-bottom: 15px;
`;

export const UploadPhoneBox = styled.View`
  height: auto;
  width: 100%;

  padding: 20px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  background-color: #74b1fc;
  border-radius: 12px;
`;

export const UploadPhoneTitle = styled.Text`
  font-size: 18px;
  color: #FFF;
  font-family: ${({ theme }) => theme.fonts.secondary_600};
`;