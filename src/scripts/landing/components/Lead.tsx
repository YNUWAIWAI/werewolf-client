import * as React from 'react'

interface Props {}

export default function Lead(props: Props) {
  return (
    <>
      <div className="title">
        <p>
          {'Werewolf: The Game'}
        </p>
      </div>
      <div className="flavor">
        <p>
          {'* Flavor text *'}
        </p>
      </div>
      <div className="image">
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="50" />
          <text fill="white" x="12.5" y="75">
            {'絵'}
          </text>
        </svg>
      </div>
    </>
  )
}
