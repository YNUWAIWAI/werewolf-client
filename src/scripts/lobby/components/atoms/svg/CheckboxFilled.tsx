import * as React from 'react'

interface Props {
  readonly className?: string
}

export default function CheckboxFilled(props: Props) {
  return (
    <svg
      className={`${props.className || ''} chackbox filled`}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <path
        d="M0 0h24v24H0z"
        fill="none"
      />
      <path
        d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
      />
    </svg>
  )
}

