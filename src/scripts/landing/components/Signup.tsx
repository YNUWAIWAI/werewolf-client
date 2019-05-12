import * as React from 'react'
import Confirmation from './Confirmation'
import Csrf from './Csrf'
import ErrorMessage from './ErrorMessage'
import SubmitButton from './SubmitButton'
import TextField from './TextField'

interface Props {
  action: string
  csrfToken: string
  error: boolean
}

export default function Signup(props: Props) {
  return (
    <form
      action={props.action}
      className="signup"
      method="POST"
    >
      <ErrorMessage
        type="signup"
        visible={props.error}
      />
      <TextField
        autoFocus={false}
        name="name"
        type="signup"
      />
      <TextField
        autoFocus={false}
        name="email"
        type="signup"
      />
      <TextField
        autoFocus={false}
        name="password"
        type="signup"
      />
      <Confirmation />
      <SubmitButton
        type="signup"
      />
      <Csrf
        token={props.csrfToken}
      />
    </form>
  )
}
