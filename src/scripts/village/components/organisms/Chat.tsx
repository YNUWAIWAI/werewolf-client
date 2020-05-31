import * as React from 'react'
import {ChatDelimeter} from '../atoms/ChatDelimeter'
import {ChatItem} from '../molecules/ChatItem'
import {village} from '../../types'

export interface StateProps {
  readonly allIds: village.ChatId[]
  readonly byId: {
    [id in village.ChatId]: {
      readonly id: village.Payload$ChatId
      readonly image: string
      readonly initial: string
      readonly intensionalDisclosureRange: village.Channel
      readonly isMarked: boolean
      readonly isMine: boolean
      readonly name: string
      readonly phaseStartTime: string
      readonly phaseTimeLimit: number
      readonly serverTimestamp: string
      readonly text: string
      readonly type: village.ChatItemType.item
    } | {
      readonly day: number
      readonly type: village.ChatItemType.delimeter
    }
  }
  readonly expand: boolean
  readonly navigatable: boolean
}
export interface DispatchProps {
  readonly handleStar: (id: village.ChatId) => (isMarked: boolean) => void
}
export interface Props extends StateProps, DispatchProps {}

export const Chat: React.FC<Props> = props => {
  const [atBottom, setAtBottom] = React.useState(true)
  const chatRef = React.useRef<HTMLDivElement>(null)
  const scrollToBottom = () => {
    const elem = chatRef.current

    if (!elem) {
      return
    }
    elem.scrollTop = elem.scrollHeight
  }

  React.useEffect(() => {
    if (atBottom) {
      scrollToBottom()
    }
  })

  const handleScroll = () => {
    const elem = chatRef.current

    if (!elem) {
      return
    }
    setAtBottom(elem.scrollHeight <= elem.clientHeight + elem.scrollTop)
  }

  return (
    <div
      className={`vi--chat ${props.expand ? 'expand' : ''}`}
      onScroll={handleScroll}
      ref={chatRef}
    >
      {
        props.allIds.map(id => {
          const item = props.byId[id]

          switch (item.type) {
            case 'item':
              return (
                <ChatItem
                  handleStar={props.handleStar(id)}
                  id={item.id}
                  image={item.image}
                  initial={item.initial}
                  intensionalDisclosureRange={item.intensionalDisclosureRange}
                  isMarked={item.isMarked}
                  isMine={item.isMine}
                  key={id}
                  name={item.name}
                  navigatable={props.navigatable}
                  phaseStartTime={item.phaseStartTime}
                  phaseTimeLimit={item.phaseTimeLimit}
                  serverTimestamp={item.serverTimestamp}
                  text={item.text}
                />
              )
            case 'delimeter':
              return (
                <ChatDelimeter
                  day={item.day}
                  key={id}
                />
              )
            default:
              throw Error('Unexpected item type')
          }
        })
      }
    </div>
  )
}
Chat.displayName = 'Chat'
