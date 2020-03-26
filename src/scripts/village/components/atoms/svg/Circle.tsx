import * as React from 'react'

export default function Circle() {
  return (
    <svg
      className="circle"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <defs>
        <mask id="circleHole">
          <rect fill="white" height="100%" width="100%" />
          <circle cx="50" cy="50" r="25" />
        </mask>
      </defs>
      <circle
        className="line"
        cx="50"
        cy="50"
        id="donut"
        mask="url(#circleHole)"
        r="40"
      />
    </svg>
  )
}
