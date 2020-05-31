import * as React from 'react'
import {FormattedMessage} from 'react-intl'

interface Props {
  readonly id: string
}

export const Header: React.FC<Props> = props => (
  <div className="lo--header">
    <FormattedMessage
      id={props.id}
    />
  </div>
)
Header.displayName = 'Header'
