import * as React from 'react'
import App from '../../src/scripts/landing/components/templates/App'
import language from './language'
import {radios} from '@storybook/addon-knobs'
import {storiesOf} from '@storybook/react'

storiesOf('landing|App', module)
  .add('default', () => {
    const story =
      <App
        csrfToken="token"
        lang={radios(language.label, language.options, language.defaultValue)}
        loginAction="/login"
        loginError={false}
        signupAction="/signup"
        signupError={false}
      />

    return story
  })
  .add('loginError', () => {
    const story =
      <App
        csrfToken="token"
        lang={radios(language.label, language.options, language.defaultValue)}
        loginAction="/login"
        loginError
        signupAction="/signup"
        signupError={false}
      />

    return story
  })
  .add('signupError', () => {
    const story =
      <App
        csrfToken="token"
        lang={radios(language.label, language.options, language.defaultValue)}
        loginAction="/login"
        loginError={false}
        signupAction="/signup"
        signupError
      />

    return story
  })
