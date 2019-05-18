import * as React from 'react'
import Csrf from '../atoms/Csrf'
import ErrorMessage from '../atoms/ErrorMessage'
import SubmitButton from '../atoms/SubmitButton'
import TextField from '../molecules/TextField'

interface Props {
  action: string
  csrfToken: string
  error: boolean
}

export default function Login(props: Props) {
  return (
    <form
      action={props.action}
      className="la--login"
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
