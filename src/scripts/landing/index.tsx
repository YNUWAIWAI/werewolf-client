import * as React from 'react'
import * as ReactDom from 'react-dom'
import * as en from 'react-intl/locale-data/en'
import * as fr from 'react-intl/locale-data/fr'
import * as it from 'react-intl/locale-data/it'
import * as ja from 'react-intl/locale-data/ja'
import {IntlProvider, addLocaleData} from 'react-intl'
import {Language, getMessages} from '../../i18n/landing'
import Lead from './components/Lead'
import LoginError from './components/LoginError'
import LoginFiled from './components/LoginField'

const lang = (() => {
  if ((/^eng?/).test(navigator.language)) {
    return Language.en
  } else if ((/^fr[ae]?/).test(navigator.language)) {
    return Language.fr
  } else if ((/^ita?/).test(navigator.language)) {
    return Language.it
  } else if ((/^ja(?!v)|pn/).test(navigator.language)) {
    return Language.ja
  }

  return Language.en
})()

addLocaleData([... en, ... fr, ... it, ... ja])
const messages = getMessages(lang)
// const insertText = (id: string) => {
//   const elem = document.getElementById(id)

//   if (elem) {
//     if (id === 'signup-confirmation') {
//       elem.insertAdjacentHTML('afterbegin', messages[id])
//     } else {
//       elem.textContent = messages[id]
//     }
//   }
// }
// const ids = [
//   'login-error',
//   'login-label-email',
//   'login-label-password',
//   'login-submit',
//   'signup-confirmation',
//   'signup-error',
//   'signup-label-email',
//   'signup-label-name',
//   'signup-label-password',
//   'signup-submit'
// ]

// ids.forEach(insertText)

const lead = document.getElementById('lead')
const loginError = document.getElementById('login-error')
const loginFiled = document.getElementById('login-filed')

if (lead) {
  ReactDom.render(
    <IntlProvider
      locale={lang}
      messages={messages}
    >
      <Lead />
    </IntlProvider>,
    lead
  )
}
if (loginError) {
  ReactDom.render(
    <IntlProvider
      locale={lang}
      messages={messages}
    >
      <LoginError />
    </IntlProvider>,
    loginError
  )
}
if (loginFiled) {
  ReactDom.render(
    <IntlProvider
      locale={lang}
      messages={messages}
    >
      <LoginFiled />
    </IntlProvider>,
    loginFiled
  )
}
