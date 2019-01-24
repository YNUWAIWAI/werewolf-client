import * as React from 'react'
import AgentIcon from '../atoms/AgentIcon'
import ChatDate from '../atoms/ChatDate'
import ChatIcon from '../atoms/ChatIcon'
import ChatNum from '../atoms/ChatNum'
import ChatText from '../atoms/ChatText'
import {getChatChannelFromChannel} from '../../util'

export interface Props {
  readonly id: number
  readonly image: string
  readonly intensionalDisclosureRange: village.Channel
  readonly isMine: boolean
  readonly name: string
  readonly phaseStartTime: string
  readonly phaseTimeLimit: number
  readonly serverTimestamp: string
  readonly text: string
}

export default function ChatItem(props: Props) {
  const chatChannel = getChatChannelFromChannel(props.intensionalDisclosureRange)

  return (
    <div
      className={`chat--item ${props.isMine ? 'me' : ''} ${chatChannel}`}
      id={chatChannel === 'public' ? `message${String(props.id)}` : undefined}
    >
      <div className="chat--arrow-box">
        <ChatIcon
          channel={props.intensionalDisclosureRange}
          className="chat--icon"
        />
        <ChatNum
          id={props.id}
          intensionalDisclosureRange={props.intensionalDisclosureRange}
        />
        <ChatText
          text={props.text}
        />
        <ChatDate
          from={props.phaseStartTime}
          limit={props.phaseTimeLimit}
          to={props.serverTimestamp}
        />
      </div>
      <AgentIcon
        className="chat--agent"
        image={props.image}
        name={props.name}
      />
    </div>
  )
}
