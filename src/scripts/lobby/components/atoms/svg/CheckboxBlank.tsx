import * as React from 'react'

interface Props {
  readonly className?: string
}

export default function CheckboxBlank(props: Props) {
  return (
    <svg
      className={`${props.className || ''} chackbox blank`}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <path
        d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"
      />
      <path
        d="M0 0h24v24H0z"
        fill="none"
      />
    </svg>
  )
}
