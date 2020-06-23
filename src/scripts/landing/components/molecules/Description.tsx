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
    <a
      className="la--link"
      href="https://werewolfguide.netlify.com/docs/en/introduction"
      rel="noreferrer noopener"
      target="_blank"
    >
      <FormattedMessage
        id="how-to-play"
      />
    </a>
    <p>
      <FormattedMessage
        id="Description.3"
      />
    </p>
    <a
      className="la--link"
      href="https://werewolfguide.netlify.com/docs/en/introduction"
      rel="noreferrer noopener"
      target="_blank"
    >
      <FormattedMessage
        id="how-to-develop-a-robot"
      />
    </a>
  </>
)
Description.displayName = 'Description'
