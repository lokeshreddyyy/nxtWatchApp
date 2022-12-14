import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import {FaMoon} from 'react-icons/fa'
import {BsBrightnessHigh} from 'react-icons/bs'
import ThemeContext from '../../context/ThemeContext'

import {
  NavContainer,
  WebsiteLogoContainer,
  NxtWatchLogo,
  AccountContainer,
  CustomButton,
  UserAccountImage,
  LogoutButton,
} from './styledComponents'

const NavBar = props => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const changeTheme = () => {
        toggleTheme()
      }
      const onClickLogout = () => {
        const {history} = props
        Cookies.remove('jwt_token')
        history.replace('/login')
      }
      const iconStyles = {color: '#ffffff', fontSize: '1.5em'}
      const homelogo = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
      return (
        <NavContainer bgColor={isDarkTheme ? '#212121' : ' #ffffff'}>
          <WebsiteLogoContainer as="a" href="/">
            <NxtWatchLogo src={homelogo} alt="website logo" />
          </WebsiteLogoContainer>
          <AccountContainer>
            <CustomButton type="button" onClick={changeTheme}>
              {isDarkTheme ? (
                <BsBrightnessHigh style={iconStyles} />
              ) : (
                <FaMoon />
              )}
            </CustomButton>
            <CustomButton type="button">
              <UserAccountImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                alt="profile"
              />
            </CustomButton>
            <LogoutButton
              color={isDarkTheme ? '#ffffff' : ' #3b82f6'}
              type="button"
              onClick={onClickLogout}
            >
              Logout
            </LogoutButton>
          </AccountContainer>
        </NavContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default withRouter(NavBar)
