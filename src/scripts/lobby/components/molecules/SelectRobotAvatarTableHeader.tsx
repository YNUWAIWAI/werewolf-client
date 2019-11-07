import * as React from 'react'
import {FormattedMessage} from 'react-intl'
import {lobby} from '../../types'

interface Props {
}

export default function SelectRobotAvatarTableHeader(props: Props) {
  return (
    <div className="lo--select-avatar--table--header">
      <div />
      <FormattedMessage
        id="SelectAvatarTableHeader(avatarName)"
      >
        {
          text => (
            <div>
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
            <div>
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
            <div>
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
            <div>
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
            <div>
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
            <div>
              {text}
            </div>
          )
        }
      </FormattedMessage>
    </div>
  )
}
