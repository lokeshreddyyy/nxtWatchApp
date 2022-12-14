import {Component} from 'react'
import {formatDistanceToNow} from 'date-fns'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import ReactPlayer from 'react-player'
import {AiOutlineLike} from 'react-icons/ai'
import {BiDislike} from 'react-icons/bi'
import {MdPlaylistAdd} from 'react-icons/md'
import NavBar from '../NavBar'
import ThemeContext from '../../context/ThemeContext'
import SideBar from '../SideBar'

import {
  TestidContainer,
  HomeCard,
  HomeListItem,
  VideoPlayerContainer,
  VideoTitle,
  ViewsAndLikesContainer,
  ViewsContainer,
  CustomListItem,
  ChannelText,
  InterfaceButton,
  Ruler,
  ChannelContainer,
  ChannelLogo,
  ChannelDetailsContainer,
  LoaderContainer,
  HomeFailureContainer,
  FailureImage,
  SomethingWrongText,
  WrongParaText,
  RetryButton,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class VideoitemDetails extends Component {
  state = {
    videosList: [],
    apiStatus: apiStatusConstants.initial,
    isLikeActive: true,
    isDislikeActive: true,
    isSaveActive: true,
  }

  componentDidMount() {
    this.getAllVideos()
  }

  getAllVideos = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    const jwtToken = Cookies.get('jwt_token')

    const apiUrl = `https://apis.ccbp.in/videos/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const fetchedData = await response.json()

      const updatedData = {
        id: fetchedData.video_details.id,
        title: fetchedData.video_details.title,
        videoUrl: fetchedData.video_details.video_url,
        thumbnailUrl: fetchedData.video_details.thumbnail_url,
        name: fetchedData.video_details.channel.name,
        profileImageUrl: fetchedData.video_details.channel.profile_image_url,
        subscriberCount: fetchedData.video_details.channel.subscriber_count,
        viewCount: fetchedData.video_details.view_count,
        publishedAt: fetchedData.video_details.published_at,
        description: fetchedData.video_details.description,
      }

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

  toggleButton1 = () => {
    this.setState({isLikeActive: false, isDislikeActive: true})
  }

  toggleButton2 = () => {
    this.setState({isDislikeActive: false, isLikeActive: true})
  }

  toggleSave = () => {
    this.setState(prevState => ({isSaveActive: !prevState.isSaveActive}))
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
              We are having some trouble to complete your request. Please try
              again
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

  renderVideosView = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme, updateSavedList, savedList} = value
        const {
          videosList,
          isLikeActive,
          isDislikeActive,
          isSaveActive,
        } = this.state

        const {
          id,
          title,
          videoUrl,
          name,
          viewCount,
          publishedAt,
          description,
          profileImageUrl,
          subscriberCount,
        } = videosList

        const toggleButton3 = () => {
          updateSavedList(videosList)
          this.toggleSave()
        }

        return (
          <>
            <NavBar />
            <HomeCard>
              <HomeListItem>
                <SideBar />
              </HomeListItem>
              <TestidContainer bgColor={isDarkTheme ? '#0f0f0f' : ' #f9f9f9'}>
                <HomeListItem>
                  <VideoPlayerContainer>
                    <ReactPlayer url={videoUrl} width={980} height={440} />
                    <VideoTitle bgColor={isDarkTheme ? '#ffffff' : ' #0f0f0f'}>
                      {title}
                    </VideoTitle>
                    <ViewsAndLikesContainer>
                      <ViewsContainer>
                        <CustomListItem>
                          <ChannelText
                            bgColor={isDarkTheme ? '#94a3b8' : ' #606060'}
                          >
                            {viewCount} views
                          </ChannelText>
                        </CustomListItem>
                        <CustomListItem>
                          <ChannelText
                            bgColor={isDarkTheme ? '#94a3b8' : ' #606060'}
                          >
                            {publishedAt}
                          </ChannelText>
                        </CustomListItem>
                      </ViewsContainer>
                      <ViewsContainer>
                        <CustomListItem>
                          <InterfaceButton
                            bgColor={isLikeActive ? '#64748b' : ' #2563eb'}
                            onClick={this.toggleButton1}
                          >
                            <AiOutlineLike />
                            Like
                          </InterfaceButton>
                        </CustomListItem>
                        <CustomListItem>
                          <InterfaceButton
                            bgColor={isDislikeActive ? '#64748b' : ' #2563eb'}
                            onClick={this.toggleButton2}
                          >
                            <BiDislike />
                            Dislike
                          </InterfaceButton>
                        </CustomListItem>
                        <CustomListItem>
                          <InterfaceButton
                            bgColor={isSaveActive ? '#64748b' : ' #2563eb'}
                            onClick={toggleButton3}
                          >
                            <MdPlaylistAdd />
                            {isSaveActive ? 'Save' : 'Saved'}
                          </InterfaceButton>
                        </CustomListItem>
                      </ViewsContainer>
                    </ViewsAndLikesContainer>
                    <Ruler bgColor={isDarkTheme ? '#94a3b8' : ' #606060'} />
                    <ChannelContainer>
                      <ChannelLogo src={profileImageUrl} alt="channel logo" />
                      <ChannelDetailsContainer>
                        <HomeListItem w={10}>
                          <ChannelText
                            bgColor={isDarkTheme ? '#ffffff' : ' #0f0f0f'}
                          >
                            {name}
                          </ChannelText>
                        </HomeListItem>
                        <HomeListItem w={40}>
                          <ChannelText
                            bgColor={isDarkTheme ? '#94a3b8' : ' #606060'}
                          >
                            {subscriberCount}
                          </ChannelText>
                        </HomeListItem>
                        <HomeListItem>
                          <ChannelText
                            bgColor={isDarkTheme ? '#94a3b8' : ' #606060'}
                          >
                            {description}
                          </ChannelText>
                        </HomeListItem>
                      </ChannelDetailsContainer>
                    </ChannelContainer>
                  </VideoPlayerContainer>
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
export default VideoitemDetails
