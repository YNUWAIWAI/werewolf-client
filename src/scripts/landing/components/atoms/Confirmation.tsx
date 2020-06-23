import * as React from 'react'
import {FormattedMessage} from 'react-intl'
import {Link} from './Link'

export const Confirmation: React.FC<{}> = () => (
  <p className="la--form--confirmation">
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
Confirmation.displayName = 'Confirmation'
