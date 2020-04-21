import * as React from 'react'
import {FormattedMessage} from 'react-intl'

interface Props {
  readonly id: string
}

export default function Header(props: Props) {
  return (
    <div className="lo--header">
      <FormattedMessage
        id={props.id}
      />
    </div>
  )
}
