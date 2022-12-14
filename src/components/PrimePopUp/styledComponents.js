import styled from 'styled-components/macro'

export const PopupContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  height: 30vh;
`

export const ModalCard = styled.div`
  display: flex;
  justify-content: space-between;
  padding-right: 20px;
`
export const PopupLeftCard = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  margin-top: 30px;
  width: 300px;
`
export const PopupListItem = styled.li`
  padding-left: 10px;
  margin-bottom: 0;
`

export const WebLogo = styled.img`
  width: 100px;
`

export const NxtWatchDescriptionText = styled.p`
  font-family: 'Roboto';
`

export const GetNowButton = styled.button`
  background-color: transparent;
  border-color: black;
  border-width: 2px;
  color: black;
  font-family: 'Roboto';
  width: 100px;
`

export const CloseButton = styled.button`
  background-color: transparent;
  border-style: none;
  align-self: flex-start;
  padding-top: 30px;
`
