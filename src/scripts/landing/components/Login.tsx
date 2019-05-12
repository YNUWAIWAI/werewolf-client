import * as React from 'react'
import ErrorMessage from './ErrorMessage'
import {FormattedMessage} from 'react-intl'
import TextField from './TextField'

interface Props {
  action: string
  csrfToken: string
  error: boolean
}

export default function Login(props: Props) {
  return (
    <form
      action={props.action}
      className="login"
      method="POST"
    >
      <ErrorMessage
        type="login"
        visible={props.error}
      />
      <TextField
        autoFocus
        name="email"
        type="login"
      />
      <TextField
        autoFocus={false}
        name="password"
        type="login"
      />
      <FormattedMessage
        id="login-submit"
      >
        {
          text => (
            <button
              className="button"
              type="submit"
            >
              {text}
            </button>
          )
        }
      </FormattedMessage>
      <input
        name="csrfToken"
        type="hidden"
        value={props.csrfToken}
      />
    </form>
  )
}
