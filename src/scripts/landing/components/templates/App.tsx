import * as React from 'react'
import {
  Language,
  getMessages
} from '../../i18n'
import {Footer} from '../organism/Footer'
import {FormNavigation} from '../atoms/FormNavigation'
import {IntlProvider} from 'react-intl'
import {Lead} from '../organism/Lead'
import {Login} from '../organism/Login'
import {Publicity} from '../organism/Publicity'
import {Signup} from '../organism/Signup'
import {Sponsor} from '../organism/Sponsor'
import {UpdateNotes} from '../organism/UpdateNotes'

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
  const ref = React.useRef<HTMLDivElement>(null)
  const [isSignup, setIsSignup] = React.useState(false)

  React.useEffect(() => {
    const elem = ref.current

    if (elem) {
      const backgroundColor = window.getComputedStyle(elem).backgroundColor

      document.body.style.background = backgroundColor
    }
  }, [ref])

  return (
    <IntlProvider
      locale={props.language}
      messages={messages}
    >
      <div
        className="la la--grid"
        ref={ref}
      >
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
        <UpdateNotes />
        <Publicity />
        <Sponsor />
        <Footer />
      </div>
    </IntlProvider>
  )
}
App.displayName = 'App'
