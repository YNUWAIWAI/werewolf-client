import * as React from 'react'
import {CharacterIcon} from '../atoms/CharacterIcon'
import {ChatDay} from '../atoms/ChatDay'
import {ChatIcon} from '../atoms/ChatIcon'
import {ChatNum} from '../atoms/ChatNum'
import {ChatStar} from '../atoms/ChatStar'
import ChatText from '../../containers/ChatTextContainer'
import {getChatChannelFromChannel} from '../../util'
import {village} from '../../types'

export interface Props {
  readonly handleStar: (isMarked: boolean) => void
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
}

export const ChatItem: React.FC<Props> = props => {
  const chatChannel = getChatChannelFromChannel(props.intensionalDisclosureRange)

  return (
    <div
      className={`vi--chat--item ${props.isMine ? 'me' : ''} ${chatChannel}`}
      id={chatChannel === 'public' ? `message${props.id}` : undefined}
    >
      <div className="vi--chat--arrow-box">
        <ChatIcon
          channel={props.intensionalDisclosureRange}
          className="vi--chat--icon"
        />
        <ChatNum
          id={props.id}
          intensionalDisclosureRange={props.intensionalDisclosureRange}
        />
        <ChatText
          text={props.text}
        />
        <ChatDay
          from={props.phaseStartTime}
          limit={props.phaseTimeLimit}
          to={props.serverTimestamp}
        />
        <ChatStar
          handleStar={props.handleStar}
          isMarked={props.isMarked}
        />
      </div>
      <CharacterIcon
        className="vi--chat--character"
        image={props.image}
        initial={props.initial}
        name={props.name}
      />
    </div>
  )
}
ChatItem.displayName = 'ChatItem'
