// @flow
import {type InjectIntlProvidedProps, injectIntl} from 'react-intl'
import Danger from '../atoms/svg/Danger'
import type {PingStatus} from 'lobby'
import React from 'react'
import Safe from '../atoms/svg/Safe'
import Warning from '../atoms/svg/Warning'

export type Props = {
  +avatarImage: string,
  +canKickOut: boolean,
  +isHost: boolean,
  +isMe: boolean,
  +kickOut: void => void,
  +name: string,
  +ping: string,
  +pingStatus: PingStatus
} & InjectIntlProvidedProps

export default injectIntl(function AvatarItem(props: Props) {
  const handleClick = () => {
    if (props.canKickOut) {
      const message = props.intl.formatMessage(
        {
          id: 'AvatarItem.kickout'
        },
        {
          name: props.name
        }
      )

      if (window.confirm(message)) {
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
            {
              props.intl.formatMessage(
                {
                  id: 'AvatarItem.host'
                }
              )
            }
          </div> :
          ''
      }
      <div className="avatar-list--item--ping">
        <Status />
        {props.ping.padStart(8, '0')}
      </div>
    </div>
  )
})
