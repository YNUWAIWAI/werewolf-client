import * as React from 'react'
import ErrorMessage from './ErrorMessage'
import LoginField from './LoginField'

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
      <LoginField />
      <input
        name="csrfToken"
        type="hidden"
        value={props.csrfToken}
      />
    </form>
  )
}
