import * as React from 'react'
import {FormattedMessage} from 'react-intl'

interface Props {
  handleClick: (value: boolean) => void
  isSignup: boolean
}

export default function FormNavigation(props: Props) {
  return (
    <FormattedMessage
      id={`${props.isSignup ? 'login' : 'signup'}-navigation`}
    >
      {
        text => (
          <button
            className="la--mode-button"
            onClick={() => {
              props.handleClick(!props.isSignup)
            }}
          >
            {text}
          </button>
        )
      }
    </FormattedMessage>
  )
}
