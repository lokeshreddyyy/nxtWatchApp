import {formatDistanceToNow} from 'date-fns'
import ThemeContext from '../../context/ThemeContext'

import {
  EachVideoListItem,
  ThumbnailImage,
  VideoDetailsContainer,
  TitleText,
  ChannelText,
} from './styledComponents'

const TrendingCard = props => {
  const {item} = props
  const {id, title, thumbnailUrl, channel, viewCount, publishedAt} = item

  return (
    <EachVideoListItem as="a" href={`/videos/${id}`}>
      <ThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
      <VideoDetailsContainer>
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
      </VideoDetailsContainer>
    </EachVideoListItem>
  )
}
export default TrendingCard
