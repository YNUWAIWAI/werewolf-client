// @flow
import React from 'react'

export type Props = {
  +avatarImage: string,
  +canKickOut: boolean,
  +isHost: boolean,
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
    <div className="avatar-list--item" onClick={handleClick}>
      <img className="avatar-list--item--image" src={props.avatarImage} />
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
    </div>
  )
}
