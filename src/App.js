import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'

import LoginForm from './components/LoginForm'
import Home from './components/Home'
import TrendingSection from './components/TrendingSection'
import GamingSection from './components/GamingSection'
import VideoitemDetails from './components/VideoitemDetails'
import SavedVideos from './components/SavedVideos'
import ProtectedRoute from './components/ProtectedRoute'
import ThemeContext from './context/ThemeContext'

import './App.css'

class App extends Component {
  state = {
    isDarkTheme: false,
    isActive: 'home',
    savedList: [],
  }

  changeSection = val => {
    this.setState({isActive: val})
  }

  toggleTheme = () => {
    this.setState(prevState => ({isDarkTheme: !prevState.isDarkTheme}))
  }

  updateSavedList = item => {
    this.setState(prevState => ({savedList: [...prevState.savedList, item]}))
  }

  render() {
    const {isDarkTheme, isActive, savedList} = this.state
    console.log(savedList)

    return (
      <ThemeContext.Provider
        value={{
          isDarkTheme,
          isActive,
          savedList,
          toggleTheme: this.toggleTheme,
          changeSection: this.changeSection,
          updateSavedList: this.updateSavedList,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={TrendingSection} />
          <ProtectedRoute exact path="/gaming" component={GamingSection} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoitemDetails}
          />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
        </Switch>
      </ThemeContext.Provider>
    )
  }
}

export default App
