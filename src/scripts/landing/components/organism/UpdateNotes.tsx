import * as React from 'react'
import {FeedItem} from '../molecules/FeedItem'
import {FormattedMessage} from 'react-intl'
import {Language} from '../../i18n'

interface FeedItem {
  readonly body: string
  readonly title: string
}
interface Payload {
  [Language.en]: FeedItem[]
  [Language.fr]: FeedItem[]
  [Language.it]: FeedItem[]
  [Language.ja]: FeedItem[]
}
interface Props {
  language: Language
}

const getFeed = async () => {
  const json: Payload = await fetch('https://werewolfguide.netlify.app/api/v1/updateNotes.json').then(res => res.json())

  return json
}

export const UpdateNotes: React.FC<Props> = props => {
  const [feedItems, setFeedItems] = React.useState<FeedItem[]>([])

  React.useEffect(() => {
    getFeed().then(json => {
      setFeedItems(json[Language.ja])
    })
  }, [props.language])

  return (
    <div
      className="la--update-notes"
    >
      <div>
        <FormattedMessage
          id="UpdateNotes.header"
        />
      </div>
      {
        feedItems ?
          feedItems.map(item => (
            <FeedItem
              htmlStr={item.body}
              key={item.title}
            />
          )) :
          null
      }
    </div>
  )
}
UpdateNotes.displayName = 'UpdateNotes'
