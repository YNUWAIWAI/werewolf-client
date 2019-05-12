import * as React from 'react'
import Csrf from './Csrf'
import ErrorMessage from './ErrorMessage'
import {FormattedMessage} from 'react-intl'
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
      <FormattedMessage
        id="signup-confirmation"
        values={{
          link:
            <FormattedMessage
              id="signup-confirmation-link"
            >
              {
                text => (
                  <a
                    href="terms"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    {text}
                  </a>
                )
              }
            </FormattedMessage>
        }}
      >
        {
          (... text) => (
            <p className="confirmation">
              {text}
            </p>
          )
        }
      </FormattedMessage>
      <SubmitButton
        type="signup"
      />
      <Csrf
        token={props.csrfToken}
      />
    </form>
  )
}
