import * as React from 'react'
import {Checkbox} from '../../../lobby/components/atoms/Checkbox'
import {FormattedMessage} from 'react-intl'
import {Link} from './Link'

interface Props {
  readonly handleChangePrivacyCheck: () => void
  readonly handleChangeTermsCheck: () => void
  readonly isPrivacyChecked: boolean
  readonly isTermsChecked: boolean
}

export const Confirmation: React.FC<Props> = props => {
  return (
    <div className="la--form--confirmation">
      <Checkbox
        checked={props.isPrivacyChecked}
        className="la--checkbox"
        handleChange={props.handleChangePrivacyCheck}
        navigatable
      />
      <span
        onClick={props.handleChangePrivacyCheck}
      >
        <FormattedMessage
          id="signup-confirmation-privacy"
          values={{
            // eslint-disable-next-line
            a: (... chunks: React.ReactNode[]) => (
              <Link
                className="la--form--link"
                href="https://werewolfguide.netlify.app/docs/en/privacy"
              >
                {chunks}
              </Link>
            )
          }}
        />
      </span>
      <Checkbox
        checked={props.isTermsChecked}
        className="la--checkbox"
        handleChange={props.handleChangeTermsCheck}
        navigatable
      />
      <span
        onClick={props.handleChangeTermsCheck}
      >
        <FormattedMessage
          id="signup-confirmation-terms"
          values={{
            // eslint-disable-next-line
            a: (... chunks: React.ReactNode[]) => (
              <Link
                className="la--form--link"
                href="https://werewolfguide.netlify.app/docs/en/terms"
              >
                {chunks}
              </Link>
            )
          }}
        />
      </span>
    </div>
  )
}
Confirmation.displayName = 'Confirmation'
