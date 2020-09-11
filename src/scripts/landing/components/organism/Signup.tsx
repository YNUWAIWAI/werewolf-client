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
  const [isPrivacyChecked, setIsPrivacyChecked] = React.useState(false)
  const [isTermsChecked, setIsTermsChecked] = React.useState(false)
  const [disabled, setDisabled] = React.useState(true)
  const handleChangePrivacyCheck = () => {
    setIsPrivacyChecked(!isPrivacyChecked)
  }
  const handleChangeTermsCheck = () => {
    setIsTermsChecked(!isTermsChecked)
  }

  React.useEffect(() => {
    setDisabled(!(isPrivacyChecked && isTermsChecked))
  }, [isPrivacyChecked, isTermsChecked])

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
        name="name"
        type="signup"
      />
      <FieldDescription
        name="name"
      />
      <TextField
        autoFocus={false}
        name="email"
        type="signup"
      />
      <FieldDescription
        name="email"
      />
      <TextField
        autoFocus={false}
        name="password"
        type="signup"
      />
      <FieldDescription
        name="password"
      />
      <Confirmation
        handleChangePrivacyCheck={handleChangePrivacyCheck}
        handleChangeTermsCheck={handleChangeTermsCheck}
        isPrivacyChecked={isPrivacyChecked}
        isTermsChecked={isTermsChecked}
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
