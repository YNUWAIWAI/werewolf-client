import * as React from 'react'
import {Csrf} from '../atoms/Csrf'
import {ErrorMessage} from '../atoms/ErrorMessage'
import {SubmitButton} from '../atoms/SubmitButton'
import {TextField} from '../molecules/TextField'

interface Props {
  action: string
  csrfToken: string
  error: boolean
  visible: boolean
}

export const Login: React.FC<Props> = props => {
  const [emailIsValid, setEmailIsValid] = React.useState(false)
  const [passwordIsValid, setPasswordIsValid] = React.useState(false)
  const [disabled, setDisabled] = React.useState(true)

  React.useEffect(() => {
    setDisabled(!(emailIsValid && passwordIsValid))
  }, [emailIsValid, passwordIsValid])

  return (
    <form
      action={props.action}
      className={`la--form ${props.visible ? '' : 'hidden'}`}
      method="POST"
    >
      <ErrorMessage
        id="login-error"
        visible={props.error}
      />
      <TextField
        autoFocus
        handleValidityChange={setEmailIsValid}
        name="email"
        type="login"
      />
      <TextField
        autoFocus={false}
        handleValidityChange={setPasswordIsValid}
        name="password"
        type="login"
      />
      <SubmitButton
        disabled={disabled}
        type="login"
      />
      <Csrf
        token={props.csrfToken}
      />
    </form>
  )
}

Login.displayName = 'Login'
