import styled from 'styled-components/macro'

export const TestidContainer = styled.div`
  width: 100%;
  background-color: ${props => props.bgColor};
`
export const HomeCard = styled.ul`
  display: flex;
  list-style-type: none;
  padding: 0;
  margin-top: 0;
  width: 100%;
`
export const HomeListItem = styled.li`
  margin-bottom: ${props => props.w}px;
`

export const VideoPlayerContainer = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: column;
`
export const VideoTitle = styled.p`
  color: ${props => props.bgColor};
`
export const ViewsAndLikesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const ViewsContainer = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
`
export const CustomListItem = styled.li`
  color: ${props => props.bgColor};
  margin-right: 10px;
`
export const ChannelText = styled.p`
  color: ${props => props.bgColor};
  font-family: 'Roboto';
  font-weight: 400;
  margin-bottom: 0;
  padding: 0;
  margin-top: 0;
`
export const InterfaceButton = styled.button`
  background-color: transparent;
  border-style: none;
  color: ${props => props.bgColor};
  display: flex;
  align-items: center;
  font-size: 15px;
  padding: 0;
  font-family: 'Roboto';
  font-weight: bold;
`
export const Ruler = styled.hr`
  border-color: ${props => props.bgColor};
  border-width: 1px;
  width: 100%;
`
export const ChannelContainer = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 20px;
`
export const ChannelLogo = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 10px;
`
export const ChannelDetailsContainer = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  margin-top: 5px;
  font-family: 'Roboto';
`
export const LoaderContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;
`

export const HomeFailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: ${props => props.bgColor};
`
export const FailureImage = styled.img`
  margin-top: 10px;
  margin-bottom: 10px;
  width: 40%;
  height: 250px;
  background-color: ${props => props.bgColor};
`
export const SomethingWrongText = styled.h1`
  font-family: 'Roboto';
  color: ${props => props.bgColor};
`
export const WrongParaText = styled.p`
  font-family: 'Roboto';
  color: ${props => props.bgColor};
`
export const RetryButton = styled.button`
  background-color: #4f46e5;
  border-style: none;
  border-radius: 4px;
  color: #ffffff;
  font-size: 15px;
  font-weight: bold;
  width: 80px;
  height: 40px;
  margin-bottom: 10px;
`
