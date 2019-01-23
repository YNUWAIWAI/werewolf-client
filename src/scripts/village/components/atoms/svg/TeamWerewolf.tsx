import * as React from 'react'

interface Props {
  readonly className?: string
}

export default function TeamWerewolf(props: Props) {
  return (
    <svg
      className={`${props.className || ''} teamWerewolf`}
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
        <path
          d="M26.9,17.45,3.11,21.56C8.54,18.21,27.63,5.69,31.42,3.07l-2.63,8.38Z"
        />
        <path
          d="M36.92,25.32,3.14,41.87c7.18-6.16,32.25-28.54,37.2-33.12l-2,9.65Z"
        />
        <path
          d="M45,35.52q-11.2,5.83-22.4,11.68C27,42.22,42.15,24,45.12,20.29L45,29.16Z"
        />
      </g>

    </svg>
  )
}
