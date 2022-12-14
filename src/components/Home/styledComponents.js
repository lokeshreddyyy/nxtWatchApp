import styled from 'styled-components/macro'

export const TestidContainer = styled.div`
  width: 100%;
`
export const HomeCard = styled.ul`
  display: flex;
  list-style-type: none;
  padding: 0;
  margin-top: 0;
`

export const HomeListItem = styled.li``
export const HomeContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${props => props.bgColor};
`
export const SearchContainer = styled.div`
  display: flex;
  margin-left: 30px;
  margin-top: 30px;
  margin-bottom: 30px;
`
export const CustomInput = styled.input`
  width: 45%;
  height: 35px;
  padding: 5px;
  border-width: 1px;
  background-color: transparent;
  border-color: #909090;
  color: ${props => props.bgColor};
`
export const SearchButton = styled.button`
  width: 70px;
`
export const VideosContainer = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style-type: none;
  flex-wrap: wrap;
`

export const ThumbnailImage = styled.img`
  width: 300px;
`
export const VideoDetailsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`
export const ChannelLogo = styled.img`
  width: 40px;
  height: 40px;
  padding: 5px;
  margin-right: 10px;
`
export const VideoStatsContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const TitleText = styled.p`
  margin-top: 0;
  color: ${props => props.bgColor};
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 15px;
`
export const ChannelText = styled.span`
  color: ${props => props.bgColor};
  font-family: 'Roboto';
  font-weight: 400;
`
export const LoaderContainer = styled.div`
  display: flex;
  height: 60vh;
  width: 100%;
  align-items: center;
  justify-content: center;
`
export const HomeFailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const FailureImage = styled.img`
  margin-bottom: 10px;
  width: 40%;
  height: 70%;
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
