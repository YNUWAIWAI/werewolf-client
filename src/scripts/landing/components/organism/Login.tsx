import * as React from 'react'
import {Csrf} from '../atoms/Csrf'
import {ErrorMessage} from '../atoms/ErrorMessage'
import {SubmitButton} from '../atoms/SubmitButton'
import {TextField} from '../molecules/TextField'

interface Props {
  action: string
  csrfToken: string
  error: boolean
}

export const Login: React.FC<Props> = props => (
  <form
    action={props.action}
    className="la--form"
    method="POST"
  >
    <ErrorMessage
      id="login-error"
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
    <SubmitButton
      disabled={false}
      type="login"
    />
    <Csrf
      token={props.csrfToken}
    />
  </form>
)
Login.displayName = 'Login'
