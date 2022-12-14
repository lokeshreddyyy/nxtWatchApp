import {Component} from 'react'
import {AiFillHome} from 'react-icons/ai'
import {IoIosFlame} from 'react-icons/io'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'

import {
  SideBarContainer,
  CustomListItem,
  TabText,
  SideOptionsCard,
  CustomLinks,
  ContactHeader,
  IconsContainer,
  IconsListItems,
  CustomIcons,
  ContactDescription,
} from './styledComponents'
import ThemeContext from '../../context/ThemeContext'

class SideBar extends Component {
  state = {isActive: 'home'}

  changeHomeActiveStatus = () => {
    this.setState({
      isActive: 'home',
    })
  }

  changeTrendingActiveStatus = () => {
    this.setState({
      isActive: 'trending',
    })
  }

  changeGamingActiveStatus = () => {
    this.setState({
      isActive: 'gaming',
    })
  }

  changeSavedActiveStatus = () => {
    this.setState({
      isActive: 'saved',
    })
  }

  renderSidebar = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const {isActive} = this.state
        const iconStyles = {color: '#606060', fontSize: '1.3em'}
        return (
          <SideBarContainer bgColor={isDarkTheme ? '#212121' : ' #ffffff'}>
            <SideOptionsCard>
              <CustomListItem>
                <CustomLinks
                  as="a"
                  href="/"
                  onClick={this.changeHomeActiveStatus}
                >
                  <AiFillHome style={iconStyles} />
                  <TabText
                    bgColor={isDarkTheme ? '#ffffff ' : '#606060'}
                    weight={isActive === 'home' ? 'bold' : 100}
                  >
                    Home
                  </TabText>
                </CustomLinks>
              </CustomListItem>
              <CustomListItem>
                <CustomLinks
                  as="a"
                  href="/trending"
                  onClick={this.changeTrendingActiveStatus}
                >
                  <IoIosFlame style={iconStyles} />
                  <TabText
                    bgColor={isDarkTheme ? '#ffffff ' : '#606060'}
                    weight={isActive === 'trending' ? 'bold' : 100}
                  >
                    Trending
                  </TabText>
                </CustomLinks>
              </CustomListItem>
              <CustomListItem>
                <CustomLinks
                  as="a"
                  href="/gaming"
                  onClick={this.changeGamingActiveStatus}
                >
                  <SiYoutubegaming style={iconStyles} />
                  <TabText
                    bgColor={isDarkTheme ? '#ffffff ' : '#606060'}
                    weight={isActive === 'gaming' ? 'bold' : 100}
                  >
                    Gaming
                  </TabText>
                </CustomLinks>
              </CustomListItem>
              <CustomListItem>
                <CustomLinks
                  as="a"
                  href="/saved-videos"
                  onClick={this.changeSavedActiveStatus}
                >
                  <MdPlaylistAdd style={iconStyles} />
                  <TabText
                    bgColor={isDarkTheme ? '#ffffff ' : '#606060'}
                    weight={isActive === 'saved' ? 'bold' : 100}
                  >
                    Saved Videos
                  </TabText>
                </CustomLinks>
              </CustomListItem>
            </SideOptionsCard>
            <SideOptionsCard>
              <ContactHeader bgColor={isDarkTheme ? '#ffffff ' : '#606060'}>
                CONTACT US
              </ContactHeader>
              <IconsContainer>
                <IconsListItems>
                  <CustomIcons
                    alt="facebook logo"
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                  />
                </IconsListItems>
                <IconsListItems>
                  <CustomIcons
                    alt="twitter logo"
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                  />
                </IconsListItems>
                <IconsListItems>
                  <CustomIcons
                    alt="linked in logo"
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                  />
                </IconsListItems>
              </IconsContainer>
              <ContactDescription
                bgColor={isDarkTheme ? '#ffffff ' : '#606060'}
              >
                Enjoy! Now to see your channels and recommendations!
              </ContactDescription>
            </SideOptionsCard>
          </SideBarContainer>
        )
      }}
    </ThemeContext.Consumer>
  )

  render() {
    return this.renderSidebar()
  }
}
export default SideBar
