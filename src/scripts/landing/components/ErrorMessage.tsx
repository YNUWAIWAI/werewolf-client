import * as React from 'react'
import {FormattedMessage} from 'react-intl'

interface Props {
  type: 'login' | 'signup'
}

export default function ErrorMessage(props: Props) {
  return (
    <FormattedMessage
      id={`${props.type}-error`}
    >
      {
        text => (
          <p className="error">
            {text}
          </p>
        )
      }
    </FormattedMessage>
  )
}
