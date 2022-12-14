import styled from 'styled-components/macro'

export const EachVideoListItem = styled.li`
  margin-bottom: 80px;
  display: flex;
  flex-direction: column;
  text-decoration: none;
`
export const ThumbnailImage = styled.img`
  width: 290px;
  margin-bottom: 10px;
`
export const VideoDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const ChannelText = styled.p`
  color: ${props => props.bgColor};
  font-family: 'Roboto';
  font-weight: 400;
  margin-bottom: 0;
`
