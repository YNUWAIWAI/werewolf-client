import * as React from 'react'
import {FormattedMessage} from 'react-intl'

export default function Confirmation() {
  return (
    <p className="la--confirmation">
      <FormattedMessage
        id="signup-confirmation"
        values={{
          // eslint-disable-next-line
          a: (... chunks: React.ReactNode[]) => (
            <a
              href="terms"
              rel="noreferrer noopener"
              target="_blank"
            >
              {chunks}
            </a>
          )
        }}
      />
    </p>
  )
}
