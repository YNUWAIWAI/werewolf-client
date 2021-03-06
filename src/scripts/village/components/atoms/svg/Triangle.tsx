import * as React from 'react'

export const Triangle: React.FC<{}> = () => (
  <svg
    className="triangle"
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <defs>
      <mask id="triangleHole">
        <rect fill="white" height="100%" width="100%" />
        <polygon points="30,71.56 70,71.56 50,33.27" />
      </mask>
    </defs>
    <polygon className="line" mask="url(#triangleHole)" points="10,83.12 90,83.12 50,13.76" />
  </svg>
)
Triangle.displayName = 'Triangle'
