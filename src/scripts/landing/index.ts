import {Language, getMessages} from '../../i18n/landing'

const lang = (() => {
  switch (navigator.language) {
    case 'en':
      return Language.en
    case 'fr':
      return Language.fr
    case 'it':
      return Language.it
    case 'ja':
      return Language.ja
    default:
      return Language.en
  }
})()
const messages = getMessages(lang)
const insertText = (id: string) => {
  const elem = document.getElementById(id)

  if (elem) {
    elem.textContent = messages[id]
  }
}
const ids = [
  'login-error',
  'login-label-email',
  'login-label-password',
  'login-submit',
  'signup-confirmation',
  'signup-error',
  'signup-label-email',
  'signup-label-name',
  'signup-label-password',
  'signup-submit'
]

ids.forEach(insertText)
