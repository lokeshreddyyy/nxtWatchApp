import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'

import {
  AppContainer,
  LoginFormContainer,
  NxtWatchLogo,
  CustomLabelElement,
  UserInput,
  CustomCheckBox,
  CheckBoxLabel,
  LabelContainer,
  LoginButton,
  ErrorMsg,
} from './styledComponents'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    op: true,
    showSubmitError: false,
    errorMsg: '',
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  typeChange = () => {
    this.setState(prevState => ({
      op: !prevState.op,
    }))
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props

    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
    })
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  renderFormView = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const {username, password, op, showSubmitError, errorMsg} = this.state
        const homelogo = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

        return (
          <AppContainer bgColor={isDarkTheme ? '#212121' : ' #ffffff'}>
            <LoginFormContainer
              bgColor={isDarkTheme ? '#0f0f0f' : ' #ebebeb'}
              onSubmit={this.submitForm}
            >
              <NxtWatchLogo src={homelogo} alt="website logo" />
              <CustomLabelElement
                tcolor={isDarkTheme ? ' #ffffff ' : ' #606060 '}
                htmlFor="usernameInput"
              >
                USERNAME
              </CustomLabelElement>
              <UserInput
                type="text"
                id="usernameInput"
                value={username}
                onChange={this.onChangeUsername}
                placeholder="Username"
              />
              <CustomLabelElement
                tcolor={isDarkTheme ? ' #ffffff ' : ' #606060 '}
                htmlFor="passwordInput"
              >
                PASSWORD
              </CustomLabelElement>
              <UserInput
                type={op ? 'password' : 'text'}
                id="passwordInput"
                value={password}
                onChange={this.onChangePassword}
                placeholder="Password"
              />

              <LabelContainer>
                <CustomCheckBox
                  type="checkbox"
                  id="check"
                  onChange={this.typeChange}
                />
                <CheckBoxLabel
                  htmlFor="check"
                  bgColor={isDarkTheme ? '#ffffff' : ' #0f0f0f'}
                >
                  Show Password
                </CheckBoxLabel>
              </LabelContainer>
              <LoginButton type="submit">Login</LoginButton>
              {showSubmitError && (
                <ErrorMsg className="error-message">*{errorMsg}</ErrorMsg>
              )}
            </LoginFormContainer>
          </AppContainer>
        )
      }}
    </ThemeContext.Consumer>
  )

  render() {
    const jwtToken = Cookies.get('jwt_token')

    return this.renderFormView()
  }
}

export default LoginForm
