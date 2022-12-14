import styled from 'styled-components/macro'

export const EachVideoListItem = styled.li`
  margin-bottom: 20px;
  width: 300px;
  display: flex;
  flex-direction: column;
  text-decoration: none;
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
  align-items: flex-start;
  justify-content: space-around;
`
export const TitleText = styled.p`
  margin-top: 0;
  color: ${props => props.bgColor};
  font-family: 'Roboto';
  font-weight: 400;
  margin-bottom: 0;
`
export const ChannelText = styled.p`
  color: ${props => props.bgColor};
  font-family: 'Roboto';
  font-weight: 400;
  margin-bottom: 0;
`
