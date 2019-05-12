import * as React from 'react'
import ErrorMessage from './ErrorMessage'
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
      className="signup"
      method="POST"
    >
      {
        props.error ? <ErrorMessage type="signup" /> : null
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
