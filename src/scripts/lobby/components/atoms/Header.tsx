import * as React from 'react'
import {FormattedMessage} from 'react-intl'

interface Props {
  readonly id: string
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
