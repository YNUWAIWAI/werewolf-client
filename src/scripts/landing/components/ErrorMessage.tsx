import * as React from 'react'
import {FormattedMessage} from 'react-intl'

interface Props {
  type: 'login' | 'signup'
  visible: boolean
}

export default function ErrorMessage(props: Props) {
  if (!props.visible) {
    return null
  }

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
