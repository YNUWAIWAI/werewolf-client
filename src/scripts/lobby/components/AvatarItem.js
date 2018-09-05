// @flow
import Danger from './svg/Danger'
import type {PingStatus} from 'lobby'
import React from 'react'
import Safe from './svg/Safe'
import Warning from './svg/Warning'

export type Props = {
  +avatarImage: string,
  +canKickOut: boolean,
  +isHost: boolean,
  +isMe: boolean,
  +kickOut: void => void,
  +name: string,
  +ping: string,
  +pingStatus: PingStatus
}

export default function AvatarItem(props: Props) {
  const handleClick = () => {
    if (props.canKickOut) {
      if (window.confirm(`${props.name}を退出させます`)) {
        props.kickOut()
      }
    }
  }
  const Status = {
    danger: Danger,
    safe: Safe,
    warning: Warning
  }[props.pingStatus]

  return (
    <div className={`avatar-list--item ${props.isMe ? 'me' : ''}`} onClick={handleClick}>
      <div className="avatar-list--item--image">
        <img src={props.avatarImage} />
      </div>
      <div className="avatar-list--item--name">
        {props.name}
      </div>
      {
        props.isHost ?
          <div className="avatar-list--item--host">
            {'Host'}
          </div> :
          ''
      }
      <div className="avatar-list--item--ping">
        <Status />
        {props.ping.padStart(8, '0')}
      </div>
    </div>
  )
}
