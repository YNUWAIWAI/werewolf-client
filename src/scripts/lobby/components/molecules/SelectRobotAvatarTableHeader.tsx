import * as React from 'react'
import {FormattedMessage} from 'react-intl'
import {lobby} from '../../types'

interface Props {}

export default function SelectRobotAvatarTableHeader(props: Props) {
  return (
    <div className="lo--select-avatar--table--header">
      <div className="lo--select-avatar--table--header--item check-box" />
      <FormattedMessage
        id="SelectAvatarTableHeader(avatarName)"
      >
        {
          text => (
            <div className="lo--select-avatar--table--header--item avatar-item">
              {text}
            </div>
          )
        }
      </FormattedMessage>
      <FormattedMessage
        id="SelectAvatarTableHeader(status)"
      >
        {
          text => (
            <div className="lo--select-avatar--table--header--item status">
              {text}
            </div>
          )
        }
      </FormattedMessage>
      <FormattedMessage
        id="SelectAvatarTableHeader(authorized)"
      >
        {
          text => (
            <div className="lo--select-avatar--table--header--item authorized">
              {text}
            </div>
          )
        }
      </FormattedMessage>
      <FormattedMessage
        id="SelectAvatarTableHeader(test)"
      >
        {
          text => (
            <div className="lo--select-avatar--table--header--item test">
              {text}
            </div>
          )
        }
      </FormattedMessage>
      <FormattedMessage
        id="SelectAvatarTableHeader(automation)"
      >
        {
          text => (
            <div className="lo--select-avatar--table--header--item automation">
              {text}
            </div>
          )
        }
      </FormattedMessage>
      <FormattedMessage
        id="SelectAvatarTableHeader(accessToken)"
      >
        {
          text => (
            <div className="lo--select-avatar--table--header--item access-token">
              {text}
            </div>
          )
        }
      </FormattedMessage>
    </div>
  )
}
