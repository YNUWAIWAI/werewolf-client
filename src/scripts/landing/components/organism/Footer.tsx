import * as React from 'react'
import {FormattedMessage} from 'react-intl'

export const Footer: React.FC<{}> = () => (
  <div
    className="la--footer"
  >
    <FormattedMessage
      id="Footer.footer"
    />
  </div>
)
Footer.displayName = 'Footer'
