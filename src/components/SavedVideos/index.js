import {IoIosFlame} from 'react-icons/io'
import NavBar from '../NavBar'
import ThemeContext from '../../context/ThemeContext'
import SideBar from '../SideBar'

import {
  TestidContainer,
  HomeCard,
  HomeListItem,
  HomeFailureContainer,
  FailureImage,
  SomethingWrongText,
  WrongParaText,
  HomeContentsContainer,
  TrendingPopup,
  FlameIcon,
  CustomText,
  VideoTrendsContainer,
} from './styledComponents'

const SavedVideos = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, savedList} = value

      return (
        <TestidContainer bgColor={isDarkTheme ? '#0f0f0f' : ' #f9f9f9'}>
          <NavBar />
          <HomeCard>
            <HomeListItem>
              <SideBar />
            </HomeListItem>
            {savedList.length > 0 ? (
              <HomeListItem>
                <HomeContentsContainer
                  bgColor={isDarkTheme ? '#181818' : ' #f9f9f9'}
                >
                  <TrendingPopup bgColor={isDarkTheme ? '#313131' : ' #ebebeb'}>
                    <FlameIcon bgColor={isDarkTheme ? '#181818' : ' #d7dfe9'}>
                      <IoIosFlame />
                    </FlameIcon>
                    <CustomText bgColor={isDarkTheme ? '#ffffff' : ' #0f0f0f'}>
                      Saved Videos
                    </CustomText>
                  </TrendingPopup>
                  <VideoTrendsContainer>123</VideoTrendsContainer>
                </HomeContentsContainer>
              </HomeListItem>
            ) : (
              <HomeFailureContainer
                bgColor={isDarkTheme ? '#181818' : ' #f9f9f9'}
              >
                <FailureImage
                  src={
                    isDarkTheme
                      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
                  }
                  alt="failure view"
                />

                <SomethingWrongText
                  bgColor={isDarkTheme ? '#ffffff' : ' #0f0f0f'}
                >
                  Oops! Something Went Wrong
                </SomethingWrongText>
                <WrongParaText bgColor={isDarkTheme ? '#94a3b8' : ' #606060'}>
                  We are having some trouble to complete your request
                </WrongParaText>
              </HomeFailureContainer>
            )}
          </HomeCard>
        </TestidContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default SavedVideos
