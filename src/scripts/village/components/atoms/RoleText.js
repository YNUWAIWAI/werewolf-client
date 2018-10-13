// @flow
import {FormattedMessage} from 'react-intl'
import React from 'react'

type Props = {
  +role: string
}

export default function RoleText(props: Props) {
  const role =
    <span key={props.role}>
      {props.role}
    </span>

  return (
    <FormattedMessage
      id="RoleText"
      values={{
        role
      }}
    >
      {
        (... text): React$Node =>
          <div className="info--role--text">
            {text}
          </div>
      }
    </FormattedMessage>
  )
}
