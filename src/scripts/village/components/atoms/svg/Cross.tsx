import * as React from 'react'

export default function Cross() {
  return (
    <svg
      className="cross"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <line
        className="line"
        strokeWidth="15"
        x1="20"
        x2="80"
        y1="20"
        y2="80"
      />
      <line
        className="line"
        strokeWidth="15"
        x1="80"
        x2="20"
        y1="20"
        y2="80"
      />
    </svg>
  )
}
