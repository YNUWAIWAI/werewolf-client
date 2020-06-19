import * as React from 'react'
import {FormattedMessage} from 'react-intl'

interface Props {
  handleClick: (value: boolean) => void
  isSignup: boolean
}

export const FormNavigation: React.FC<Props> = props => (
  <>
    <button
      className={`la--form-navigation login ${props.isSignup ? '' : 'selected'}`}
      disabled={!props.isSignup}
      onClick={() => {
        props.handleClick(false)
      }}
    >
      <FormattedMessage
        id="login-navigation"
      />
    </button>
    <button
      className={`la--form-navigation signup ${props.isSignup ? 'selected' : ''}`}
      disabled={props.isSignup}
      onClick={() => {
        props.handleClick(true)
      }}
    >
      <FormattedMessage
        id="signup-navigation"
      />
    </button>
  </>
)
FormNavigation.displayName = 'FormNavigation'

