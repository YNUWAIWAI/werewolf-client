import * as React from 'react'
import {Confirmation} from '../molecules/Confirmation'
import {Csrf} from '../atoms/Csrf'
import {ErrorMessage} from '../atoms/ErrorMessage'
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
  const handleChangePrivacyCheck = () => {
    setIsPrivacyChecked(!isPrivacyChecked)
  }
  const handleChangeTermsCheck = () => {
    setIsTermsChecked(!isTermsChecked)
  }

  return (
    <form
      action={props.action}
      className="la--form"
      method="POST"
    >
      <ErrorMessage
        type="signup"
        visible={props.error}
      />
      <TextField
        autoFocus
        name="name"
        type="signup"
      />
      <TextField
        autoFocus={false}
        name="email"
        type="signup"
      />
      <TextField
        autoFocus={false}
        name="password"
        type="signup"
      />
      <Confirmation
        handleChangePrivacyCheck={handleChangePrivacyCheck}
        handleChangeTermsCheck={handleChangeTermsCheck}
        isPrivacyChecked={isPrivacyChecked}
        isTermsChecked={isTermsChecked}
      />
      <SubmitButton
        type="signup"
      />
      <Csrf
        token={props.csrfToken}
      />
    </form>
  )
}
Signup.displayName = 'Signup'
