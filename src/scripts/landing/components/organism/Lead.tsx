import * as React from 'react'
import {FormattedMessage} from 'react-intl'

export default function Lead() {
  return (
    <div className="la--lead">
      <FormattedMessage
        id="lead-title"
      >
        {
          text => (
            <div className="la--title">
              <p>
                {text}
              </p>
            </div>
          )
        }
      </FormattedMessage>
      <FormattedMessage
        id="lead-flavor"
      >
        {
          text => (
            <div className="la--flavor">
              <p>
                {text}
              </p>
            </div>
          )
        }
      </FormattedMessage>
      <iframe
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="la--trailer"
        src="https://www.youtube.com/embed/VrxRKYTRZG8"
      />
    </div>
  )
}
