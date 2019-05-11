import * as React from 'react'
import LoginError from './LoginError'
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
      {
        props.error ? <LoginError /> : null
      }
      <LoginField />
      <input
        name="csrfToken"
        type="hidden"
        value={props.csrfToken}
      />
    </form>
  )
}
