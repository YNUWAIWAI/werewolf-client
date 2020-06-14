import * as React from 'react'
import {FormattedMessage} from 'react-intl'

export const Title: React.FC<{}> = () => (
  <div className="la--title">
    <p>
      <FormattedMessage
        id="lead-title"
      />
    </p>
  </div>
)
Title.displayName = 'Title'
