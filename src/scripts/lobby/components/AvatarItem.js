// @flow
import React from 'react'

export type Props = {
  +avatarImage: string,
  +canKickOut: boolean,
  +isHost: boolean,
  +isMe: boolean,
  +ping: string,
  +kickOut: void => void,
  +name: string
}

export default function AvatarItem(props: Props) {
  const handleClick = () => {
    if (props.canKickOut) {
      if (window.confirm(`${props.name}を退出させます`)) {
        props.kickOut()
      }
    }
  }

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
        {props.ping}
      </div>
    </div>
  )
}
