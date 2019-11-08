import * as React from 'react'
import {FormattedMessage} from 'react-intl'
import {lobby} from '../../types'

interface Props {
  readonly authorized: lobby.Authorized
}

export default function SelectAvatarTableBodyAuthorized(props: Props) {
  return (
    <FormattedMessage
      id={`SelectAvatarTableBodyAuthorized.authorized(${props.authorized})`}
    >
      {
        text => (
          <div className="lo--select-avatar--table--body--item authorized">
            {text}
          </div>
        )
      }
    </FormattedMessage>
  )
}
