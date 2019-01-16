import * as React from 'react'

interface Props {
  readonly className?: string
}

export default function TeamVillager(props: Props) {
  return (
    <svg
      className={`${props.className || ''} teamVillager`}
      viewBox="0 0 50 50"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <rect
          height="3.01"
          width="50"
        />
        <rect
          height="3"
          width="50"
          y="47"
        />
        <rect
          height="50"
          width="3"
        />
        <rect
          height="50"
          width="3"
          x="47"
        />
      </g>
      <g>
        <rect
          height="3"
          transform="translate(25 60.36) rotate(-135)"
          width="35"
          x="7.5"
          y="23.5"
        />
        <rect
          height="3"
          transform="translate(-21.65 20.32) rotate(-45)"
          width="35"
          x="-3.8"
          y="34.8"
        />
        <rect
          height="3"
          transform="translate(-1.43 15.44) rotate(-45)"
          width="15"
          x="10.43"
          y="7.94"
        />
        <rect
          height="3"
          transform="translate(-10.8 38.07) rotate(-45)"
          width="15"
          x="33.06"
          y="30.57"
        />
        <rect
          height="3"
          transform="translate(-4.47 22.79) rotate(-45)"
          width="15"
          x="17.77"
          y="15.29"
        />
        <rect
          height="3"
          transform="translate(-7.68 30.53) rotate(-45)"
          width="15"
          x="25.52"
          y="23.03"
        />
      </g>
    </svg>
  )
}
