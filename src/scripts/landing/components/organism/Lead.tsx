import * as React from 'react'

interface Props {}

export default function Lead(props: Props) {
  return (
    <div className="la--lead">
      <div className="la--title">
        <p>
          {'LiCOS: A Game Of Werewolves'}
        </p>
      </div>
      <div className="la--flavor">
        <p>
          {'* Flavor text *'}
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
