import styled from 'styled-components/macro'

export const EachVideoListItem = styled.li`
  margin-bottom: 60px;
  text-decoration: none;
  display: flex;
`
export const ThumbnailImage = styled.img`
  width: 400px;
  margin-right: 20px;
`
export const VideoDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
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
