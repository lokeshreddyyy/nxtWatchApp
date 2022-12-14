import {Component} from 'react'
import {IoMdClose} from 'react-icons/io'
import {
  PopupContainer,
  PopupLeftCard,
  CloseButton,
  WebLogo,
  NxtWatchDescriptionText,
  GetNowButton,
  ModalCard,
  PopupListItem,
} from './styledComponents'

class PrimePopUp extends Component {
  state = {show: true}

  close = () => {
    this.setState(prevState => ({
      show: !prevState.show,
    }))
  }

  render() {
    const {show} = this.state
    return show ? (
      <PopupContainer>
        <ModalCard>
          <PopupLeftCard>
            <WebLogo
              alt="nxt watch logo"
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            />

            <NxtWatchDescriptionText>
              Buy Nxt Watch Premium prepaid plans with UPI
            </NxtWatchDescriptionText>

            <GetNowButton>GET IT NOW</GetNowButton>
          </PopupLeftCard>
          <CloseButton type="button" onClick={this.close}>
            <IoMdClose />
          </CloseButton>
        </ModalCard>
      </PopupContainer>
    ) : null
  }
}
export default PrimePopUp
