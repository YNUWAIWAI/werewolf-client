import * as React from 'react'
import {FormattedMessage, injectIntl} from 'react-intl'
import Danger from '../atoms/svg/Danger'
import Safe from '../atoms/svg/Safe'
import Warning from '../atoms/svg/Warning'

export interface Props extends ReactIntl.InjectedIntlProps {
  readonly avatarImage: string
  readonly canKickOut: boolean
  readonly confirmKickOutPlayer: () => void
  readonly isAnonymous: boolean
  readonly isHost: boolean
  readonly isMe: boolean
  readonly name: string
  readonly ping: string
  readonly pingStatus: lobby.PingStatus
}

export default injectIntl(function AvatarItem(props: Props) {
  const handleClick = () => {
    if (props.canKickOut) {
      props.confirmKickOutPlayer()
    }
  }
  const Status = {
    danger: Danger,
    safe: Safe,
    warning: Warning
  }[props.pingStatus]

  return (
    <div
      className={`avatar-list--item ${props.isMe ? 'me' : ''}`}
      onClick={() => handleClick()}
    >
      <div className="avatar-list--item--image">
        <img src={props.avatarImage} />
      </div>
      {
        props.isAnonymous ?
          <FormattedMessage
            id="AvatarItem.name.anonymous"
          >
            {
              text =>
                <div className="avatar-list--item--name">
                  {text}
                </div>
            }
          </FormattedMessage> :
          <div className="avatar-list--item--name">
            {props.name}
          </div>
      }
      {
        props.isHost ?
          <FormattedMessage
            id="AvatarItem.host"
          >
            {
              text =>
                <div className="avatar-list--item--host">
                  {text}
                </div>
            }
          </FormattedMessage> :
          null
      }
      <div className="avatar-list--item--ping">
        <Status />
        {props.ping.padStart(8, '0')}
      </div>
    </div>
  )
})
