import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import {BiSearch} from 'react-icons/bi'
import {formatDistanceToNow} from 'date-fns'
import VideosCard from '../VideosCard'
import PrimePopUp from '../PrimePopUp'
import NavBar from '../NavBar'
import ThemeContext from '../../context/ThemeContext'
import SideBar from '../SideBar'
import {
  TestidContainer,
  HomeCard,
  HomeListItem,
  HomeContentsContainer,
  SearchContainer,
  CustomInput,
  SearchButton,
  VideosContainer,
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
  searchFail: 'SEARCH_FAIL',
}

class Home extends Component {
  state = {
    videosList: [],
    apiStatus: apiStatusConstants.initial,
    searchInput: '',
  }

  componentDidMount() {
    this.getAllVideos()
  }

  renderLoadingView = () => (
    <LoaderContainer>
      <Loader type="ThreeDots" color="#4f46e5" height="50" width="50" />
    </LoaderContainer>
  )

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

  updateInputValue = event => {
    this.setState({searchInput: event.target.value})
  }

  renderVideosView = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const {videosList} = this.state

        return (
          <HomeContentsContainer bgColor={isDarkTheme ? '#181818' : ' #f9f9f9'}>
            <VideosContainer>
              {videosList.map(each => (
                <VideosCard item={each} key={each.id} />
              ))}
            </VideosContainer>
          </HomeContentsContainer>
        )
      }}
    </ThemeContext.Consumer>
  )

  renderSearchFailure = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        return (
          <HomeFailureContainer bgColor={isDarkTheme ? '#181818' : ' #f9f9f9'}>
            <FailureImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="no videos"
            />
            <SomethingWrongText bgColor={isDarkTheme ? '#ffffff' : ' #0f0f0f'}>
              No Search results found
            </SomethingWrongText>
            <WrongParaText bgColor={isDarkTheme ? '#94a3b8' : ' #606060'}>
              Try different key words or remove search filter
            </WrongParaText>
            <RetryButton type="button" onClick={this.renderSearch}>
              Retry
            </RetryButton>
          </HomeFailureContainer>
        )
      }}
    </ThemeContext.Consumer>
  )

  renderSearch = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    const jwtToken = Cookies.get('jwt_token')
    const {searchInput} = this.state
    const apiUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const fetchedData = await response.json()
      console.log(fetchedData)

      if (fetchedData.videos.length > 0) {
        const updatedData = fetchedData.videos.map(each => ({
          id: each.id,
          title: each.title,
          thumbnailUrl: each.thumbnail_url,
          channel: each.channel,
          viewCount: each.view_count,
          publishedAt: each.publishedAt,
        }))

        this.setState({
          videosList: updatedData,
          apiStatus: apiStatusConstants.success,
        })
      } else {
        this.setState({
          apiStatus: apiStatusConstants.searchFail,
        })
      }
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  getAllVideos = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    const jwtToken = Cookies.get('jwt_token')

    const apiUrl = `https://apis.ccbp.in/videos/all?search=`
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
        channel: each.channel,
        viewCount: each.view_count,
        publishedAt: each.published_at,
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

  renderAllVideos = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderVideosView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      case apiStatusConstants.searchFail:
        return this.renderSearchFailure()
      default:
        return null
    }
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          return (
            <>
              <NavBar />
              <HomeCard>
                <HomeListItem>
                  <SideBar />
                </HomeListItem>
                <TestidContainer>
                  <HomeListItem>
                    <HomeContentsContainer
                      bgColor={isDarkTheme ? '#181818' : ' #f9f9f9'}
                    >
                      <PrimePopUp />
                      <SearchContainer>
                        <CustomInput
                          type="search"
                          placeholder="Search"
                          bgColor={isDarkTheme ? '#ffffff' : ' #181818'}
                          onChange={this.updateInputValue}
                        />
                        <SearchButton type="button" onClick={this.renderSearch}>
                          <BiSearch />
                        </SearchButton>
                      </SearchContainer>
                      {this.renderAllVideos()}
                    </HomeContentsContainer>
                  </HomeListItem>
                </TestidContainer>
              </HomeCard>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}
export default Home
