import * as React from 'react'
import {
  Language,
  getMessages
} from '../../i18n'
import {FormNavigation} from '../atoms/FormNavigation'
import {IntlProvider} from 'react-intl'
import {Lead} from '../organism/Lead'
import {Login} from '../organism/Login'
import {Signup} from '../organism/Signup'

interface Props {
  csrfToken: string
  language: Language
  loginAction: string
  loginError: boolean
  signupAction: string
  signupError: boolean
}

export const App: React.FC<Props> = props => {
  const messages = getMessages(props.language)
  const [isSignup, setIsSignup] = React.useState(false)

  return (
    <IntlProvider
      locale={props.language}
      messages={messages}
    >
      <div className="la la--landing">
        <Lead />
        <FormNavigation
          handleClick={setIsSignup}
          isSignup={isSignup}
        />
        {
          isSignup ?
            <Signup
              action={props.signupAction}
              csrfToken={props.csrfToken}
              error={props.signupError}
            /> :
            <Login
              action={props.loginAction}
              csrfToken={props.csrfToken}
              error={props.loginError}
            />
        }
      </div>
    </IntlProvider>
  )
}
App.displayName = 'App'
