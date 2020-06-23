import * as React from 'react'
import {FormattedMessage} from 'react-intl'
import {Link} from '../atoms/Link'

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
      <br />
      <FormattedMessage
        id="Description.survive"
      />
    </h1>
    <p>
      <FormattedMessage
        id="Description.1"
      />
    </p>
    <p>
      <FormattedMessage
        id="Description.2"
      />
    </p>
    <Link
      className="la--link"
      href="https://werewolfguide.netlify.com/docs/en/introduction"
    >
      <FormattedMessage
        id="Description.button.how-to-play"
      />
    </Link>
    <p>
      <FormattedMessage
        id="Description.3"
      />
    </p>
    <Link
      className="la--link"
      href="https://werewolfguide.netlify.com/docs/en/introduction"
    >
      <FormattedMessage
        id="Description.button.how-to-develop-a-robot"
      />
    </Link>
  </>
)
Description.displayName = 'Description'
