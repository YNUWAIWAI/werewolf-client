import * as React from 'react'
import {Checkbox} from '../../../lobby/components/atoms/Checkbox'
import {FormattedMessage} from 'react-intl'
import {Link} from '../atoms/Link'

interface Props {
  readonly handlePrivacyCheckChange: (checked: boolean) => void
  readonly handleTermsCheckChange: (checked: boolean) => void
  readonly privacyIsChecked: boolean
  readonly termsIsChecked: boolean
}

export const Confirmation: React.FC<Props> = props => {
  const handlePrivacyCheckChange = () => {
    props.handlePrivacyCheckChange(!props.privacyIsChecked)
  }
  const handleTermsCheckChange = () => {
    props.handleTermsCheckChange(!props.termsIsChecked)
  }

  return (
    <div className="la--form--confirmation">
      <Checkbox
        checked={props.privacyIsChecked}
        className="la--checkbox"
        handleChange={handlePrivacyCheckChange}
        navigatable
      />
      <span>
        <FormattedMessage
          id="signup-confirmation-privacy"
          values={{
            // eslint-disable-next-line
            a: (... chunks: React.ReactNode[]) => (
              <Link
                className="la--form--link"
                handleClick={handlePrivacyCheckChange}
                href="https://werewolfguide.netlify.app/docs/en/privacy"
              >
                {chunks}
              </Link>
            )
          }}
        />
      </span>
      <Checkbox
        checked={props.termsIsChecked}
        className="la--checkbox"
        handleChange={handleTermsCheckChange}
        navigatable
      />
      <span>
        <FormattedMessage
          id="signup-confirmation-terms"
          values={{
            // eslint-disable-next-line
            a: (... chunks: React.ReactNode[]) => (
              <Link
                className="la--form--link"
                handleClick={handleTermsCheckChange}
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
