// @flow
import React from 'react'

export default function DownArrow() {
  return (
    <svg
      className="down-arrow"
      fill="#000"
      viewBox="0 0 100 50"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <polygon
        points="30,18.34 70,18.34 50,38.33" // 18.34 = 25 - 20 * 1/3, 38.33 = 25 + 20 * 2/3
      />
    </svg>
  )
}

