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

export const Header = styled.View`
  padding: 0px 20px;
  padding-top: ${(props) => (props.isIOS ? "35px" : "20px")} !important;
  background-color: ${({ theme }) => theme.colors.background_primary};
`;

export const HeaderBox = styled.View`
  display: flex;

  align-items: center;

  flex-direction: row;
  justify-content: space-between;

  padding: 10px;

  border-radius: 12px;
`;

export const HeaderTitles = styled.View`
  display: flex;
  flex-direction: column;
`;

export const HeaderTitle = styled.Text`
  font-size: 25.5px;
  font-family: ${({ theme }) => theme.fonts.secondary_600};
  color: ${({ theme }) => theme.colors.title};
`;

export const HeaderText = styled.Text`
  font-size: 16px;

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
  background-color: #FAFAFA;
`;

export const HeaderFilter = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-left: 10px;

  border-radius: 12px;

  padding: 15px;
  background-color: #FAFAFA;
  border-radius: 12px;
`;

export const Search = styled.View`
  padding: 0px 20px;
  margin-top: 10px;
  padding-bottom: 20px;
`;

export const SearchForm = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  
  justify-content: space-between;

  height: 50px;
  background-color: #FFF;

  padding: 0px 20px;

  border-radius: 50px;
  width: 100%;
`;

export const SearchLabel = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  color: #555;

  font-size: 14px;
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

  margin-bottom: 10px;

  background-color: #e6f0fd;
`;

export const SubscribeImage = styled.Image`
  height: 90px;
  width: 50px;
`;

export const SubscribeTitle = styled.Text`
  font-size: 20px;

  width: 70%;

  line-height: 25px;
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  color: ${({ theme }) => theme.colors.title};
`;

export const Upload = styled.View`
  display: flex;
  flex-direction: row;

  padding: 20px;
  padding-bottom: 20px;
`;

export const UploadTitle = styled.Text`
  font-size: 26px;

  margin-left: 20px;

  width: 80%;

  line-height: 25px;
  font-family: ${({ theme }) => theme.fonts.secondary_600};
  color: ${({ theme }) => theme.colors.title};
`;

export const UploadBox = styled.TouchableOpacity`
  height: 120px;
  width: 30%;

  margin-right: 5%;

  align-items: center;
  justify-content: space-between;

  border-radius: 12px;
  border-width: 1px;
  border-color: #e0e0e0;

  padding: 10px;
`;

export const UploadBoxShadow = styled.View`
  height: 50px;
  width: 50px;
  border-radius: 50px;

  justify-content: center;
  align-items: center;

  background-color: ${props => props.bg};
`;

export const UploadBoxTitle = styled.Text`
  color: #333;
  
  font-family: ${({ theme }) => theme.fonts.secondary_600};

  margin-top: 10px;
  text-align: center;

  font-size: 14px;
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

  padding: 0px 20px;
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
  padding-right: 20px;
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
  border-radius: 50px;
`;

export const TrendingCompanyName = styled.Text`
  font-size: 18px;

  margin-left: 10px;

  width: 60%;

  line-height: 25px;
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  color: ${({ theme }) => theme.colors.title};
`;

export const TrendingJobsList = styled.View`
  padding: 0px 20px;
`;

export const TrendingJobs = styled.View`
  height: auto;
  margin-top: 30px;
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

export const TrendingVaga = styled.Pressable`
  margin-bottom: 20px;
  margin-right: 10px;


  background-color: #eee;

  height: auto;
  width: 100%;

  border-radius: 12px;

  border-bottom-width: 1px;
  border-bottom-color: #eee;

  display: flex;
  justify-content: space-between;
`;

export const TrendingJob = styled.Pressable`
  margin-bottom: 10px;
  margin-right: 10px;

  padding: 20px;
  background-color: #000;

  height: 150px;
  width: 260px;

  border-radius: 12px;

  border-bottom-width: 1px;
  border-bottom-color: #eee;

  padding-bottom: 10px !important;

  display: flex;
  justify-content: space-between;
`;

export const TrendingJobsLogo = styled.Image`
  height: 50px;
  width: 50px;
  border-radius: 12px;
`;

export const TrendingJobsName = styled.Text`
  font-size: 18px;

  line-height: 25px;
  font-family: ${({ theme }) => theme.fonts.secondary_600};
  color: #FFF;
`;

export const TrendingJobsCompanies = styled.View`
  display: flex;
  flex-direction: row;
  max-width: 250px;
`;

export const TrendingJobsCompany = styled.Text`
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.secondary_400};

  color: #aaa;
`;

export const TrendingJobsOpen = styled.View`
  display: flex;
  flex-direction: row;
`;

export const TrendingJobsOpenQty = styled.Text`
  font-size: 26px;

  line-height: 25px;
  font-family: ${({ theme }) => theme.fonts.secondary_600};
  color: #FFF;
`;

export const TrendingJobsOpenLabel = styled.Text`
  font-size: 12px;

  margin-left: 5px;

  line-height: 25px;
  font-family: ${({ theme }) => theme.fonts.secondary_400};
  color: #EEE;
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

export const CategoriesBox = styled.View`
  height: 120;
  width: 170;
  border-radius: 12px;

  margin-right: 10px;

  background-color: #000;

  padding: 10px;
`;

export const Categories = styled.ScrollView.attrs(() => ({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    paddingLeft: 20,
    paddingTop: 20,
    paddingRight: 10,
  }
}))`
`;