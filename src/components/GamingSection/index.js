import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import {SiYoutubegaming} from 'react-icons/si'
import NavBar from '../NavBar'
import ThemeContext from '../../context/ThemeContext'
import SideBar from '../SideBar'
import GamingCard from '../GamingCard'

import {
  LoaderContainer,
  TestidContainer,
  HomeCard,
  HomeListItem,
  HomeFailureContainer,
  FailureImage,
  SomethingWrongText,
  WrongParaText,
  RetryButton,
  HomeContentsContainer,
  TrendingPopup,
  FlameIcon,
  CustomText,
  VideoTrendsContainer,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class GamingSection extends Component {
  state = {
    videosList: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getAllVideos()
  }

  renderFailureView = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        return (
          <HomeFailureContainer bgColor={isDarkTheme ? '#181818' : ' #f9f9f9'}>
            <FailureImage
              src={
                isDarkTheme
                  ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
              }
              alt="failure view"
            />

            <SomethingWrongText bgColor={isDarkTheme ? '#ffffff' : ' #0f0f0f'}>
              Oops! Something Went Wrong
            </SomethingWrongText>
            <WrongParaText bgColor={isDarkTheme ? '#94a3b8' : ' #606060'}>
              We are having some trouble to complete your request
            </WrongParaText>
            <RetryButton type="button" onClick={this.getAllVideos}>
              Retry
            </RetryButton>
          </HomeFailureContainer>
        )
      }}
    </ThemeContext.Consumer>
  )

  renderLoadingView = () => (
    <LoaderContainer>
      <Loader type="ThreeDots" color="#4f46e5" height="50" width="50" />
    </LoaderContainer>
  )

  getAllVideos = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    const jwtToken = Cookies.get('jwt_token')

    const apiUrl = `https://apis.ccbp.in/videos/gaming`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const fetchedData = await response.json()
      const updatedData = fetchedData.videos.map(each => ({
        id: each.id,
        title: each.title,
        thumbnailUrl: each.thumbnail_url,
        viewCount: each.view_count,
      }))

      this.setState({
        videosList: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  renderVideosView = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const {videosList} = this.state
        return (
          <>
            <NavBar />
            <HomeCard>
              <HomeListItem>
                <SideBar />
              </HomeListItem>
              <TestidContainer bgColor={isDarkTheme ? '#0f0f0f' : ' #f9f9f9'}>
                <HomeListItem>
                  <HomeContentsContainer
                    bgColor={isDarkTheme ? '#181818' : ' #f9f9f9'}
                  >
                    <TrendingPopup
                      bgColor={isDarkTheme ? '#313131' : ' #ebebeb'}
                    >
                      <FlameIcon bgColor={isDarkTheme ? '#181818' : ' #d7dfe9'}>
                        <SiYoutubegaming />
                      </FlameIcon>
                      <CustomText
                        bgColor={isDarkTheme ? '#ffffff' : ' #0f0f0f'}
                      >
                        Gaming
                      </CustomText>
                    </TrendingPopup>
                    <VideoTrendsContainer>
                      {videosList.map(each => (
                        <GamingCard item={each} key={each.id} />
                      ))}
                    </VideoTrendsContainer>
                  </HomeContentsContainer>
                </HomeListItem>
              </TestidContainer>
            </HomeCard>
          </>
        )
      }}
    </ThemeContext.Consumer>
  )

  renderAllVideos = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderVideosView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    return this.renderAllVideos()
  }
}
export default GamingSection
