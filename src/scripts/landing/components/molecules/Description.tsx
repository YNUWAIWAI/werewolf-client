import * as React from 'react'
import {FormattedMessage} from 'react-intl'

export const Description: React.FC<{}> = () => (
  <>
    <h1>
      <FormattedMessage
        id="Description.human-vs-ai"
      />
      {' '}
      <FormattedMessage
        id="Description.human-vs-werewolves"
      />
    </h1>
    <p>
      <FormattedMessage
        id="Description.survive"
      />
    </p>
  </>
)
Description.displayName = 'Description'
