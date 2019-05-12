import * as React from 'react'
import {FormattedMessage} from 'react-intl'
import TextField from './TextField'

interface Props {}

export default function SignupForm() {
  return (
    <div className="signup-field">
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
      <FormattedMessage
        id="signup-submit"
      >
        {
          text => (
            <button
              className="button"
              type="submit"
            >
              {text}
            </button>
          )
        }
      </FormattedMessage>
    </div>
  )
}
