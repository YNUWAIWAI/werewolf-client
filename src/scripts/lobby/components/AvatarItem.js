// @flow
import React from 'react'

export type Props = {
  +avatarImage: string,
  +isHost: boolean,
  +name: string
}

export default function AvatarItem(props: Props) {
  return (
    <div className="avatar-list--item">
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
