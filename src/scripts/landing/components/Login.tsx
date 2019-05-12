import * as React from 'react'
import ErrorMessage from './ErrorMessage'
import LoginForm from './LoginForm'

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
      <LoginForm />
      <input
        name="csrfToken"
        type="hidden"
        value={props.csrfToken}
      />
    </form>
  )
}
