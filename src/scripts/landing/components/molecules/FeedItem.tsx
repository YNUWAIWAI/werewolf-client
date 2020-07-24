import * as React from 'react'

interface Props {
  htmlStr: string
}

export const FeedItem: React.FC<Props> = props => (
  // eslint-disable-next-line react/no-danger
  <div dangerouslySetInnerHTML={{
    __html: props.htmlStr
  }}
  />
)
FeedItem.displayName = 'FeedItem'
