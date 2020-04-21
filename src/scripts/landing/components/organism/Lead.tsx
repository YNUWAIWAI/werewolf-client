import * as React from 'react'
import {FormattedMessage} from 'react-intl'

export default function Lead() {
  return (
    <div className="la--lead">
      <div className="la--title">
        <p>
          <FormattedMessage
            id="lead-title"
          />
        </p>
      </div>
      <div className="la--flavor">
        <p>
          <FormattedMessage
            id="lead-flavor"
          />
        </p>
      </div>
      <iframe
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="la--trailer"
        src="https://www.youtube.com/embed/VrxRKYTRZG8"
      />
    </div>
  )
}
