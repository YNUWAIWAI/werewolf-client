import * as React from 'react'
import SignupError from './SignupError'
import SignupField from './SignupField'

interface Props {
  action: string
  csrfToken: string
  error: boolean
}

export default function Signup(props: Props) {
  return (
    <form
      action={props.action}
      className="login"
      method="POST"
    >
      {
        props.error ? <SignupError /> : null
      }
      <SignupField />
      <input
        name="csrfToken"
        type="hidden"
        value={props.csrfToken}
      />
    </form>
  )
}
