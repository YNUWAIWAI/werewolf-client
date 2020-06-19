import * as React from 'react'
import {FormattedMessage} from 'react-intl'

export const Sponsor: React.FC<{}> = () => (
  <div
    className="la--sponsor"
  >
    <FormattedMessage
      id="Sponsor.title"
    />
  </div>
)
Sponsor.displayName = 'Sponsor'
