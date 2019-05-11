import * as React from 'react'
import * as en from 'react-intl/locale-data/en'
import * as fr from 'react-intl/locale-data/fr'
import * as it from 'react-intl/locale-data/it'
import * as ja from 'react-intl/locale-data/ja'
import {IntlProvider, addLocaleData} from 'react-intl'
import {Language, getMessages} from '../../i18n/landing'
import Lead from './components/Lead'
import Login from './components/Login'

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

  return (
    <IntlProvider
      locale={props.lang}
      messages={messages}
    >
      <Lead />
      <Login
        action={props.loginAction}
        csrfToken={props.csrfToken}
        error={props.loginError}
      />
    </IntlProvider>
  )
}
