// @flow
import AgentIcon from './AgentIcon'
import type {Channel} from 'village'
import ChatDate from './ChatDate'
import ChatIcon from './ChatIcon'
import ChatNum from './ChatNum'
import ChatText from './ChatText'
import React from 'react'
import {getChatChannel} from '../constants/Channels'

export type Props = {
  +id: number,
  +image: string,
  +intensionalDisclosureRange: Channel,
  +isMine: boolean,
  +name: string,
  +phaseStartTime: string,
  +phaseTimeLimit: number,
  +serverTimestamp: string,
  +text: string
}

export default function ChatItem(props: Props) {
  return (
    <div
      className={`chat--item ${props.isMine ? 'me' : ''} ${getChatChannel(props.intensionalDisclosureRange)}`}
      id={getChatChannel(props.intensionalDisclosureRange) === 'public' ? `message${String(props.id)}` : undefined}
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
        class="chat--agent"
        image={props.image}
        name={props.name}
      />
    </div>
  )
}
