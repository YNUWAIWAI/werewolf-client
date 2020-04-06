import * as React from 'react'

interface Props {
  readonly className?: string
}

const k = 0.55228
const r = 18
const stokeWidth = 2
const width = (r * 2) + stokeWidth // === height

export default function Loader(props: React.PropsWithChildren<Props>) {
  return (
    <>
      <svg
        className={`${props.className || ''} loader`}
        stroke="#000"
        viewBox={`0 0 ${width} ${width}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          fill="none"
          fillRule="evenodd"
        >
          <g
            strokeWidth={stokeWidth}
          >
            <circle
              cx={width / 2}
              cy={width / 2}
              r={r}
              strokeOpacity=".5"
            />
            <path
              className="loader animation"
              d={`M${width - (stokeWidth / 2)} ${width / 2} C${width - (stokeWidth / 2)} ${(width / 2) - (r * k)}, ${(width / 2) + (r * k)} ${0 + (stokeWidth / 2)}, ${width / 2} ${0 + (stokeWidth / 2)}`}
            />
          </g>
        </g>
      </svg>
      <span
        style={{
          visibility: 'hidden'
        }}
      >
        {props.children}
      </span>
    </>
  )
}
