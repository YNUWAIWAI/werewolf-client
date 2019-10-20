import * as React from 'react'
import {IntlProvider} from 'react-intl'
import {Language, getMessages} from '../../i18n'
import FormNavigation from '../atoms/FormNavigation'
import Lead from '../organism/Lead'
import Login from '../organism/Login'
import Signup from '../organism/Signup'

interface Props {
  csrfToken: string
  lang: Language
  loginAction: string
  loginError: boolean
  signupAction: string
  signupError: boolean
}

export default function App(props: Props) {
  const messages = getMessages(props.lang)
  const [isSignup, setIsSignup] = React.useState(false)

  return (
    <IntlProvider
      locale={props.lang}
      messages={messages}
    >
      <div className="la--landing">
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
