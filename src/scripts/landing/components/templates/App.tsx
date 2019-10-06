import * as React from 'react'
import {IntlProvider, addLocaleData} from 'react-intl'
import {Language, getMessages} from '../../i18n'
import FormNavigation from '../atoms/FormNavigation'
import Lead from '../organism/Lead'
import Login from '../organism/Login'
import Signup from '../organism/Signup'
import en from 'react-intl/locale-data/en'
import fr from 'react-intl/locale-data/fr'
import it from 'react-intl/locale-data/it'
import ja from 'react-intl/locale-data/ja'

addLocaleData([... en, ... fr, ... it, ... ja])

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
