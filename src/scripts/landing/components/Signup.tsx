import * as React from 'react'
import ErrorMessage from './ErrorMessage'
import SignupForm from './SignupForm'

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
      <SignupForm />
      <input
        name="csrfToken"
        type="hidden"
        value={props.csrfToken}
      />
    </form>
  )
}
