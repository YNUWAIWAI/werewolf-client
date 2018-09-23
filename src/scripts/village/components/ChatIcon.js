// @flow
import Audience from './svg/Audience'
import type {Channel} from 'village'
import Grave from './svg/Grave'
import Master from './svg/Master'
import Private from './svg/Private'
import Public from './svg/Public'
import React from 'react'
import Werewolf from './svg/Werewolf'

export type Props = {
  +channel: Channel,
  +className: string
}

export default function ChatIcon(props: Props) {
  switch (props.channel) {
    case 'anonymousAudience':
    case 'onymousAudience':
      return (
        <div className={props.className}>
          <Audience />
        </div>
      )
    case 'grave':
      return (
        <div className={props.className}>
          <Grave />
        </div>
      )
    case 'hunter':
    case 'seer':
    case 'werewolf':
      return (
        <div className={props.className}>
          <Werewolf />
        </div>
      )
    case 'master':
      return (
        <div className={props.className}>
          <Master />
        </div>
      )
    case 'private':
      return (
        <div className={props.className}>
          <Private />
        </div>
      )
    case 'public':
      return (
        <div className={props.className}>
          <Public />
        </div>
      )
    default:
      return (
        <div className={props.className} />
      )
  }
}
