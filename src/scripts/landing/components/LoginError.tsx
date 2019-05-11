import * as React from 'react'
import {FormattedMessage} from 'react-intl'

interface Props {}

export default function LoginError(props: Props) {
  return (
    <FormattedMessage
      id="login-error"
    >
      {
        text => (
          <>
            {text}
          </>
        )
      }
    </FormattedMessage>
  )
}
