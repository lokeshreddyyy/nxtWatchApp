import ThemeContext from '../../context/ThemeContext'

import {
  EachVideoListItem,
  ThumbnailImage,
  VideoDetailsContainer,
  ChannelText,
} from './styledComponents'

const GamingCard = props => {
  const {item} = props
  const {id, thumbnailUrl, title, viewCount} = item

  return (
    <EachVideoListItem as="a" href={`/videos/${id}`}>
      <ThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
      <VideoDetailsContainer>
        <ThemeContext.Consumer>
          {value => {
            const {isDarkTheme} = value
            return (
              <>
                <ChannelText bgColor={isDarkTheme ? '#94a3b8' : ' #606060'}>
                  {title}
                </ChannelText>
                <ChannelText bgColor={isDarkTheme ? '#94a3b8' : ' #606060'}>
                  {viewCount} Watching Worldwide
                </ChannelText>
              </>
            )
          }}
        </ThemeContext.Consumer>
      </VideoDetailsContainer>
    </EachVideoListItem>
  )
}
export default GamingCard
