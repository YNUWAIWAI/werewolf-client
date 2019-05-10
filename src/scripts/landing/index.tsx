// import {Language, getMessages} from '../../i18n/landing'

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

// const messages = getMessages(lang)
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

import * as React from 'react'
import * as ReactDomServer from 'react-dom/server'
import Lead from './components/Lead'

console.log(ReactDomServer.renderToString(<Lead />))
