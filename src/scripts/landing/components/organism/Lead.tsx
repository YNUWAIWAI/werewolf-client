import * as React from 'react'

export default function Lead() {
  const title = 'LiCOS: A Game Of Werewolves'
  const flavor = '* Flavor text *'

  return (
    <div className="la--lead">
      <div className="la--title">
        <p>
          {title}
        </p>
      </div>
      <div className="la--flavor">
        <p>
          {flavor}
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
