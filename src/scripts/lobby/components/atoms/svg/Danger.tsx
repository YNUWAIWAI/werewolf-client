import * as React from 'react'

export const Danger: React.FC<{}> = () => (
  <svg
    className="danger"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0 0h24v24H0z"
      fill="none"
    />
    <path d="M5 14h3v6H5z" />
  </svg>
)
Danger.displayName = 'Danger'
