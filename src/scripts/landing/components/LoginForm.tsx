import * as React from 'react'
import {FormattedMessage} from 'react-intl'
import TextField from './TextField'

interface Props {}

export default function LoginForm(props: Props) {
  return (
    <div className="login-field">
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
    </div>
  )
}
