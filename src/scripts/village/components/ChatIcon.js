// @flow
import type {ChatChannel} from 'village'
import Grave from './svg/Grave'
import Master from './svg/Master'
import Private from './svg/Private'
import Public from './svg/Public'
import React from 'react'
import Werewolf from './svg/Werewolf'

export type Props = {
  +channel: ChatChannel
}

export default function ChatIcon(props: Props) {
  switch (props.channel) {
    case 'grave':
      return (
        <div className="chat--icon">
          <Grave />
        </div>
      )
    case 'limited':
      return (
        <div className="chat--icon">
          <Werewolf />
        </div>
      )
    case 'master':
      return (
        <div className="chat--icon">
          <Master />
        </div>
      )
    case 'private':
      return (
        <div className="chat--icon">
          <Private />
        </div>
      )
    case 'public':
      return (
        <div className="chat--icon">
          <Public />
        </div>
      )
    default:
      return (
        <div className="chat--icon" />
      )
  }
}
