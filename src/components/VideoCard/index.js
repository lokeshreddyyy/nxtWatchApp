import {formatDistanceToNow} from 'date-fns'
import ThemeContext from '../../context/ThemeContext'

import {
  EachVideoListItem,
  ThumbnailImage,
  VideoDetailsContainer,
  ChannelLogo,
  VideoStatsContainer,
  TitleText,
  ChannelText,
} from './styledComponents'

const VideosCard = props => {
  const {item} = props
  const {id, title, thumbnailUrl, channel, viewCount, publishedAt} = item

  return (
    <EachVideoListItem as="a" href={`/videos/${id}`}>
      <ThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
      <VideoDetailsContainer>
        <ChannelLogo src={channel.profile_image_url} alt="channel logo" />
        <VideoStatsContainer>
          <ThemeContext.Consumer>
            {value => {
              const {isDarkTheme} = value
              return (
                <>
                  <TitleText bgColor={isDarkTheme ? '#ffffff' : ' #0f0f0f'}>
                    {title}
                  </TitleText>
                  <ChannelText bgColor={isDarkTheme ? '#94a3b8' : ' #606060'}>
                    {channel.name}
                  </ChannelText>
                  <ChannelText bgColor={isDarkTheme ? '#94a3b8' : ' #606060'}>
                    {viewCount} . {formatDistanceToNow(new Date(publishedAt))}
                  </ChannelText>
                </>
              )
            }}
          </ThemeContext.Consumer>
        </VideoStatsContainer>
      </VideoDetailsContainer>
    </EachVideoListItem>
  )
}
export default VideosCard
