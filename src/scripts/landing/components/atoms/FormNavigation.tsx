import * as React from 'react'
import {FormattedMessage} from 'react-intl'

interface Props {
  handleClick: (value: boolean) => void
  isSignup: boolean
}

export default function FormNavigation(props: Props) {
  return (
    <button
      className="la--form-navigation"
      onClick={() => {
        props.handleClick(!props.isSignup)
      }}
    >
      <FormattedMessage
        id={`${props.isSignup ? 'login' : 'signup'}-navigation`}
      />
    </button>
  )
}
