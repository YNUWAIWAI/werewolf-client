import * as React from 'react'
import {FormattedMessage} from 'react-intl'

type Mode = 'login' | 'signup'
interface Props {
  handleClick: (value: Mode) => void
  mode: Mode
}

export const FormNavigation: React.FC<Props> = props => (
  <>
    <button
      className={`la--form-navigation login ${props.mode === 'login' ? 'selected' : ''}`}
      disabled={props.mode === 'login'}
      onClick={() => {
        props.handleClick('login')
      }}
    >
      <FormattedMessage
        id="login-navigation"
      />
    </button>
    <button
      className={`la--form-navigation signup ${props.mode === 'signup' ? 'selected' : ''}`}
      disabled={props.mode === 'signup'}
      onClick={() => {
        props.handleClick('signup')
      }}
    >
      <FormattedMessage
        id="signup-navigation"
      />
    </button>
  </>
)
FormNavigation.displayName = 'FormNavigation'
