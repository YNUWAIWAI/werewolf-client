import * as React from 'react'
import {FormattedMessage} from 'react-intl'

interface Props {}

export default function Confirmation(props: Props) {
  return (
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
  )
}
