import * as React from 'react'
import {FormattedMessage} from 'react-intl'
import {lobby} from '../../types'

interface Props {}

export default function SelectHumanAvatarTableHeader(props: Props) {
  return (
    <div className="lo--select-avatar--table--header human">
      <div className="lo--select-avatar--table--header--item check-box" />
      <FormattedMessage
        id="SelectAvatarTableHeader(avatarName)"
      >
        {
          text => (
            <div className="lo--select-avatar--table--header--item avatar-name">
              {text}
            </div>
          )
        }
      </FormattedMessage>
    </div>
  )
}
