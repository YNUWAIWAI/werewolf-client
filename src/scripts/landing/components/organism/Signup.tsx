import * as React from 'react'
import {Confirmation} from '../molecules/Confirmation'
import {Csrf} from '../atoms/Csrf'
import {ErrorMessage} from '../atoms/ErrorMessage'
import {FieldDescription} from '../atoms/FieldDescription'
import {SubmitButton} from '../atoms/SubmitButton'
import {TextField} from '../molecules/TextField'

interface Props {
  action: string
  csrfToken: string
  error: boolean
}

export const Signup: React.FC<Props> = props => {
  const [privacyIsChecked, setPrivacyIsChecked] = React.useState(false)
  const [termsIsChecked, setTermsIsChecked] = React.useState(false)
  const [emailIsValid, setEmailIsValid] = React.useState(false)
  const [nameIsValid, setNameIsValid] = React.useState(false)
  const [passwordIsValid, setPasswordIsValid] = React.useState(false)
  const [disabled, setDisabled] = React.useState(true)

  React.useEffect(() => {
    setDisabled(!(privacyIsChecked && termsIsChecked))
  }, [privacyIsChecked, termsIsChecked, emailIsValid, nameIsValid, passwordIsValid])

  return (
    <form
      action={props.action}
      className="la--form"
      method="POST"
    >
      <ErrorMessage
        id="signup-error"
        visible={props.error}
      />
      <TextField
        autoFocus
        handleValidityChange={setNameIsValid}
        name="name"
        type="signup"
      />
      <FieldDescription
        name="name"
      />
      <TextField
        autoFocus={false}
        handleValidityChange={setEmailIsValid}
        name="email"
        type="signup"
      />
      <FieldDescription
        name="email"
      />
      <TextField
        autoFocus={false}
        handleValidityChange={setPasswordIsValid}
        name="password"
        type="signup"
      />
      <FieldDescription
        name="password"
      />
      <Confirmation
        handlePrivacyCheckChange={setPrivacyIsChecked}
        handleTermsCheckChange={setTermsIsChecked}
        privacyIsChecked={privacyIsChecked}
        termsIsChecked={termsIsChecked}
      />
      <SubmitButton
        disabled={disabled}
        type="signup"
      />
      <Csrf
        token={props.csrfToken}
      />
    </form>
  )
}
Signup.displayName = 'Signup'
