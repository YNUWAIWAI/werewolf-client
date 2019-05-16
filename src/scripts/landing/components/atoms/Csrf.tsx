import * as React from 'react'

interface Props {
  token: string
}

export default function Csrf(props: Props) {
  return (
    <input
      name="csrfToken"
      type="hidden"
      value={props.token}
    />
  )
}
