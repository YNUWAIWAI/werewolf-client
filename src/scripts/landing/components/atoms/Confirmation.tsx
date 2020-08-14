import * as React from 'react'
import {Checkbox} from '../../../lobby/components/atoms/Checkbox'
import {FormattedMessage} from 'react-intl'
import {Link} from './Link'

export const Confirmation: React.FC<{}> = () => {
  const [checked, setChecked] = React.useState(false)

  return (
    <p className="la--form--confirmation">
      <Checkbox
        checked={checked}
        className="la--checkbox"
        handleChange={setChecked}
        navigatable
      />
      <FormattedMessage
        id="signup-confirmation"
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
    </p>
  )
}
Confirmation.displayName = 'Confirmation'
