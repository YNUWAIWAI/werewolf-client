import * as React from 'react'
import * as ReactDOM from 'react-dom'
import App from './components/templates/App'
import {Language} from './i18n'

const language = (() => {
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

const elem = document.getElementById('script')
const root = document.getElementById('root')

if (!elem) {
  throw Error('Not found: script element')
}
if (!elem.dataset.csrfToken) {
  throw Error('Not found: data-csrf-token')
}
if (!elem.dataset.loginAction) {
  throw Error('Not found: data-login-action')
}
if (!elem.dataset.loginError) {
  throw Error('Not found: data-login-error')
}
if (!elem.dataset.loginAction) {
  throw Error('Not found: data-login-action')
}
if (!elem.dataset.signupError) {
  throw Error('Not found: data-signup-error')
}
if (!elem.dataset.signupAction) {
  throw Error('Not found: data-signup-action')
}
if (!root) {
  throw Error('Not found: root element')
}
ReactDOM.render(
  <App
    csrfToken={elem.dataset.csrfToken}
    language={language}
    loginAction={elem.dataset.loginAction}
    loginError={elem.dataset.loginError === 'true'}
    signupAction={elem.dataset.signupAction}
    signupError={elem.dataset.signupError === 'true'}
  />,
  root
)
