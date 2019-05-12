import * as React from 'react'
import Csrf from './Csrf'
import ErrorMessage from './ErrorMessage'
import SubmitButton from './SubmitButton'
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
      <SubmitButton
        type="login"
      />
      <Csrf
        token={props.csrfToken}
      />
    </form>
  )
}
