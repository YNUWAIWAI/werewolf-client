// @flow
import {FormattedMessage} from 'react-intl'
import React from 'react'

type Props = {
  +id: string
}

export default function Header(props: Props) {
  return (
    <FormattedMessage
      id={props.id}
    >
      {
        (text: string) =>
          <div className="header">
            {text}
          </div>
      }
    </FormattedMessage>
  )
}
