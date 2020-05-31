import * as React from 'react'
import {FormattedMessage} from 'react-intl'

interface Props {
  handleClick: (value: boolean) => void
  isSignup: boolean
}

export const FormNavigation: React.FC<Props> = props => (
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
FormNavigation.displayName = 'FormNavigation'

