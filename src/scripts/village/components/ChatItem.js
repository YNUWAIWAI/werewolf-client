// @flow
import AgentIcon from './AgentIcon'
import {Channels} from '../constants/Channels'
import ChatDate from './ChatDate'
import ChatNum from './ChatNum'
import ChatText from './ChatText'
import React from 'react'

export type Props = {
  id?: number,
  image: string,
  intensionalDisclosureRange: Channel,
  isMine: boolean,
  name: string,
  phaseStartTime: string,
  phaseTimeLimit: number,
  serverTimestamp: string,
  text: string
}

export default function ChatItem(props: Props) {
  return (
    <div className={`chat--item ${props.isMine ? 'me' : ''} ${Channels[props.intensionalDisclosureRange]}`} id={Channels[props.intensionalDisclosureRange] === 'public' ? `message${String(props.id)}` : undefined}>
      <div className="chat--arrow-box">
        <ChatNum id={props.id} intensionalDisclosureRange={props.intensionalDisclosureRange} />
        <ChatText text={props.text} />
        <ChatDate from={props.phaseStartTime} limit={props.phaseTimeLimit} to={props.serverTimestamp} />
      </div>
      <AgentIcon class="chat--icon" image={props.image} name={props.name} />
    </div>
  )
}
