import * as React from 'react'
import {Close} from '../atoms/svg/Close'
import {Danger} from '../atoms/svg/Danger'
import {FormattedMessage} from 'react-intl'
import {Safe} from '../atoms/svg/Safe'
import {Warning} from '../atoms/svg/Warning'
import {lobby} from '../../types'

export interface Props {
  readonly avatarImage: string
  readonly canKickOut: boolean
  readonly confirmKickOutPlayer: (values: {name: string, token: lobby.Token}) => void
  readonly isAnonymous: boolean
  readonly isHost: boolean
  readonly isMe: boolean
  readonly name: string
  readonly ping: string
  readonly pingStatus: lobby.PingStatus
  readonly token: lobby.Token
}

export const AvatarItem: React.FC<Props> = props => {
  const handleClick = () => {
    if (props.canKickOut) {
      props.confirmKickOutPlayer({
        name: props.name,
        token: props.token
      })
    }
  }
  const Status = {
    danger: Danger,
    safe: Safe,
    warning: Warning
  }[props.pingStatus]

  return (
    <div
      className={`lo--avatar-list--item ${props.isMe ? 'me' : ''} ${props.canKickOut ? 'can-kick-out' : ''}`}
      onClick={() => handleClick()}
    >
      <div className="lo--avatar-list--item--image">
        <img src={props.avatarImage} />
      </div>
      {
        props.isAnonymous ?
          <div
            className="lo--avatar-list--item--name"
          >
            <FormattedMessage
              id="AvatarItem.name.anonymous"
            />
          </div> :
          <div
            className="lo--avatar-list--item--name"
          >
            {props.name}
          </div>
      }
      {
        props.isHost ?
          <div
            className="lo--avatar-list--item--host"
          >
            <FormattedMessage
              id="AvatarItem.host"
            />
          </div> :
          null
      }
      <div className="lo--avatar-list--item--ping">
        <Status />
        {`${props.ping} s`}
      </div>
      {
        props.canKickOut ?
          <Close className="lo--avatar-list--item--kick-out" /> :
          null
      }
    </div>
  )
}
AvatarItem.displayName = 'AvatarItem'
